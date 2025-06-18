/**
 * Day 12: Add Two Promises
 * LeetCode: https://leetcode.com/problems/add-two-promises/
 */

/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
    const [val1, val2] = await Promise.all([promise1, promise2]);
    return val1 + val2;
};

/**
 * Example Usage:
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // Output: 4
 */
