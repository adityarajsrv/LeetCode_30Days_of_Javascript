# Day 10: Allow One Function Call

## 📝 Problem
Given a function `fn`, return a new function that calls `fn` **at most once**.

- The first time the returned function is called, it should return the result of `fn`.
- Every subsequent call should return `undefined` without calling `fn`.

[LeetCode Link](https://leetcode.com/problems/allow-one-function-call/)

## 💡 Approach
Used a closure variable `called` to track if `fn` has been called before.  
On first call, invoke `fn` with arguments and mark `called` as true.  
On later calls, return `undefined` directly.

## ✅ Solution
See [`solution.js`](./solution.js)
