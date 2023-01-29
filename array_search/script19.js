document.addEventListener('DOMContentLoaded', () => {

    const arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

    // Знайти суму та кількість позитивних елементів.

    const sumAndCount = (array) => {
        const initial = {
            sum: 0,
            count: 0
        };

        return array.reduce((acc, element) => {
            if (element > 0) {
                return {
                  sum: acc.sum + element,
                  count: acc.count + 1,  
                };
            }

            return acc;
        }, initial);
    };

    console.log(`сумa та кількість позитивних елементів`, sumAndCount(arr))

    //Знайти мінімальний елемент масиву та його порядковий номер.

     const findMinElement = (array) => {
        let index = 0;
        let minElement = array[0];

        array.forEach((element, i) => {
            if (element < minElement) {
                index = i;
                minElement = element;
            }

        });
        return {
            minElement,
            index
        }
    };
    

    console.log(`мінімальний елемент масиву та його порядковий номер`, findMinElement(arr))   

    // Знайти максимальний елемент масиву та його порядковий номер.

    const findMaxElement = (array) => {
        let index = 0;
        let maxElement = array[0];

        array.forEach((element, i) => {
            if (element > maxElement) {
                index = i;
                maxElement = element;
            }

        });
        return {
            maxElement,
            index
        }
    };

    console.log(`максимальний елемент масиву та його порядковий номер`, findMaxElement(arr))
    
    // Визначити кількість негативних елементів.

    const negativeElements = arr.filter(element => element < 0).length
    console.log(`кількість негативних елементів`, negativeElements)


    // Знайти кількість непарних позитивних елементів. Знайти суму непарних позитивних елементів.

    const positiveElement = arr.filter( element => element > 0 );

    const oddPositivElenent = (array) => {
        const initial = {
            sum: 0,
            count: 0
        };
  
        return array.reduce((acc, element) => {
            if (element % 2 !== 0) {
                return {
                sum: acc.sum + element,
                count: acc.count + 1,  
                };
            }

            return acc;
        }, initial);
            
    };

    console.log(`сумa та кількість непарних позитивних елементів`, oddPositivElenent(positiveElement))




    // Знайти кількість парних позитивних елементів. Знайти суму парних позитивних елементів.
  
    const pairPositiveElement = (array) => {
        const initial = {
            sum: 0,
            count: 0
        };
  
        return array.reduce((acc, element) => {
            if (element % 2 === 0) {
                return {
                sum: acc.sum + element,
                count: acc.count + 1,  
                };
            }

            return acc;
        }, initial);
            
    };

    console.log(`сумa та кількість непарних позитивних елементів`, pairPositiveElement(positiveElement))
    



    // Знайти добуток позитивних елементів.

    const multyOfPositiveElement = positiveElement.reduce( (acc, element) => acc * element, 1);
    console.log(`добуток позитивних елементів`, multyOfPositiveElement)


    // Знайти найбільший серед елементів масиву, ост альні обнулити.


    const maxElement = Math.max(...arr);;
    const maxElementInArray = arr.map((element) => element === maxElement ? maxElement : 0);
    console.log(`найбільший серед елементів масиву`, maxElementInArray);

})