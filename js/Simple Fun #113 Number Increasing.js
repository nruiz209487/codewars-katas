// Copilot: ignore file
// Kata: Simple Fun #113: Number Increasing
// Level: 7kyu
// Solved: 2025-08-28

function numberIncreasing(n) {
    while (n > 1) {
        if ((n - 1) % 5 === 0) {
            return true;
        } else if (n % 3 === 0) {
            n = Math.floor(n / 3);
        } else {
            n -= 5;
        }
    }
    return n === 1;
}