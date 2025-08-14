# Copilot: ignore file
# Kata: Find the divisors!
# Level: 7kyu
# Solved: 2025-08-14

def divisors(integer):
    res = []

    for i in range(integer):
        if i > 1 and integer % i == 0:
            res.append(i)

    if len(res) == 0:
        res = f"{integer} is prime"

    return res 