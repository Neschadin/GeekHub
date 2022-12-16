const wrapper = document.querySelector(".tamagochi_wrapper");
const metrics = document.querySelector(".tamagochi_metrics");
const tamagochiRoom = {};

const popupBg = document.querySelector(".popup__bg");
const popupForm = document.querySelector(".popup__form");

const showPopup = (mode) => {
  popupForm.reset();
  popupForm.classList[mode]("active");
  popupBg.classList[mode]("active");
};

const functions = {
  play() {
    console.log("111");
  },
};

popupForm.addEventListener("submit", (e) => {
  let value = e.target[0].value;
  value = value.replace(/[^a-z|A-Z]/gi, "");
  e.preventDefault();
  if (value && value.length <= 10) {
    createTamagochiInstance(value);
    showPopup("remove");
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") showPopup("remove");
});

document.addEventListener("click", (e) => {
  if (e.target === popupBg) showPopup("remove");
});

document.querySelector("nav").addEventListener("click", (e) => {
  if (e.target.nodeName === "BUTTON") {
    if (e.target.id === "createTamagochi") {
      showPopup("add");
      return;
    }
    functions[e.target.id]();
  }
});

wrapper.addEventListener("click", (e) => {
  console.log(e);
if (e.target.className === "bird") console.log(1);
});

const tamagochiHTMLElement = `
<div class="body">
    <div class="eye left"></div>
    <div class="eye right"></div>
    <div class="beak">
        <div></div>
    </div>
    <div class="feet"></div>
</div>`;

//main func
function createTamagochiInstance(tamagochiName) {
  tamagochiRoom[tamagochiName] = new Tamagochi();
  // console.log(tamagochiRoom[tamagochiName]);
  createTamagochiHTMLInstance(tamagochiName);

}

function createTamagochiHTMLInstance(tamagochiName) {
  const elem = document.createElement("div");
  elem.classList.add("bird");
  elem.title = tamagochiName;
  elem.innerHTML = tamagochiHTMLElement;
  wrapper.append(elem);
}

createTamagochiInstance("tester");