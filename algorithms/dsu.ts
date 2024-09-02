class DisjointSet {
    rank;
    parent
    constructor(n) {
        this.rank = Array.from({length: n}, () => 0);
        this.parent = Array.from({length: n}, () => 0);
        this.setParent(n);
    }
    
    setParent(n) {
        for (let i = 1; i <= n; i++) {
            this.parent[i] = i;
        }
    }
    
    findParent(node) {
        if (node == this.parent[node]) {
            return node;
        }
        
        this.parent[node] = this.findParent(this.parent[node]);
        
        return this.parent[node];
    }
    
    unionByRank(u, v) {
        let uParent = this.findParent(u);
        let vParent = this.findParent(v);
        if (this.rank[uParent] < this.rank[vParent]) {
            this.parent[uParent] = vParent;
        } else if(this.rank[uParent] > this.rank[vParent]) {
            this.parent[vParent] = uParent;
        } else {
            this.parent[vParent] = uParent;
            this.rank[uParent]++;
        }
    }
}

const disjointSet = new DisjointSet(7);
disjointSet.unionByRank(1,2)
disjointSet.unionByRank(2,3)
disjointSet.unionByRank(4,5)
disjointSet.unionByRank(6,7)
console.log(disjointSet.findParent(3), disjointSet.findParent(7))
disjointSet.unionByRank(5,6)
disjointSet.unionByRank(3,7)
console.log(disjointSet.findParent(3), disjointSet.findParent(7))

// Time complexity - O(4 * alpha)