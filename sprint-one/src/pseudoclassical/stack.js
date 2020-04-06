'use strict';

var Stack = function() {
  // this = Object.create(Stack.prototype);
  this._storage = {};
  this._nextIndex = 0;
  // => this;
};

Stack.prototype.push = function (value) {
  this._storage[this._nextIndex] = value;
  this._nextIndex += 1;
  return this.size();
};

Stack.prototype.pop = function () {
  if (this.size() > 0) {
    var removedValue = this._storage[this._nextIndex - 1];
    delete this._storage[this._nextIndex - 1];
    this._nextIndex -= 1;
    return removedValue;
  } else {
    return;
  }
};

Stack.prototype.size = function () {
  return this._nextIndex;
};

