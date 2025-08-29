// Copilot: ignore file
// Kata: Is the string uppercase
// Level: 8kyu
// Solved: 2025-08-29

String.prototype.isUpperCase = function() {
      return this.toString() === this.toUpperCase();
}