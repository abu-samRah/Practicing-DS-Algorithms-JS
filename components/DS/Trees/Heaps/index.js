/**
 Heap data structure is a complete binary tree that satisfies the heap property, where any given node is
    *always greater than its child node/s and the key of the root node is the largest among all other nodes. This property is also called max heap property.
    *always smaller than the child node/s and the key of the root node is the smallest among all other nodes. This property is also called min heap property.

 Heapify: is the process of creating a heap data structure from a binary tree. It is used to create a Min-Heap or a Max-Heap. O(n)

 the index of last non-leaf node = (n/2) - 1
 */


 //  O(log(n))
 const heapify = (arr,n,i)=>{
    let largest = i     // Initialize largest as root
    let left = 2*i +1   // left = 2*i + 1
    let right = 2*i +2  // right = 2*i + 2

    // If left child is larger than root
    if(left <n && arr[left] > arr[largest]){
        largest = left
    }

    // If right child is larger than largest so far
    if(right <n && arr[right] >arr[largest]){
        largest = right
    }

    // If largest is not root
    if(largest != i){
        const temp = arr[i]
        arr[i] = arr[largest]
        arr[largest]= temp

        // Recursively heapify the affected sub-tree
        heapify(arr, n, largest)
    }
 }

 //  O(nlog(n))
 const buildHeap = (arr)=>{
    let size = arr.length
    // (size / 2) - 1 => position of Last non-leaf node
    for(let i=~~(size / 2) - 1; i>=0;i--){
        heapify(arr, size, i)
    }
 }
 
 //  O(nlog(n))
 const insert = (arr,newNum)=>{
    arr.push(newNum)

    let size = arr.length
    if(size === 1 ) return
    
    buildHeap(arr)
 }

 //  O(log(n))
 const removeTopElement = (arr)=>{
    let size = arr.length
    arr[0] = arr[size -1]
    arr.pop() 

    heapify(arr, size, 0)
 }

 //  O(nlog(n))
 const removeElement = (arr, el)=>{
    const indexToRemove = arr.findIndex(num => num === el)
    if (Number.isNaN(indexToRemove)) return
    
    let lastIndex = arr.length -1
    arr[indexToRemove] =  arr[lastIndex]
    arr.pop() 

    buildHeap(arr)
 } 

 //  O(log(n))
 const heapSort = (arr)=>{
   buildHeap(arr)
   
  for(let i=arr.length -1; i>=0;i--){
     const temp = arr[i]
     arr[i] = arr[0]
     arr[0] = temp
     heapify(arr, i, 0)
  }
 
} 

/*  

 const arr = []

 insert(arr, 3)
 insert(arr, 4)
 insert(arr, 9)
 insert(arr, 5)
 insert(arr, 2)

 console.log(arr)



// Another example

 const arr = [1, 3, 5, 4, 6, 13, 10, 9, 8, 15,17]

 buildHeap(arr)

 heapSort(arr)
 
 console.log(arr) */


 /**
  * Fibonacci Heap: A fibonacci heap is a data structure that consists of a collection of trees which follow min heap or max heap property.
  * In a fibonacci heap, a node can have more than two children or no children at all. 
  * Also, it has more efficient heap operations than that supported by the binomial and binary heaps.
  * The roots of all the trees are linked together for faster access. 
  * The child nodes of a parent node are connected to each other through a circular doubly linked list as shown below.
   
  */