# Kata: First non-consecutive number
# Level: 8kyu
# Solved: 2025-08-05

def first_non_consecutive(arr):
    for i in range(0,len(arr)):
        if i < len(arr) - 1 and arr[i]+1 != arr[i+1]:
             return arr[i + 1]
    return None
