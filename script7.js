const firstNumber = prompt('Enter the first number, please');
const firstNumberTypeOfNumber = Number(firstNumber);

const secondNumber = prompt('Enter the second number, please');
const secondNumberTypeOfNumber = Number(secondNumber);

const thirdNumber = prompt('Enter the third number, please');
const thirdNumberTypeOfNumber = Number(thirdNumber);


const arithmeticMean = (firstNumberTypeOfNumber + secondNumberTypeOfNumber + thirdNumberTypeOfNumber) / 3;

alert(`The arithmetic mean of these numbers is ${arithmeticMean}`)