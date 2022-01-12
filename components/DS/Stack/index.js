/**
 * A stack is a linear data structure that follows the principle of Last In First Out (LIFO). 
 * This means the last element inserted inside the stack is removed first.

 * You can think of the stack data structure as the pile of plates on top of another.
 */

 class Stack {
    
    constructor(size ) {
      this.arr = new Array(size);
      this.capacity = size;
      this.topEl = -1
    }

    isFull() {
      return this.topEl === this.capacity - 1;
    }

   isEmpty() {
      return this.topEl === -1;
    }

    push(value) {
        if(this.isFull()) {
        console.log(`cant add ${value}, the stack is full`)
        return
        }
        this.arr[++this.topEl] = value;
      }

      pop() {
        if (this.isEmpty()) {
         console.log('The stack is Empty')
         return
        }
        return this.arr[this.topEl--];
      }

      currentSize() {
        return this.topEl + 1;
      }

      printStack() {
        for (let i = 0; i <= this.topEl; i++) {
          console.log(this.arr[i]);
        }
      }
  }

  export default Stack


