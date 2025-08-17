# Copilot: ignore file
# Kata: Pronic Number
# Level: 7kyu
# Solved: 2025-08-17

def is_pronic(n):
    if n >= 0:
        limit = int(n**0.5) + 1
        for x in range(limit):
            if x * (x+1) == n:
                return True
    return False