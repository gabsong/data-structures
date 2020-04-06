'use strict'

var Queue = function() {
  var someInstance = {};
  someInstance.nextDequeue = 0;
  someInstance.nextEnqueue = 0;
  someInstance.emptyCount = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    // add a value to the end of the queue
    storage[someInstance.nextEnqueue] = value;
    someInstance.nextEnqueue += 1;
    return someInstance.size();
  };

  someInstance.dequeue = function() {
    // remove a value from the start of the queue
    if (someInstance.size() > 0) {
      var removedValue = storage[someInstance.nextDequeue];
      delete storage[someInstance.nextDequeue];
      someInstance.nextDequeue += 1;
      return removedValue;
    } else {
      return;
    }
  };

  someInstance.size = function() {
    return someInstance.nextEnqueue - someInstance.nextDequeue;
  };

  return someInstance;
};
