/**
 * Day 11: Memoize
 * LeetCode: https://leetcode.com/problems/memoize/
 */

/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    let cache = {};

    return function (...args) {
        let key = JSON.stringify(args);

        if (key in cache) {
            return cache[key];
        }

        const result = fn.apply(this, args);
        cache[key] = result;
        return result;
    };
}

/**
 * Example Usage:
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *     callCount += 1;
 *     return a + b;
 * });
 * 
 * console.log(memoizedFn(2, 3)); // Output: 5
 * console.log(memoizedFn(2, 3)); // Output: 5 (from cache)
 * console.log(callCount);        // Output: 1
 */
