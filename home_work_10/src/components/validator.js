export default function validator(value, name) {
  const result = {
    resultValue: value || "",
    errorMessage: "error",
  };

  switch (name) {
    case "firstName": // Checking: Latin letters only. First letter in uppercase. Length 2+ letters.
    case "lastName":
      result.errorMessage = /^[A-Z][a-z]+$/.test(value)
        ? null
        : `Enter valid ${
            (name === "firstName" && "first") || (name === "lastName" && "last")
          } name`;
      return result;

    case "phone": // Checking: All Ukraine operators. Length are valid for phone numbers. Digits only. 38067… or 067… variants are valid, but will be returned 38067…
      const temp = ["[679]3", "6[78]", "9[678]", "50", "66", "39"].some(
        (template) => {
          const reg = new RegExp(
            "^(38)?0" + template + "\\d\\d\\d\\d\\d\\d\\d$"
          );
          return reg.test(value);
        }
      );

      if (temp) {
        result.resultValue = /^38/.test(value) ? value : "38" + value;
        result.errorMessage = null;
      } else {
        result.errorMessage = "Enter valid phone number";
      }
      return result;

    case "email": // Checking: Latin letters only. foo@bar.baz, F3@bar.baz, fo.bar.b@test.com - only such templates are valid.
      const regExpEmail = /^([a-z0-9]+(\.[a-z0-9]+)*)\@[a-z0-9]+\.[a-z]{2,}$/i;
      result.errorMessage = regExpEmail.test(value)
        ? null
        : "Enter valid e-mail";
      return result;

    case "password": // Checking: minimum one digit, one small and big letters. Must include minimum one special symbol. Length 8+.
      const regExpPass =
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[-#!$@%^&*_+~=:;?\/])[-\w#!$@%^&*+~=:;?\/]{8,}$/;
      result.errorMessage = regExpPass.test(value)
        ? null
        : "Enter valid password";
      return result;

    case "consent":
      result.errorMessage = value  ? null : "Confirm terms";
      value && (result.resultValue = "confirmed");
      return result;

    case "prefer":
    case "gender":
    case "race":
      result.errorMessage = value.length > 0 ? null : "Make your choice";
      return result;

    default:
      return result;
  }
}
