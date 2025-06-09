/**
 * Day 2: Counter
 * LeetCode: https://leetcode.com/problems/counter/
 */

/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    // Return a closure that increments and returns the internal counter
    return function() {
        return n++;
    };
};

/**
 * Example Usage:
 * const counter = createCounter(10);
 * console.log(counter()); // 10
 * console.log(counter()); // 11
 * console.log(counter()); // 12
 */
