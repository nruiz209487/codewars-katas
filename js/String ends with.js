// Copilot: ignore file
// Kata: String ends with?
// Level: 7kyu
// Solved: 2025-09-12

function solution(str, ending) {
    return str.slice(str.length - ending.length, str.length) == ending
}