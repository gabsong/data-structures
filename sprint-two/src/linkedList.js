'use strict';

// Functional class instantiation pattern
const LinkedList = function() {
  const list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    const node = new Node(value);

    if (this.tail) {
      this.tail.next = node;
      this.tail = node;
    } else {
      // when LinkedList is empty
      this.tail = node;
      this.head = node;
    }
  };

  list.removeHead = function() {
    const previousHeadValue = this.head.value;

    this.head = this.head.next;
    // detached head will be removed by the garbage collector

    return previousHeadValue;
  };

  list.contains = function(target) {
    // list.contains is a method of the LinkedList, not a node
    let node = this.head;

    while (node) {
      if (node.value === target) {
        return true;
      }

      // break if no more links
      if (node.next === null) {
        break;
      }

      node = node.next;
    }

    return false;
  };

  return list;
};

const Node = function(value) {
  const node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 * addToTail = constant time, O(1)
 * removeHead = constant time, O(1)
 * contains = linear time, O(n)
 */
