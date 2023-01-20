#!/usr/bin/env node
import readlineSync from 'readline-sync';
import _ from 'lodash';

const name = readlineSync.question(`Welcome to the Brain Games!
May I have your name? `);

console.log(`Hello, ${name}!`);
for (let i = 0; i < 3; i++) {

  const getrandomNumber1 = _.random(1, 100);
  const getrandomNumber2 = _.random(1, 100);
  let randomExpressionForQuestion = Math.random();
  let randomExpression = '';
  if (randomExpressionForQuestion < 0.34) {
    randomExpressionForQuestion = `${getrandomNumber1} + ${getrandomNumber2}`;
    randomExpression = getrandomNumber1 + getrandomNumber2;
  } else if (randomExpressionForQuestion < 0.68) {
    randomExpressionForQuestion = `${getrandomNumber1} - ${getrandomNumber2}`;
    randomExpression = getrandomNumber1 - getrandomNumber2;
  } else {
    randomExpressionForQuestion = `${getrandomNumber1} * ${getrandomNumber2}`;
    randomExpression = getrandomNumber1 * getrandomNumber2;
  }

  console.log(`What is the result of the expression?
Question: ${randomExpressionForQuestion}`);

  const userAnswer = parseInt(readlineSync.question('Your answer: '));

  if (randomExpression === userAnswer) {
    console.log('Correct!');
  } else {
    console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${randomExpression}.
Let's try again, ${name}!`);
    break;
  }
  if (i === 2) {
    console.log(`Congratulations, ${name}!`);
  }
}
