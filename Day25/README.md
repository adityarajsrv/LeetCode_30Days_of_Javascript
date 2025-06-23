# Day 25: Join Two Arrays By ID

## 📝 Problem
Given two arrays `arr1` and `arr2`, return a new array `joinedArray`.

Each object in both arrays contains an `id` field (integer). The result array should:
- Merge objects from both arrays based on the `id` field.
- Keep only one object per unique `id`.
- If an `id` is present in both arrays:
  - Combine the properties.
  - Properties from `arr2` override those from `arr1` on conflict.
- If an `id` is only in one array, include it as-is.
- The final array should be sorted in **ascending order** based on `id`.

📎 [LeetCode Link](https://leetcode.com/problems/join-two-arrays-by-id/)

## 💡 Approach
- Use a hash map (`result`) to store objects using their `id` as the key.
- First, populate the map with objects from `arr1`.
- Then, iterate over `arr2`:
  - If the object’s `id` exists in the map, merge properties (arr2 overrides arr1).
  - If not, simply add the new entry.
- Finally, return `Object.values(result)` sorted by `id`.

## ✅ Solution
See [`solution.js`](./solution.js)
