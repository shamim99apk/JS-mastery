// Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.

// Note that minor deviation from millis in the actual sleep duration is acceptable.

async function sleep(millis) {
  return new Promise((resolve) => setTimeout(resolve, millis));
}

(async () => {
  let t = Date.now();
  await sleep(100);
  console.log("Elapsed:", Date.now() - t); // ~100
})();
