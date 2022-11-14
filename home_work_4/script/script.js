const taskDB = localStorage.getItem("DB") ? JSON.parse(localStorage.getItem("DB")) : [];

const tasks = document.querySelector(".tasks");
const form = document.querySelector("form");
const input = document.querySelector(".input_add");


document.querySelector("#sorting_alphabet")
.addEventListener("click", () => sorter("taskContent"));
document.querySelector("#sorting_time")
.addEventListener("click", () => sorter("creationTime"));

// drag'n'drop
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
// drag'n'drop



function updateDBfromTaskList() {
  taskDB.length = 0;
  tasks.querySelectorAll(".task_item").forEach((item) => {
    taskDB.push({
      taskContent: item.querySelector(".task_content").outerText,
      creationTime: item.querySelector(".task_time").outerText,
      checked: item.querySelector(".check_btn").checked,
    });
  })
  saveDB();
}


form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (input.value) {
    addTask();
    form.reset();
  }
});


//=================================================

function buildTasksList() {
  tasks.innerHTML = "";
  taskDB.forEach((item) => {
    const elem = createHTMLelement(item);
    addListenerToElem(elem);
    tasks.append(elem);
  });
}


function createHTMLelement(item) {
  const elem = document.createElement("li");
  elem.className = "task_item";
  elem.draggable = true;
  elem.innerHTML = `<span class="task_content" ${
                                                 item.checked
                                                 ? 'style = "text-decoration: line-through; opacity: 0.5;"'
                                                 : ""
                                                } contenteditable>${item.taskContent}</span>
                       <div>
                         <span class="task_time">${item.creationTime}</span>
                         <input class="check_btn" type="checkbox" ${item.checked ? "checked" : ""}>
                         <img class="delete" src="./icons/trash.svg" alt="delete" draggable="false"></img>
                       </div>`;
  return elem;
}


function addListenerToElem(elem) {
  elem.firstElementChild.addEventListener("focusout", updateDBfromTaskList);
  elem.firstElementChild.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === "Escape") {
      elem.firstElementChild.blur();
      updateDBfromTaskList();
    }
  });
  elem.addEventListener("click", (e) => {
    if (e.target.matches(".check_btn")) checkItem(e.target);
    if (e.target.matches(".delete")) {
      elem.remove();
      updateDBfromTaskList();
    };
  });
}
  
  //=====================================================
  
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
  taskDB.push({
    taskContent: input.value,
    creationTime: setCreationTime(),
    checked: false
  });
  saveDB();
  buildTasksList();
}


function checkItem(target) {
  target.parentElement.previousElementSibling.style = target.checked
    ? "text-decoration: line-through; opacity: 0.5;"
    : "";
  updateDBfromTaskList();
}





// ok ==========================
function sorter(sortBy) {
  taskDB.sort((x, y) => x[sortBy].localeCompare(y[sortBy]));
  saveDB();
  buildTasksList();
}


function saveDB() {
  localStorage.setItem("DB", JSON.stringify(taskDB));
}
    

buildTasksList();