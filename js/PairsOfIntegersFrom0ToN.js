// Copilot: ignore file
// Kata: Pairs of integers from 0 to n
// Level: 7kyu
// Solved: 2025-08-19

function generatePairs(n) {
    var res = [];
    for (let i = 0; i <= n; i++) {
        for (let x = i; x <= n; x++) {
            res.push([i, x]);
        }
    }
    return res;
}
