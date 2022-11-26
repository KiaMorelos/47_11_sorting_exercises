//Based on the demo code/videos, and this article: https://stackabuse.com/merge-sort-in-javascript/

function merge(leftArr, rightArr) {
  let newArr = [];
  let leftIdx = 0;
  let rightIdx = 0;

  while (leftIdx < leftArr.length && rightIdx < rightArr.length) {
    if (leftArr[leftIdx] < rightArr[rightIdx]) {
      newArr.push(leftArr[leftIdx]);
      leftIdx++;
    } else {
      newArr.push(rightArr[rightIdx]);
      rightIdx++;
    }
  }
  while (leftIdx < leftArr.length) {
    newArr.push(leftArr[leftIdx]);
    leftIdx++;
  }

  while (rightIdx < rightArr.length) {
    newArr.push(rightArr[rightIdx]);
    rightIdx++;
  }

  return newArr;
}

function mergeSort(arr) {
  const half = Math.floor(arr.length / 2);

  if (arr.length < 2) {
    return arr;
  }

  const left = arr.splice(0, half);
  return merge(mergeSort(left), mergeSort(arr));
}

module.exports = { merge, mergeSort };

// an attempt at recursion written for the merge helper that doesn't work
// while (leftIdx < leftArr.length && rightIdx < rightArr.length) {
//   if (leftArr[leftIdx] < rightArr[rightIdx]) {
//     newArr.push(leftArr[leftIdx]);
//       leftIdx++;
//     merge(leftArr, rightArr, leftIdx, rightIdx);
//   } else {
//     newArr.push(rightArr[rightIdx]);
//       rightIdx++;
//     merge(leftArr, rightArr, leftIdx, rightIdx);
//   }
// }
