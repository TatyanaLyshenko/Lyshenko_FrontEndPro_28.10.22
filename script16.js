document.addEventListener('DOMContentLoaded', () => {

    // 1. Дано масив з елементами різних типів. 
    // Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.

    const arrDifferentTypes = [1, 5, 'hello', 3, 'ok'];

    const arrOnlyNumbers = arrDifferentTypes.filter(element => typeof element === 'number');

    const averageOfNumbers = arrOnlyNumbers.reduce((acc, currentElement) => acc + currentElement, 0) / arrOnlyNumbers.length
    
    console.log(averageOfNumbers)


    // 2. Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak.
    //  У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).
    // Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.


    const mathOperation = prompt('Enter mathematical operation ( +, -, *, /, %, ^ )');

    const userNumberOne = Number(prompt('Enter the 1-st number, please'));
    const UserNumberTwo = Number(prompt('Enter the 2-nd number, please'));

    const OPERATIONS = {
        PLUS: "+",
        MINUS: "-",
        MULTY: "*",
        DIV: "/",
        PERCENT: "%",
        DEGREE: "^",
    };

    const onPlus = (x, y) => x + y;
    const onMinus = (x, y) => x - y;
    const onMulty = (x, y) => x * y;
    const onDiv = (x, y) => x / y;
    const onPercent = (x, y) => (x / y) * 100;
    const onDegree = (x, y) => x ** y;

    const calculateMessage = (x, y, znak) => (result) => {
        return `${x} ${znak} ${y} = ${result}`;
      };

    function doMath(x, znak, y) {
        if (!znak || znak === '/' && y === 0) {
            return 'Error'
        }
        const resultMessage = calculateMessage(x, y, znak);
        switch (znak) {
            case OPERATIONS.PLUS:
                return resultMessage(onPlus(x, y));
            case OPERATIONS.MINUS:
                return resultMessage(onMinus(x, y));
            case OPERATIONS.MULTY:
                return resultMessage(onMulty(x, y));
            case OPERATIONS.DIV:
                return resultMessage(onDiv(x, y));
            case OPERATIONS.PERCENT:
                return resultMessage(onPercent(x, y));
            case OPERATIONS.DEGREE:
                return resultMessage(onDegree(x, y));

            default:
                throw Error(`Please try again`);
        }
    }

    console.log(doMath(userNumberOne, mathOperation, UserNumberTwo));


    // 3.Написати функцію заповнення даними користувача двомірного масиву.
    //  Довжину основного масиву і внутрішніх масивів задає користувач.
    //  Значення всіх елементів всіх масивів задає користувач.

    const lengthMainArray = prompt('Enter the length of main array');

    function userArrayTwoDimensional() {
        const userArray = [];
        
        for (let i = 0; i < lengthMainArray; i++) {
            userArray[i] = [];
            const lengthSubarray = prompt(`Enter the length of ${i+1} iner array`);

            for (let j = 0; j < lengthSubarray; j++) {
                userArray[i][j] = prompt(`Enter ${j+1} element of iner array`)
            }
        }
        return userArray;      
    }
    
    console.log(userArrayTwoDimensional());



    // 4. Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом.
    //  'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.

    const userContent = prompt('Введіть дані, будь ласка');
    const symbolsForDelete = prompt('Введіть символи, які треба видалити з введених вище даних');
    const symbols = [...symbolsForDelete];
    
    const deleteSymbols = (content, elements) => [...content].filter(element => !elements.includes(element)).join('');

    console.log(deleteSymbols(userContent, symbols));

})