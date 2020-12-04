class UndirectedGraph {
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

    depthFirstIterative(startVertex) {
        let result = [];
        let toBeVisited = {};
        let stack = [startVertex];
        toBeVisited[startVertex] = true;
        let adjacencyList = this.adjacencyList;


        while (stack.length) {
            let visitingVertex = stack.pop();
            result.push(visitingVertex);

            for (let neighbour of adjacencyList[visitingVertex]) {
                if (!toBeVisited[neighbour]) {
                    toBeVisited[neighbour] = true;
                    stack.push(neighbour);
                }
            }
        }

        return result;
    }

    breadthFirstIterative(startVertex) {
        let result = [];
        let toBeVisited = {};
        let stack = [startVertex];
        toBeVisited[startVertex] = true;
        let adjacencyList = this.adjacencyList;


        while (stack.length) {
            let visitingVertex = stack.shift();
            result.push(visitingVertex);

            for (let neighbour of adjacencyList[visitingVertex]) {
                if (!toBeVisited[neighbour]) {
                    toBeVisited[neighbour] = true;
                    stack.push(neighbour);
                }
            }
        }

        return result;
    }
}

let g = new UndirectedGraph();

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
console.log("DFrec" + g.depthFirstRecursive("A"));
console.log("DFiter" + g.depthFirstIterative("A"));
console.log("BFiter" + g.breadthFirstIterative("A"));

console.log("---------------------");

let g2 = new UndirectedGraph();

g2.addVertex("A")
g2.addVertex("B")
g2.addVertex("C")
g2.addVertex("D")
g2.addVertex("E")
g2.addVertex("F")


g2.addEdge("A", "B")
g2.addEdge("A", "E")
g2.addEdge("B", "C")
g2.addEdge("B", "D")
g2.addEdge("E", "D")
g2.addEdge("E", "F")
g2.addEdge("C", "D")
g2.addEdge("F", "D")

console.log("BFiter" + g2.breadthFirstIterative("A"));


//console.log(graph);
