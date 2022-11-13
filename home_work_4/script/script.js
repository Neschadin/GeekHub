const taskDB = localStorage.getItem("DB") ? JSON.parse(localStorage.getItem("DB")) : [];

const tasks = document.querySelector(".tasks");
const form = document.querySelector("form");
const input = document.querySelector(".input_add");


document.querySelector("#sorting_alphabet")
.addEventListener("click", () => sorter("taskContent"));
document.querySelector("#sorting_time")
.addEventListener("click", () => sorter("creationTime"));

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
  taskDB.forEach((item, i) => {
    const elem = createHTMLelement(item, i);
    addListenerToElem(elem);
    tasks.append(elem);
  });
}


function createHTMLelement(item, i) {
  const elem = document.createElement("li");
  elem.className = "task_item";
  elem.id = i;
  elem.innerHTML = `<span class="task_content" ${item.checked
                                                  ? 'style = "text-decoration: line-through; opacity: 0.5;"'
                                                  : ""
                                              } contenteditable>${item.taskContent}</span>
                      <div>
                        <img class="drag_drop" src="./icons/drag_drop.svg" alt="drag n drop"></img>
                        <span class="task_time">${item.creationTime}</span>
                        <input class="check_btn" type="checkbox" ${item.checked ? "checked" : ""}>
                        <img class="delete" src="./icons/trash.svg" alt="delete"></img>
                      </div>`;
  return elem;
}


function addListenerToElem(elem) {
  const taskContent = elem.firstElementChild;
  taskContent.addEventListener("focusout", () => editTask(taskContent));
  elem.addEventListener("keydown", (e) => {
    if (e.target.matches(".task_content") && (e.key === "Enter" || e.key === "Escape")) {
      editTask(taskContent);
    }
  });
  elem.addEventListener("click", (e) => {
    if (e.target.matches(".check_btn")) checkItem(e, taskContent);
    if (e.target.matches(".delete")) deleteItem(elem);
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

function editTask(taskContent) {
  taskContent.blur();
  taskDB[taskContent.parentElement.id].taskContent = taskContent.innerText;
  saveDB();
}


function checkItem(e, taskContent) {
  if (e.target?.checked) {
    taskContent.style = "text-decoration: line-through; opacity: 0.5;";
    taskDB[taskContent.parentElement.id].checked = true;
  } else {
    taskContent.style = "";
    taskDB[taskContent.parentElement.id].checked = false;
  }
  saveDB();
}


function deleteItem(item) {
  taskDB.splice(item.id, 1);
  saveDB();
  buildTasksList();
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