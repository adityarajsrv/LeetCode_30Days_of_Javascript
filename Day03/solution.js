/**
 * Day 3: To Be or Not To Be
 * LeetCode: https://leetcode.com/problems/to-be-or-not-to-be/
 */

/**
 * @param {any} val
 * @return {Object}
 */
var expect = function(val) {
    return {
        toBe: function(val2) {
            if (val === val2) {
                return true;
            } else {
                throw new Error("Not Equal");
            }
        },
        notToBe: function(val2) {
            if (val !== val2) {
                return true;
            } else {
                throw new Error("Equal");
            }
        }
    };
};

/**
 * Example Usage:
 * expect(5).toBe(5);      // returns true
 * expect(5).notToBe(10);  // returns true
 * expect(5).notToBe(5);   // throws Error: "Equal"
 */
