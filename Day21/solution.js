/**
 * Day 21: Chunk Array
 * LeetCode: https://leetcode.com/problems/chunk-array/
 */

/**
 * @param {Array} arr - Input array
 * @param {number} size - Chunk size
 * @return {Array[]} - Chunked 2D array
 */
var chunk = function(arr, size) {
    let result = [];
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }
    return result;
};

/**
 * Example Usage:
 * chunk([1, 2, 3, 4, 5], 2); // [[1, 2], [3, 4], [5]]
 * chunk([8, 5, 3], 1);       // [[8], [5], [3]]
 */
