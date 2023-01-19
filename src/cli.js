import readlineSync from 'readline-sync';

const userName = () => {
  const name = readlineSync.question(`Welcome to the Brain Games!
May I have your name? `);
  return `Hello, ${name}!`;
};

export default userName;
