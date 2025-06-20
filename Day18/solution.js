/**
 * Day 18: Debounce
 * LeetCode: https://leetcode.com/problems/debounce/
 */

/**
 * @param {Function} fn - The target function to debounce
 * @param {number} t - Delay in milliseconds
 * @return {Function} - Debounced version of fn
 */
var debounce = function(fn, t) {
    let timer;

    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn(...args);
        }, t);
    };
};

/**
 * Example Usage:
 * const log = debounce(console.log, 100);
 * log('Hello'); // canceled
 * log('Hello'); // canceled
 * log('Hello'); // Logged at t=100ms after last call
 */
