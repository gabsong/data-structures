'use strict';

class Stack {
  constructor() {
    this._storage = {};
    this._nextIndex = 0;
  }

  push (value) {
    this._storage[this._nextIndex] = value;
    this._nextIndex += 1;
    return this.size();
  }

  pop () {
    if (this.size() > 0) {
      const removedValue = this._storage[this._nextIndex - 1];
      delete this._storage[this._nextIndex - 1];
      this._nextIndex -= 1;
      return removedValue;
    } else {
      return;
    }
  }

  size () {
    return this._nextIndex;
  }
}