# Copilot: ignore file
# Kata: Pairs of integers from 0 to n
# Level: 7kyu
# Solved: 2025-08-19

def generate_pairs(n):
    res = []
    for i in range (n + 1):
        for x in range (i, n + 1):
            res.append([i,x])
    return res
