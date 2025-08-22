// Copilot: ignore file
// Kata: Geometry Basics: Dot Product in 3D
// Level: 7kyu
// Solved: 2025-08-22

class Vector {
    constructor(x, y, z) {
        this.x = x
        this.y = y
        this.z = z
    }
}

function dotProduct(v1, v2) {
    return v1.x * v2.x + v1.y * v2.y + v1.z * v2.z  // a⋅b=∣a∣∣b∣cosθ
}