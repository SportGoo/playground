class Node {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

class BinarySeachTree {
    constructor() {
        this.root = null;
    }

    insert(value) {

        var newNode = new Node();

        if (this.root === null) {
            this.root = newNode;
            return this


        } else {

            let current = this.root
            while (true) {

                if (value < current.value) {
                    if (current.left === null) {
                        current.left = newNode;
                        return this;


                    }

                }

            }

        }
    }
}


var tree = new BinarySeachTree()
tree.root = new Node(10)
// tree.right = new Node(15);
// tree.left = new Node(7)
// tree.left.right = new Node(9);


// var tree = new BinarySearchTree()
// tree.insert(10)
// tree.insert(5)
// tree.insert(13)
// tree.insert(11)
// tree.insert(2)
// tree.insert(16)
// tree.insert(7)

var tree = new BinarySeachTree()
tree.root = new Node(10)
console.log(tree)
// tree.right = new Node(15);
tree.left = new Node(7)
// tree.left.right = new Node(9);
