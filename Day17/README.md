# Day 17: Cache with Time Limit

## 📝 Problem
Write a class that allows getting and setting key-value pairs, however a **time until expiration** is associated with each key.

The class has the following methods:

### set(key, value, duration):
- Sets the key to the given `value` for `duration` milliseconds.
- If the key already exists and is unexpired, return `true`.
- Otherwise, return `false`.
- If the key exists, its value and timeout should be updated.

### get(key):
- If the key exists and is not expired, return its value.
- Otherwise, return `-1`.

### count():
- Returns the number of **unexpired keys**.

📎 [LeetCode Link](https://leetcode.com/problems/cache-with-time-limit/)

## 💡 Approach
- Use a `Map` to store key-value pairs with their respective timeout IDs.
- On `set`, check if the key already exists and is still valid.
  - If so, clear the previous timeout and reset it.
- On `get`, return the value only if the key exists.
- Use `.size` of the Map in `count()` to return unexpired key count.

## ✅ Solution
See [`solution.js`](./solution.js)
