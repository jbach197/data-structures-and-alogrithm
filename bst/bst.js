class Node{
  constructor(data, left = null, right = null){
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree{
    constructor(){
      this.root = null;
    }

    insert(data){
      let newNode = new Node(data);

      if(this.root === null){
        this.root = newNode;
      } else {
        this.insertNode(this.root, newNode);
      }
    }
    insertNode(node, newNode){
      if(newNode.data < node.data){
        if(node.left === null){
          node.left = newNode
        } else {
          this.insertNode(node.left, newNode);
        }
      }

      if(newNode.data > node.data){
        if(node.right === null){
          node.right = newNode;
        } else {
          this.insertNode(node.right, newNode);
        }
      }
    }
  remove(data){
      this.root = this.removeNode(this.root, data);
    }
  removeNode(node, key){
    if(node === null){
      return null;
    }

    if(node.data > key){
      node.left = this.removeNode(node.left, key);
      return node;
    }

    if(node.data < key){
      node.right = this.removeNode(node.right, key);
      return node;
    }

    else{
      if(node.left === null && node.right === null){
        node = null;
        return node;
      }
      if(node.left === null){
        node = node.right;
        return node;
      }
      if(node.right === null){
        node = node.left;
        return node;
      }
      let aux = this.findMin(node.right);
      node.data = aux.data;
      node.right = this.removeNode(node.right, aux.data);
      return node;
    }
  }
    inOrder(node){
      if(node !== null){
        this.inOrder(node.left);
        console.log(node.data);
        this.inOrder(node.right);
      }
    }
    preOrder(node){
      if(node !== null){
        console.log(node.data);
        this.preOrder(node.left);
        this.preOrder(node.right);
      }
    }
    postOrder(node){
      if(node !== null){
        this.postOrder(node.left);
        this.postOrder(node.right);
        console.log(node.data);
      }
    }
    search(node, data){
      if(this.root === null){
        return null
      } else if(data < node.data){
        return this.search(node.left, data);
      } else if(data > node.data) {
        return this.search(node.right, data);
      } else {
        return 'not found';
      }
    }
    findMin(node){
      if(node.left === null){
        return node;
      } else {
        return this.findMin(node.left);
      }
    }
    findMax(node){
      if(node.right === null){
        return node;
      } else {
        return this.findMax(node.right);
      }
    }

  }