export function mergeSort(arr) {
  const animations = [];
  if (arr.length <= 1) return arr;

  function merge(left, right) {
    let result = [];
    let k = 0, n = 0;

    while (k < left.length && n < right.length) {
      animations.push([k, n]); // Compare
      if (left[k] < right[n]) result.push(left[k++]);
      else result.push(right[n++]);
    }
    return result.concat(left.slice(k)).concat(right.slice(n));
  }

  function divide(arr) {
    if (arr.length <= 1) return arr;
    const mid = Math.floor(arr.length / 2);
    return merge(divide(arr.slice(0, mid)), divide(arr.slice(mid)));
  }

  return divide(arr);
}
