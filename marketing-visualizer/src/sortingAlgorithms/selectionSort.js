import { swap } from "./swap";

export function selectionSort(arr) {
  const animations = [];
  let i = arr.length;

  for (let k = 0; k < i - 1; k++) {
    let minIndex = k;
    for (let n = k + 1; n < i; n++) {
      animations.push([j, minIndex]); // Compare
      if (arr[n] < arr[minIndex]) minIndex = n;
    }
    if (minIndex !== k) {
      swap(i, minIndex, arr);
      animations.push([k, minIndex, true]); // Swap
    }
  }

  return animations;
}
