// Copilot: ignore file
// Kata: Name Array Capping
// Level: 7kyu
// Solved: 2025-09-26

function capMe(names) {
  return names.map(name => {
    name = name.toLowerCase();
    return name.charAt(0).toUpperCase() + name.slice(1);
  });
}