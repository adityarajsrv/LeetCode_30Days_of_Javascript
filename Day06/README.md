# Day 6: Filter Elements from Array

## 📝 Problem
Given an integer array `arr` and a filtering function `fn`, return a filtered array `filteredArr`.

The `fn` function can take one or two arguments:
- `arr[i]`: the element value
- `i`: the index of the element

The `filteredArr` should include **only** the elements for which `fn(arr[i], i)` evaluates to a **truthy** value.  
Do **not** use the built-in `Array.filter()` method.

[LeetCode Link](https://leetcode.com/problems/filter-elements-from-array/)

## 💡 Approach
Used a `for` loop to iterate over the input array.  
Applied the filtering function `fn` to each element and its index.  
If the function returns a truthy value, the element is added to a new result array.

## ✅ Solution
See [`solution.js`](./solution.js)
