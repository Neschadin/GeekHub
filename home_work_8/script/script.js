const firstNameInput = document.getElementById("first_name");
const lastNameInput = document.getElementById("last_name");
firstNameInput.addEventListener("keyup", (e) => setValidState(e.target))
lastNameInput.addEventListener("keyup", (e) => setValidState(e.target));

const phoneNumberInput = document.getElementById("phone_number");
phoneNumberInput.addEventListener("blur", (e) => setValidState(e.target));
// User, for example can write 38067… or 067…. Both variants are valid, but on submit must record in format 38067…


const emailInput = document.getElementById("email");
// Email:
// must be latin letters only. Big or small letters valid.
// @foo.bar - not valid
// foo@b.ar.baz - not valid (two dots after @)
// foo.bar.@baz.com - not valid (dot before @)
// 123@foo.bar - not valid (first part must include letters)
// foo@123.123 - not valid (the same as previous)
// foo@bar.baz, FOO123@bar.baz, foo.bar.baz@test.com  -  valid


const passwordInput = document.getElementById("password");
// Password:
// Must have one or more digits
// Must have one or more small and big letters
// Length 8+ symbols
// Must include one or more special characters (!, %, ?, #, $, * or others)
// Confirm password - must be the same as password


function validator(elem) {
  if (elem.id === "first_name" || elem.id === "last_name") {
    return /^[A-Z][a-z]+$/.test(elem.value);
  }

  if (elem.id === "phone_number") {
    return ["[679]3", "6[78]", "9[678]", "50", "66", "39"].some(template => {
      const reg = new RegExp("^(38)?0" + template + "\\d\\d\\d\\d\\d\\d\\d");

      return !reg.test(elem.value) ? false :
        /^38/.test(elem.value) ? true : elem.value = "38" + elem.value;
    });
  }

  if (elem.id === "email") {

    //  console.log(/^0[]$/.test(elem.value));
  }
}


function setValidState(elem) {
  validator(elem) ? elem.classList.remove("invalid") : elem.classList.add("invalid");
}

































const root = document.documentElement;
const eye = document.getElementById("eyeball");
const beam = document.getElementById("beam");

root.addEventListener("mousemove", (e) => {
  let rect = beam.getBoundingClientRect();
  let mouseX = rect.right + rect.width / 2;
  let mouseY = rect.top + rect.height / 2;
  let rad = Math.atan2(mouseX - e.pageX, mouseY - e.pageY);
  let degrees = rad * (20 / Math.PI) * -1 - 350;

  root.style.setProperty("--beamDegrees", `${degrees}deg`);
});

eye.addEventListener("click", (e) => {
  e.preventDefault();
  document.body.classList.toggle("show-password");
  passwordInput.type = passwordInput.type === "password" ? "text" : "password";
  passwordInput.focus();
});