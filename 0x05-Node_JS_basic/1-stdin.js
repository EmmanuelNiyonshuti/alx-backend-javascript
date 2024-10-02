#!/usr/bin/node

console.log('Welcome to Holberton School, what is your name?');

process.stdin.setEncoding('utf-8');

const isInteractive = process.stdin.isTTY;

process.stdin.on('data', (input) => {
  const name = input.toString();
  console.log(`Your name is: ${name}`);

  if (!isInteractive) {
    process.stdin.end();
  } else {
    process.exit();
  }
});

process.stdin.on('end', () => {
  console.log('This important software is now closing');
});
