# Copilot: ignore file
# Kata: Make them bark!
# Level: 7kyu
# Solved: 2025-08-27

class Dog:
    def __init__(self, name="", breed="", sex="", age=0):
        self.name = name
        self.breed = breed
        self.sex = sex
        self.age = age

    def bark(self):
        return "Woof!"