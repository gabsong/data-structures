'use strict';

var Queue = function() {
  var queue = {
    firstIndex: 0,
    nextIndex: 0,
  };

  // extends queue object with methods in queueMethods
  _.extend(queue, queueMethods);

  return queue;
};

var queueMethods = {
  enqueue: function (value) {
    this[this.nextIndex] = value;
    this.nextIndex += 1;
    return this.size();
  },

  dequeue: function () {
    if (this.size() > 0) {
      var removedValue = this[this.firstIndex];
      delete this[this.firstIndex];
      this.firstIndex += 1;
      return removedValue;
    } else {
      return;
    }
  },

  size: function () {
    return this.nextIndex - this.firstIndex;
  },
};


