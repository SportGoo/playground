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
        const newNode = new Node(val);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++
        return this.size
    }

    dequeue() {
        if (!this.head) {
            return null;
        }

        const returningVal = this.head.value;
        if (this.getSize() === 1) {
            this.size = 0;
            this.head = null;
            this.tail = null;
            return returningVal;
        }
        this.head = this.head.next;
        this.size--;
        return returningVal;

        //   let node = this.head; //old head refrence
        //   this.head = node.next ;// new head
        //   node.next = null;
        //  --this.size;
        //  if(this.size === 0) this.tail = null
        //  return node.val;
    }
    //.   head tail
    //  1- 2 -> 3 ->  null
    peek() {
        return this.head.value;
    }

    isEmpty()

    getSize() {
        return this.size;
    }
}

const myQueue = new Queue();
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
console.log(myQueue.dequeue()); // returns 1
console.log(myQueue);
