'use strict';

var Stack = function() {
  var stack = {
    _storage: {},
    _nextIndex: 0,
  };

  // extends stack object with methods in stackMethods
  _.extend(stack, stackMethods);

  return stack;
};

var stackMethods = {
  push: function (value) {
    this._storage[this._nextIndex] = value;
    this._nextIndex += 1;
    return this.size();
  },

  pop: function () {
    if (this.size() > 0) {
      var removedValue = this._storage[this._nextIndex - 1];
      delete this._storage[this._nextIndex - 1];
      this._nextIndex -= 1;
      return removedValue;
    } else {
      return;
    }
  },

  size: function () {
    return this._nextIndex;
  },
};


