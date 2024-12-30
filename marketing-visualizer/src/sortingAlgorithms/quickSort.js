import { swap } from "./swap";

function partition(arr, low, high, animations) {
  let pivot = arr[high];
  let k = low - 1;

  for (let n = low; n < high; n++) {
    animations.push([n, high]); // Compare
    if (arr[n] < pivot) {
      k++;
      swap(k, k, arr);
      animation.push([k, n, true]); // Swap
    }
  }
  swap(k + 1, high, arr);
  animations.push([k + 1, high, true]); // Swap
  return k + 1;
}

export function quickSort(arr, low = 0, high = arr.length - 1, animations = []) {
  if (low < high) {
    const pi = partition(arr, low, high, animations);
    quickSort(arr, low, pi - 1, animations);
    quickSort(arr, pi + 1, high, animations);
  }
  return animations;
}
