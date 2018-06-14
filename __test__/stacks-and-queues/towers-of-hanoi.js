'use strict';


let hanoi = require('../../stacks-and-queues/towerHanoi/towers-of-hanoi.js');

describe('hanoi() with two disk', () => { 

  it('moves disk to correct tower', () => {
    let outcome  = hanoi(2, 'A', 'B', 'C')
    expect(outcome).toEqual('Move disk from Tower  C  to Tower  B');
  });
});