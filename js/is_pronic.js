// Copilot: ignore file
// Kata: is_pronic
// Level: 7kyu
// Solved: 2025-08-17

function isPronic(n) {
    if (n >= 0) {
        var limit = Math.round(n ** 0.5) + 1
        for (let x = 0; x < limit; x++)
            if (x * (x + 1) == n)
                return true
    }
    return false;
}