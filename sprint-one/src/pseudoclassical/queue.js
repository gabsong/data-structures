'use strict';

var Queue = function() {
  // this = Object.create(Queue.prototype);
  this._storage = {};
  this._firstIndex = 0;
  this._nextIndex = 0;
  // => this;
};

Queue.prototype.enqueue = function (value) {
  this._storage[this._nextIndex] = value;
  this._nextIndex += 1;
  return this.size();
};

Queue.prototype.dequeue = function () {
  if (this.size() > 0) {
    var removedValue = this._storage[this._firstIndex];
    delete this._storage[this._firstIndex];
    this._firstIndex += 1;
    return removedValue;
  } else {
    return;
  }
};

Queue.prototype.size = function () {
  return this._nextIndex - this._firstIndex;
};
