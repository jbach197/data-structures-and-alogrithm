'use strict';

let Queue = require('../../stacks-and-queues/queue-with-stacks/queue-with-stacks.js');

describe('Queue', () => {

  it('enqueue() value added to stack', () => {
    let Stack1 = [];
    let Stack2 = [];

    let initialValue = 'A';
    enqueue(initialValue);
    expect(Stack1).toEqual([initialValue]);
  });

  it('dequeue() error if stacks are blank', () => {
    let Stack1 = [];
    let Stack2 = [];
    dequeue();
    expect(Stack2).toEqual('queue is empty');
  });

  it('dequeue() value removed from stack', () => {
    let Stack1 = [];
    let Stack2 = [];

    let initialValue = 'A';
    let secondValue = 'B';
    let thirdlValue = 'C';

    enqueue(initialValue);
    enqueue(secondValue);
    enqueue(thirdValue);
    dequeue();
    expect(Stack2).toEqual([secondValue, thirdValue]);
  });

});