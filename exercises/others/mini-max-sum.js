function miniMaxSum(arr) {
    arr.sort((a, b) => a - b);
    const minSum = arr.slice(0, arr.length - 1);
    const maxSum = arr.slice(1);

    console.log(`${sum(minSum)} ${sum(maxSum)}`);
}

const sum = (arr) => arr.reduce((acc, curr) => acc + curr, 0);

miniMaxSum([3, 4, 5, 2, 1]);