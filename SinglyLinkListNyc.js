class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    add(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return value;
    }

    search(searchVal) {
        let currentNode = this.head;

        while (currentNode !== null) {
            if (currentNode.value === searchVal) {
                return currentNode;
            }
            currentNode = currentNode.next;
        }

        return null;
    }

    insert(index, value) {
        // edge case 1: index < 0
        if (index < 0) return false;

        // edge case 2: index >= length
        if (index >= this.length) {
            this.add(value);
            return true;
        }

        // edge case 3: index == 0
        if (index === 0) {
            this.addAtHead(value);
            return true;
        }

        const newNode = new Node(value);
        const leader = this.getNodeAtIndex(index - 1);
        const nextNode = leader.next;

        leader.next = newNode;
        newNode.next = nextNode;

        this.length += 1;
        return true;
    }

    getNodeAtIndex(i) {
        let currentIndex = 0;
        let currentNode = this.head;

        while (currentIndex !== i) {
            currentNode = currentNode.next;
            currentIndex += 1;
        }

        return currentNode;
    }

    addAtHead(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length += 1;
    }
}

const list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.insert(0, 4);

// console.log(list.search(2)); // log node with value 2
// console.log(list.search(4)); // log null

console.log(list);