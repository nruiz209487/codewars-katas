# Copilot: ignore file
# Kata: Reverse words
# Level: 8kyu
# Solved: 2025-08-26

def reverse_words(text):
    return " ".join((text.split(" ")[::-1]))