# Day 4: Counter II

## 📝 Problem
Write a function `createCounter`.  
It should accept an initial integer `init` and return an object with the following three methods:

- `increment()` → increases the current value by 1 and returns it  
- `decrement()` → decreases the current value by 1 and returns it  
- `reset()` → resets the current value to `init` and returns it

[LeetCode Link](https://leetcode.com/problems/counter-ii/)

## 💡 Approach
Used JavaScript closures to persist the current state.  
A local variable `current` tracks the mutable count.  
The returned object provides methods that modify and access `current` while maintaining access to the original `init` for reset.

## ✅ Solution
See [`solution.js`](./solution.js)
