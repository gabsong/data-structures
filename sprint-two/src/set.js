'use strict';

// Prototypal class instantiation pattern
var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (!this.contains(item)) {
    // we only add a value to a set once
    this._storage[item] = item;
  }
};

setPrototype.contains = function(item) {
  // to lookup by value, key == value
  return this._storage[item] !== undefined;
};

setPrototype.remove = function(item) {
  if (this.contains(item)) {
    delete this._storage[item];
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 * add = constant time, O(1)
 * remove = constant time, O(1)
 * contains = constant time, O(1)
 */
