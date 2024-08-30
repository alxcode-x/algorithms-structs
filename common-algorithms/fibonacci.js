// function fibonacci(n, memo = {}) {
//     if (n in memo) return memo[n];
//     if (n <= 1) return n;
    
//     memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
//     console.log(memo);
//     return memo[n];
// }

// function fibonacci(n) {
//     if (n <= 1) return n;

//     const serie = [1, 2];
//     for (let i = 2; i < n; i++){
//         serie.push(serie[i - 1] + serie[i - 2]);
//     }
    
//     console.log(serie)
// }

function fibonacci(n) {
    if (n <= 1) return n;

    let a = 0, b = 1, t;

    for (let i = 0; i < n; i++) {
        t = a + b;
        a = b; 
        b = t; 


        console.log(t);
    }
}

fibonacci(10);