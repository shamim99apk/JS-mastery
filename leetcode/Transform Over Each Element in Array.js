var map = function (arr, fn) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(fn(arr[i], i));
  }
  return newArr;
};

const arr = [1, 2, 3];
const fn = function plusI(n, i) {
  return n + i;
};
map(arr, fn);
