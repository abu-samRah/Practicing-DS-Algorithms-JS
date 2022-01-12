/**
 *Queue follows the First In First Out (FIFO) rule - 
 *the item that goes in first is the item that comes out first.
 */

 class Queue {
    
    constructor(size) {
      this.arr = new Array();
      this.capacity = size;
      this.currentIndex = -1;
    }

    isFull() {
      return this.currentIndex === this.capacity -1 ;
    }

   isEmpty() {
      return this.arr.length ===  0;
    }

    enQueue(value) {
        if(this.isFull()) {
        console.log(`cant add ${value}, the queue is full`)
        return
        }
        this.arr.push(value)
        this.currentIndex++
      }

      deQueue() {
        if (this.isEmpty()) {
         console.log('The queue is Empty')
         return
        }
        this.arr.shift()
        this.currentIndex >= 0 && this.currentIndex--
      }

      display() {
        for (let i = 0; i < this.arr.length ; i++) {
          console.log(this.arr[i]);
        }
      }
  }

  export default Queue


// Add this to the main index.js file to start using and testing queues
/**
import Queue from './components/DS/Queue/index.js'

const q = new Queue(5);




// deQueue is not possible on empty queue
q.deQueue();

// enQueue 5 elements
q.enQueue(1);
q.enQueue(2);
q.enQueue(3);
q.enQueue(4);
q.enQueue(5);

// 6th element can't be added to because the queue is full
q.enQueue(6);

q.display();

// deQueue removes element entered first i.e. 1
q.deQueue();

// Now we have just 4 elements
q.display();

 */