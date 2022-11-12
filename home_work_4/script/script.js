// const tasks = document.querySelector(".tasks");
const taskDB = localStorage.getItem("DB") ? JSON.parse(localStorage.getItem("DB")) : [];

const tasks = document.querySelector(".tasks");
const form = document.querySelector("form");
const input = document.querySelector(".input_add");


document.querySelector("#sorting_alphabet")
.addEventListener("click", () => sorter("taskContent"));
document.querySelector("#sorting_time")
.addEventListener("click", () => sorter("creationTime"));

form.addEventListener("keydown", addTask);
form.addEventListener("click", addTask);


function addEventListenerForItems() {
  document.querySelectorAll(".task_item").forEach((item) => {
    item.addEventListener("click", (e) => {
      if (e.target.matches(".delete")) deleteItem(item);
      if (e.target.matches(".task_content")) editTask(e);
      if (e.target.matches(".check_btn")) checkItem(e, item.firstElementChild);
    });
  });
}


function editTask(e) {
  document.addEventListener("keydown", (ev) => {
    if (ev.key == "Enter" || ev.key == "Escape") callBack();
  });
  document.addEventListener("click", (ev) => {
    if (ev.target != e.target) callBack();
  });

  const callBack = () => {
    taskDB[e.target.parentElement.id].taskContent = e.target.innerText;
    document.removeEventListener("keydown", (ev) => {
      if (ev.key == "Enter" || ev.key == "Escape") callBack();
    });
    document.removeEventListener("click", (ev) => {
      if (ev.target != e.target) callBack();
    });
    setTimeout(() => rebuildTasksList());
    console.log(e.target.innerText);
  };
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
  rebuildTasksList();
}


function sorter(sortBy) {
  taskDB.sort((x, y) => x[sortBy].localeCompare(y[sortBy]));
  rebuildTasksList();
}


function setCreationTime() {
  const time = new Date();
  const verifyDate = (value) => value.toString().length === 1 ? `0${value}` : `${value}`;
  const year = time.getFullYear();
  const month = verifyDate(time.getMonth());
  const date = verifyDate(time.getDate());
  const hours = verifyDate(time.getHours());
  const minutes = verifyDate(time.getMinutes());
  return `${year}-${month}-${date} / ${hours}:${minutes}`;
}


function addTask(e) {
  if ((e.key == "Enter" || e.target.matches(".button_add")) && input.value) {
    e.preventDefault();
    taskDB.push({
      taskContent: input.value,
      creationTime: setCreationTime(),
      checked: false
    });
    rebuildTasksList();
    form.reset();
  }
}


function rebuildTasksList() {
  tasks.innerHTML = "";
  taskDB.forEach((item, i) => {
    const li = document.createElement("li");
    li.className = "task_item";
    li.id = i;
    li.innerHTML = `<span class="task_content" ${
      item.checked
        ? 'style = "text-decoration: line-through; opacity: 0.5;"'
        : ""
             } contenteditable>${item.taskContent}</span>
                    <div>
                        <span class="task_time">${item.creationTime}</span>
                        <img class="drag_drop" src="./icons/drag_drop.svg" alt="drag n drop"></img>
                        <input class="check_btn" type="checkbox">
                        <img class="delete" src="./icons/trash.svg" alt="delete"></img>
                    </div>`;
    tasks.append(li);
  });
  addEventListenerForItems();
  saveDB();
}


function saveDB() {
  localStorage.setItem("DB", JSON.stringify(taskDB));
}
    

rebuildTasksList();

