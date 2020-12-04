class Edge {
    constructor(vertex, weight) {
        this.vertex = vertex;
        this.weight = weight;
    }
}

class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(vertex1, vertex2, weight) {
        if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) {
            return null;
        }

        this.adjacencyList[vertex1].push(new Edge(vertex2, weight));
        this.adjacencyList[vertex2].push(new Edge(vertex1, weight));
    }

    dijkstra(startVertex, endVertex) {
        let distances = {};
        let priorityQueue = new PriorityQueue();
        let pathObj = {};

        //initialization
        for (let vertex in this.adjacencyList) {
            if (vertex === startVertex) {
                distances[vertex] = 0;
                priorityQueue.enqueue(vertex, 0);
            } else {
                distances[vertex] = Infinity;
                priorityQueue.enqueue(vertex, Infinity);
            }
        }

        let currentVertexObj
        while (currentVertexObj = priorityQueue.dequeue()) {

            //Are we at the end?
            if (currentVertexObj.vertex === endVertex) {
                let result = [endVertex];
                let currentVertex = endVertex;
                while(pathObj[currentVertex]) {
                    result.unshift(pathObj[currentVertex])
                    currentVertex = pathObj[currentVertex];
                }

                return result;
            }

            if (distances[currentVertexObj.vertex] === Infinity) {
                continue;
            }

            for (let adjacentVertexIndex in this.adjacencyList[currentVertexObj.vertex]) {
                let adjacentVertex = this.adjacencyList[currentVertexObj.vertex][adjacentVertexIndex];
                let candidateDistance = distances[currentVertexObj.vertex] + adjacentVertex.weight;

                if (candidateDistance < distances[adjacentVertex.vertex]) {
                    distances[adjacentVertex.vertex] = candidateDistance;
                    pathObj[adjacentVertex.vertex] = currentVertexObj.vertex;
                    priorityQueue.enqueue(adjacentVertex.vertex, candidateDistance)
                }
            }
        }
    }


}

class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(vertex, priority) {
        this.values.push({vertex, priority})
        this.sort();
    }

    dequeue() {
        return this.values.shift();
    }

    sort() {
        this.values.sort((a, b) => a.priority - b.priority);
    }
}

let graph = new WeightedGraph()
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);

console.log(graph.dijkstra("A", "E"));
//console.log(graph.dijkstra("E", "A"));


