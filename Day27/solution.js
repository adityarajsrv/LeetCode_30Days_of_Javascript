/**
 * Day 27: Compact Object
 * LeetCode: https://leetcode.com/problems/compact-object/
 */

/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) {
    if (obj === null) return obj;

    if (typeof obj !== "object") return obj;

    if (Array.isArray(obj)) {
        return obj.filter(Boolean).map(compactObject);
    }

    const compacted = {};
    for (const key in obj) {
        let value = compactObject(obj[key]);
        if (value) {
            compacted[key] = value;
        }
    }
    return compacted;
};

/**
 * Example Usage:
 * compactObject([null, 0, false, 1]) // [1]
 * compactObject({"a": null, "b": [false, 1]}) // { "b": [1] }
 */
