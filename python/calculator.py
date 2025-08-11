# Copilot: ignore file
# Kata: calculator
# Level: 8kyu
# Solved: 2025-08-08

def calculator(x, y, op):
    operators = ['+', '-', '*', '/', '%', '**', '//']
    res = "unknown value"
    if op in operators and isinstance(x, (int, float)) and isinstance(y, (int, float)):
        res = eval(f"{x} {op} {y}") # using eval for simplicity, but be cautious with this in production code
    return res
    

