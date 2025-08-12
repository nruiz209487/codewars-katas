# Copilot: ignore file
# Kata: SuitCasePacking
# Level: 7kyu
# Solved: 2025-08-12

def fit_in(a, b, m, n):
    res = False
    squares = sorted([a, b])  
    suitcase = sorted([m, n])  
    if (squares[0] + squares[1] <= suitcase[1]) and (squares[1] <= suitcase[0]):
        res = True
    return res