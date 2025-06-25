# Day 29: Array Wrapper

## 📝 Problem
Create a class `ArrayWrapper` that accepts an array of integers in its constructor. This class should support:

### ➕ Addition (`+`)
- When two instances are added together using the `+` operator, the result should be the **sum of all elements** in both arrays.

### 🔤 String Conversion
- When the `String()` function is called on an instance, it should return a **comma-separated string inside brackets**, e.g., `[1,2,3]`.

### 🔒 Constraints
- Arrays contain only integers.
- You must override JavaScript’s `valueOf()` and `toString()` methods.

📎 [LeetCode Link](https://leetcode.com/problems/array-wrapper/)

## 💡 Approach
- Store the array in the constructor.
- Override:
  - `valueOf()` → Return the sum of array elements.
  - `toString()` → Format the array into a string with `[]` and `,` separator.

## ✅ Solution
See [`solution.js`](./solution.js)
