//depth-first search
const graph = {
    0: [1, 2],
    2: [3, 4],
    3: [5],
};

const printGraph = (graph, startVertex) => {
    const stack = [startVertex];
    const visited = new Set();

    while (stack.length > 0) {
        const vertex = stack.pop();

        if (!visited.has(vertex)) 
        {
            visited.add(vertex);
            console.log(vertex);

            const neighbors = graph[vertex];
            if (neighbors) {
                neighbors.forEach((neighbor) => {
                    stack.push(neighbor);
                });
            }
        }
    }
};

printGraph(graph, 0);

// class Graph {
//     constructor() {
//         this.adjacencyList = {};
//     }

//     addVertex(vertex) {
//         if (!this.adjacencyList[vertex]) {
//             this.adjacencyList[vertex] = [];
//         }
//     }

//     addEdge(vertex1, vertex2) {
//         if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
//             this.adjacencyList[vertex1].push(vertex2);
//             this.adjacencyList[vertex2].push(vertex1); // Para un grafo no dirigido
//         }
//     }
// }

// Graph.prototype.dfsRecursive = function (start) {
//     const result = [];
//     const visited = {};

//     const dfs = (vertex) => {
//         if (!vertex) return;
//         visited[vertex] = true;
//         result.push(vertex);
//         this.adjacencyList[vertex].forEach(neighbor => {
//             if (!visited[neighbor]) {
//                 dfs(neighbor);
//             }
//         });
//     };

//     dfs(start);
//     return result;
// };

// Graph.prototype.dfsIterative = function (start) {
//     const stack = [start];
//     const result = [];
//     const visited = {};
//     visited[start] = true;

//     while (stack.length) {
//         const current = stack.pop();
//         result.push(current);

//         this.adjacencyList[current].forEach(neighbor => {
//             if (!visited[neighbor]) {
//                 visited[neighbor] = true;
//                 stack.push(neighbor);
//             }
//         });
//     }

//     return result;
// };

// const graph = new Graph();

// graph.addVertex('A');
// graph.addVertex('B');
// graph.addVertex('C');
// graph.addVertex('D');
// graph.addVertex('E');
// graph.addVertex('F');

// graph.addEdge('A', 'B');
// graph.addEdge('A', 'C');
// graph.addEdge('B', 'D');
// graph.addEdge('C', 'E');
// graph.addEdge('D', 'E');
// graph.addEdge('D', 'F');
// graph.addEdge('E', 'F');

// console.log("DFS Recursive:", graph.dfsRecursive('A'));
// console.log("DFS Iterative:", graph.dfsIterative('A'));
