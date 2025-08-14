// Copilot: ignore file
// Kata: Find the divisors!
// Level: 7kyu
// Solved: 2025-08-14

function divisors(integer) {
    let res = [];
    for (let i = 2; i < integer; i++) {
        if (integer % i === 0) {
            res.push(i);
        }
    }
    if (res.length === 0) {
        res = `${integer} is prime`;
    }
    return res;
}