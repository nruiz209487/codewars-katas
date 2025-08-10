# Kata: Geometry Basics: Distance between points in 3D
# Level: 7kyu
# Solved: 2025-08-10

class Point:
    def __init__(self, x: float, y: float , z: float):
        self.x = x
        self.y = y
        self.z = z

def distance_between_points(a: Point, b: Point) -> float:
    return ((a.x - b.x) ** 2 + (a.y- b.y) ** 2 + (a.z - b.z) ** 2 ) ** 0.5


