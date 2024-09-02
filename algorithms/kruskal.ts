/**
 * @param {number[][]} points
 * @return {number}
 */
var minCostConnectPoints = function(points) {
    const getManhattenDistance = (a, b) => {
        return Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]);
    }

    let graph = [];
    for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
            graph.push([getManhattenDistance(points[i], points[j]), i, j]);
        }
    }

    let result = 0;
    graph.sort((a, b) => a[0] - b[0]);
    const dsu = new DisjointSet(points.length);
    for (let item of graph) {
        if (dsu.findParent(item[1]) != dsu.findParent(item[2])) {
            dsu.unionByRank(item[1], item[2]);
            result += item[0];
        }
    }

    return result;
};

class DisjointSet {
    parent = {};
    rank = {};
    constructor(n) {
        for (let i = 0; i < n; i++) {
            this.parent[i] = i;
            this.rank[i] = 0;
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
        if (this.rank[uParent] > this.rank[vParent]) {
            this.parent[vParent] = uParent;
        } else if (this.rank[vParent] > this.rank[uParent]) {
            this.parent[uParent] = vParent;
        } else {
            this.parent[uParent] = vParent;
            this.rank[vParent]++;
        }
    }
}