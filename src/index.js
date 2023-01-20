import _ from 'lodash';
import readlineSync from 'readline-sync';
import userName, { name } from './cli.js';

const brainGames = (rules, round) => {
  console.log(userName());
  console.log(rules);
  const numberOfRounds = 3;
  for (let i = 0; i < numberOfRounds; i++) {
    const [question, rightAnswer] = round();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    // parseInt(readlineSync.question('Your answer: '));
    if (rightAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.
Let's try again, ${name}!`);
      break;
    }
    if (i === 2) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};

export default brainGames;
