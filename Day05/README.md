# Day 5: Apply Transform Over Each Element in Array

## 📝 Problem
Given an integer array `arr` and a mapping function `fn`, return a new array with the transformation applied to each element.

The returned array should be created such that:  
`returnedArray[i] = fn(arr[i], i)`

**Note:**  
Need to solve this without using the js built-in `Array.map()` method.

[LeetCode Link](https://leetcode.com/problems/apply-transform-over-each-element-in-array/)

## 💡 Approach
Used a simple `for` loop to iterate through each index.  
Applied the given function `fn` to each element and its index and stored the result in a new array.

## ✅ Solution
See [`solution.js`](./solution.js)
