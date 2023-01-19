#!/usr/bin/env node
import readlineSync from 'readline-sync';
import _ from 'lodash';

const name = readlineSync.question(`Welcome to the Brain Games!
May I have your name? `);

console.log(`Hello, ${name}!`);
for (let i = 0; i < 3; i++) {

  const getrandomNumber = _.random(1, 100);

  console.log(`Answer "yes" if the number is even, otherwise answer "no".
Question: ${getrandomNumber}`);

  const userAnswer = readlineSync.question('Your answer: ');

  const isEven = (number) => (number % 2 === 0 ? 'yes' : 'no');

  if (isEven(getrandomNumber) === userAnswer) {
    console.log('Correct!');
  } else if (isEven(getrandomNumber) === 'yes' & userAnswer !== 'yes') {
    console.log(`${userAnswer} is wrong answer ;(. Correct answer was 'yes'.
Let's try again, ${name}!`);
    break;
  } else if (isEven(getrandomNumber) === 'no' & userAnswer !== 'no') {
    console.log(`${userAnswer} is wrong answer ;(. Correct answer was 'no'.
Let's try again, ${name}!`);
    break;
  };

if (i === 2) {
    console.log(`Congratulations, ${name}!`);
};
};
