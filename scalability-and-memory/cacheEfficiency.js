"use strict";
let time = require('./timer');

// let's initialize a huge matrix.

let bigMatrix = makeHugeMatrix(10000);

// then let's try iterating through it in a cache-inefficient way.

function iterateSlowly(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      matrix[j][i]; // do nothing, just access the element.
    }
  }
}

time(() => iterateSlowly(bigMatrix));

// what makes this cache-inefficient?
// can you figure out how to make it more cache-efficient?
// go ahead and see if you can make it iterate faster.
// time the difference!

function makeHugeMatrix(size) {
  let matrix = [];

  for (let i = 0; i < size; i++) {
    let arr = new Array(size);
    for (let j = 0; j < size; j++) arr[j] = j;
    matrix.push(arr);
  }
  return matrix;
}
