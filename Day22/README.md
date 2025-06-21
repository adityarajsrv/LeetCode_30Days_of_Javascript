# Day 22: Array Prototype Last

## 📝 Problem
Write code that enhances all arrays such that you can call the `.last()` method on any array.

- It should return the last element of the array.
- If the array is empty, it should return `-1`.

📝 You may assume the array is the output of `JSON.parse`.

📎 [LeetCode Link](https://leetcode.com/problems/array-prototype-last/)

## 💡 Approach
- Add a `last` method to the `Array.prototype` object.
- Inside the method:
  - If the array has no elements (`length === 0`), return `-1`.
  - Otherwise, return the last element using `this[this.length - 1]`.

## ✅ Solution
See [`solution.js`](./solution.js)
