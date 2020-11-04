class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
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

        return true;
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

        return true;
    }

    get(index) {
        if (index >= this.length || index < 0) {
            return null;
        }

        let currentNode = this.head;
        for (let i = 0; i < index; i++) {
            currentNode = currentNode.next;
        }

        return currentNode;
    }

    set(index, newValue) {
        let node = this.get(index);
        if (node !== null) {
            node.value = newValue;
            return true;
        }

        return false;
    }

    insert(index, value) {

        if (index < 0 || index > this.length) {
            return false;
        }

        if (index === 0) {
            return this.unshift(value)
        }

        if (index === this.length) {
            return this.push(value);
        }

        let newNode = new Node(value);
        let nodeBefore = this.get(index - 1);
        newNode.next = nodeBefore.next;
        nodeBefore.next = newNode;
        this.length++;

        return true;
    }

    remove(index) {
        if (index < 0 || index >= this.length) return false;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();

        let prevNode = this.get(index - 1);
        let removedNode = prevNode.next;
        prevNode.next = removedNode.next;
        this.length--;

        return removedNode;
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

let list = new SinglyLinkedList();

list.unshift("1");
list.push("2");

list.push("3");
list.push("4");
list.reverse();
list.push("5");


list.insert(3, "hey");
list.remove(3);

console.log(list.get(1));
console.log(list.set(7, "dummy new value"));


list.pop();
list.shift();
list.shift();

console.log(list);



