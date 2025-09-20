// Copilot: ignore file
// Kata: Swap the head and the tail
// Level: 7kyu
// Solved: 2025-09-20

function swapHeadAndTail(arr) {
    let mi = Math.floor(arr.length / 2);
    if (arr.length % 2 == 0) {
        return arr.slice(mi).concat(arr.slice(0, mi));
    } else {
        let mn = [arr[mi]];
        return arr.slice(mi + 1).concat(mn, arr.slice(0, mi));
    }
}