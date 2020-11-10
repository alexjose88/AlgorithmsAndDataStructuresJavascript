
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    push(value) {
        let newNode = new Node(value);

        if (this.length === 0) {
            this.last = newNode
            this.first = this.last;
        } else {
            newNode.next = this.last;
            this.last = newNode;
        }

        return ++this.length;
    }

    pop() {
        if(this.length === 0) {
            return null;
        }

        let returnNode = this.last;

        if (this.length === 1) {
            this.first = null;
        }

        this.last = this.last.next;
        this.length--;
        return returnNode.value;
    }
}


let stack = new Stack();
console.log(stack.push("1"));
console.log(stack.push("2"));
console.log(stack.push("3"));
console.log(stack.push("4"));

console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());