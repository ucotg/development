// const p = Promise.resolve(100);

// p.then((result) => {
//   console.log(`result is ${result}`);
// });

const p = Promise.resolve();

p.then(() => {
  console.log("2");
});
console.log("1");
