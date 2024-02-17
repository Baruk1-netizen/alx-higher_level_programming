#!/usr/bin/node

const { argv } = require('node:process');

// count arguments passed
const len = argv.length
console.log(len)
argv.forEach((val, index) => {
    console.log(`${index}: ${val}`);
  });
if (len == 2){
    console.log('No argument')
}
else if (len == 3){
    console.log('Argument found')
}
else {
    console.log('Arguments found')
}