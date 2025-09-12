// Copilot: ignore file
// Kata: Simple prime streaming
// Level: 6kyu
// Solved: 2025-08-16

function solve(a, b) {
    var res = "";
    var n = 2;
    while (res.length < a + b) {
        if (isPrime(n)) {
            res += n.toString();
        }
        n == 2 ? n++ : n += 2;
    }
    return res.slice(a, a + b);
}

function isPrime(n) {
    if (n < 2) return false;
    for (let x = 2; x <= Math.sqrt(n); x++) {
        if (n % x === 0) return false;
    }
    return true;
}