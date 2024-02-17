#!/usr/bin/node

function factorial (num) {
  let product = 1;
  if (num !== 0) {
    product = num * factorial(num - 1);
    num--;
  }
  return product;
}

const num = parseInt(process.argv[2]);

if (isNaN(num)) {
  console.log(1);
} else {
  console.log(factorial(num));
}
