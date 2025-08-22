# Copilot: ignore file
# Kata: Geometry Basics: Dot Product in 3D
# Level: 8kyu
# Solved: 2025-08-22

class Vector:
    def __init__(self, x, y ,z):
        self.x = x  
        self.y = y    
        self.z = z     

def dot_product(a, b):
    return a.x * b.x + a.y * b.y + a.z * b.z  # a⋅b=∣a∣∣b∣cosθ