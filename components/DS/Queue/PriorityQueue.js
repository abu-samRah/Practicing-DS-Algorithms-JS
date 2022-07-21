function Node(val, priority) {
    this.val = val;
    this.priority = priority;
}

function PriorityQueue() {
    this.data = [];
}

PriorityQueue.prototype.push = function push(val, priority) {
    const node = new Node(val, priority);
    this.data.push(node);
    let index = this.data.length - 1;
    while (index > 0) {
        const parentIndex = Math.floor((index - 1) / 2);
        const parent = this.data[parentIndex];
        if (parent.priority > node.priority) {
            swap(this.data, parentIndex, index);
            index = parentIndex;
        } else {
            break;
        }
    }
};

PriorityQueue.prototype.shift = function shift() {
    const minNode = this.data[0] || {};
    const lastNode = this.data.pop();
    if (this.data.length < 1) {
        return minNode;
    }
    this.data[0] = lastNode;
    let index = 0;
    while (index < this.data.length) {
        const leftIndex = 2 * index + 1;
        const rightIndex = 2 * index + 2;
        const leftNode = this.data[leftIndex] || {};
        const rightNode = this.data[rightIndex] || {};
        let smallerIndex;
        if (leftNode.priority < lastNode.priority) {
            smallerIndex = leftIndex;
        }
        if (!smallerIndex && rightNode.priority < lastNode.priority) {
            smallerIndex = rightIndex;
        }
        if (smallerIndex && rightNode.priority < leftNode.priority) {
            smallerIndex = rightIndex;
        }
        if (!smallerIndex) {
            break;
        }
        swap(this.data, index, smallerIndex);
        index = smallerIndex;
    }
    return minNode;
};
