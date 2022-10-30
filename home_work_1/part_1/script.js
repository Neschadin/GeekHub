// Numbers
// Отримати число pi з Math і округлити його до 2 знаків після крапки
const getPi = () => +Math.PI.toFixed(2);
getPi();

// Перевірити результат обчислення 0.6 + 0.7 – як привести до нормального вигляду (1.3)?
const sum = (a, b) => (a + b).toFixed(1);
sum(0.6, 0.7);

// Отримати число з рядка ‘100$’
const getNumber = (str) => parseInt(str);
getNumber('100$');

// Strings:
const str = 'some test string';

// Отримати першу й останню букви стрінги.
const getFirstLastLetter = (str) => str[0] + str.at(-1);
getFirstLastLetter(str);

// Зробити першу й останню букву великими
const setFirstLastLetter = (str) => str.replace(/^.|.$/g, (u) => u.toUpperCase());
setFirstLastLetter(str);

// Знайти позицію другого пробілу
const findSecondSpacePosition = (str) => {
    let counter = 0;
    let index = 0;
        str.split("").forEach((v, i) => {
            if (v === " " && ++counter === 2) index = i
        });
    return counter < 2
        ? "this string does not contain the required number of spaces"
        : index;
}
findSecondSpacePosition(str);

// Отримати нову стрінгу без останніх 6 символів
const getNewString = (str) => str.slice(0, str.length - 6);
getNewString(str);

// В першому підʼїзді квартири 1 -20, в другому 21 - 40, в третьому 41-60.
// Створити функцію, в яку можна передати номер квартири і при виклику якої буде повертатись номер підʼїзда.
const searchEntryNumber = appNumber => {
   return /^([1-9]|[1-5][\d]|[6][0])$/.test(appNumber)
     ? Math.ceil(appNumber / 20)
     : "apartment number was expected";
}
searchEntryNumber(Infinity);