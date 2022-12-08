// 1. Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).

let numbers = '';

for (let i = 20; i <= 30; i=i+0.5) {
    numbers += i + ' ';
}
console.log(numbers);

// 2. Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.

let dollar = 27;

for (let i=10; i<=100; i=i+10) {

    console.log(dollar*i);
}

// 3. Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.

const numberN3 = Number(prompt('Enter the  number from 1 to 100, please'));

for (let i = 1; i <= 100; i++) {
    const operationSquaring = Math.pow(i, 2)

    if (operationSquaring <= numberN3) {
        console.log(i);
    }
}


// 4. Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).

const numberN4 = Number(prompt('Enter the number, please'));
let numberSimple = true;

for (let i = 2; i < numberN4; i++) {
    if (numberN4 % i === 0) {
        numberSimple = false;
    }
}

console.log(numberSimple);  // Дe  true -  простe число, false - ні.


// 5. Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. 
// (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).

const numberN5 = Number(prompt('Enter the number, please'));

let exponentiation = false;

for (let i = 1; i < numberN5; i++) {
    if (Math.pow(3, i) === numberN5) {
        exponentiation = true;
    }
}

console.log(exponentiation);  // Дe  true - можна одержати це число шляхом зведення числа 3 у деякий ступінь, false - ні.
