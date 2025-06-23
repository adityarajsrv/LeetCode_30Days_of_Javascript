# Day 26: Flatten Deeply Nested Array

## 📝 Problem
Given a multi-dimensional array `arr` and a depth `n`, return a flattened version of that array.

- A multi-dimensional array contains integers or other nested arrays.
- Flattening means converting nested arrays into a single array up to the given depth.
- The depth of the elements in the top-level array is considered 0.
- Do **not** use the built-in `Array.flat()` method.

📎 [LeetCode Link](https://leetcode.com/problems/flatten-deeply-nested-array/)

## 💡 Approach
- Use recursion to flatten the array to the specified depth.
- For each element in the array:
  - If it's an array and depth is not zero, recursively flatten with `n - 1`.
  - Otherwise, add the element directly to the result.
- Base case: if `n` is 0, return the array as is.

## ✅ Solution
See [`solution.js`](./solution.js)
