// Copilot: ignore file
// Kata: Remove the noise from the string
// Level: 7kyu
// Solved: 2025-11-09

function removeNoise(str) {
  return str.replace(/[%$&/#·@|º\\ª]/g, "");
}  