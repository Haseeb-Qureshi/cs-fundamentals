"use strict";

// look at this function and determine where the bottleneck is

function containsAllLetters(str) {
  let uniqueLetters = [];
  for (let i = 0; i < str.length; i++) {
    if (uniqueLetters.indexOf(str[i]) === -1) uniqueLetters.push(str[i]);
  }

  uniqueLetters.sort();
  let sortedLetters = uniqueLetters.join('').toLowerCase().trim();
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  return sortedLetters === alphabet;
}

// containsAllLetters("The quick brown fox jumped over the lazy dogs") => true

// bonus—see if you can improve the bottleneck!
