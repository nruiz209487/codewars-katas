# Copilot: ignore file
# Kata: RemoveFirstandLastCharacter
# Level: 8kyu
# Solved: 2025-08-05

def remove_char(s):  # better just using return s[1:-1] but this way is more complex and for practicing
    newString = ""
    for i in range(len(s)):
        if i != 0 and i != len(s) - 1:
            newString += s[i]
    return newString
