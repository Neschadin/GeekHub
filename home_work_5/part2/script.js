1; // + isPrime - Returns true or false, indicating whether the given number is prime.
function isPrime(num) {
  let i = 2;

  if (typeof num === "string" || num <= i || !/^\d*$/.test(num)) return false;

  while (i < num) {
    if (num % i++ === 0) return false;
  }

  return true;
}
isPrime(0); // false
isPrime(1); // false
isPrime(17); // true
isPrime(10000000000000); // false


2; // + factorial - Returns a number that is the factorial of the given number.
function factorial(num) {
  return num < 0 ? NaN : !num ? 1 : num * factorial(--num);
}
factorial(0); // 1
factorial(1); // 1
factorial(6); // 720


3; // + fib - Returns the nth Fibonacci number.
function fib(num) {
  if (typeof num === "string" || num === 0 || !/^\d*$/.test(num)) return 0;

  let x = 1;
  let y = x;
  let yNext;

  for (let i = 1; i < num; i++) {
    yNext = x + y;
    x = y;
    y = yNext;
  }

  return x;
}
fib(0); // 0
fib(1); // 1
fib(10); // 55
fib(20); // 6765


4; // + isSorted - Returns true or false, indicating whether the given array of numbers is sorted.
function isSorted(arr) {
  return Array.isArray(arr) ?
    JSON.stringify(arr) === JSON.stringify([...arr].sort()) :
    "nope";
}
isSorted([]); // true
isSorted([-Infinity, -5, 0, 3, 9]); // true
isSorted([3, 9, -3, 10]); // false


5; // + reverse - Reverses the given string (yes, using the built in reverse function is cheating).
function reverse(str) {
  return typeof str !== "string" ?
    "nope" :
    str === '' ?
    '' :
    reverse(str.substring(1)) + str.charAt(0);
}
reverse(""); // ''
reverse("abcdef"); // 'fedcba'


6; // + indexOf - Implement the indexOf function for arrays.
function indexOf(arr, searchElement) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === searchElement) return i;
  }

  return -1;
}
indexOf([1, 2, 3], 1); // 0
indexOf([1, 2, 3], 4); // -1


7; //+  isPalindrome - Return true or false indicating whether the given string is a plaindrone (case and space insensitive).
function isPalindrome(str) {
  if (typeof str !== "string") return "nope";

  const strArr = str.toLowerCase().replace(/\s/g, "").split("");

  return JSON.stringify(strArr) === JSON.stringify([...strArr].reverse());
}
isPalindrome(""); // true
isPalindrome("abcdcba"); // true
isPalindrome("abcd"); // false
isPalindrome("A man a plan a canal Panama"); // true


8; // + missing - Takes an unsorted array of unique numbers (ie. no repeats) from 1 through some number n, and returns the missing number in the sequence (there are either no missing numbers, or exactly one missing number). Can you do it in O(N) time? Hint: There’s a clever formula you can use.
function missing(arr) {
  if (!Array.isArray(arr)) return "nope";

  arr.sort();

  for (let i = 0; i < arr.length; i++) {
    if (i + 1 !== arr[i]) return i + 1;
  }
}

missing([]); // undefined
missing([1, 4, 3]); // 2
missing([2, 3, 4]); // 1
missing([5, 1, 4, 2]); // 3
missing([1, 2, 3, 4]); // undefined


9; // + isBalanced - Takes a string and returns true or false indicating whether its curly braces are balanced.
function isBalanced(str) {
  if (typeof str !== "string") return "nope";

  const arr = str.split("");
  let counterBraces = 0;
  let flag = false;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "}") flag = true;

    if (!flag) {
      if (arr[i] === "{") {
        if (arr[i + 1] !== " ") return false;
        counterBraces++;
      }
    }
    if (flag) {
      if (arr[i] === "{") return false;

      if (arr[i] === "}") {
        if (arr[i - 1] !== " ") return false;
        counterBraces--;
      }
    }
  }

  return counterBraces ? false : true;
}


isBalanced('}{') // false
isBalanced('{{}') // false
isBalanced('{}{}') // false
isBalanced('foo { bar { baz } boo }') // true
isBalanced('foo { bar { baz }') // false
isBalanced('foo { bar } }') // false