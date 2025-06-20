# Day 18: Debounce

## 📝 Problem
Given a function `fn` and a time in milliseconds `t`, return a **debounced version** of that function.

A debounced function is a function:
- Whose execution is **delayed by `t` milliseconds**.
- If it's **called again within that delay**, the previous call is **canceled**, and the timer resets.
- It should always execute only **after `t` milliseconds of inactivity**.
- The debounced function must receive and execute with the passed arguments.

### Example
Let’s say `t = 50ms`, and calls occur at:
- `30ms`, `60ms`, `100ms` → Only the **last call executes at 150ms**.

If `t = 35ms`:
- `30ms`, `60ms`, `100ms` → Second executes at 95ms, third at 135ms.

📎 [LeetCode Link](https://leetcode.com/problems/debounce/)

## 💡 Approach
- Use a **timer variable** to track the last scheduled call.
- On each call to the debounced function:
  - Clear the existing timer using `clearTimeout`.
  - Schedule a new one with `setTimeout`.
- This ensures that only the **last call within a burst of rapid calls** is executed after the wait time `t`.

## ✅ Solution
See [`solution.js`](./solution.js)
