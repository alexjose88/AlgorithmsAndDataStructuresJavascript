class Node {
    constructor(value, priority) {
        this.value = value;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(value, priority) {
        this.values.push(new Node(value, priority));
        this.bubbleUp();
        return this.values;
    }

    bubbleUp() {
        let currentIndex = this.values.length - 1;
        let currentNode = this.values[currentIndex];

        while (currentIndex > 0) {
            let parentIndex = Math.floor((currentIndex - 1) / 2);
            let parentValue = this.values[parentIndex];
            if (currentNode.priority > parentValue.priority) {
                break;
            }

            this.values[parentIndex] = currentNode;
            this.values[currentIndex] = parentValue;
            currentIndex = parentIndex;
        }
    }


    deQueue() {
        let max = this.values.shift();
        if (this.values.length > 1) {
            this.values.unshift(this.values.pop())
            this.sinkDownRoot()
        }

        return max;
    }

    sinkDownRoot() {

        let currentIndex = 0;
        while (currentIndex < this.values.length) {
            let currentNode = this.values[currentIndex];
            let leftChildIndex = (2 * currentIndex) + 1;
            let rightChildIndex = (2 * currentIndex) + 2;

            let leftChildNode, rightChildNode, maxIndex = null;

            if (leftChildIndex < this.values.length) {
                leftChildNode = this.values[leftChildIndex];
                if (leftChildNode.priority < currentNode.priority) {
                    maxIndex = leftChildIndex
                }
            }

            if (rightChildIndex < this.values.length) {
                rightChildNode = this.values[rightChildIndex];

                if ((rightChildNode.priority < currentNode.priority && rightChildNode.priority < leftChildNode.priority) ||
                    (rightChildNode.priority < currentNode.priority && maxIndex === null)) {
                    maxIndex = rightChildIndex;
                }
            }

            if (maxIndex === null) {
                break;
            }

            this.values[currentIndex] = this.values[maxIndex];
            this.values[maxIndex] = currentNode;
            currentNode = maxIndex;
        }
    }
}

let queue = new PriorityQueue();
console.log(queue.enqueue("a",33));
console.log(queue.enqueue("b",39));
console.log(queue.enqueue("c",41));
console.log(queue.enqueue("d",18));
console.log(queue.enqueue("e",27));
console.log(queue.enqueue("f",12));
console.log(queue.enqueue("g",55));

console.log(queue.values);
console.log("-----------------");
console.log(queue.deQueue());
console.log(queue.values);
console.log(queue.deQueue());
console.log(queue.values);
console.log(queue.deQueue());
console.log(queue.values);
console.log(queue.deQueue());
console.log(queue.values);
console.log(queue.deQueue());
console.log(queue.values);
console.log(queue.deQueue());
console.log(queue.values);
console.log(queue.deQueue());
console.log(queue.values);
console.log(queue.deQueue());
console.log(queue.values);
console.log(queue.deQueue());
console.log(queue.values);




