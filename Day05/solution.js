/**
 * Day 5: Apply Transform Over Each Element in Array
 * LeetCode: https://leetcode.com/problems/apply-transform-over-each-element-in-array/
 */

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    const newarr = [];

    for (let i = 0; i < arr.length; i++) {
        newarr[i] = fn(arr[i], i);
    }

    return newarr;
};

/**
 * Example Usage:
 * const arr = [1, 2, 3];
 * const fn = (val, i) => val + i;
 * console.log(map(arr, fn)); // Output: [1, 3, 5]
 */
