function solution(arr) {
  var removed = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) removed.push(arr[i]);
  }
  return removed;
}
