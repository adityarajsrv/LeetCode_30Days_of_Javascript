/**
 * Day 10: Allow One Function Call
 * LeetCode: https://leetcode.com/problems/allow-one-function-call/
 */

/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let called = false;

    return function(...args) {
        if (called) {
            return undefined;
        } else {
            called = true;
            return fn(...args);
        }
    };
};

/**
 * Example Usage:
 * let fn = (a, b, c) => a + b + c;
 * let onceFn = once(fn);
 *
 * console.log(onceFn(1, 2, 3)); // Output: 6
 * console.log(onceFn(2, 3, 6)); // Output: undefined
 */
