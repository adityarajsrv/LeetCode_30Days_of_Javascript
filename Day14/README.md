# Day 14: Timeout Cancellation

## 📝 Problem
Given a function `fn`, an array of arguments `args`, and a timeout `t` in milliseconds, return a cancel function `cancelFn`.

- Initially, `fn` should be scheduled to run after `t` milliseconds with the given `args`.
- If `cancelFn` is called before `t` milliseconds, `fn` execution should be **canceled**.
- If not canceled within `t` ms, `fn(...args)` should be executed.

[LeetCode Link](https://leetcode.com/problems/timeout-cancellation/)

## 💡 Approach
- Used `setTimeout` to schedule the execution of `fn` with a delay of `t`.
- Stored the timer ID so we can cancel it with `clearTimeout` if needed.
- Returned the cancel function which clears the timer.

## ✅ Solution
See [`solution.js`](./solution.js)
