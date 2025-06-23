/**
 * Day 25: Join Two Arrays By ID
 * LeetCode: https://leetcode.com/problems/join-two-arrays-by-id/
 */

/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    const result = {};

    for (let i = 0; i < arr1.length; i++) {
        result[arr1[i].id] = arr1[i];
    }

    for (let i = 0; i < arr2.length; i++) {
        if (result[arr2[i].id]) {
            for (const key in arr2[i]) {
                result[arr2[i].id][key] = arr2[i][key];
            }
        } else {
            result[arr2[i].id] = arr2[i];
        }
    }

    return Object.values(result);
};

/**
 * Example Usage:
 * join([{ "id": 1, "x": 1 }, { "id": 2, "x": 9 }],
 *      [{ "id": 2, "x": 3 }, { "id": 3, "y": 4 }]);
 * // Output: [
 * //   { "id": 1, "x": 1 },
 * //   { "id": 2, "x": 3 },
 * //   { "id": 3, "y": 4 }
 * // ]
 */
