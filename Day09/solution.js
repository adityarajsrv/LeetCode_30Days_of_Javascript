/**
 * Day 9: Return Length of Arguments Passed
 * LeetCode: https://leetcode.com/problems/return-length-of-arguments-passed/
 */

/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function(...args) {
    return args.length;
};

/**
 * Example Usage:
 * console.log(argumentsLength(1, 2, 3)); // Output: 3
 * console.log(argumentsLength());        // Output: 0
 */
