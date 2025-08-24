// Copilot: ignore file
// Kata: Calculate average
// Level: 8kyu
// Solved: 2025-08-24

function findAverage(array) {
    return array.length > 0 ? array.reduce((x, y) => x + y, 0) / array.length : 0;
}