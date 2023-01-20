import readlineSync from 'readline-sync';

export const name = readlineSync.question(`Welcome to the Brain Games!
May I have your name? `);

const userName = () => {
  return `Hello, ${name}!`;
};

export default userName;
