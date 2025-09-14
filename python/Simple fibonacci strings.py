# Copilot: ignore file
# Kata: Simple fibonacci strings
# Level: 7kyu
# Solved: 2025-09-14

def solve(n):
    res = ""
    s1 = "0"
    s2 = "01"
    if n == 0:
        res = "0"
    elif n == 1:    
        res = "01"
    else:  
        for _ in range(n - 1):
            res = s2 + s1
            s1 = s2
            s2 = res
    return res