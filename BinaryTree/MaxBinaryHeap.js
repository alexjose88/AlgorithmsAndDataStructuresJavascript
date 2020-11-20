class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    insert(value) {
        this.values.push(value);
        this.bubbleUp();
        return this.values;
    }

    bubbleUp() {
        let currentIndex = this.values.length - 1;
        let value = this.values[currentIndex];

        while (currentIndex > 0) {
            let parentIndex = Math.floor((currentIndex - 1) / 2);
            let parentValue = this.values[parentIndex];
            if (value < parentValue) {
                break;
            }

            this.values[parentIndex] = value;
            this.values[currentIndex] = parentValue;
            currentIndex = parentIndex;
        }

        return this.values;
    }

    removeMax() {
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
            let currentValue = this.values[currentIndex];
            let leftChildIndex = (2 * currentIndex) + 1;
            let rightChildIndex = (2 * currentIndex) + 2;

            let leftChildValue, rightChildValue, maxIndex = null;

            if (leftChildIndex < this.values.length) {
                leftChildValue = this.values[leftChildIndex];
                if (leftChildValue > currentValue) {
                    maxIndex = leftChildIndex
                }
            }

            if (rightChildIndex < this.values.length) {
                rightChildValue = this.values[rightChildIndex];

                if ((rightChildValue > currentValue && rightChildValue > leftChildValue) ||
                    (rightChildValue > currentValue && maxIndex === null)) {
                    maxIndex = rightChildIndex;
                }
            }

            if (maxIndex === null) {
                break;
            }

            this.values[currentIndex] = this.values[maxIndex];
            this.values[maxIndex] = currentValue;
            currentValue = maxIndex;
        }

    }
}

let heap = new MaxBinaryHeap();

heap.insert(33);
heap.insert(39);
heap.insert(41);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);

console.log(heap.values);
console.log(heap.removeMax());
console.log(heap.values);
console.log(heap.removeMax());
console.log(heap.values);
console.log(heap.removeMax());
console.log(heap.values);
console.log(heap.removeMax());
console.log(heap.values);
console.log(heap.removeMax());
console.log(heap.values);
console.log(heap.removeMax());
console.log(heap.values);
console.log(heap.removeMax());
console.log(heap.values);
console.log(heap.removeMax());
console.log(heap.values);


