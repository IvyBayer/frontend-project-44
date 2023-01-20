import _ from 'lodash';
import games from '../index.js';

const brainGcdGames = () => {
  const rules = 'Find the greatest common divisor of given numbers.';
  const nod = (randomNumber1, rangomNumber2) => {
    let number1 = randomNumber1;
    let number2 = rangomNumber2;
    if (number2 > number1) {
      const temp = number1;
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
  };
  const round = () => {
    const getrandomNumber1 = _.random(1, 100);
    const getrandomNumber2 = _.random(1, 100);
    const getrandomNumber = `${getrandomNumber1} ${getrandomNumber2}`;
    const answer = nod(getrandomNumber1, getrandomNumber2);
    return [getrandomNumber.toString(), answer.toString()];
  };
  games(rules, round);
};

export default brainGcdGames;
