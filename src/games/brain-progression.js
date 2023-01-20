import _ from 'lodash';
import games from '../index.js';

const brainProgressionGames = () => {
  const rules = 'What number is missing in the progression?';
  let missingNumberSave = '';
  const progression = (startNumber, stepOfProgression, progressionLine, missingNumber) => {
    const progressionLineAll = [startNumber];
    for (let i = 1; i < progressionLine; i += 1) {
      progressionLineAll.push(progressionLineAll[i - 1] + stepOfProgression);
    }
    missingNumberSave = progressionLineAll[missingNumber - 1];
    progressionLineAll[missingNumber - 1] = '..';
    return progressionLineAll.join(' ');
  };
  const round = () => {
    const randomNum = _.random(1, 100);
    const randomNumLine = _.random(5, 10);
    const randomNumMissing = _.random(1, randomNumLine);
    const randomNumStep = _.random(1, 10);
    const question = progression(randomNum, randomNumStep, randomNumLine, randomNumMissing);

    return [question.toString(), missingNumberSave.toString()];
  };
  games(rules, round);
};

export default brainProgressionGames;
