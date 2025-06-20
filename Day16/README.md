# Day 16: Promise Time Limit

## 📝 Problem
Given an asynchronous function `fn` and a time `t` in milliseconds, return a new time-limited version of the input function.

The returned function should:
- Resolve with the result of `fn` if it completes within `t` milliseconds.
- Reject with `"Time Limit Exceeded"` if `fn` takes longer than `t` milliseconds.

📎 [LeetCode Link](https://leetcode.com/problems/promise-time-limit/)

## 💡 Approach
- Wrap the asynchronous `fn(...args)` call inside a `Promise`.
- Set a timeout for `t` milliseconds that triggers a rejection.
- Whichever resolves or rejects first (the `fn` result or timeout) will be returned by the Promise.

## ✅ Solution
See [`solution.js`](./solution.js)
