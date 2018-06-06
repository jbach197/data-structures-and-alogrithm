'use strict';

let breadthFirstTraversal = ('../../binaryTrees/breadthFirstTraversal/breadth_first_traversal.js');

describe('tree traversal', () => {

  it('breadthFirstTraversal() tree traversal', () => { 
    
    const one = new Node(1);
    const two = new Node(2);
    const three = new Node(3);
    const four = new Node(4);
    const five = new Node(5);
    const six = new Node(6);
    const seven = new Node(7);
    const eight = new Node(8);
    const nine = new Node(9);
    
    const tree = new BinaryTree(one);
    
    one.left = two;
    one.right = three;
    three.left = four;
    three.right = five;
    two.left = six;
    six.right = seven;
    seven.left = eight;
    seven.right = nine;
    expect(tree.breadthFirstTraversal).toEqual([50, 40, 60, 30, 59, 70, 58, 69, 68]);
  });
});