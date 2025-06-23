/**
 * Day 24: Sort By
 * LeetCode: https://leetcode.com/problems/sort-by/
 */

/**
 * @param {Array} arr - The array to sort
 * @param {Function} fn - Function that returns a number used to determine sort order
 * @return {Array} - New array sorted based on fn output
 */
var sortBy = function(arr, fn) {
    return arr.sort((a, b) => fn(a) - fn(b));
};

/**
 * Example Usage:
 * sortBy([5, 4, 1, 2, 3], x => x);         // [1, 2, 3, 4, 5]
 * sortBy([{x: 1}, {x: 0}], obj => obj.x);  // [{x: 0}, {x: 1}]
 */
