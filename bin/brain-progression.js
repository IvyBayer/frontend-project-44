#!/usr/bin/env node
import readlineSync from 'readline-sync';
import _ from 'lodash';

const name = readlineSync.question(`Welcome to the Brain Games!
May I have your name? `);

console.log(`Hello, ${name}!`);

let missingNumberSave = '';

const progression = (startNumber, stepOfProgression, progressionLine, missingNumber) => {
    let progressionLineAll = [startNumber];
    for (let i = 1; i < progressionLine; i++) {
        progressionLineAll.push(progressionLineAll[i - 1] + stepOfProgression);
    }
    missingNumberSave = progressionLineAll[missingNumber - 1];
    progressionLineAll[missingNumber - 1] = '..';
    return progressionLineAll.join(' ');
}

for (let i = 0; i < 3; i++) {

    const getrandomNumber1 = _.random(1, 100);
    const randomNumberForProgressionLine = _.random(5, 10);
    const randomNumberForMissingNumber = _.random(1, randomNumberForProgressionLine);
    const randomNumberForStepOfProgression = _.random(1, 10);

    console.log(`What number is missing in the progression?
Question: ${progression(getrandomNumber1, randomNumberForStepOfProgression, randomNumberForProgressionLine, randomNumberForMissingNumber)}`);
  
    const userAnswer = parseInt(readlineSync.question('Your answer: '));
  
    if (missingNumberSave === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${missingNumberSave}.
Let's try again, ${name}!`);
      break;
    }
    if (i === 2) {
      console.log(`Congratulations, ${name}!`);
    }
  }