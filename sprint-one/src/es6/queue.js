'use strict';

class Queue {
  constructor() {
    this._storage = {};
    this._firstIndex = 0;
    this._nextIndex = 0;
  }

  enqueue (value) {
    this._storage[this._nextIndex] = value;
    this._nextIndex += 1;
    return this.size();
  }

  dequeue () {
    if (this.size() > 0) {
      const removedValue = this._storage[this._firstIndex];
      delete this._storage[this._firstIndex];
      this._firstIndex += 1;
      return removedValue;
    } else {
      return;
    }
  }

  size () {
    return this._nextIndex - this._firstIndex;
  }
}
