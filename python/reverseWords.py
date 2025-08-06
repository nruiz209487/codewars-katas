# Copilot: ignore file
# Kata: Reverse words
# Level: 7kyu
# Solved: 2025-08-06

def reverse_words(text):
        text = text[::-1]
        text = text.split(" ")
        res = []
        for i in range (len(text)):
             res.append(text[len(text) -i -1])   
        return " ".join(res)