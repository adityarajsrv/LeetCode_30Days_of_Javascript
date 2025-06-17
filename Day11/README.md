# Day 11: Memoize

## 📝 Problem
Given a function `fn`, return a **memoized version** of that function.

A memoized function:
- Caches the result of each unique input.
- Never calls `fn` again for the same arguments.
- Treats arguments like `(2,3)` and `(3,2)` as **different**.

You can assume the input function is one of:
- `sum(a, b)` → returns `a + b`
- `fib(n)` → returns Fibonacci of `n`
- `factorial(n)` → returns `n!`

[LeetCode Link](https://leetcode.com/problems/memoize/)

## 💡 Approach
- Used `JSON.stringify(args)` to serialize arguments as cache keys.
- If the key exists in cache, returned the stored result.
- Otherwise, called `fn`, stored the result in cache, and returned it.

## ✅ Solution
See [`solution.js`](./solution.js)
