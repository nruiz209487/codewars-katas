# Copilot: ignore file
# Kata: Filter Coffee
# Level: 7kyu
#/ Solved: 2025-09-19

def search(y, x):return ','.join([str(_) for _ in sorted(x) if _ <= y])