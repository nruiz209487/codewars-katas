# Copilot: ignore file
# Kata: DetectPangram
# Level: 6kyu
# Solved: 2025-08-15

def is_pangram(st):
    alphabet = set('abcdefghijklmnopqrstuvwxyz') 
    st = set(st.lower())
    return alphabet.issubset(st)


