// Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.


var createCounter = function (init) {
  let count = init;
  return {
    increment: () => {
      return ++count;
    },
    decrement: function () {
      return --count;
    },
    reset: function () {
      return (count = init);
    },
  };
};

const counter = createCounter(5);
console.log(counter.increment());
console.log(counter.reset());
console.log(counter.decrement());
