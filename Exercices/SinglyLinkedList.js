class Node {
    constructor(val) {
        this.val = val
        this.next = null;
    }
}

class SinglyLinkedList {

    constructor(val) {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {

        let newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;
        return this;
    }

    pop() {
        if (this.length === 0) return undefined;

        let current = this.head;
        let newTail = current;

        while (current.next) {
            newTail = current;
            current = current.next;
        }

        let returnNode = current;
        this.tail = newTail;
        this.tail.next = null;
        this.length--;

        if (this.length === 0) {
            this.head = null;
        }

        return returnNode;
    }

    get(index) {
        if (this.length === 0 || index >= this.length) return null;

        let returnNode = this.head;
        for (let i = 0; i < index; i++) {
            returnNode = returnNode.next;
        }

        return returnNode;
    }

    insert(index, value) {
        if (index < 0 || index > this.length) return false;

        let newNode = new Node(value);

        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
            return true;
        }

        if (index === this.length) {
            this.push(value);
            return true;
        }

        let beforeNode = this.get(index - 1);
        newNode.next = beforeNode.next;
        beforeNode.next = newNode;

        this.length++;

        return true;
    }

    rotate(index) {

        if (index > this.length) return this;
        if (this.length === 1) return this;

        if (index > 0) {
            if (index === 0) return this;
            let newTail = this.get(index - 1)

            this.tail.next = this.head;
            this.head = newTail.next;
            this.tail = newTail
            this.tail.next = null;
        } else {
            let currentTail = this.tail;
            currentTail.next = this.head;

            this.tail = this.get(this.length + index - 1);
            this.head = this.tail.next;
            this.tail.next = null;
        }

        return this;
    }

    set(index, value) {

        if (index > this.length || index < 0) {
            return false;
        }


        if (this.length === 0) {
            let newNode = new Node(value);
            this.head = newNode;
            this.tail = newNode;
            this.length++;

            return true;
        }


        if (index === this.length) {
            let newNode = new Node(value);
            this.tail.next = newNode;
            this.tail = newNode;
            this.length++;

            return true;
        }

        let node = this.get(index);
        if (node != null) {
            node.val = value;
            return false;
        }

        return false;
    }

    remove(index) {
        if (this.length === 0) return undefined;
        if (index >= this.length || index < 0) return undefined;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();

        let previous = this.get(index - 1);
        let nodeToRemove = previous.next;
        previous.next = nodeToRemove.next;

        this.length--;

        return nodeToRemove;
    }
}


let list = new SinglyLinkedList();
list.push(5);
console.log(list.length);
console.log(list.head.val);
console.log(list.tail.val);
console.log("----------");
list.push(10);
console.log(list.length);
console.log(list.head.val);
console.log(list.head.next.val);
console.log(list.tail.val);
console.log("----------");
list.push(15);
console.log(list.length);
console.log(list.head.val);
console.log(list.head.next.val);
console.log(list.head.next.next.val);
console.log(list.tail.val);

console.log(list.pop().val);
console.log(list.tail.val);
console.log(list.length);
console.log(list.pop().val);
console.log(list.length);
console.log(list.pop().val);
console.log(list.length);
console.log(list.pop());
console.log(list.length);

console.log("----------");
let list2 = new SinglyLinkedList();
list2.push(5).push(10).push(15).push(20);
console.log(list2.get(0).val);
console.log(list2.get(1).val);
console.log(list2.get(2).val);
console.log(list2.get(3).val);
console.log(list2.get(4));


console.log("----------");

let list3 = new SinglyLinkedList();
list3.push(5).push(10).push(15).push(20);
console.log(list3.insert(2, 12));
console.log(list3.insert(100, 12));
console.log(list3.length);
console.log(list3.head.val);
console.log(list3.head.next.val);
console.log(list3.head.next.next.val);
console.log(list3.head.next.next.next.val);
console.log(list3.head.next.next.next.next.val);

console.log(list3.insert(5, 25));
console.log(list3.head.next.next.next.next.next.val);

console.log("----------------")
let list4 = new SinglyLinkedList();
list4.push(5).push(10).push(15).push(20).push(25);
console.log(list4.rotate(-2));

console.log("----------");

let list5 = new SinglyLinkedList();
console.log(list5.set(0, 10));
console.log(list5.set(1, 2));
console.log(list5.length);
console.log(list5.head.val);

console.log(list5.set(10, 10));

console.log(list5.set(2, 100));
console.log(list5.head.next.next.val);

console.log("-------------");

let list6 = new SinglyLinkedList();
list6.push(5).push(10).push(15).push(20);
console.log(list6.remove(2).val);
console.log(list6.remove(100));
console.log(list6.length);
console.log(list6.head.val);
console.log(list6.head.next.val);
console.log(list6.head.next.next.val);

