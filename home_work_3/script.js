// - Перша функція приймає масив і колбек
// - Друга функція (колбек) обробляє кожен елемент масиву (для кожної функції свій колбек)
// + // Першим аргументом може бути масив будь-яких рядків інших значень там немає (input validation)
const replaceFirstLetterToUpperCase = (item) => item.replace(/^./, (u) => u.toUpperCase());

function convertArrayStringToString(array, cb) {
    let str = '';
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] !== "string") {
            str = "array with strings only is expected";
            break;
        }
        str += cb(array[i]);
    }
    return str;
}

console.log(convertArrayStringToString(["my", "name", "is", "Vasya"], replaceFirstLetterToUpperCase));
// 'MyNameIsVasya'


// + // Першим аргументом може бути тільки масив будь-яких чисел
const modifyNumber = (item) => item *= 10;

function convertArrayNumberToString(array, cb) {
    if (!array.every(item => !isNaN(parseFloat(item)) && isFinite(item))) {
        return "array with numbers only is expected";
    }
    return array.map((item) => cb(item)).join(", ");
}

console.log(convertArrayNumberToString([10, 20, 30, -30, -30.5555000000, 445.00000000000001], modifyNumber));
// '100, 200, 300'


// + // Першим аргументом тільки об'єкти такого формату
const modifyObject = function (item) {
    let { age, name } = item;
    return `${name} is ${age}`;
}

function convertArrayObjectToString(array, cb) {
    if (!array.every((item) => Object.keys(item).length === 2 && Object.keys(item).includes('name', 'age'))) {
        return "an array with objects of a certain format is expected";
    }
    return array.map((item) => cb(item)).join(", ");
}

console.log(convertArrayObjectToString([{age: 45, name: 'Jhon'}, {age: 20, name: 'Aaron'}], modifyObject));
// 'Jhon is 45, Aaron is 20'


// + Першим аргументом може бути  тільки масив рядків
const reverseString = (item) => item.split("").reverse().join("");

function convertArrayToReverseString(array, cb) {
    if (!array.every((item) => typeof item === "string")) {
        return "array with strings only is expected";
    }
    return array.map((item) => cb(item)).join(", ");
}

console.log(convertArrayToReverseString(["abc", "123"], reverseString));
// 'cba, 321' // рядки розвертаються


// + 3.1. Створити об'єкт який описує ширину і висоту прямокутника, а також вираховує площу фігури
const rectangle = {
    width: 10,
    height: 20,
    getSquare() {
        return this.width * this.height;
    }
}

rectangle.getSquare();


// + 3.2. Створити об'єкт у якого буде ціна товара і два метода: для отримання ціни і для отримання ціни з урахуванням знижки
const price = {
    price: 10,
    discount: '15%',
    getPrice() {
        return this.price;
    },
    getDiscountPrice() {
        return this.price - (this.price / 100 * parseInt(this.discount));
    }
}

price.getPrice(); // 10
price.getDiscountPrice(); // 8.5


// + 3.3. Створити об'єкт 'чисельник' у якого є числове значення і методи 'подвоїти', 'додати один', 'відняти один'.
// Методи можна викликати через крапку щоб був ланцюг виклику
const numerator = {
    value: 1,
    double() {
        this.value *= 2;
        return this;
    },
    plusOne() {
        this.value++;
        return this;
    },
    minusOne() {
        this.value--;
        return this;
    }
}

numerator.double().plusOne().plusOne().minusOne();
numerator.value; // 3


// + 3.4. Змінити функції getElementHeight таким способом щоб можна було викликати getElementHeight і отримати 25
const element = {
    height: 25,
    getHeight: function () {
        return this.height;
    }
}

const getElementHeight = element.getHeight;
getElementHeight.call(element); // 25


//4. + Переробити функцію на стрілочну
const convertToObject = (num) => {
    const obj = {
        value: num,
        isOdd: Boolean(num % 2)
    }
    return obj;
}

convertToObject(10);


// + 5.1
const minus = (num = 0) => (num2 = 0) => num - num2;

minus(10)(6); // 4
minus(5)(6); // -1
minus(10)(); // 10
minus()(6); // -6
minus()(); // 0


// + 5.2
// Створити функція яка множить і вміє запам'ятовувати результат між викликами
const multiplyMaker = (num) => (num2) => num *= num2;
const multiply = multiplyMaker(2);

multiply(2);
multiply(1);
multiply(3);
multiply(10);


// + 5.3.
// Створити модуль який може працювати з рядком і має методи
const myModule = {
    string: "",
    setString(value) {
        this.string = !value ? "" : String(value);
    },
    getString() {
        return this.string;
    },
    getStringLength() {
        return this.string.length;
    },
    getReverseString() {
        return this.string.split("").reverse().join("");
    }
}

myModule.setString();
myModule.setString(1);
myModule.getString();
myModule.setString("abcde");
myModule.getStringLength();
myModule.getReverseString();


// 5.4
// + Створити модуль калькулятор, який може додавати, віднімати, множити, ділити, і приводити до ступеню(степени).

function calculatorMaker(){
    let value;
    return {
        setValue(x) { value   = x; return this },
        multiply(x) { value  *= x; return this },
        minus(x)    { value  -= x; return this },
        plus(x)     { value  += x; return this },
        divide(x)   { value  /= x; return this },
        pow(x)      { value **= x; return this },
        getValue()  {console.log(value)}
    }
}
const calculator = calculatorMaker();

calculator.setValue(10).minus(2).divide(2).pow(3).getValue();


// 6.
// + Реалізувати функцію sum.
const sum = (a) => (b) => {
    let c = a + b;
    return (d) => c + d;
}
sum(1)(2)(3); // 6
sum(2)(3)(4); // 9
sum(1)(2)(4); // 7