/**
 * Day 7: Array Reduce Transformation
 * LeetCode: https://leetcode.com/problems/array-reduce-transformation/
 */

/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    // If array is empty, return init
    if (nums.length === 0) return init;

    // Initialize val with init
    let val = init;

    // Apply fn cumulatively across array
    for (let i = 0; i < nums.length; i++) {
        val = fn(val, nums[i]);
    }

    return val;
};

/**
 * Example Usage:
 * const nums = [1, 2, 3, 4];
 * const fn = (acc, curr) => acc + curr;
 * console.log(reduce(nums, fn, 0)); // Output: 10
 */
