const list = document.getElementById("list");
const input = document.getElementById("input");
let t;

input.addEventListener("keydown", () => {
  clearTimeout(t);
  list.classList.remove(`show`);
  setTimeout(() => {
    if (input.value) {
      t = setTimeout(() => {
        list.classList.add(`show`);
      }, 1000);
    }
  });
});