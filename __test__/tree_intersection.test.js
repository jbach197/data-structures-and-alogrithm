'use strict';

const BFT = require('../hash/tree_intersection/tree_intersection.js');
const Node = require('../hash/tree_intersection/node.js');
const BinaryTree = require('../hash/tree_intersection/binaryTree.js');

describe('Tests for Tree Intersection', () => {

  let bft = new BFT;


  // create a new Binary Tree
  const bt1root = new Node(150);
  const bt1one = new Node(100);
  const bt1two = new Node(250);
  const bt1three = new Node(75);
  const bt1four = new Node(160);
  const bt1five = new Node(200);
  const bt1six = new Node(350);
  const bt1seven = new Node(125);
  const bt1eight = new Node(175);
  const bt1nine = new Node(300);
  const bt1ten = new Node(500);

  const tree1 = new BinaryTree(bt1root);

  bt1root.left = bt1one;
  bt1root.right = bt1two;

  bt1one.left = bt1three;
  bt1one.right = bt1four;

  bt1two.left = bt1five;
  bt1two.right =  bt1six;

  bt1four.left = bt1seven;
  bt1four.right = bt1eight;

  bt1six.left = bt1nine;
  bt1six.right = bt1ten;

  console.log(bft.breadthFirstTraversal(tree1));

  // create a new Binary Tree
  const bt2root = new Node(42);
  const bt2one = new Node(100);
  const bt2two = new Node(600);
  const bt2three = new Node(15);
  const bt2four = new Node(160);
  const bt2five = new Node(200);
  const bt2six = new Node(350);
  const bt2seven = new Node(125);
  const bt2eight = new Node(175);
  const bt2nine= new Node(500);

  const tree2 = new BinaryTree(bt2root);

  bt2root.left = bt2one;
  bt2root.right = bt2two;

  bt2one.left = bt2three;
  bt2one.right = bt2four;

  bt2two.left = bt2five;
  bt2two.right =  bt2six;

  bt2four.left = bt2seven;
  bt2four.right = bt2eight;

  bt2six.right = bt2nine;



  it('Test if the results match the expected array', () => {
    let arr1 = bft.breadthFirstTraversal(tree1);
    let arr2 = bft.breadthFirstTraversal(tree2);

    expect(bft.findDups(arr1, arr2)).toEqual([100, 160, 200, 350, 125, 175, 500]);
  });

  it('Test the length of the expected output', () => {
    let arr1 = bft.breadthFirstTraversal(tree1);
    let arr2 = bft.breadthFirstTraversal(tree2);

    expect(bft.findDups(arr1, arr2).length).toBe(7);
  });

  it('Test the output array of the trees', () => {
    expect(bft.breadthFirstTraversal(tree1).length).toBe(11);
    expect(bft.breadthFirstTraversal(tree2).length).toBe(10);
  });

});