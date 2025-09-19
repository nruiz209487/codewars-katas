// Copilot: ignore file
// Kata: Filter Coffee
// Level: 7kyu
// Solved: 2025-09-19

function search(budget,prices){return prices.filter(n=>n<=budget).sort((a,b)=>a-b).join(",")}