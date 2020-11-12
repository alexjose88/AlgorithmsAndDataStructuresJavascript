class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        let newNode = new Node(value);

        if (this.root === null) {
            this.root = newNode;
            return this;
        }

        let currentNode = this.root;
        while (true) {
            if (currentNode.value === newNode.value) return undefined;

            if (currentNode.value > newNode.value) {
                if (currentNode.left === null) {
                    currentNode.left = newNode;
                    return this;
                }

                currentNode = currentNode.left;
            } else if (currentNode.value < newNode.value) {
                if (currentNode.right === null) {
                    currentNode.right = newNode;
                    return this;
                }

                currentNode = currentNode.right;
            }
        }
    }

    find(value) {
        if (this.root === null) return false;

        return this.findValueInTree(value, this.root)
    }

    findValueInTree(value, node) {
        if (node.value === value) return true;

        if (node.value > value) {
            if (node.left === null) return false;
            return this.findValueInTree(value, node.left);
        }

        if (node.value < value) {
            if (node.right === null) return false;
            return this.findValueInTree(value, node.right);
        }
    }

    bfsIt() {
        if (this.root === null) return [];

        let returnArray = [];
        let queue = [this.root];

        while (queue.length > 0) {
            let current = queue.shift();
            returnArray.push(current.value);
            if (current.left !== null) queue.push(current.left);
            if (current.right !== null) queue.push(current.right);
        }

        return returnArray;
    }


    bfsRec() {
        let visited = []
        if (this.root === null) return visited;

        let traverse = function (node) {

            if (node.left !== null) {
                visited.push(node.left.value);
            }

            if (node.right !== null) {
                visited.push(node.right.value);
            }

            if (node.left !== null) {
                traverse(node.left, visited);
            }

            if (node.right !== null) {
                traverse(node.right, visited);
            }

            return visited;
        }

        visited.push(this.root.value);
        return traverse(this.root);
    }

    dfsPreOrderRec() {
        if (this.root === null) return [];

        let returnArray = [];

        let traverse = function (node) {
            returnArray.push(node.value);

            if (node.left !== null) returnArray = traverse(node.left, returnArray);
            if (node.right !== null) returnArray = traverse(node.right, returnArray);

            return returnArray;
        }

        return traverse(this.root);
    }

    dfsPostOrderRec() {
        if (this.root === null) return [];

        let returnArray = [];

        let traverse = function (node) {

            if (node.left !== null) returnArray = traverse(node.left, returnArray);
            if (node.right !== null) returnArray = traverse(node.right, returnArray);

            returnArray.push(node.value);

            return returnArray;
        }

        return traverse(this.root);
    }

    dfsInOrderRec() {
        if (this.root === null) return [];

        let returnArray = [];

        let traverse = function (node) {

            if (node.left !== null) returnArray = traverse(node.left, returnArray);
            returnArray.push(node.value);
            if (node.right !== null) returnArray = traverse(node.right, returnArray);

            return returnArray;
        }

        return traverse(this.root);
    }

}


let tree = new BinarySearchTree();

tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);


console.log("BFS recursive: " + tree.bfsRec());
console.log("BFS iterative: " + tree.bfsIt());

console.log("DFS Pre-Order recursive: " + tree.dfsPreOrderRec());
console.log("DFS Post-Order recursive: " + tree.dfsPostOrderRec());
console.log("DFS In-Order recursive: " + tree.dfsInOrderRec());



