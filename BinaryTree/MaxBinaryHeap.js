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

            let leftChildValue = this.values[leftChildIndex];
            let rightChildValue = this.values[rightChildIndex];

            if (typeof leftChildValue === undefined && typeof rightChildValue === undefined) {
                break;
            }

            if (typeof leftChildValue !== undefined && typeof rightChildValue !== undefined) {
                let maxChildValue = 0;
                let maxChildIndex = 0;
                if(leftChildValue > rightChildValue) {
                    maxChildValue = leftChildValue;
                    maxChildIndex = leftChildIndex;
                } else {
                    maxChildValue = rightChildValue;
                    maxChildIndex = rightChildIndex;
                }

                if(currentValue < maxChildValue) {
                    this.values[currentIndex] = maxChildValue;
                    this.values[maxChildIndex] = currentValue;
                    currentIndex = maxChildIndex;
                    continue;
                } else {
                    break;
                }
            }

            if (leftChildValue !== null) {
                if (currentValue < leftChildValue) {
                    this.values[currentIndex] = leftChildValue;
                    this.values[leftChildIndex] = currentValue;
                    currentIndex = leftChildIndex;
                } else {
                    break;
                }
            }

            if (rightChildValue !== null) {
                if (currentValue < rightChildValue) {
                    this.values[currentIndex] = rightChildValue;
                    this.values[rightChildIndex] = currentValue;
                    currentIndex = rightChildIndex;
                } else {
                    break;
                }
            }
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


