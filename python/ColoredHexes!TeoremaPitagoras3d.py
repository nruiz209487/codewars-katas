# Copilot: ignore file
# Kata: Colored Hexes!
# Level: 7kyu
# Solved: 2025-08-08

def dist(color_map, x, y, z):
        res =[]
        distances= []
        distance = 0
        for color in color_map:
            distance = ((x - color[0]) ** 2 + (y - color[1]) ** 2 + (z - color[2]) ** 2) ** 0.5
            distances.append((distance, color_map[color]))
        distances.sort()
        res = distances[0][1]
        return res

def hex_color(codes):
    if codes == "":
        return "black"
    res = ""
    codes = codes.split()
    x = int(codes[0])
    y = int(codes[1])
    z = int (codes[2])
    color_map = {
        (255, 0, 0): "red",
        (0, 255, 0): "green",
        (0, 0, 255): "blue",
        (255, 255, 0): "yellow",
        (255, 0, 255): "magenta",
        (0, 255, 255): "cyan",
        (0, 0, 0): "black",
        (255, 255, 255): "white"
    }
    res = dist(color_map, x, y, z)
    
    return res