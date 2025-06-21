/**
 * Day 20: Is Object Empty
 * LeetCode: https://leetcode.com/problems/is-object-empty/
 */

/**
 * @param {Object|Array} obj - Parsed JSON object or array
 * @return {boolean} - Returns true if the object/array is empty
 */
var isEmpty = function(obj) {
    return Object.keys(obj).length === 0;
};

/**
 * Example Usage:
 * isEmpty({});          // true
 * isEmpty([]);          // true
 * isEmpty({ "x": 1 });  // false
 * isEmpty([1, 2, 3]);   // false
 */
