/**
 * Day 26: Flatten Deeply Nested Array
 * LeetCode: https://leetcode.com/problems/flatten-deeply-nested-array/
 */

/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    if (n == 0) return arr;
    let flatarr = [];

    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            const nested = flat(arr[i], n - 1);
            flatarr.push(...nested);
        } else {
            flatarr.push(arr[i]);
        }
    }

    return flatarr;
};

/**
 * Example Usage:
 * flat([1,[2],[3,[4]]], 1) // [1,2,3,[4]]
 * flat([1,[2],[3,[4]]], 2) // [1,2,3,4]
 */
