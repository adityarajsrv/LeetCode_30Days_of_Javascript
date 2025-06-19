/**
 * Day 15: Interval Cancellation
 * LeetCode: https://leetcode.com/problems/interval-cancellation/
 */

/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function(fn, args, t) {
    fn(...args); // Call immediately

    const timer = setInterval(() => {
        fn(...args);
    }, t);

    const cancelFn = () => clearInterval(timer);

    return cancelFn;
};

/**
 * Example:
 * const result = [];
 * const fn = (x) => x * 2;
 * const args = [4], t = 35, cancelTimeMs = 190;
 * const start = performance.now();
 *
 * const log = (...argsArr) => {
 *   const diff = Math.floor(performance.now() - start);
 *   result.push({"time": diff, "returned": fn(...argsArr)});
 * }
 *
 * const cancel = cancellable(log, args, t);
 * setTimeout(cancel, cancelTimeMs);
 *
 * setTimeout(() => {
 *   console.log(result); // Expected calls every 35ms until ~190ms
 * }, cancelTimeMs + t + 15);
 */
