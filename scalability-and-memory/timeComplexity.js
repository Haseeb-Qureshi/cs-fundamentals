"use strict";

// mark in a comment below each algorithm its Big O runtime

function include(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return true;
  }
  return false;
}

function isMiddleElement(arr, target) {
  return arr[Math.floor(arr.length / 2)] === target;
}

function max(arr) {
  var currentMax = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > currentMax) currentMax = arr[i];
  }
  return currentMax;
}

// moderate

function substrings(str) {
  let substrs = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      substrs.push(str.slice(i, j));
    }
  }
  return substrs;
}

function firstFive(arr) {
  let res = [];
  for (let i = 0; i < 5; i++) {
    res.push(arr[i]);
  }
  return res;
}

// advanced

function integerDivision(numerator, denominator) {
  let res = 0;
  while (numerator >= denominator) {
    numerator -= denominator;
    res++;
  }
  return res;
}

function hasVowel(str) {
  return str.split('').some((char) => "aeiou".indexOf(char.toLowerCase()) >= 0);
}

function isSubstring(str, substr) {
  if (str.length < substr.length) return false;
  if (str.slice(0, substr.length) === substr) return true;
  return isSubstring(str.slice(1), substr);
}
