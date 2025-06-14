# Day 8: Function Composition

## 📝 Problem
Given an array of functions `[f1, f2, f3, ..., fn]`, return a new function `fn` that is the function composition of the array.

Function composition means applying the functions from **right to left**, such that:
compose([f, g, h])(x) === f(g(h(x)))

If the array is empty, return the **identity function**:
f(x) = x

Assume each function takes a single integer as input and returns an integer.

[LeetCode Link](https://leetcode.com/problems/function-composition/)

## 💡 Approach
Used a `for` loop to iterate from the end of the function array to the start, applying each function to the result of the previous one (right-to-left composition).  
Handles empty arrays by simply returning `x`.

## ✅ Solution
See [`solution.js`](./solution.js)

