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
}

let graph = new Graph();
graph.addVertex("a");
graph.addVertex("b");
graph.addVertex("c");

graph.addEdge("a", "b");
graph.addEdge("b", "c");
graph.removeVertex("b");
graph.removeEdge("a", "b");


console.log(graph);
