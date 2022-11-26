//Based on the demo code/videos

function bubbleSort(arr) {
  for (let outerIdx = 0; outerIdx < arr.length; outerIdx++) {
    let reorderedItems = false;
    for (let innerIdx = 0; innerIdx < arr.length - outerIdx; innerIdx++) {
      if (arr[innerIdx] > arr[innerIdx + 1]) {
        let toReorder = arr[innerIdx];
        arr[innerIdx] = arr[innerIdx + 1];
        arr[innerIdx + 1] = toReorder;
        reorderedItems = true;
      }
    }
    if (!reorderedItems) break;
  }
  return arr;
}

module.exports = bubbleSort;
