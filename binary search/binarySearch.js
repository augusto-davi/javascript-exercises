function binarySearch(array, lookupNum) {
  let firstIndex = 0;
  let midIndex = parseInt(array.length / 2);
  let lastIndex = array.length - 1;

  do {
    if (array[midIndex] === lookupNum) return `[${midIndex}] => ${lookupNum}`;
    else if (array[midIndex] < lookupNum) firstIndex = midIndex + 1;
    else if (array[midIndex] > lookupNum) lastIndex = midIndex - 1;

    midIndex = parseInt(firstIndex + (lastIndex - firstIndex) / 2);
  } while (lastIndex >= firstIndex);

  return -1;
}

const oddNumbers = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21];
console.log(binarySearch(oddNumbers, 1));
