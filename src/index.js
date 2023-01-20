import userName from '../src/cli.js';
import { name } from '../src/cli.js';
import _ from 'lodash';
import readlineSync from 'readline-sync';

const brainGames = (rules, round) => {
    console.log(userName());
    console.log(rules);
    const numberOfRounds = 3;
    for (let i = 0; i < numberOfRounds; i++) {
        const [question, rightAnswer] = round();
        console.log(`Question: ${question}`)
        const userAnswer = parseInt(readlineSync.question('Your answer: '));

        if (rightAnswer === userAnswer) {
            console.log('Correct!');
          } else {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.
Let's try again, ${name}!`);
            break;
          }
        if (i === 2) {
            console.log(`Congratulations, ${name}!`);
        };
    }
};

export default brainGames;