const root = document.documentElement;
const passwordInput = document.getElementById("password");

document.getElementById("first_name")
  .addEventListener("keyup", (e) => setValidateState(e.target));

document.getElementById("last_name")
  .addEventListener("keyup", (e) => setValidateState(e.target));


document.getElementById("phone_number")
  .addEventListener("blur", (e) => setValidateState(e.target));

document.getElementById("email")
  .addEventListener("blur", (e) => setValidateState(e.target));

passwordInput.addEventListener("keyup", (e) => setValidateState(e.target));

root.addEventListener("mousemove", (e) => {
  let rect = document.getElementById("beam").getBoundingClientRect();
  let mouseX = rect.right + rect.width / 2;
  let mouseY = rect.top + rect.height / 2;
  let rad = Math.atan2(mouseX - e.pageX, mouseY - e.pageY);
  let degrees = rad * (20 / Math.PI) * -1 - 350;

  root.style.setProperty("--beamDegrees", `${degrees}deg`);
});

document.getElementById("eyeball")
  .addEventListener("click", (e) => {
    e.preventDefault();

    document.body.classList.toggle("show-password");
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";
    passwordInput.focus();
  });

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();

  const arr = Array.from(e.target.querySelectorAll("input"));
  const checking = arr.every((item) => item.value && validator(item));

  if (checking) {
    arr.forEach(item => console.log(item))
    e.target.innerHTML = "<h1>All values are valid!</h1>";
  } else {
    alert("Wipe your eyes :)");
  }
});


function validator(elem) {
  const value = elem.value;

  switch (elem.id) {
    case "first_name": // Checking: Latin letters only. First letter in uppercase. Length 2+ letters.
    case "last_name":
      return /^[A-Z][a-z]+$/.test(value);

    case "phone_number": // Checking: All Ukraine operators. Length are valid for phone numbers. Digits only. 38067… or 067… variants are valid, but will be returned 38067…
      return ["[679]3", "6[78]", "9[678]", "50", "66", "39"].some(
        (template) => {
          const reg = new RegExp("^(38)?0" + template + "\\d\\d\\d\\d\\d\\d\\d");

          return reg.test(value) && /^38/.test(value) ?
            true : (elem.value = "38" + value);
        }
      );

    case "email": // Checking: Latin letters only. foo@bar.baz, F3@bar.baz, fo.bar.b@test.com - only such templates are valid.
      return /^([a-z0-9]+(\.[a-z0-9]+)*)\@[a-z0-9]+\.[a-z]{2,}$/i.test(value);

    case "password": // Checking: minimum one digit, one small and big letters. Must include minimum one special symbol. Length 8+.
      return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[-#!$@%^&*_+~=:;?\/])[-\w#!$@%^&*+~=:;?\/]{8,}$/
        .test(value);

    default:
      return false;
  }
}


function setValidateState(elem) {
  (!elem.value || validator(elem)) ? elem.classList.remove("invalid"): elem.classList.add("invalid");
}