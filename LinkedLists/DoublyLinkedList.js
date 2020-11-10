class Node {
    constructor(value) {
        this.prev = null;
        this.next = null;
        this.val = value;
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
            node.prev = this.tail;
            this.tail = node;
        }

        this.length++;

        return this;
    }

    pop() {

        if (this.length === 0) {
            return undefined;
        }

        let returnNode = this.tail;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = returnNode.prev;
            this.tail.next = null;
            returnNode.prev = null;
        }

        this.length--;

        return returnNode;
    }

    shift() {
        if (this.length === 0) {
            return undefined;
        }

        let returnNode = this.head;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = returnNode.next;
            this.head.prev = null;
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
            this.head.prev = newNode;
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
                returnNode = returnNode.next;
            }
        } else {
            returnNode = this.tail;
            for (let i = this.length - 1; i !== index; i--) {
                returnNode = returnNode.prev;
            }
        }

        return returnNode;
    }

    set(index, value) {
        let node = this.get(index);
        if (node) {
            node.val = value;
            return true;
        }

        return false;
    }

    insert(index, value) {

        if (index < 0 || index >= this.length) {
            return false;
        }

        if (index === 0) {
            this.unshift(value);
            return true;
        }

        if (index === this.length - 1) {
            this.push(value);
        }

        let node = this.get(index - 1);
        if (!node) {
            return false;
        }

        let newNode = new Node(value);

        let nextNode = node.next;
        nextNode.prev = newNode;
        node.next = newNode;
        newNode.prev = node;
        newNode.next = nextNode;
        this.length++;

        return true;
    }

    remove(index) {
        if (index < 0 || index >= this.length) {
            return undefined;
        }

        if (index === 0) {
            return this.shift();
        }

        if (index === this.length - 1) {
            return this.pop();
        }

        let node = this.get(index);
        if (!node) {
            return false;
        }

        let beforeNode = node.prev;
        let nextNode = node.next;
        beforeNode.next = nextNode;
        nextNode.prev = beforeNode;

        node.next = null;
        node.prev = null;
        this.length--;

        return node;
    }

    reverse() {

        let node = this.head;
        this.head = this.tail;
        this.tail = node;

        let next = null;
        let prev = null;

        for(let i = 0 ; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }

        return this;
    }
}

let list = new DoublyLinkedList;
console.log(list.push(5));
console.log(list.length);
console.log(list.head.val);
console.log(list.tail.val);
console.log(list.head.prev);