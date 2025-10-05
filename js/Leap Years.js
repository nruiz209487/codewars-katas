// Copilot: ignore file
// Kata: Leap Years
// Level: 7kyu
// Solved: 2025-10-05

function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
    ? true
    : false;
}