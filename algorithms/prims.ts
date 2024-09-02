/**
 * @param {number[][]} points
 * @return {number}
 */
var minCostConnectPoints = function(points) {
    const getManhattenDistance = (a, b) => {
        return Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]);
    }

    const pq = new PrioriyQueue();
    pq.push([0, 0]);
    let length = points.length;
    let elem;
    let visited = Array.from({length}, () => false);
    let result = 0;
    while (pq.heap.length) {
        elem = pq.pop();
        if (visited[elem[1]]) continue;
        visited[elem[1]] = true;
        result += elem[0];
        for (let i = 0; i < length; i++) {
            if (visited[i]) continue;
            pq.push([getManhattenDistance(points[elem[1]], points[i]), i]);
        }
    }
    
    return result;
};

class PrioriyQueue {
    heap = [];

    swap(ind1, ind2) {
        let temp = this.heap[ind1];
        this.heap[ind1] = this.heap[ind2];
        this.heap[ind2] = temp;
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
        while (this.hasParent(index) && this.heap[this.getParentIndex(index)][0] > this.heap[index][0]) {
            this.swap(this.getParentIndex(index), index);
            index = this.getParentIndex(index);
        }
    }
    
    heapifyDown() {
        let index = 0;
        let smallerIndex = 0;
        while (this.hasLeftChild(index)) {
            smallerIndex = this.getLeftIndex(index);
            if (this.hasRightChild(index) && this.heap[this.getRightIndex(index)][0] < this.heap[this.getLeftIndex(index)][0]) {
                smallerIndex = this.getRightIndex(index);
            }
            
            if (this.heap[index][0] < this.heap[smallerIndex][0]) {
                break;
            } else {
                this.swap(index, smallerIndex);
                index = smallerIndex;
            }
        }
    }
}
