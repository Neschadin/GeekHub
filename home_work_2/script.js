const multiply = (...args) => args.reduce((acc, cur) => acc * cur);

multiply(2, 3, 4);



const reverseString = (arg) => {
    if (typeof arg !== 'string') arg = typeof arg;
    return arg.split("").reverse().join("");
}

reverseString(null);
reverseString('GeekHub');



const guessing = (num) => {
    if (typeof num === "string" && !isFinite(num)) return 'Please provide a valid number';
    if (num < 1 || num > 10) return 'Please provide number in range 1 - 10';
    const randomNum = Math.floor(Math.random() * 10) + 1;
    return num === randomNum
        ? 'You Win!'
        : `You are lose, your number is ${num}, the random number is ${randomNum}`;
}

console.log(guessing('1234'));
guessing(NaN);
guessing(Infinity);
guessing(-2);
guessing(5);
guessing(10);



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



const countWaterVolume = (mountains) => {
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

countWaterVolume([2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0]); // 10
countWaterVolume([2, 2, 2, 2, 2]); // 0