// - Перша функція приймає масив і колбек
// - Друга функція (колбек) обробляє кожен елемент масиву (для кожної функції свій колбек)
// // Першим аргументом може бути масив будь-яких рядків інших значень там немає (input validation)
// func(['my', 'name', 'is', 'Vasya'], cb); // 'MyNameIsVasya'

function validCallbackName(item) {}

function validMethodName(array, cb) {
    if (Array.isArray(array)) {
        cb(array);
    } else {
        return 'array is expected';
    };


}

console.log(validMethodName(["my", "name", "is", "Vasya"], validCallbackName));








// // Першим аргументом може бути тільки масив будь-яких чисел
// func([10, 20, 30], cb) // '100, 200, 300'
// // Першим аргументом тільки об'єкти такого формату
// func([{age: 45, name: 'Jhon'}, {age: 20, name: 'Aaron'}], cb); // 'Jhon is 45, Aaron is 20'
// Першим аргументом може бути  тільки масив рядків
// func(['abc', '123'], cb) → // 'cba, 321' // рядки розвертаються



//================================================================================================
// + 3.1. Створити об'єкт який описує ширину і висоту прямокутника, а також вираховує площу фігури
const rectangle = {
    width: 10,
    height: 20,
    getSquare() {
        return this.width * this.height;
    }
};

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
};

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
    getHeight() {
        return this.height;
    }
};

const getElementHeight = element.getHeight;
getElementHeight.call(element); // 25


//4. + Переробити функцію на стрілочну
const convertToObject = num => {
 const obj = {
   value: num,
   isOdd: Boolean(num % 2)
 };
 return obj;
}








console.log(convertToObject(10));