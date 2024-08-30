// n! = n * (n! - 1)
function factorialRecursive(n) {
    if (n == 1){
        return 1;
    }

    return n * factorialRecursive(n - 1);
}

function factorial(n){ 
    let result= 1;

    for (let i = 2; i <= n; i++) {
        result *= i;
    }

    return result;
}

console.log(factorial(8));
console.log(factorialRecursive(8));