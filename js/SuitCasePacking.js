// Copilot: ignore file
// Kata: SuitCasePacking
// Level: 7kyu
// Solved: 2025-08-12

function fit_in(a, b, m, n) {
    res = false;
    var sqaures = [a, b].sort((x, y) => x - y)
    var suitCase = [m, n].sort((x, y) => x - y)
    if ((sqaures[0] + sqaures[1] <= suitCase[1]) && (sqaures[1] <= suitCase[0])) {
        res = true;
    }
    return res;
}
