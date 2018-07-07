'use strict';

class BreadthFirstTraversal {

  breadthFirstTraversal(tree) {
    let rootNode = [];
    rootNode.push(tree.root);
    let output = [];


    return this.walk(rootNode, output);
  }

  
  walk(array, outputArr) {
    let newNodes = [];

    for (var i = 0; i < array.length; i++) {
        if (array[i]) {
          outputArr.push(array[i].value);
          newNodes.push(array[i].left);
          newNodes.push(array[i].right);
        }
    }

    if (newNodes.every(this.isNull) === false) {
      this.walk(newNodes, outputArray);
    }
    return outputArray;
  }

  isNull(currentValue) {
    return currentValue === null;
  }

  findDups(array1, array2) {
    let outputArray = [];

    for (var i = 0; i < array1.length; i++) {
      for (var j = 0; j < array2.length; j++) {
        if (array1[i] === array2[j]) {
          outputArray[outputArray.length] = array1[i];
          break;
        }
      }
    }

    return outputArray;
  }
}

module.exports = BreadthFirstTraversal;