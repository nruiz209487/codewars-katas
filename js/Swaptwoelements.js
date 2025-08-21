// Copilot: ignore file
// Kata: swapTwo
// Level: 7kyu
// Solved: 2025-08-21

function swapTwo(array, a, b) {
    [array[array.indexOf(a)], array[array.lastIndexOf(b)]] = [
        array[array.lastIndexOf(b)],
        array[array.indexOf(a)],
    ];
    return array;
}