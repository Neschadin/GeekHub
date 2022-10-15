// Numbers
// Отримати число pi з Math і округлити його до 2 знаків після крапки
console.log(Math.PI.toFixed(2));

// Перевірити результат обчислення 0.6 + 0.7 – як привести до нормального вигляду (1.3)?
console.log((0.6 + 0.7).toFixed(1));

// Отримати число з рядка ‘100$’
console.log(parseInt(`100$`));

// Strings:
const str = `some test string`;

// Отримати першу й останню букви стрінги.
console.log(str[0] + str[str.length - 1]);

// Зробити першу й останню букву великими
console.log(
  str
    .replace(/^./, (u) => u.toUpperCase())
    .replace(/.$/, (u) => u.toUpperCase())
);

// Знайти позицію другого пробілу
console.log(str.lastIndexOf(` `) + 1);

// Отримати нову стрінгу без останніх 6 символів
console.log(str.slice(0, str.length - 6));

// В першому підʼїзді квартири 1 -20, в другому 21 - 40, в третьому 41-60.
// Створити функцію, в яку можна передати номер квартири і при виклику якої буде повертатись номер підʼїзда.
searchEntryNumber = (appNumber) => Math.ceil(appNumber / 20);

console.log(searchEntryNumber(1));
console.log(searchEntryNumber(25));
console.log(searchEntryNumber(60));