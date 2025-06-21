/**
 * Day 22: Array Prototype Last
 * LeetCode: https://leetcode.com/problems/array-prototype-last/
 */

/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function() {
    if (this.length === 0) return -1;
    return this[this.length - 1];
};

/**
 * Example Usage:
 * const arr = [10, 20, 30];
 * console.log(arr.last()); // 30
 * console.log([].last());  // -1
 */
