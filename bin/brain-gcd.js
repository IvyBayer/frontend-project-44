#!/usr/bin/env node
import readlineSync from 'readline-sync';
import _ from 'lodash';

const name = readlineSync.question(`Welcome to the Brain Games!
May I have your name? `);

console.log(`Hello, ${name}!`);
const nod = (number1, number2) => {
    if (number2 > number1) {
        let temp = number1;
        number1 = number2;
        number2 = temp;
    }
    while (true) {
        if (number2 === 0) {
            return number1;
        }
        number1 %= number2;
        if (number1 === 0) {
            return number2;
        }
        number2 %= number1;
    }
}

for (let i = 0; i < 3; i++) {

  const getrandomNumber1 = _.random(1, 100);
  const getrandomNumber2 = _.random(1, 100);

  console.log(`Find the greatest common divisor of given numbers.
Question: ${getrandomNumber1} ${getrandomNumber2}`);

  const userAnswer = parseInt(readlineSync.question('Your answer: '));

  if (nod(getrandomNumber1, getrandomNumber2) === userAnswer) {
    console.log('Correct!');
  } else {
    console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${nod(getrandomNumber1, getrandomNumber2)}.
Let's try again, ${name}!`);
    break;
  }
  if (i === 2) {
    console.log(`Congratulations, ${name}!`);
  }
}
