/**
 * Day 1: Create Hello World Function
 * LeetCode: https://leetcode.com/problems/create-hello-world-function/
 */

/**
 * @return {Function}
 */
var createHelloWorld = function() {
    // Return a function that ignores all arguments and always returns "Hello World"
    return function(...args) {
        return "Hello World";
    };
};

/**
 * Usage:
 * const f = createHelloWorld();
 * console.log(f());        // "Hello World"
 * console.log(f(1, 2, 3)); // "Hello World"
 */
