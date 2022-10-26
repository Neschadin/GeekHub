// Numbers
// Отримати число pi з Math і округлити його до 2 знаків після крапки
let getPi = () => +Math.PI.toFixed(2);
getPi();

// Перевірити результат обчислення 0.6 + 0.7 – як привести до нормального вигляду (1.3)?
let sum = (a, b) => (a + b).toFixed(1);
sum(0.6, 0.7);

// Отримати число з рядка ‘100$’
let getNumber = (str) => parseInt(str);
getNumber('100$');

// Strings:
const str = 'some test string';

// Отримати першу й останню букви стрінги.
let getFirstLastLetter = (str) => str[0] + str.at(-1);
getFirstLastLetter(str);

// Зробити першу й останню букву великими
let setFirstLastLetter = (str) => str.replace(/^.|.$/g, (u) => u.toUpperCase());
setFirstLastLetter(str);

// Знайти позицію другого пробілу
let findSecondSpacePosition = (str) => {
    let counter = 0,
        index = 0;
        str.split("").forEach((v, i) => {
            if (v == " " && ++counter == 2) index = i
        });
    return counter < 2
        ? "this string does not contain the required number of spaces"
        : index;
}
findSecondSpacePosition(str);

// Отримати нову стрінгу без останніх 6 символів
let getNewString = (str) => str.slice(0, str.length - 6);
getNewString(str);

// В першому підʼїзді квартири 1 -20, в другому 21 - 40, в третьому 41-60.
// Створити функцію, в яку можна передати номер квартири і при виклику якої буде повертатись номер підʼїзда.
let searchEntryNumber = appNumber => isFinite(appNumber) ? Math.ceil(appNumber / 20) : "apartment number was expected";
searchEntryNumber(55);