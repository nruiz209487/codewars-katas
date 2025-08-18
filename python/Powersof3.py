# Copilot: ignore file
# Kata: Powers of 3
# Level: 7kyu
# Solved: 2025-08-18

def largest_power(N):
    power = 0
    base = 3
    while base ** power < N:
        power += 1
    return power - 1 ** base
