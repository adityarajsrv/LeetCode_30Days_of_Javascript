# Day 13: Sleep

## 📝 Problem
Write an asynchronous function `sleep` that resolves after a given number of milliseconds `millis`.

- Accepts a positive integer `millis`.
- Returns a promise that resolves after `millis` milliseconds.
- Minor deviations in timing are acceptable.

[LeetCode Link](https://leetcode.com/problems/sleep/)

## 💡 Approach
Used `setTimeout` wrapped inside a `Promise` to delay resolution.  
Returned the promise using `async/await` for clarity.

## ✅ Solution
See [`solution.js`](./solution.js)
