class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    enqueue(val) {
        // create new node
        const node = new Node(val);
        // append to tail if tail exists
        if (this.tail !== null) {
            this.tail.next = node;
        }
        // update tail reference
        this.tail = node;
        // update head reference if it's empty
        if (this.head === null) {
            this.head = node;
        }
        // update size
        this.size += 1;
        return this.size;
    }

    dequeue() {
        // return null if empty list
        if (this.head === null) return null;
        // store current head reference
        const temp = this.head;
        // update head reference
        this.head = temp.next;

        // update tail if list is empty
        if (this.head === null) {
            this.tail = null;
        }

        // remove old head reference
        temp.next = null;
        // update size
        this.size -= 1;

        return temp.value;
    }

    peek() {
        return this.head ? this.head.value : null;
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }
}

const myQueue = new Queue();
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.dequeue(); // returns 1