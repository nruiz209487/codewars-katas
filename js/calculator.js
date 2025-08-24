// Copilot: ignore file
// Kata: calculator
// Level: 8kyu
// Solved: 2025-08-08

function calculator(a, b, sign) {
    res = "unknown value"
    if (typeof a == 'number' && typeof b == 'number') {
        switch (sign) {
            case "+":
                res = a + b;
                break;
            case "-":
                res = a - b;
                break;
            case "*":
                res = a * b;
                break;
            case "/":
                res = a / b;
                break;
        }
    }
    return res;
}
