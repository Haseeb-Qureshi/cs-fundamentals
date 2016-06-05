'use strict';

var expect = chai.expect;

/**
 * Write a function that takes a string and reverses it RECURSIVELY
 * @param {string} str
 * @returns {string}
 */
function reverse(str) {

}

/**
 * Now do it ITERATIVELY
 * @param {string} str
 * @returns {string}
 */
function reverseIter(str) {

}

/**
 * The Fibonacci Sequence is the series of numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
 * The next number is found by adding up the two numbers before it.
 * Write a function that returns the nth Fibonacci number in the the Fibonacci sequence RECURSIVELY.
 * @param {number} n - term number
 */
function fib(n) {

}

/**
 * Now do it ITERATIVELY
 * @param {number} n - term number
 */
function fibIter(n) {

}

/**
 * When you take the factorial of a number, you multiply that number by each number between itself and one.
 * So the factorial of 5 is equal to 5 * 4 * 3 * 2 * 1, or 120.
 * Write a function that finds the factorial of n number RECURSIVELY.
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {

}

/**
 * Now do it ITERATIVELY
 * @param {number} n
 * @returns {number}
 */
function factorialIter(n) {

}

/**
 * A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward.
 * Write a function that returns true if the given string is a palindrome. Otherwise, return false, RECURSIVELY.
 * @param {string} str
 * @returns {boolean}
 */
function isPalindrome(str) {

}

/**
 * Now do it ITERATIVELY
 * @param {string} str
 * @returns {boolean}
 */
function isPalindromeIter(str) {

}



/* ========================================================
                      T E S T S
# ======================================================== */


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
        fib(4);
        expect(fib.callCount).to.be.above(4);
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
        factorial(4);
        expect(factorial.callCount).to.be.above(4);
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
        isPalindrome('madam');
        expect(isPalindrome.callCount).to.be.above(2);
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
