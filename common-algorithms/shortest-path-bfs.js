const graph = {
    0: [1, 2],
    1: [3],
    2: [3, 4],
    3: [5],
    4: [5],
    5: []
};

const findShortestPath = (graph, startVertex, endVertex) => {
    const queue = [[startVertex]];
    const visited = new Set();

    while (queue.length > 0) {
        const path = queue.shift();
        const vertex = path[path.length - 1];

        if (vertex === endVertex) {
            return path;
        }

        if (!visited.has(vertex)) {
            visited.add(vertex);
            const neighbors = graph[vertex];
            if (neighbors) {
                neighbors.forEach(neighbor => {
                    const newPath = [...path, neighbor];
                    queue.push(newPath);
                });
            }
        }
    }

    return null;
};

console.log(findShortestPath(graph, 0, 5));