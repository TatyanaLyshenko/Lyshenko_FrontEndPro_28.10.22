
// 1. Вивести на сторінку в один рядок через кому числа від 10 до 20.

let str1 = '';

for (i=10; i<=20; i++) {
    str1 += i + ',';
}

console.log(str1);



// 2. Вивести квадрати чисел від 10 до 20.

for (i=10; i<=20; i++) {
    console.log(i*i)
}

// 3. Вивести таблицю множення на 7.

for (i=1; i<=10; i++) {
    console.log(i*7)
}


// 4. Знайти суму всіх цілих чисел від 1 до 15.

let sum = 0;

for (i=1; i<=15; i++) {
    sum+=i
}

console.log(sum)

// 5. Знайти добуток усіх цілих чисел від 15 до 35.

let mult = 1;

for (i=15; i<=35; i++) {
    mult = mult*i
}

console.log(mult)

// 6. Знайти середнє арифметичне всіх цілих чисел від 1 до 500.

let arr = new Array(500);
let sum6 = 0;

for (i=1; i<=arr.length; i++) {
    sum6+=i   
}

result = sum6 / arr.length
console.log(result)



// 7. Вивести суму лише парних чисел в діапазоні від 30 до 80.

let sum7 = 0;

for (i=30; i<=80; i+=2) {
    sum7+=i
}

console.log(sum7)

// 8. Вивести всі числа в діапазоні від 100 до 200 кратні 3.

for (i=100; i<=200; i++) {
    if (i % 3 === 0) {
        console.log(i)
    }   
}  



// 9. Дано натуральне число. Знайти та вивести на сторінку всі його дільники.

const naturalNumber = prompt('Enter natural number, please');
const number = Number(naturalNumber);
 

for (div=1; div<=number; div++) {          
    if ( number % div === 0){
   console.log(div)  
    }    
}

// 10. Визначити кількість його парних дільників.

const naturalNumber2 = prompt('Enter natural number, please');
const number2 = Number(naturalNumber2);

let result10 = 0;

for (div=1; div<=number2; div++) {          
    if ( number2 % div === 0  && div % 2 === 0){
        result10 += 1
    }      
}

console.log(result10);


// 11. Знайти суму його парних дільників.

const naturalNumber3 = Number(prompt('Enter natural number, please'));

let result11 = 0;


for (div=1; div<=naturalNumber3; div++) { 
    if (naturalNumber3 % div === 0 && div % 2 === 0) {
        result11 += div;      
    }
}

console.log(result11);

// 12. Надрукувати повну таблицю множення від 1 до 10.

for (let multiplier1 = 1; multiplier1 <=10; multiplier1++) {
    for (let multiplier2 = 1; multiplier2 <=10; multiplier2++) {
        console.log(`${multiplier1} x ${multiplier2} = ${multiplier2 * multiplier1}`);
    }
}