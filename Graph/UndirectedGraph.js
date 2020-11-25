class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) {
            return;
        }

        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }

    removeEdge(vertex1, vertex2) {

        if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) {
            return;
        }

        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            v => v !== vertex2
        );

        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            v => v !== vertex1
        );
    }

    removeVertex(vertexToDelete) {

        if (!this.adjacencyList[vertexToDelete]) {
            return;
        }

        for (let vertex in this.adjacencyList) {
            this.removeEdge(vertexToDelete, vertex)
        }

        delete this.adjacencyList[vertexToDelete];
    }

    depthFirstRecursive(startVertex) {

        let result = [];
        let visited = {};
        let adjacencyList = this.adjacencyList;

        (function dFSHelper(vertex) {

            if (!vertex) {
                return null;
            }

            visited[vertex] = true;
            result.push(vertex);

            for (let neighbour of adjacencyList[vertex]) {
                if (!visited[neighbour]) {
                    dFSHelper(neighbour);
                }
            }
        })(startVertex)

        return result;
    }
}

let g = new Graph();

g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")


g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B", "D")
g.addEdge("C", "E")
g.addEdge("D", "E")
g.addEdge("D", "F")
g.addEdge("E", "F")
console.log(g.depthFirstRecursive("A"));


//console.log(graph);
