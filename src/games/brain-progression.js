import _ from 'lodash';
import games from '../index.js';

const brainProgressionGames = () => {
  const rules = 'What number is missing in the progression?';
  let missingNumberSave = '';
  const progression = (startNumber, stepOfProgression, progressionLine, missingNumber) => {
    const progressionLineAll = [startNumber];
    for (let i = 1; i < progressionLine; i++) {
      progressionLineAll.push(progressionLineAll[i - 1] + stepOfProgression);
    }
    missingNumberSave = progressionLineAll[missingNumber - 1];
    progressionLineAll[missingNumber - 1] = '..';
    return progressionLineAll.join(' ');
  };
  const round = () => {
    const getrandomNumber1 = _.random(1, 100);
    const randomNumberForProgressionLine = _.random(5, 10);
    const randomNumberForMissingNumber = _.random(1, randomNumberForProgressionLine);
    const randomNumberForStepOfProgression = _.random(1, 10);
    const question = progression(getrandomNumber1, randomNumberForStepOfProgression, randomNumberForProgressionLine, randomNumberForMissingNumber);

    return [question.toString(), missingNumberSave.toString()];
  };
  games(rules, round);
};

export default brainProgressionGames;
