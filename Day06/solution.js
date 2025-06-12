/**
 * Day 6: Filter Elements from Array
 * LeetCode: https://leetcode.com/problems/filter-elements-from-array/
 */

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    const newarr = [];

    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            newarr.push(arr[i]);
        }
    }

    return newarr;
};

/**
 * Example Usage:
 * const arr = [1, 2, 3, 4];
 * const fn = (val, i) => val % 2 === 0;
 * console.log(filter(arr, fn)); // Output: [2, 4]
 */
