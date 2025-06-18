# Day 12: Add Two Promises

## 📝 Problem
Given two promises `promise1` and `promise2`, return a new promise that resolves with the **sum** of the values resolved by `promise1` and `promise2`.

- Both promises resolve with a number.
- The returned promise should resolve with `val1 + val2`.

[LeetCode Link](https://leetcode.com/problems/add-two-promises/)

## 💡 Approach
- Used `Promise.all` to wait for both promises to resolve in parallel.
- Destructured the results into `val1` and `val2`.
- Returned the sum of these two values.

## ✅ Solution
See [`solution.js`](./solution.js)
