import games from '../index.js';
import _ from 'lodash';

const brainEvenGames = () => {
  const rules = `Answer "yes" if the number is even, otherwise answer "no".`;
  const round = () => {
    const getrandomNumber = _.random(1, 100);
    const isEven = (number) => (number % 2 === 0 ? 'yes' : 'no');
    const rightAnswer = isEven(getrandomNumber);
    return [getrandomNumber.toString(), rightAnswer.toString()];
  }
  games(rules, round);
}

export default brainEvenGames;
