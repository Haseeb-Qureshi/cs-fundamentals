'use strict';

/**
 * When you take the factorial of a number, you multiply that number by each number between itself and 1.
 * So factorial(5) equals 5 * 4 * 3 * 2 * 1, or 120.
 * Write a function that computes factorial RECURSIVELY.
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {

}

/**
 * Now do it ITERATIVELY.
 * @param {number} n
 * @returns {number}
 */
function factorialIter(n) {

}

/**
 * Write a function that takes a string and reverses it RECURSIVELY.
 * @param {string} str
 * @returns {string}
 */
function reverse(str) {

}

/**
 * Now do it ITERATIVELY.
 * @param {string} str
 * @returns {string}
 */
function reverseIter(str) {

}

/**
 * The Fibonacci Sequence is the series of numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
 * The next number is found by adding up the two numbers before it.
 * Write a function that returns the nth Fibonacci number in the the Fibonacci sequence.
 * Compute it RECURSIVELY.
 * @param {number} n - term number
 */
function fib(n) {

}

/**
 * Now do it ITERATIVELY.
 * @param {number} n - term number
 */
function fibIter(n) {

}

/**
 * A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward.
 * Write a function that returns true if the given string is a palindrome. Otherwise, return false, RECURSIVELY.
 * Examples of palindromes: mom, dad, racecar.
 * @param {string} str
 * @returns {boolean}
 */
function isPalindrome(str) {

}

/**
 * Now do it ITERATIVELY.
 * @param {string} str
 * @returns {boolean}
 */
function isPalindromeIter(str) {

}

/**
 * Write a RECURSIVE function that finds the position of a target value within a sorted array.
 * It should returns either the index of the location in the array, or -1 if the array did not contain that target value.
 * You can look up how the binary search algorithm works on Wikipedia: https://en.wikipedia.org/wiki/Binary_search_algorithm
 * @param {Object[]} arr
 * @param {number} target
 */
function binarySearch(arr, target) {

}

/**
 * Now implement binary search ITERATIVELY.
 * @param {Object[]} arr
 * @param {number} target
 */
function binarySearchIter(arr, target) {


}


/* ========================================================
                      T E S T S
# ======================================================== */


var expect = window.chai.expect;
var describe = window.describe;
var it = window.it;
var sinon = window.sinon;


describe('factorial', function() {
    it('correctly returns the factorial given the input 0', function() {
        expect(factorial(0)).to.equal(1);
    });

    it('correctly returns the factorial given the input 1', function() {
        expect(factorial(1)).to.equal(1);
    });

    it('correctly returns the factorial given the input 5', function() {
        expect(factorial(5)).to.equal(120);
    });

    it('correctly returns the factorial given the number 13', function() {
        expect(factorial(13)).to.equal(6227020800);
    });

    it('uses recursion to find the factorial', function() {
        factorial = sinon.spy(factorial);
        factorial(5);
        expect(factorial.callCount).to.be.above(3);
    });
});

describe('factorialIter', function() {
    it('correctly returns the factorial given the input 0', function() {
        expect(factorialIter(0)).to.equal(1);
    });

    it('correctly returns the factorial given the input 1', function() {
        expect(factorialIter(1)).to.equal(1);
    });

    it('correctly returns the factorial given the input 5', function() {
        expect(factorialIter(5)).to.equal(120);
    });

    it('correctly returns the factorial given the number 13', function() {
        expect(factorialIter(13)).to.equal(6227020800);
    });
});

describe('reverse', function() {
    it('correctly reverses a single character', function() {
        expect(reverse('a')).to.equal('a');
    });

    it('correctly reverses "ab"', function() {
        expect(reverse('ab')).to.equal('ba');
    });

    it('reverses a longer string', function() {
        expect(reverse('this is a longer string'))
            .to
            .equal('gnirts regnol a si siht');
    });

    it('uses recursion to reverse a string', function() {
        reverse = sinon.spy(reverse);
        reverse('hello');
        expect(reverse.callCount).to.be.above(3);
    });
});

describe('reverseIter', function() {
    it('correctly reverses a single character', function() {
        expect(reverseIter('a')).to.equal('a');
    });

    it('correctly reverses "ab"', function() {
        expect(reverseIter('ab')).to.equal('ba');
    });

    it('reverses a longer string', function() {
        expect(reverseIter('king of the world'))
            .to
            .equal('dlrow eht fo gnik');
    });
});

