function binarySearchTS(array: number[], lookupValue: number) {
  let start = 0;
  let end = array.length - 1;
  let middle = Math.floor(array.length / 2);

  while (start <= end) {
    middle = Math.floor(end - (end - start) / 2);
    if (array[middle] === lookupValue) return `[${middle}] => ${lookupValue}`;
    else if (array[middle] < lookupValue) start = middle + 1;
    else if (array[middle] > lookupValue) end = middle - 1;
  }

  return -1;
}

const evenNumbers = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
console.log(binarySearchTS(evenNumbers, 2));
