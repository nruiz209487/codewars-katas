# Copilot: ignore file
# Kata: Is the string uppercase
# Level: 8kyu
# Solved: 2025-08-29

def is_uppercase(inp):
    return set(inp).issubset(set("ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+[]{}|;:'\",.<>?/\\`~ "))