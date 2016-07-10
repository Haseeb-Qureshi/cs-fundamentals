"use strict";

function reverse(str) {
  if (str.length <= 1) return str;
  return str[str.length - 1] + reverse(str.slice(0, str.length - 1));
}

function reverseIter(str) {
  if (str.length <= 1) return str;
  const chars = str.split("");
  for (let i = 0; i < chars.length / 2; i++) {
    const temp = chars[i];
    chars[i] = chars[chars.length - 1 - i];
    chars[chars.length - 1 - i] = temp;
  }
  return chars.join("");
}


function fib(n) {
  if (n === 1) return 0;
  if (n === 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

function fibIter(n) {
  if (n === 1) return 0;
  if (n === 2) return 1;
  let lastFib = 0;
  let currentFib = 1;
  let fibCount = 2;
  while (fibCount < n) {
    const newFib = lastFib + currentFib;
    lastFib = currentFib;
    currentFib = newFib;
    fibCount++;
  }
  return currentFib;
}

function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

function factorialIter(n) {
  let fact = 1;
  for (let i = n; i > 1; i--) fact *= i;
  return fact;
}

function isPalindrome(str) {
  if (str.length <= 1) return true;
  if (str[0] != str[str.length - 1]) return false;
  return isPalindrome(str.slice(1, str.length - 1));
}

function isPalindromeIter(str) {
  if (str.length === 0) return true;
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] != str[str.length - 1 - i]) return false;
  }
  return true;
}

function binarySearch(arr, target) {
  if (arr.length <= 1) return arr[0] === target ? 0 : -1;
  const middle = Math.floor(arr.length / 2);

  if (arr[middle] === target) {
    return middle;
  } else if (arr[middle] > target) {
    return binarySearch(arr.slice(0, middle), target);
  } else {
    const rightSide = binarySearch(arr.slice(middle, arr.length), target);
    return rightSide === -1 ? -1 : middle + rightSide;
  }
}
