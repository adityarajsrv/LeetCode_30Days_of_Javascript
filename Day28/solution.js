/**
 * Day 28: Event Emitter
 * LeetCode: https://leetcode.com/problems/event-emitter/
 */

class EventEmitter {
    constructor() {
        this.events = {};
    }

    /**
     * @param {string} eventName
     * @param {Function} callback
     * @return {Object}
     */
    subscribe(eventName, callback) {
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }

        const callbackObj = { callback };

        this.events[eventName].push(callbackObj);

        return {
            unsubscribe: () => {
                this.events[eventName] = this.events[eventName].filter(
                    obj => obj !== callbackObj
                );
            },
        };
    }

    /**
     * @param {string} eventName
     * @param {Array} args
     * @return {Array}
     */
    emit(eventName, args = []) {
        if (!this.events[eventName]) return [];

        return this.events[eventName].map(obj => obj.callback(...args));
    }
}

/**
 * Example Usage:
 * const emitter = new EventEmitter();
 *
 * function onClickCallback() { return 99; }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe();       // undefined
 * emitter.emit('onClick'); // []
 */
