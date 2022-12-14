let popupBg = document.querySelector(".popup__bg"); // Фон попап окна
let popup = document.querySelector(".popup"); // Само окно
// let closePopupButton = document.querySelector(".close-popup"); // Кнопка для скрытия окна



document.addEventListener("keydon", () => {
  // Вешаем обработчик на крестик
  popupBg.classList.remove("active"); // Убираем активный класс с фона
  popup.classList.remove("active"); // И с окна
});

document.addEventListener("click", (e) => {
  // Вешаем обработчик на весь документ
  if (e.target === popupBg) {
    // Если цель клика - фот, то:
    popupBg.classList.remove("active"); // Убираем активный класс с фона
    popup.classList.remove("active"); // И с окна
  }
});


createTamagochi


const wrapper = document.querySelector(".tamagochi_wrapper");
const metrics = document.querySelector(".tamagochi_metrics");
const arr = [];

const functions = {
  play() {
    console.log("111");
  },
};

document.querySelector("nav").addEventListener("click", (e) => {
    if (e.target.nodeName === "BUTTON") {
        if (e.target.id === "createTamagochi") {
            e.preventDefault(); // Предотвращаем дефолтное поведение браузера
            popupBg.classList.add("active"); // Добавляем класс 'active' для фона
            popup.classList.add("active");
            return;
        }
            functions[e.target.id]();
    };
});

// let id = 0;
const tamagochiHTMLElement = `
<div class="body">
    <div class="eye left"></div>
    <div class="eye right"></div>
    <div class="beak">
        <div></div>
    </div>
    <div class="feet"></div>
</div>`;

function createTamagochiInstance() {
  const obj = new Tamagochi(tamagochiName);
}

function createTamagochi() {
  const elem = document.createElement("div");
  // elem.id = id++;
  elem.id = arr.length - 1;
  elem.classList.add("bird");
  elem.innerHTML = tamagochiHTMLElement;
  wrapper.append(elem);
}

createTamagochi();
createTamagochi();

// const bird = new Tamagochi {

// }
