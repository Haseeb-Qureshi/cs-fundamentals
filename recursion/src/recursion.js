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
 * Write a function that takes a string and reverses it ITERATIVELY
 * @param {string} str
 * @returns {string}
 */
function reverseIter(str) {
    

}





/* ========================================================
                      T E S T S
# ======================================================== */

/**
 * Reverses a string recursively
 */
describe('reverse', function() {
    it('should correctly reverses a single character', function() {
        expect(reverse('a')).to.equal('a');
    });

    it('should correctly reverses "ab"', function() {
        expect(reverse('ab')).to.equal('ba');
    });

    it('should reverse a longer string', function() {
        expect(reverse('this is a longer string'))
            .to
            .equal('gnirts regnol a si siht');
    });

    it('should use recursion to reverse a string', function() {
        reverse = sinon.spy(reverse);
        reverse('hello');
        expect(reverse.callCount).to.be.above(3);
    });
});

/**
 * Reverses a string iteratively
 */
describe('reverseIter', function() {
    it('should correctly reverses a single character', function() {
        expect(reverseIter('a')).to.equal('a');
    });

    it('should correctly reverses "ab"', function() {
        expect(reverseIter('ab')).to.equal('ba');
    });

    it('should reverse a longer string', function() {
        expect(reverseIter('king of the world'))
            .to
            .equal('dlrow eht fo gnik');
    });
});