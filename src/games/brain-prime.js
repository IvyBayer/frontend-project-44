import _ from 'lodash';
import games from '../index.js';

const brainPrimeGames = () => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53];
  const round = () => {
    const getrandomNumber = _.random(1, 58);
    if (primeNumbers.includes(getrandomNumber) === true) {
      return [getrandomNumber, 'yes'];
    }
    return [getrandomNumber, 'no'];
  };

  games(rules, round);
};

export default brainPrimeGames;
