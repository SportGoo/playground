class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = null;
    }
    push(val) {
        var node = new Node(val);
        if (this.head === null) {
            this.head = node;
            this.tail = this.head;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.length++;
        return this;
    }
    set(index, value) {
        if (index < 0 || index >= this.length) return false;

        var current = this.head;

        for (let i = 0; i < index; i++) {
            current = current.next;
        }

        current.val = value;
        return true;
    }
}