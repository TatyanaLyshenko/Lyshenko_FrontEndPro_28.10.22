const firstNumber = prompt('Enter the first number, please');
const firstNumberTypeOfNumber = Number(firstNumber);

const secondNumber = prompt('Enter the second number, please');
const secondNumberTypeOfNumber = Number(secondNumber);

const add = firstNumberTypeOfNumber + secondNumberTypeOfNumber;
const sub = firstNumberTypeOfNumber - secondNumberTypeOfNumber;
const mult = firstNumberTypeOfNumber * secondNumberTypeOfNumber;
const div = firstNumberTypeOfNumber / secondNumberTypeOfNumber;

alert(`${firstNumber} + ${secondNumber} = ${add},
    ${firstNumber} - ${secondNumber} = ${sub},
    ${firstNumber} * ${secondNumber} = ${mult},
    ${firstNumber} / ${secondNumber} = ${div}`);