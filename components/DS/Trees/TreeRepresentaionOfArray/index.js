/*
A tree is a nonlinear hierarchical data structure that consists of nodes connected by edges.

if a Node is at index i then => 
    left child: 2*i
    right child: 2*i + 1
    parent: Math.floor(i/2) 

A binary tree is a tree data structure in which each parent node can have at most two children. Each node of a binary tree consists of three items:
    *data item
    *address of left child
    *address of right child
1. Full Binary Tree
A full Binary tree is a special type of binary tree in which every parent node/internal node has either two or no children.

2. Perfect Binary Tree
A perfect binary tree is a type of binary tree in which every internal node has exactly two child nodes and all the leaf nodes are at the same level.

3. Complete Binary Tree
A complete binary tree is just like a full binary tree, but with two major differences
    *Every level must be completely filled
    *All the leaf elements must lean towards the left.
    *The last leaf element might not have a right sibling i.e. a complete binary tree doesn't have to be a full binary tree.
    *the height of a complete binary tree is log(n) , we are not going to next level until the prev level is full.

4. Balanced Binary Tree:
A balanced binary tree, also referred to as a height-balanced binary tree, is defined as a binary tree in which the height of the
 left and right subtree of any node differ by not more than 1.
*/

// to convert an array of objects into a tree 

const data = [
    { id: 62, parentId: 74 },
    { id: 86, parentId: 74 },
    { id: 56, parentId: 62 },
    { id: 81, parentId: 80 },
    { id: 74, parentId: null },
    { id: 76, parentId: 80 },
    { id: 63, parentId: 62 },
    { id: 80, parentId: 86 },
    { id: 87, parentId: 86 },
   
  ];

  const idMapping = data.reduce((acc, el, i) => {
    acc[el.id] = i;
    return acc;
  }, {});


  let root;
  data.forEach((el) => {
    // Handle the root element
    if (el.parentId === null) {
      root = el;
      return;
    }
    // Use our mapping to locate the parent element in our data array
    const parentEl = data[idMapping[el.parentId]];
    // Add our current el to its parent's `children` array
    parentEl.children = [...(parentEl.children || []), el];
   console.log(data)
  });

  console.log(root);
 