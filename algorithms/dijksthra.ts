/**
 * @param {number} V
 * @param {number[][][]} Adj
 * @param {number} S
 * @return {number[]}
 */
class Solution
{
    //Function to find the shortest distance of all the vertices
    //from the source vertex S.
    dijkstra(V,Adj,S) {
        const dist = Array.from({length: V}, () => Number.MAX_VALUE);
        dist[S] = 0;
        const pq = new PriorityQueue();
        pq.push([0, S]);

        while (pq.heap.length) {
            let [currDist, node] = pq.pop();
            for (let neighbour of Adj[node]) {
                if (currDist + neighbour[1] < dist[neighbour[0]]) {
                    dist[neighbour[0]] = currDist + neighbour[1];
                    pq.push([dist[neighbour[0]], neighbour[0]]);
                }
            }
        }

        return dist;
    }
    
}


class PriorityQueue {
    heap = [];

    swap(ind1, ind2) {
        let temp = this.heap[ind1];
        this.heap[ind1] = this.heap[ind2];
        this.heap[ind2] = temp;
    }
    
    hasParent(index) {
        return this.getParentIndex(index) >= 0;
    }
    
    hasRightChild(index) {
        return this.getRightChildIndex < this.heap.length;
    }
    
    hasLeftChild(index) {
        return this.getLeftChildIndex < this.heap.length;
    }

    getParentIndex(index) {
        return Math.ceil(index / 2) - 1;
    }
    
    getLeftChildIndex(index) {
        return (2 * index) + 1;
    }
    
    getRightChildIndex(index) {
        return (2 * index) + 2;
    }

    getParent(index) {
        return this.heap[this.getParentIndex(index)][0];
    }
    
    getLeftChild(index) {
        return this.heap[this.getLeftChild(index)][0];
    }
    
    getRightChild(index) {
        return this.heap[this.getRightChild(index)][0];
    }

    push(elem) {
        this.heap.push(elem);
        this.heapifyUp();
    }
    
    pop() {
        this.swap(0, this.heap.length - 1);
        let elem = this.heap.pop();
        this.heapifyDown();

        return elem;
    }

    heapifyUp() {
        let index = this.heap.length - 1;
        while (this.hasParent(index) && this.heap[index][0] < this.getParent(index)) {
            this.swap(index, this.getParentIndex(index));
            index = this.getParentIndex(index);
        }
    }
    
    heapifyDown() {
        let smallerIndex;
        let index = 0;
        while (this.hasLeftChild(index)) {
            smallerIndex = this.getLeftChildIndex(index);
            if (this.hasRightChild(index) && this.heap[this.getRightChildIndex(index)][0] < this.heap[smallerIndex][0]) {
                smallerIndex = this.getRightChildIndex(index);
            }
            
            if (this.heap[index][0] > this.heap[smallerIndex][0]) {
                this.swap(index, smallerIndex);
                index = smallerIndex;
            } else {
                break;
            }
        }
    }
}