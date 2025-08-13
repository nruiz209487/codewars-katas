// Copilot: ignore file
// Kata: Sum of two lowest positive integers
// Level: 7kyu
// Solved: 2025-08-13

function sumTwoSmallestNumbers(numbers) {  
    numbers.sort((a, b) => a - b);
    return numbers[0] + numbers[1];
}