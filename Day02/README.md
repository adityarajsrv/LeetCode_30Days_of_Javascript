# Day 2: Counter

## 📝 Problem
Given an integer `n`, return a counter function.  
This counter function should:
- Initially return `n`
- Then return `n + 1`, `n + 2`, ... on subsequent calls

[LeetCode Link](https://leetcode.com/problems/counter/)

## 💡 Approach
Used JavaScript closures to maintain internal state across multiple calls.  
Each invocation of the inner function increases and returns the current count using `n++`.

## ✅ Solution
See [`solution.js`](./solution.js)
