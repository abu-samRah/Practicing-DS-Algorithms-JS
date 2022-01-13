/**
 * A linked list is a linear data structure that includes a series of connected nodes.
 * Here, each node stores the data and the address of the next node.
 */


 class Node {
    constructor(value, next){
        this.value =value
        this.next = next
    }
}

class LinkedList {
    
    constructor(head){
    this.head = new Node(head||0,null)
    this.tail = this.head
    this.length = 0
    }

    insert(value){
        if(Number.isNaN(value)) return
        this.tail.next = new Node(value)
        this.tail= this.tail.next
        this.length++
    }

    insertAtBeginning(value){
        if(Number.isNaN(value)) return
        const tempHead = this.head
        this.head = new Node(value)
        this.head.next = tempHead
        this.length++
    }

  insertAfter(index,value){
    if(Number.isNaN(value) && Number.isNaN(index)) return
    const nodeToInsertAfter = this.findByIndex(index -1)
    if(!nodeToInsertAfter) return
    const tempNext = nodeToInsertAfter.next
    nodeToInsertAfter.next = new Node(value)
    nodeToInsertAfter.next.next = tempNext
    this.length++
  }
  pop(){
      this.head = this.head.next
      this.length--
  }
  remove(value){
    if(Number.isNaN(value)) return
    if(value === this.head.value) {
        this.pop()
        return
    }

    const findNode = () =>{
        let tempHead = this.head
        while (tempHead != null) {
            if(tempHead?.next.value === value) return tempHead
            tempHead = tempHead.next
          }
    }

    const nodeToRemove = findNode(value)
    if(!nodeToRemove) return
    nodeToRemove.next = nodeToRemove.next.next
    this.length--
}
    findByIndex(index){
        if(Number.isNaN(index) || index <0 || index > this.length) return
       
        let tempHead = this.head
        while (tempHead != null && index >0) {
            tempHead = tempHead.next;
            index--
          }
          return tempHead
    }

    findByValue(value){
        if(Number.isNaN(value)) return
        let tempHead = this.head
        while (tempHead != null) {
            if(tempHead.value === value) return tempHead
            tempHead = tempHead.next
          }
    }
    print(){
        let tempHead = this.head
        while (tempHead != null) {
            console.log(tempHead.value + " ");
            tempHead = tempHead.next;
          }
    }
}


export default LinkedList