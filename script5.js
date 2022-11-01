const operation = prompt('Сhoose one of the mathematical operations: add, sub, mult, div');
const add = operation == 'add';
const sub = operation == 'sub';
const mult = operation == 'mult';
const div = operation == 'div';



const firstNumber = prompt('Enter the first number, please');
const firstNumberToNumber = Number(firstNumber);

const secondNumber = prompt('Enter the second number, please');
const secondNumberToNumber = Number(secondNumber);


if (add) {
    symbol = '+';
    result = firstNumberToNumber + secondNumberToNumber;
} else if (sub) {
    symbol = '-';
    result = firstNumberToNumber - secondNumberToNumber;
} else if (mult) {
    symbol = '*';
    result = firstNumberToNumber * secondNumberToNumber;
} else if (div) {
    symbol = '/';
    result = firstNumberToNumber / secondNumberToNumber;
}

alert(`Result:
${firstNumberToNumber} ${symbol} ${secondNumberToNumber} = ${result}`);
    