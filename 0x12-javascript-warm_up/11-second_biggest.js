#!/usr/bin/node

const args = process.argv.slice(2).map(Number);

if (args.length < 2) {
  console.log(0);
} else {
  args.sort((a, b) => b - a); // Sort in descending order
  console.log(args[1]);
}
