"use strict";

// simple utility function for timing another function

function timeFunction(fn, times) {
  times = times || 1;
  let t = new Date().getTime();
  for (let i = 0; i < times; i++) fn();
  console.log(new Date().getTime() - t);
}

module.exports = timeFunction;
