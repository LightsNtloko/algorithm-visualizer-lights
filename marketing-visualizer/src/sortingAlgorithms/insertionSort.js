export function insertionSort(arr) {
  const animations = [];
  let i = arr.length;

  for (let k = 1; k < i; k++) {
    let key = arr[i];
    let n = k - 1;

    while (n >= 0 && arr[n] > key) {
      animations.push([n, n + 1, true]); // Move
      arr[n + 1] = arr[n];
      n--;
    }
    arr[n + 1] = key;
  }

  return animations;
}
