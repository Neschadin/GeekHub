// Створити функцію multiple() яка може приймати не обмежену кількість аргументів, та перемножує їх
const multiply = (...args) => args.reduce((acc, cur) => acc * cur);

multiply(2, 3, 4);


// Створити фунцію reverseString яка приймає 1 аргумент будь-якого типу, і розвертає його. Наприклад: ‘test’ -> 'tset', undefined -> ‘denifednu’
const reverseString = (arg) => {
    if (typeof arg != 'string') arg = typeof arg;
    return arg.split("").reverse().join("");
}

reverseString(null);
reverseString('GeekHub');


// Створити фунцію вгадати число. Умови:
// Приймає число від 1-10. Перевірити що число не більше 10 і не менше 1, 
// якщо не відповідає повернути помилку new Error(‘Please provide number in range 1 - 10’)
// Якщо передали не число. Помилка return new Error(“Please provide a valid number”);
// Далі функція генерує рандомне число від 1 до 10 і якщо задане число правильне повертає стрінгу ‘You Win!’, 
// якщо не правильно ‘You are lose, your number is 8, the random number is 5’
const guessing = (num) => {
    if (!isFinite(num)) return 'Please provide a valid number';
    if (num < 1 || num > 10) return 'Please provide number in range 1 - 10';
    const randomNum = Math.floor(Math.random() * 10) + 1;
    return num === randomNum
        ? 'You Win!'
        : `You are lose, your number is ${num}, the random number is ${randomNum}`;
}

guessing('addf');
guessing(NaN);
guessing(Infinity);
guessing(-2);
guessing(5);
guessing(10);


// Є масив чисел (додатних, відʼємних, і впереміш). Потрібно знайти min, max, sum. 
// Не можна використовувати методи масивів або обʼєкту Math, а тільки цикли for і while.Приклади масивів:
// [3,0,-5,1,44,-12,3,0,0,1,2,-3,-3,2,1,4,-2-3-1]
// [-1,-8,-2]
// [1,7,3]
// [1,undefined,3,5,-3]
// [1,NaN,3,5,-3]
const minMaxSum = (arr) => {
    let min = arr[0];
    let max = arr[0];
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (!isFinite(arr[i])) continue;
        if (arr[i] < min) min = arr[i];
        if (arr[i] > max) max = arr[i];
        sum += arr[i];
    }
    return `min = ${min}, max = ${max}, sum = ${sum}`;
}

minMaxSum([3, 0, -5, 1, 44, -12, 3, 0, 0, 1, 2, -3, -3, 2, 1, 4, -2 - 3 - 1]);
minMaxSum([-1, -8, -2]);
minMaxSum([1, 7, 3]);
minMaxSum([1, undefined, 3, 5, -3]);
minMaxSum([1, NaN, 3, 5, -3]);


// https://docs.google.com/spreadsheets/d/1CC5nWd3HgY0cBi_1fw0hvrhyintW1X6O42XMVDUr5v8/edit?usp=sharing
// Приклади:
// // [2, 5, 1, 3, 1, 2, 1, 7, 7, 6]; // 17
// // [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0]; // 10
// // [7, 0, 1, 3, 4, 1, 2, 1] // 9
// // [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0] // 10
// // [2, 2, 1, 2, 2, 3, 0, 1, 2] // 4
// // [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 8] // 24
// // [2, 2, 2, 2, 2] // 0
const findVolumeWater = (mountains) => {
    const iMountMax = mountains.indexOf(Math.max.apply(null, mountains));
    let volume = 0;

    sumVolume(mountains.slice(0, iMountMax + 1));
    sumVolume(mountains.slice(iMountMax).reverse());

    function sumVolume(mountains) {
        let nextMaxMountain = 0;
        mountains.forEach(elem => {
            nextMaxMountain >= elem
                ? volume += nextMaxMountain - elem
                : nextMaxMountain = elem;
        })
    }

    return volume;
}

findVolumeWater([2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0]); // 10
findVolumeWater([2, 2, 2, 2, 2]); // 0