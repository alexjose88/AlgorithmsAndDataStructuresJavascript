class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SingleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        val = new Node(val);

        if (!this.head) {
            this.tail = val;
            this.head = this.tail;

        } else {
            this.tail.next = val;
            this.tail = val;
        }

        this.length++;

        return this;
    }

    pop() {

        if (!this.head) {
            return null;
        }

        let current = this.head;
        let newTail = current;

        while (current.next) {
            newTail = current;
            current = current.next;
        }

        let returnNode = newTail.next;
        this.tail = newTail;
        this.tail.next = null;
        this.length--;

        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }

        return returnNode;
    }

    shift() {
        if (!this.head) {
            return null;
        }

        let returnNode = this.head;
        this.head = this.head.next;
        this.length--;

        if (this.length === 0) {
            this.tail = null;
        }

        return returnNode;
    }

    /** Add a list to the beginning of the list **/
    unshift(value) {
        let newHead = new Node(value);

        if (!this.head) {
            this.head = newHead;
            this.tail = newHead;
        } else {
            newHead.next = this.head;
            this.head = newHead;
        }

        this.length++;

        return this;
    }

    get(index) {
        if (index >= this.length || index < 0) {
            return null;
        }

        let currentNode = this.head;
        for(let i = 0; i < index; i++) {
            currentNode = currentNode.next;
        }

        return currentNode;
    }

    set(index, newValue) {
        let node = this.get(index);
        if(node !== null) {
            node.value = newValue;
            return true;
        }

        return false;
    }

    insert(index, value) {

    }
}

let list = new SingleLinkedList();

list.unshift("hello again");
list.push("hello");
list.push("how");
list.push("are");
list.push("you");

console.log(list.get(1));
console.log(list.set(7, "dummy new value"));

list.pop();
list.shift();
list.shift();

console.log(list);



