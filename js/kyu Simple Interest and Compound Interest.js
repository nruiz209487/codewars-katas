// Copilot: ignore file
// Kata: Simple Interest and Compound Interest
// Level: 7kyu
// Solved: 2025-09-21

function interest(p,r,n){return[Math.round(p+(p*r*n)),Math.round(p*(1+r)**n)];}