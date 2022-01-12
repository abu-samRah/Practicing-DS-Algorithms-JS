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


/**
 * Types of queues:
 *Circular queue: is the extended version of a regular queue where the last element is connected to the first element. 
                    Thus forming a circle-like structure. The circular queue solves the major limitation of the normal queue. 
                    In a normal queue, after a bit of insertion and deletion, there will be non-usable empty space.

  *Priority queue: is a special type of queue in which each element is associated with a priority value. 
                     And, elements are served on the basis of their priority. That is, higher priority elements are served first. 
                     Best implemented with Heaps.
                     Applications: Dijkstra's algorithm.

  *Double Ended queue(Deque):  is a type of queue in which insertion and removal of elements can either be performed from the front or the rear. 
                               Thus, it does not follow FIFO rule (First In First Out).

 */

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