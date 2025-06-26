# Day 30: Calculator with Method Chaining

## 📝 Problem
Design a `Calculator` class that supports method chaining for basic arithmetic operations. The class should:

- Be initialized with an initial number.
- Support the following methods:
  - `add(value)` – Adds value to the result.
  - `subtract(value)` – Subtracts value from the result.
  - `multiply(value)` – Multiplies the result by value.
  - `divide(value)` – Divides the result by value. If `value` is 0, throw `"Division by zero is not allowed"`.
  - `power(value)` – Raises the result to the power of value.
  - `getResult()` – Returns the current result.

All methods except `getResult` must return the instance for chaining.

✅ Answers within `1e-5` of the actual result are acceptable.

📎 [LeetCode Link](https://leetcode.com/problems/calculator-with-method-chaining/)

## 💡 Approach
- Use class properties to track `result`.
- Each operation mutates `result` and returns `this` for chaining.
- `getResult()` returns the final computed value.

## ✅ Solution
See [`solution.js`](./solution.js)
