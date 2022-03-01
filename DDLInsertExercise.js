class Node {
    constructor(val) {
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}


class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        var node = new Node(val);
        if (this.head === null) {
            this.head = node;
            this.tail = this.head;
            this.length++;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
            this.length++;
        }
        return this;
    }
    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        var newNode = new Node(val);
        if (index === 0) {
            this.head = newNode;
            this.tail = newnode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
            this.length++;
            return true;
        }
        if (index === this.length) {
            var pushedNode = this.push(val);
            this.length++;
            return true;
        } else {
            var counter = 0;
            var current = this.head;
            for (let i = 0; i < index; i++) {
                current = current.prev;
                current = this.tail;
                counter++;
            }
            return true;
        }






    }
    remove(index) {
        if (index < 0 || index > this.length) return undefined;
        var current = this.head;
        if (index === 1) {
            this.head = null;
            this.tail = null;
        } else {
            for (let i = 0; i < index; i++) {
                current = current.next;

            }
            var afterNode = current.next;
            var beforeNode = current.prev;
            beforeNode.next = afterNode;
            afternode.prev = beforeNode;
            this.length--;
            return current;
        }


    }
}