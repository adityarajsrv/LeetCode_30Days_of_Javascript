# Day 3: To Be or Not To Be

## 📝 Problem
Write a function `expect` that helps developers test their code.

It should take in any value `val` and return an object with two methods:

- `toBe(val2)`  
  Returns `true` if `val === val2`, otherwise throws an error `"Not Equal"`

- `notToBe(val2)`  
  Returns `true` if `val !== val2`, otherwise throws an error `"Equal"`

[LeetCode Link](https://leetcode.com/problems/to-be-or-not-to-be/)

## 💡 Approach
Used JavaScript object literals and closures to encapsulate the value and expose two comparison methods:
- `toBe` for strict equality
- `notToBe` for strict inequality  
Both throw errors for mismatches.

## ✅ Solution
See [`solution.js`](./solution.js)
