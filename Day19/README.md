# Day 19: Execute Asynchronous Functions in Parallel

## 📝 Problem
Given an array of asynchronous functions `functions`, return a new promise `promise`.

Each function:
- Accepts no arguments.
- Returns a promise.

### ✅ The returned `promise` should:
- **Resolve** when **all** promises returned from `functions` resolve.
  - The resolved value should be an **array of all resolved values**, in **original order**.
- **Reject** immediately if **any** of the promises reject.
  - The rejection should occur with the reason of the **first rejection**.

⚠️ Do not use `Promise.all()`.

📎 [LeetCode Link](https://leetcode.com/problems/execute-asynchronous-functions-in-parallel/)

## 💡 Approach
- Initialize an empty results array with the same length as the input.
- Keep a counter of how many functions are still pending.
- Iterate over the array:
  - Call each async function.
  - Store its resolved value at the correct index.
  - If all are resolved, resolve the main promise with the result array.
  - If any reject, immediately reject the main promise.

## ✅ Solution
See [`solution.js`](./solution.js)
