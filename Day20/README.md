# Day 20: Is Object Empty

## 📝 Problem
Given an object or array, return `true` if it is empty, and `false` otherwise.

- An **empty object** has no key-value pairs.
- An **empty array** has no elements.
- You may assume the input is the output of `JSON.parse`, so it will be a plain object or array.

📎 [LeetCode Link](https://leetcode.com/problems/is-object-empty/)

## 💡 Approach
- Use `Object.keys(obj).length` to check if the object or array has any enumerable properties or elements.
- If the length is `0`, it's empty.
- Otherwise, it's not.

## ✅ Solution
See [`solution.js`](./solution.js)
