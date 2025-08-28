# Copilot: ignore file
# Kata: Simple Fun #113: Number Increasing
# Level: 7kyu
# Solved: 2025-08-28

def number_increasing(n: int) -> bool:
    while n > 1:
        if(n-1) % 5 == 0:
            return True
        elif n % 3 == 0:
            n //= 3
        else:
            n -= 5
    return n == 1