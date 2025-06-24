# Day 27: Compact Object

## 📝 Problem
Given an object or array `obj`, return a **compact object**.

A **compact object** is the same as the original object, except with **keys containing falsy values removed**. This removal should apply recursively to all **nested objects** and **arrays**.

A value is considered falsy if `Boolean(value) === false`, which includes: `false`, `null`, `0`, `""`, `undefined`, and `NaN`.

You may assume the object is the result of `JSON.parse`, meaning it's a valid plain object or array.

📎 [LeetCode Link](https://leetcode.com/problems/compact-object/)

## 💡 Approach
- If the input is not an object or is `null`, return it as-is.
- If the input is an array:
  - Filter out falsy elements.
  - Recursively compact each element.
- If the input is an object:
  - Recursively check and compact each key's value.
  - Add it to the result only if the compacted value is truthy.

## ✅ Solution
See [`solution.js`](./solution.js)
