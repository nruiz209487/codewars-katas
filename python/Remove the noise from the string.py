# Copilot: ignore file
# Kata: Remove the noise from the string
# Level: 7kyu
# Solved: 2025-11-09

def removeNoise(str):
    for char in '%$&/#·@|ºª':
        str = str.replace(char, '')
    return str