/**
 * Day 19: Execute Asynchronous Functions in Parallel
 * LeetCode: https://leetcode.com/problems/execute-asynchronous-functions-in-parallel/
 */

/**
 * @param {Array<Function>} functions - An array of functions that return promises
 * @return {Promise<any[]>} - Resolves with ordered results, rejects on first failure
 */
var promiseAll = function(functions) {
    return new Promise((resolve, reject) => {
        const res = Array(functions.length);
        let waitingFor = functions.length;

        if (waitingFor === 0) {
            resolve(res);
            return;
        }

        for (let i = 0; i < functions.length; i++) {
            functions[i]()
                .then((value) => {
                    res[i] = value;
                    waitingFor--;
                    if (waitingFor === 0) {
                        resolve(res);
                    }
                })
                .catch(reject);
        }
    });
};

/**
 * Example Usage:
 * const promise = promiseAll([
 *   () => new Promise(res => setTimeout(() => res(1), 200)),
 *   () => new Promise(res => setTimeout(() => res(2), 100))
 * ]);
 * promise.then(console.log); // [1, 2] after ~200ms
 */
