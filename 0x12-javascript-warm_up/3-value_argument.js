#!/usr/bin/node

// const { argv } = require('node:process');

let count = 0;
process.argv.forEach((value, index) => {
  count += 1;
});

if (count === 2) {
  console.log('No argument');
} else {
  console.log(process.argv[2]);
}
