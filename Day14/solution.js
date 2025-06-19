/**
 * Day 14: Timeout Cancellation
 * LeetCode: https://leetcode.com/problems/timeout-cancellation/
 */

/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function(fn, args, t) {
    const cancelFn = function() {
        clearTimeout(timer); // Cancel the scheduled execution
    };

    const timer = setTimeout(() => {
        fn(...args); // Execute fn if not canceled
    }, t);

    return cancelFn;
};

/**
 * Example Usage:
 * const result = [];
 * const fn = (x) => x * 5;
 * const args = [2], t = 20, cancelTimeMs = 50;
 * const start = performance.now();

 * const log = (...argsArr) => {
 *   const diff = Math.floor(performance.now() - start);
 *   result.push({ "time": diff, "returned": fn(...argsArr) });
 * };

 * const cancel = cancellable(log, args, t);
 * setTimeout(cancel, cancelTimeMs);

 * setTimeout(() => {
 *   console.log(result); // Output depends on whether canceled before `t`
 * }, Math.max(t, cancelTimeMs) + 15);
 */
