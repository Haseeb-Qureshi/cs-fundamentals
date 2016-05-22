"use strict";
let time = require('./timer');

function reverse(str) {
  let reversedChars = [];
  str.split('')
     .forEach((char) => reversedChars.unshift(char));
  return reversedChars.join('');
}

function makeAHugeString(iterations) {
  let x = "thisisahugestring";
  iterations = iterations || 8;
  for (let i = 0; i < iterations; i++) x += x + x;
  return x;
}

function fastReverse(str) {
  return str.split('').reverse().join('');
}

time(() => fastReverse(makeAHugeString(9)));
time(() => reverse(makeAHugeString(9)));
