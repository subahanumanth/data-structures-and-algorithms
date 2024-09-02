class PriorityQueue {
    heap: number[] = [];

    swap(ind1, ind2) {
        this.heap[ind1] = this.heap[ind1] ^ this.heap[ind2];
        this.heap[ind2] = this.heap[ind1] ^ this.heap[ind2];
        this.heap[ind1] = this.heap[ind1] ^ this.heap[ind2];
    }

    getLeftIndex(index) {
        return (2 * index) + 1;
    }
    
    getRightIndex(index) {
        return (2 * index) + 2;
    }
    
    getParentIndex(index) {
        return Math.ceil(index / 2) - 1;
    }
    
    hasLeftChild(index) {
        return this.getLeftIndex(index) < this.heap.length;
    }
    
    hasRightChild(index) {
        return this.getRightIndex(index) < this.heap.length;
    }

    hasParent(index) {
        return this.getParentIndex(index) >= 0;
    }
    
    push(elem) {
        this.heap.push(elem);
        this.heapifyUp();
    }
    
    pop() {
        let val = this.heap[0];
        this.swap(0, this.heap.length - 1);
        this.heap.pop();
        this.heapifyDown();
        return val;
    }
    
    heapifyUp() {
        let index = this.heap.length - 1;
        while (this.hasParent(index) && this.heap[this.getParentIndex(index)] > this.heap[index]) {
            this.swap(this.getParentIndex(index), index);
            index = this.getParentIndex(index);
        }
    }
    
    heapifyDown() {
        let index = 0;
        let smallerIndex = 0;
        while (this.hasLeftChild(index)) {
            smallerIndex = this.getLeftIndex(index);
            if (this.hasRightChild(index) && this.heap[this.getRightIndex(index)] < this.heap[this.getLeftIndex(index)]) {
                smallerIndex = this.getRightIndex(index);
            }
            
            if (this.heap[index] < this.heap[smallerIndex]) {
                break;
            } else {
                this.swap(index, smallerIndex);
                index = smallerIndex;
            }
        }
    }
}

const pq = new PriorityQueue();
pq.push(3);
pq.push(8);
pq.push(4);
pq.push(1);
pq.push(0);
pq.push(5);
pq.push(9);
console.log(pq.pop());
console.log(pq.pop());
console.log(pq.pop());
console.log(pq.heap)