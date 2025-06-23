# Day 24: Sort By

## 📝 Problem
Given an array `arr` and a function `fn`, return a sorted array `sortedArr`.

The sort order is determined by the return value of `fn` applied to each element in `arr`. The array must be sorted in **ascending order** based on the output of `fn`.

### Assumptions:
- `fn` only returns numbers.
- There will be no duplicate outputs from `fn` for the elements in the array.

📎 [LeetCode Link](https://leetcode.com/problems/sort-by/)

## 💡 Approach
- Use JavaScript’s built-in `.sort()` function.
- Pass a comparator that applies `fn` to both `a` and `b`, and subtracts the results to sort in ascending order.

## ✅ Solution
See [`solution.js`](./solution.js)
