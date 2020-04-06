'use strict'

var Stack = function() {
  var someInstance = {};
  someInstance.index = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    // add a value to the end of the stack
    storage[someInstance.index] = value;
    someInstance.index += 1;
    return someInstance.size();
  };

  someInstance.pop = function() {
    // remove the last value from the stack only if stack has values
    if (someInstance.size() > 0) {
      var removedValue = storage[someInstance.index - 1];
      delete storage[someInstance.index - 1];
      someInstance.index -= 1;
      return removedValue;
    } else {
      return;
    }
  };

  someInstance.size = function() {
    return someInstance.index;
  };

  return someInstance;
};
