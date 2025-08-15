// Copilot: ignore file
// Kata: DetectPangram
// Level: 6kyu
// Solved: 2025-08-15

function isPangram(string) {
    return 'abcdefghijklmnopqrstuvwxyz'.split("").every(letter => string.toLowerCase().split("").includes(letter));
}