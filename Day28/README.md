# Day 28: Event Emitter

## 📝 Problem
Design an `EventEmitter` class to simulate a pub-sub pattern.

It should support two methods:

### 🔹 `subscribe(eventName, callback)`
- Subscribes a callback function to a named event.
- Multiple callbacks can be subscribed to the same event.
- Returns an object with an `unsubscribe()` method that removes the specific callback from the event.

### 🔹 `emit(eventName, args)`
- Calls **all callbacks** subscribed to the given event, passing `args` to each.
- Returns an array of results from all callback calls, in the order they were subscribed.
- If no subscribers, return an empty array.

> The same event can have multiple listeners, and they should be called in order of subscription.  
> Calling `unsubscribe()` removes only that particular callback.

📎 [LeetCode Link](https://leetcode.com/problems/event-emitter/)

## 💡 Approach
- Maintain a dictionary `events` mapping event names to arrays of subscribed callbacks.
- When emitting, map through that array and invoke each callback with provided arguments.
- To unsubscribe, remove the exact object reference from the array.

## ✅ Solution
See [`solution.js`](./solution.js)
