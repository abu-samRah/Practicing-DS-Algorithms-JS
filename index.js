
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


 const insert = (arr,newNum)=>{
    arr.push(newNum)

    let size = arr.length
    if(size === 1 ) return
    
    buildHeap(arr)
 }

 const buildHeap = (arr)=>{
    let size = arr.length
    // (size / 2) - 1 => position of Last non-leaf node
    for(let i=~~(size / 2) - 1; i>=0;i--){
        heapify(arr, size, i)
    }
 }

 //  O(log(n))
 const removeTopElement = (arr)=>{
    let size = arr.length
    arr[0] = arr[size -1]
    arr.pop() 

    heapify(arr, size, 0)
 } 
 //  O(log(n))
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

 const arr = [1, 3, 5, 4, 6, 13, 10, 9, 8, 15,17]
 heapSort(arr)

 
 console.log(arr)