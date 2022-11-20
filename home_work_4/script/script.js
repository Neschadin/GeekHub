let taskDB = localStorage.getItem("DB") ? JSON.parse(localStorage.getItem("DB")) : [];

const tasks = document.querySelector("#tasks");
const form = document.querySelector("#task-add");
const input = form.querySelector("#input-add");


document.querySelector("#sorting-alphabet")
  .addEventListener("click", () => sorter("taskContent"));

document.querySelector("#sorting-time")
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

  const selectedElement = tasks.querySelector(`.js-selected`);
  const currentElement = e.target;

  if (selectedElement !== currentElement && currentElement.classList.contains(`js-task-item`)) {

    const nextElement =
      currentElement === selectedElement.nextElementSibling ?
      currentElement.nextElementSibling :
      currentElement;

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
    const elem = createHTMLElement(item);

    addListenerToElem(elem);

    tasks.append(elem);
  });
}


function createHTMLElement({taskContent, creationTime, checked}) {
  const elem = document.createElement("li");

  elem.className = "js-task-item";
  elem.draggable = true;
  elem.innerHTML = `
  <span class="js-task-content" ${checked ? 'class="js-cross-text"' : ""} contenteditable></span>
    <div>
      <span class="js-task-time">${creationTime}</span>
      <input class="js-check-btn" type="checkbox" ${checked ? "checked" : ""}>
      <img class="js-delete" src="./icons/trash.svg" alt="delete" draggable="false"></img>
    </div>`;
  elem.firstElementChild.insertAdjacentText("afterBegin", taskContent);

  return elem;
}


function addListenerToElem(elem) {
  const taskContent = elem.firstElementChild;
  taskContent.addEventListener("focusout", updateDBfromTaskList);

  taskContent.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === "Escape") taskContent.blur();
  });

  elem.addEventListener("click", (e) => {
    if (e.target.matches(".js-check-btn")) checkItem(taskContent, e.target.checked);
    if (e.target.matches(".js-delete")) {
      elem.remove();
      updateDBfromTaskList();
    }
  });
}
// end main


function updateDBfromTaskList() {
  taskDB.length = 0;

  tasks.querySelectorAll(".js-task-item").forEach((item) => {
    taskDB.push({
      taskContent: item.querySelector(".js-task-content").innerText,
      creationTime: item.querySelector(".js-task-time").innerText,
      checked: item.querySelector(".js-check-btn").checked,
    });
  });

  localStorage.removeItem("sortFlag");

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
  const elem = createHTMLElement({
    taskContent: input.value,
    creationTime: setCreationTime(),
    checked: false
  });

  tasks.append(elem);

  addListenerToElem(elem);
  updateDBfromTaskList();
}


function checkItem(taskContent, checked) {
  const sortFlag = localStorage.getItem("sortFlag");
  
  checked
    ? taskContent.classList.add(`js-cross-text`)
    : taskContent.classList.remove(`js-cross-text`);


  updateDBfromTaskList();

  localStorage.setItem("sortFlag", sortFlag);
}


function sorter(sortBy) {
  if (localStorage.getItem("sortFlag") === sortBy) {
    taskDB.reverse();
  }

  if (localStorage.getItem("sortFlag") !== sortBy) {
    taskDB.sort((x, y) => x[sortBy].localeCompare(y[sortBy]));
    localStorage.setItem("sortFlag", sortBy);
  }

  saveDB();
  buildTasksList();
}


function saveDB() {
  localStorage.setItem("DB", JSON.stringify(taskDB));
}


buildTasksList();