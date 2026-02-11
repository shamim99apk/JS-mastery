//Create an array of 5 elements using the Array Constructor.
const arr = new Array(5, 6, 7);
// console.log(arr);

//Create an array of 3 empty slots.
const arrSlot = [1, 2, 3];
// console.log(arrSlot);

//  T-003: Create an array of 6 elements using the Array literals and access the fourth element in the array using its length property.
const arrLiterals = [1, 2, 3, 4, 5, 6];
// console.log(arrLiterals[arrLiterals.length - 3]);

// T-004: Use the for loop on the above array to print elements in the odd index.
const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < arr3.length; i++) {
  if (arr3[i] % 2 !== 0) {
    // console.log(arr3[i]);
  }
}

//  T-005: Add one element at the front and the end of an array.
const arrAdd = [2, 3, 4, 5, 6, 7, 8, 9];
const result = [...arrAdd];
result.push(10);
result.unshift(1);
// console.log(result);

// T-006: Remove an element from the front and the end of an array.
const arrRemove = [2, 3, 4, 5, 6, 7, 8, 9];
const result2 = [...arrRemove];
result.pop(10);
result.shift(1);
// console.log(result2);

//  T-007: Create an array containing the name of your favourite foods(10 foods). Destructure the 6th food element from the array using destructuring.
const foodsArray = [
  "Burger",
  "Pizza",
  "Sushi",
  "Donut",
  "Apple",
  "Banana",
  "Taco",
  "Noodles",
  "Salad",
  "Cookie",
];
const [, , , , , sixElement] = foodsArray;
// console.log(sixElement);

//  T-008: Take out the last 8 food items from the above array using the Array destructuring. Hint: rest parameter.
const destructuringfoodsArray = [
  "Burger",
  "Pizza",
  "Sushi",
  "Donut",
  "Apple",
  "Banana",
  "Taco",
  "Noodles",
  "Salad",
  "Cookie",
];

const [first, second, ...restEight] = destructuringfoodsArray;
// console.log(restEight);

//  T-009: Clone an Array(Shallow cloning)
const shallowCloning = [1, 3, 5, 6, 678];
// console.log([...shallowCloning]);

// T-010: Empty an array using its length property
let numbers = [1, 2, 3, 4, 5];
numbers.length = 0;
// console.log(numbers);

// T-011: Create an array of 10 elements(number 1 to 10). Resize the array to length 6 once you find the number 5 in that array. Hint: Use for-loop.
const reSizeArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < reSizeArray.length; i++) {
  if (reSizeArray[i] === 5) {
    reSizeArray.length = i + 1;
    break;
  }
}
// console.log(reSizeArray);
