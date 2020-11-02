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
}

let list = new SingleLinkedList();
list.push("hello");
list.push("how");
list.push("are");
list.push("you");

list.pop();

console.log(list);

