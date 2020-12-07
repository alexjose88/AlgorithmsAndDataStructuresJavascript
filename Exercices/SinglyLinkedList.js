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
console.log(list3.insert(2,12));
console.log(list3.insert(100,12));
console.log(list3.length);
console.log(list3.head.val);
console.log(list3.head.next.val);
console.log(list3.head.next.next.val);
console.log(list3.head.next.next.next.val);
console.log(list3.head.next.next.next.next.val);

