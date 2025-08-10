// Kata: Geometry Basics: Distance between points in 3D
// Level: 7kyu
// Solved: 2025-08-10

function distanceBetweenPoints(a, b) {
    return Math.sqrt((Math.pow(b.x - a.x, 2)) + (Math.pow(b.y - a.y, 2)) + (Math.pow(b.z - a.z, 2)));
}

class Point {
    constructor(x = 0, y = 0, z = 0) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
}