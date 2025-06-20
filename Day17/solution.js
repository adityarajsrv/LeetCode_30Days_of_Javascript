/**
 * Day 17: Cache with Time Limit
 * LeetCode: https://leetcode.com/problems/cache-with-time-limit/
 */

class TimeLimitedCache {
    constructor() {
        this.cache = new Map();
    }

    /**
     * Sets a key with value and expiration duration.
     * @param {number} key
     * @param {number} value
     * @param {number} duration - milliseconds
     * @return {boolean} true if key existed and was unexpired
     */
    set(key, value, duration) {
        const alreadyExists = this.cache.get(key);
        if (alreadyExists) {
            clearTimeout(alreadyExists.timeoutId);
        }

        const timeoutId = setTimeout(() => {
            this.cache.delete(key);
        }, duration);

        this.cache.set(key, { value, timeoutId });
        return Boolean(alreadyExists);
    }

    /**
     * Returns the value if key is not expired, else -1.
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if (this.cache.has(key)) {
            return this.cache.get(key).value;
        }
        return -1;
    }

    /**
     * Returns the count of unexpired keys.
     * @return {number}
     */
    count() {
        return this.cache.size;
    }
}

/**
 * Example Usage:
 * const timeLimitedCache = new TimeLimitedCache();
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1); // 42
 * timeLimitedCache.count(); // 1
 */
