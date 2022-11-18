// №1 Створити пошуковий інпут. Приклад інпута  - npm + скріншот
// Юзер відкриває сторінку, на якому є інпут “Search”
// Юзер починає вводити
// Через одну секуднду, після того як юзер перестав вводити, зʼявляється вписок із результатами пошуку (вміст списку будь який)
// Коли юзер знову починає вводити - список зникає - і так до безкінечності)
// Якщо інпут пустий - список не виводиться
// Можете додати стилів


const list = document.querySelector("#list");
const input = document.querySelector("#input");

input.addEventListener("keydown",  () => {

  let t =  setTimeout(() => {

    clearTimeout(t)
  }, 1000);
})


function showList() {
  list.classList.add(`show`);
}

function hideList() {
  list.classList.remove(`show`);
}

// tasks.addEventListener(`dragstart`, (e) => {
//   e.target.classList.add(`selected`);
// });

// tasks.addEventListener(`dragend`, (e) => {
//   e.target.classList.remove(`selected`);
//   updateDBfromTaskList();
// });








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
  taskContent.style = checked ?
    "text-decoration: line-through; opacity: 0.5;" :
    "";

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