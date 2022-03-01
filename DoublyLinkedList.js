class Node {
    constructor(val) {
        this.val = val
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.tail = null;
        this.head = null;
        this.length = 0;
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

    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        var current = this.head;

        if (index === 0 && this.length === 1) {
            this.head = null;
            this.tail = null;
            this.length--;
            return current;
        } else if (index === 0 && this.length > 1) {
            this.head = this.head.next;
            this.head.prev = null;
            this.length--;
            return current;

        } else if (index === (this.length - 1)) {
            current = this.tail;
            this.tail = this.tail.prev;
            this.tail.next = null;
            this.length--;
            return current;
        } else {
            for (let i = 0; i < index; i++) {
                current = current.next;
            }
            var removedNode = current;
            var beforeNode = current.prev;
            var afterNode = current.next;
            beforeNode.next = afterNode;
            afterNode.prev = beforeNode;
            this.length--;
            return removedNode;
        }
    }

    //
    print_list() {
        var node = this.head
        var ll = ""
        for (let i = 0; i < this.length; i++) {
            ll = ll + " -> " + node.val
            node = node.next;
        }
        console.log(ll)
    }
}



var doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.push(5)
doublyLinkedList.push(10)
doublyLinkedList.push(15)
doublyLinkedList.push(20)
doublyLinkedList.print_list()
