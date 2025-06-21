# Day 23: Group By

## 📝 Problem
Enhance all arrays such that you can call the `array.groupBy(fn)` method on any array, and it returns a grouped version of the array.

A grouped array is an object where:
- Each key is the result of `fn(element)` for elements in the array.
- Each value is an array of elements that produce that key.

### Constraints:
- `fn` will always return a string key.
- Input array can contain any data types.
- Key order in the output object does not matter.
- Use only native JS — no Lodash's `_.groupBy`.

📎 [LeetCode Link](https://leetcode.com/problems/group-by/)

## 💡 Approach
- Extend `Array.prototype` with a method `groupBy(fn)`.
- Use `Array.prototype.reduce()` to build an object:
  - Compute the key for each element using `fn`.
  - Group the elements into arrays under that key.

## ✅ Solution
See [`solution.js`](./solution.js)
