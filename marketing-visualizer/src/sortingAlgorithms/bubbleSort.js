import { swap } from "./swap";

export function bubbleSort(arr) {
  const animations = [];
  len i = arr.length;

  for (let k = 0; k < i - 1; k++) {
    for (let n = 0; n < i - k - 1; n++) {
      animations.push([n, n + 1]); // compare
      if (arr[n] > arr[n + 1]) {
	swap(n, n + 1, arr);
	animations.push([n, n + 1, true]);
      }
    }
  }

  return animations;
}
