/**
 * Day 8: Function Composition
 * LeetCode: https://leetcode.com/problems/function-composition/
 */

/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    return function(x) {
        // Apply functions in reverse order (right-to-left)
        for (let i = functions.length - 1; i >= 0; i--) {
            x = functions[i](x);
        }
        return x;
    };
};

/**
 * Example Usage:
 * const fn = compose([x => x + 1, x => 2 * x]);
 * console.log(fn(4)); // Output: 9 -> (2 * 4) + 1
 */
