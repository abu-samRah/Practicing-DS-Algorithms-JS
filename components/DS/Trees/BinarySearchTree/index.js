class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

export default class BST {
  constructor() {
    this.root = null;
  }

  insert(data) {
    const newNode = new Node(data);

    if (!this.root) this.root = newNode;
    else this.insertNode(this.root, newNode);
  }

  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (!node.left) node.left = newNode;
      else this.insertNode(node.left, newNode);
    } else {
      if (!node.right) node.right = newNode;
      else this.insertNode(node.right, newNode);
    }
  }

  remove(data) {
    this.root = this.removeNode(this.root, data);
  }

  removeNode(node, data) {
    if (node === null) return null;

    if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
    }

    if (data > node.data) {
      node.right = this.removeNode(node.right, data);
      return data;
    } else {
      if (!node.left && !node.right) return null;

      if (!node.left) {
        node = node.right;
        return node;
      }
      if (!node.right) {
        node = node.left;
        return node;
      } else {
        const minNode = this.findMinNode(node.right);
        node.data = minNode.data;

        node.right = this.removeNode(node.right, minNode.data);
        return node;
      }
    }
  }

  findMinNode(node) {
    if (!node.left) {
      return node;
    }
    return this.findMinNode(node.left);
  }

  preOrder(node) {
    if (node) {
      console.log(node.data);
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
  }

  inOrder(node) {
    if (node) {
      this.inOrder(node.left);
      console.log(node.data);
      this.inOrder(node.right);
    }
  }

  postOrder(node) {
    if (node) {
      this.postOrder(node.left);
      this.postOrder(node.right);
      console.log(node.data);
    }
  }

  getRootNode() {
    return this.root;
  }

  search(node, value) {
    if (Number.isNaN(value) || !node) return;
    if (node.data === value) return node;

    if (value < node.data) {
      return this.search(node.left, value);
    } else {
      return this.search(node.right, value);
    }
  }

  // Each internal node has exactly two or no children
  isFullTree(node) {
    if (!node) return true;

    if (!node.left && !node.right) return true;

    if (node.left && node.right) 
      return this.isFullTree(node.left) && this.isFullTree(node.right)

    return false
  }

  // Each internal node has exactly two children & all leaf nodes are on the same level
  isPerfectTree(node,depth,level=0) {
    if (!node) return true;

    if (!node.left && !node.right) return depth === level + 1;

    if (node.left && node.right) 
      return this.isPerfectTree(node.left,depth,level +1) &&  this.isPerfectTree(node.right,depth,level +1)

    return false
  }

  //This implementation is valid incase of a perfect binary tree only
  calculateDepthOfPerfectTree(node){
    let depth =0
    while(node){
      depth++
      node = node.left
    }
    return depth
  }
  
}
