// Copilot: ignore file
// Kata: Simple fibonacci strings
// Level: 7kyu
// Solved: 2025-09-14

function solve(n) {
  var res = "";
  var s1 = "0";
  var s2 = "01";
  if (n == 0) {
    res = "0";
  } else if (n == 1) {
    res = "01";
  } else {
    for (i = 1; i < n; i++) {
      res = s2 + s1;
      s1 = s2;
      s2 = res;
    }
  }
  return res;
}