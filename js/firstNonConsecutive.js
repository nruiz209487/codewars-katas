//Kata: First non-consecutive number
//Level: 8kyu
//Solved: 2025-08-05

function firstNonConsecutive(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let currentIndex = arr[i];
    let nextIndex = arr[i + 1];
    if (currentIndex + 1 !== nextIndex) {
      return nextIndex;
    }
  }
  return null;
}