describe('fib', function() {
    it('correctly returns the first Fibonacci number', function() {
        expect(fib(1)).to.equal(0);
    });

    it('correctly returns the second Fibonacci number', function() {
        expect(fib(2)).to.equal(1);
    });

    it('correctly returns the eighth Fibonacci number', function() {
        expect(fib(8)).to.equal(13);
    });

    it('uses recursion to find the Fibonacci number', function() {
        fib = sinon.spy(fib);
        fib(5);
        expect(fib.callCount).to.be.above(3);
    });
});

describe('fibIter', function() {
    it('correctly returns the first Fibonacci number', function() {
        expect(fibIter(1)).to.equal(0);
    });

    it('correctly returns the second Fibonacci number', function() {
        expect(fibIter(2)).to.equal(1);
    });

    it('correctly returns the eighth Fibonacci number', function() {
        expect(fibIter(8)).to.equal(13);
    });
});

describe('isPalindrome', function() {
    it('recognizes a single character as a palindrome', function() {
        expect(isPalindrome('b')).to.equal(true);
    });

    it('recognizes "racecar" as a palindrome', function() {
        expect(isPalindrome('racecar')).to.equal(true);
    });

    it('recognizes "nope" as a non-palindrome', function() {
        expect(isPalindrome('nope')).to.equal(false);
    });

    it('recognizes "almostomla" as a non-palindrome', function() {
        expect(isPalindrome('almostomla')).to.equal(false);
    });

    it('uses recursion to check whether a word is a palindrome', function() {
        isPalindrome = sinon.spy(isPalindrome);
        isPalindrome('amanaplanacanalpanama');
        expect(isPalindrome.callCount).to.be.above(5);
    });
});

describe('isPalindromeIter', function() {
    it('recognizes a single character as a palindrome', function() {
        expect(isPalindromeIter('b')).to.equal(true);
    });

    it('recognizes "racecar" as a palindrome', function() {
        expect(isPalindromeIter('racecar')).to.equal(true);
    });

    it('recognizes "nope" as a non-palindrome', function() {
        expect(isPalindromeIter('nope')).to.equal(false);
    });

    it('recognizes "almostomla" as a non-palindrome', function() {
        expect(isPalindromeIter('almostomla')).to.equal(false);
    });
});


describe('binarySearch', function() {
    var singleItemArr = [9];

    var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37,
        41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

    it('returns 0 as the index if the target value is first in a sorted array', function() {
        expect(binarySearch(primes, 2)).to.equal(0);
    });

    it('returns the correct index of the target value\'s location in a sorted array', function() {
        expect(binarySearch(primes, 71)).to.equal(19);
    });

    it('returns -1 when the target value is not in a sorted array', function() {
        expect(binarySearch(primes, 4)).to.equal(-1);
    });

    it('returns the correct index of the target value\'s location in an array with one item', function() {
        expect(binarySearch(singleItemArr, 9)).to.equal(0);
    });

    it('returns -1 when the target value is not in an array with one item', function() {
        expect(binarySearch(singleItemArr, 8)).to.equal(-1);
    });

    it('uses recursion to find the index', function() {
        var bestCase = 2; // Run one extra time due to our tests
        var worseCase = Math.ceil(Math.log(primes.length) + 1);

        binarySearch = sinon.spy(binarySearch);
        binarySearch(primes, 97);
        expect(binarySearch.callCount).to.be.within(bestCase, worseCase);
    });

    it('uses recursion to find the index for an array with 8 elements', function() {
        var array = [1, 2, 3, 4, 5, 6, 7, 8];
        var bestCase = 2;
        var worseCase = Math.ceil(Math.log(array.length) + 1);

        binarySearch = sinon.spy(binarySearch);
        binarySearch(array, 3);
        expect(binarySearch.callCount).to.be.within(bestCase, worseCase);
    });
});

describe('binarySearchIter', function() {
    var singleItemArr = [11];

    var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37,
        41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

    it('returns 0 as the index if the target value is first in a sorted array', function() {
        expect(binarySearchIter(primes, 2)).to.equal(0);
    });

    it('returns the correct index of the target value\'s location in a sorted array', function() {
        expect(binarySearchIter(primes, 3)).to.equal(1);
    });

    it('returns -1 when the target value is not in a sorted array', function() {
        expect(binarySearchIter(primes, 99)).to.equal(-1);
    });

    it('returns the correct index of the target value\'s location in an array with one item', function() {
        expect(binarySearchIter(singleItemArr, 11)).to.equal(0);
    });

    it('returns -1 when the target value is not in an array with one item', function() {
        expect(binarySearchIter(singleItemArr, 8)).to.equal(-1);
    });
});
