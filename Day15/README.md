# Day 15: Interval Cancellation

## 📝 Problem
Given a function `fn`, an array of arguments `args`, and an interval time `t`, return a cancel function `cancelFn`.

- `fn` should be executed immediately with `args`.
- Then `fn` should be called again every `t` milliseconds.
- When the returned `cancelFn` is called, it should cancel all future executions of `fn`.

[LeetCode Link](https://leetcode.com/problems/interval-cancellation/)

## 💡 Approach
Used `setInterval` to repeatedly call the function `fn` with the given `args` every `t` milliseconds.  
Immediately invoked `fn` once at the start.  
Returned a cancel function that calls `clearInterval` on the created timer.

## ✅ Solution
See [`solution.js`](./solution.js)
