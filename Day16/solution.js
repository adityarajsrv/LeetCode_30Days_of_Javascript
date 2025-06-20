/**
 * Day 16: Promise Time Limit
 * LeetCode: https://leetcode.com/problems/promise-time-limit/
 */

/**
 * @param {Function} fn - An async function to be time-limited
 * @param {number} t - Timeout duration in milliseconds
 * @return {Function}
 */
var timeLimit = function(fn, t) {
    return async function(...args) {
        return new Promise((resolve, reject) => {
            // Reject if function exceeds time limit
            const timer = setTimeout(() => {
                reject("Time Limit Exceeded");
            }, t);

            // Call the actual function
            fn(...args)
                .then((res) => {
                    clearTimeout(timer);
                    resolve(res);
                })
                .catch((err) => {
                    clearTimeout(timer);
                    reject(err);
                });
        });
    };
};

/**
 * Example Usage:
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at ~100ms
 */
