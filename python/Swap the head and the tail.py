# Copilot: ignore file
# Kata: Swap the head and the tail
# Level: 7kyu
# Solved: 2025-09-20

def swap_head_tail(arr):
    mi = len(arr) // 2
    if len(arr) % 2 == 0:
        return arr[mi:] + arr[:mi]
    else:
        mn = [arr[mi]]
        arr.pop(mi)
        return arr[mi:] + mn + arr[:mi]