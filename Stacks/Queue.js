class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    push(value) {
        let newNode = new Node(value);
        if (this.length === 0) {
            this.last = newNode;
            this.first = this.last;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }

        return ++this.length;
    }

    pop() {
        if (this.length === 0) {
            return null;
        }

        let returnNode = this.first;

        if (this.length === 1) {
            this.first = null;
            this.last = null;
        } else {
            this.first = this.first.next;
        }


        this.length--;
        return returnNode.value;
    }
}

let q = new Queue();

console.log(q.push("1"));
console.log(q.push("2"));
console.log(q.push("3"));
console.log(q.push("4"));
console.log("-----");
console.log(q.pop());
console.log(q.pop());
console.log(q.pop());
console.log(q.pop());
console.log(q.pop());
