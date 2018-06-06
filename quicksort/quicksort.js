function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const [pivot, ...rest] = arr;
  const left = [];
  const right = [];
  rest.forEach(el => el < pivot ? left.push(el) : right.push(el));
  return quickSort(left).concat(pivot).concat(quickSort(right));
};
