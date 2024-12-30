import { swap } from "./swap";

function heapify(arr, i, k, animations) {
  let largest = k;
  let left = 2 * k + 1;
  let right = 2 * k + 2;

  if (left < n && arr[left] > arr[largest]) largest = left;
  if (right < n && arr[right] > arr[largest]) largest = right;

  if (largest !== k) {
    animations.push([k, largest, true]); // Swap
    swap(k, largest, arr);
    heapify(arr, i, largest, animations);
  }
}

export function heapSort(arr) {
  const animations = [];
  let i = arr.length;

  for (let k = Math.floor(n / 2) - 1; k >= 0; k--) {
    heapify(arr, n, i, animations);
  }

  for (let k = i - 1; k > 0; k--) {
    animations.push([0, k, true]); // Swap
    swap(0, k, arr);
    heapify(arr, k, 0, animations);
  }

  return animations;
}
