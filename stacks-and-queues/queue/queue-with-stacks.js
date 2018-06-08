'use strict';

let Stack1 = [];
let Stack2 = [];

function enqueue(value) {
  Stack1.push(value);
}

function dequeue() {
  if (Stack2.length === 0) {
    if (Stack1.length === 0) { return 'queue is empty'; }
    while (Stack1.length > 0) {
      var x = Stack1.pop();
      Stack2.push(x);
    }
  }
  return Stack2.pop();
}

module.exports = enqueue;
module.exports = dequeue;