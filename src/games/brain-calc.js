import _ from 'lodash';
import games from '../index.js';

const brainCalcGames = () => {
  const rules = 'What is the result of the expression?';
  const round = () => {
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
    return [randomExpressionForQuestion.toString(), randomExpression.toString()];
  };
  games(rules, round);
};

export default brainCalcGames;
