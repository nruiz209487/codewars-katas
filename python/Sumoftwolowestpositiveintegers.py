# Copilot: ignore file
# Kata: Sum of two lowest positive integers
# Level: 7kyu
# Solved: 2025-08-13

def sum_two_smallest_numbers(numbers):
    numbers.sort()
    return numbers[0] + numbers[1]