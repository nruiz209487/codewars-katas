# Copilot: ignore file
# Kata: Simple prime streaming
# Level: 6kyu
# Solved: 2025-08-16

def solve(a, b):
    res = ""
    n = 2
    while len(res) < a + b:
        if (isPrime(n)):
            res+= str(n)
        n += 1 if n == 2 else 2
    return res[a:a+b]


def isPrime(n):
    if n < 2: return False
    for x in range(2, int(n**0.5)+1):
        if n % x == 0:
            return False
    return True
