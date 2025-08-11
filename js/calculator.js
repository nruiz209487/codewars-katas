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
