const taskDB = localStorage.getItem("DB") ? JSON.parse(localStorage.getItem("DB")) : [];

const tasks = document.querySelector(".tasks");
const form = document.querySelector("form");
const input = form.querySelector(".input_add");


document.querySelector("#sorting_alphabet")
.addEventListener("click", () => sorter("taskContent"));
document.querySelector("#sorting_time")
.addEventListener("click", () => sorter("creationTime"));

// begin drag'n'drop
tasks.addEventListener(`dragstart`, (e) => {
  e.target.classList.add(`selected`);
});
tasks.addEventListener(`dragend`, (e) => {
  e.target.classList.remove(`selected`);
  updateDBfromTaskList();
});
tasks.addEventListener(`dragover`, (e) => {
  e.preventDefault();

  const selectedElement = tasks.querySelector(`.selected`);
  const currentElement = e.target;

  if (selectedElement !== currentElement && currentElement.classList.contains(`task_item`)) {
   
    const nextElement =
      currentElement === selectedElement.nextElementSibling
        ? currentElement.nextElementSibling
        : currentElement;
  
    tasks.insertBefore(selectedElement, nextElement);
  }
});
// end drag'n'drop

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (input.value) {
    addTask();
    form.reset();
  }
});


// begin main
function buildTasksList() {
  tasks.innerHTML = "";
  taskDB.forEach((item) => {
    const elem = createHTMLelement(item);
    addListenerToElem(elem);
    tasks.append(elem);
  });
}


function createHTMLelement({taskContent, creationTime, checked}) {
  const elem = document.createElement("li");
  elem.className = "task_item";
  elem.draggable = true;
  elem.innerHTML = `<span class="task_content" ${
                                                 checked
                                                 ? 'style = "text-decoration: line-through; opacity: 0.5;"'
                                                 : ""
                                                } contenteditable>${taskContent}</span>
                       <div>
                         <span class="task_time">${creationTime}</span>
                         <input class="check_btn" type="checkbox" ${checked ? "checked" : ""}>
                         <img class="delete" src="./icons/trash.svg" alt="delete" draggable="false"></img>
                       </div>`;
  return elem;
}


function addListenerToElem(elem) {
  const taskContent = elem.firstElementChild;
  taskContent.addEventListener("focusout", updateDBfromTaskList);
  taskContent.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === "Escape") taskContent.blur();
  });
  elem.addEventListener("click", (e) => {
    if (e.target.matches(".check_btn")) checkItem(taskContent, e.target.checked);
    if (e.target.matches(".delete")) {
      elem.remove();
      updateDBfromTaskList();
    };
  });
}
// end main


function updateDBfromTaskList() {
  taskDB.length = 0;
  tasks.querySelectorAll(".task_item").forEach((item) => {
    taskDB.push({
      taskContent: item.querySelector(".task_content").innerText,
      creationTime: item.querySelector(".task_time").outerText,
      checked: item.querySelector(".check_btn").checked,
    });
  });
  saveDB();
}


function setCreationTime() {
  const time = new Date();
  const verifyZero = (value) => value.toString().length === 1 ? `0${value}` : `${value}`;
  const year = time.getFullYear();
  const month = verifyZero(time.getMonth());
  const date = verifyZero(time.getDate());
  const hours = verifyZero(time.getHours());
  const minutes = verifyZero(time.getMinutes());
  return `${year}-${month}-${date} / ${hours}:${minutes}`;
}
  
  
function addTask() {
 const elem = createHTMLelement({
    taskContent: input.value,
    creationTime: setCreationTime(),
    checked: false
  });
  tasks.append(elem);
  updateDBfromTaskList();
}


function checkItem(taskContent, checked) {
  taskContent.style = checked
    ? "text-decoration: line-through; opacity: 0.5;"
    : "";
  updateDBfromTaskList();
}


function sorter(sortBy) {
  taskDB.sort((x, y) => x[sortBy].localeCompare(y[sortBy]));
  saveDB();
  buildTasksList();
}


function saveDB() {
  localStorage.setItem("DB", JSON.stringify(taskDB));
}
    

buildTasksList();