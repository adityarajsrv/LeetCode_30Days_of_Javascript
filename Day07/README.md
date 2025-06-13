# Day 7: Array Reduce Transformation

## 📝 Problem
Given:
- An integer array `nums`
- A reducer function `fn`
- An initial value `init`

Return the final result by applying `fn` to each array element in order using the pattern:

val = fn(init, nums[0])
val = fn(val, nums[1])
val = fn(val, nums[2])

If the array is empty, return `init`.

**Do not** use the built-in `Array.reduce()` method.

[LeetCode Link](https://leetcode.com/problems/array-reduce-transformation/)

## 💡 Approach
Used a `for` loop to traverse the array and update the cumulative value `val` using the reducer function `fn`.  
Initialized `val` to `init` before the loop, and returned it directly if the input array is empty.

## ✅ Solution
See [`solution.js`](./solution.js)
