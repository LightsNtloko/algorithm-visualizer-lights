export function swap(k, n, arr = []) {
  let temp = arr[k];
  arr[k] = arr[n];
  arr[n] = temp;
}
