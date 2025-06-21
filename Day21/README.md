# Day 21: Chunk Array

## 📝 Problem
Given an array `arr` and a chunk size `size`, return a chunked array.

- A chunked array splits the original elements into subarrays each of length `size`.
- The last subarray may be shorter if `arr.length` is not divisible by `size`.

🔒 Constraints:
- Do not use lodash's `_.chunk` function.

📎 [LeetCode Link](https://leetcode.com/problems/chunk-array/)

## 💡 Approach
- Loop through the array in steps of `size`.
- Use `Array.slice(i, i + size)` to get subarrays.
- Push each subarray into a result array.
- Return the result.

## ✅ Solution
See [`solution.js`](./solution.js)
