'use strict';

var Queue = function() {
  var queue = {
    _storage: {},
    _firstIndex: 0,
    _nextIndex: 0,
  };

  // extends queue object with methods in queueMethods
  _.extend(queue, queueMethods);

  return queue;
};

var queueMethods = {
  enqueue: function (value) {
    this._storage[this._nextIndex] = value;
    this._nextIndex += 1;
    return this.size();
  },

  dequeue: function () {
    if (this.size() > 0) {
      var removedValue = this._storage[this._firstIndex];
      delete this._storage[this._firstIndex];
      this._firstIndex += 1;
      return removedValue;
    } else {
      return;
    }
  },

  size: function () {
    return this._nextIndex - this._firstIndex;
  },
};


