'use strict';

var Stack = function() {
  var stack = {
    nextIndex: 0,
  };

  // extends stack object with methods in stackMethods
  _.extend(stack, stackMethods);

  return stack;
};

var stackMethods = {
  push: function (value) {
    this[this.nextIndex] = value;
    this.nextIndex += 1;
    return this.size();
  },

  pop: function () {
    if (this.size() > 0) {
      var removedValue = this[this.nextIndex - 1];
      delete this[this.nextIndex - 1];
      this.nextIndex -= 1;
      return removedValue;
    } else {
      return;
    }
  },

  size: function () {
    return this.nextIndex;
  },
};


