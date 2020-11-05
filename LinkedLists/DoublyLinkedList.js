class Node {
    constructor(value) {
        this.previous = null;
        this.next = null;
        this.value = value;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value) {
        let node = new Node(value);
        if (this.length === 0) {
            this.tail = node;
            this.head = this.tail;
        } else {
            this.tail.next = node;
            node.previous = this.tail;
            this.tail = node;
        }

        this.length++;

        return this;
    }

    pop() {

        if (this.length === 0) {
            return null;
        }

        let returnNode = this.tail;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = returnNode.previous;
            this.tail.next = null;
            returnNode.previous = null;
        }

        this.length--;

        return returnNode;
    }

    shift() {
        if (this.length === 0) {
            return null;
        }

        let returnNode = this.head;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = returnNode.next;
            this.head.previous = null;
            returnNode.next = null;
        }

        this.length--;

        return returnNode;
    }

    unshift(value) {
        let newNode = new Node(value);

        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.previous = newNode;
            this.head = newNode;
        }

        this.length++;
        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) {
            return null;
        }

        let returnNode;

        if (index < this.length / 2) {
            returnNode = this.head;

            for (let i = 0; i !== index; i++) {
                returnNode = returnNode.next
            }
        } else {
            returnNode = this.tail;
            for (let i = this.length - 1; i !== index; i--) {
                returnNode = returnNode.previous;
            }
        }

        return returnNode;
    }
}

let list = new DoublyLinkedList();
list.push("1");
list.push("2");
list.push("3");
list.push("4");
list.push("5");
list.push("6");
list.push("7");

console.log(list.get(0));
console.log(list.get(1));
console.log(list.get(2));
console.log(list.get(4));
console.log(list.get(5));
console.log(list.get(7));

list.shift();
list.shift();
list.shift();
list.shift();
list.unshift("4");
list.unshift("3");
list.unshift("2");
list.unshift("1");


console.log(list)