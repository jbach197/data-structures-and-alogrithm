'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
    this.nodeCount = 0;
  }


  //for binary search
  append(value){
    // O(1) (helper function is looped)
    if (value === null){
      return null;
    }

    if(!this.root){
      this.root = new Node(value);
      this.nodeCount = 1;
      return this;
    }

    this.looptiverse(value, this.root);

  }//append

  looptiverse(value, currentNode){
    //O(n)
    if(value === currentNode.value){
      return currentNode;
    }

    if(value < currentNode.value){
      if(currentNode.left === null){
        currentNode.left = new Node(value);
        this.nodeCount++;
        return this;
      }else if(currentNode.left !== null)
        return this.looptiverse(value, currentNode.left);
    }
    if(value > currentNode.value){
      if(currentNode.right === null){
        currentNode.right = new Node(value);
        this.nodeCount++;
        return this;
      }else if(currentNode.right !== null)
        return this.looptiverse(value, currentNode.right);
    }

  }//looptiverse

}//binaryTree

//////////////
class Queue {
  constructor() {
    this.length = 0;
    this.head = null;
  }

  //enqueue places node at tail.
  enqueue(value) {
    // big O(n)
    if (value === null){
      return null;
    }

    let node = new Node(value);

    if (!this.head) {
      this.head = node;
      this.length = 1;
      return this;
    }

    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
    this.length++;
    return this;
  }//Fx append

  dequeue(){

    let returnHead = this.head;
    this.head = this.head.next;
    this.length--;
    // console.log(`x ${returnHead.value.value}`);
    return returnHead.value;

  }

}//close queue class

//////////////

const tree02 = new BinaryTree();

tree02.append(50);
tree02.append(60);
tree02.append(70);
tree02.append(40);
tree02.append(30);
tree02.append(59);
tree02.append(58);
tree02.append(69);
tree02.append(68);

// console.log(tree02);

function breadthFirstTraversal (aTree){
  let queue01 = new Queue;

  queue01.enqueue(aTree.root);

  while (queue01.length > 0){
    var currentNode = queue01.head.value;
    if (currentNode.left !== null){
      queue01.enqueue(currentNode.left);
    }
    if (currentNode.right !== null){
      queue01.enqueue(currentNode.right);
    }
    console.log(queue01.head.value.value);
    // console.log(queue01.head.value);
    queue01.dequeue();
    // console.log(queue01.head);
  }

}


breadthFirstTraversal(tree02);