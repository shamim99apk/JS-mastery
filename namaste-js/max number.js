function findMaxNumber(arr) {
  if (arr.length === 0) {
    return null; // array ফাঁকা হলে null
  }

  let maxNum = arr[0]; // প্রথম element কে ধরলাম max

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxNum) {
      maxNum = arr[i]; // নতুন বড় number পেলে update করবো
    }
  }

  return maxNum;
}
//uhfhwe
// Test
console.log(findMaxNumber([1, 2, 3, 4, 5]));
console.log(findMaxNumber([-10, -3, -20]));
console.log(findMaxNumber([]));
