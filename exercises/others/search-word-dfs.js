function exist(matrix, word) {
    if (!matrix.length) return false;

    const rowsSize = matrix.length;
    const colsSize = matrix[0].length;

    function dfs(row, col, index) {
        if (index === word.length) 
            return true; // if full word found
        if (row < 0 || row >= rowsSize || col < 0 || col >= colsSize || matrix[row][col] !== word[index]) 
            return false; // if out of bounds or character doesn't match

        const temp = matrix[row][col];
        matrix[row][col] = '#'; // mark as visited
        console.log(matrix)
        const found = dfs(row + 1, col, index + 1) ||
                      dfs(row - 1, col, index + 1) ||
                      dfs(row, col + 1, index + 1) ||
                      dfs(row, col - 1, index + 1);

        matrix[row][col] = temp; // unmark as visited
        console.log(matrix)

        return found;
    }

    for (let row = 0; row < rowsSize; row++) {
        for (let col = 0; col < colsSize; col++) {
            if (matrix[row][col] === word[0] && dfs(row, col, 0)) {
                return true;
            }
        }
    }

    return false;
}

// Ejemplos de uso:
const matrix = [
    ["A","B","C","E"],
    ["S","F","C","S"],
    ["A","D","E","E"]
];

console.log(exist(matrix, "SEED")); // true
// console.log(exist(matrix, "SEEDS")); // false
// console.log(exist(matrix, "BCESE")); // true
// console.log(exist(matrix, "BCESEC")); // false
// console.log(exist(matrix, "BFCED")); // true