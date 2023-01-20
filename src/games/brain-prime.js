import _ from 'lodash';
import games from '../index.js';

const brainPrimeGames = () => {
    const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
    const primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
    const round = () => {
        const getrandomNumber = _.random(1, 100);
        if (primeNumbers.includes(getrandomNumber) === true) {
            return [getrandomNumber, 'yes'];
        } else {
            return [getrandomNumber, 'no'];
        }
    }

    games(rules, round);
}

export default brainPrimeGames;