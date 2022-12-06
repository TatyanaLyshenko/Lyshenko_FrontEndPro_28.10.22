document.addEventListener('DOMContentLoaded', () => {

    const advancedCounter = () => {
        let privateCounter = 0;

        const changeValue = (val) => {
            privateCounter += val;
        }

        const sumValue = (val) => {
            changeValue(val);
        }

        const differenceValue = (val) => {
            changeValue(-val);
        }

        const value = () => {
            return privateCounter;
        }

        return {
            sumValue,
            differenceValue,
            value
        }
    }

    const usersCounter = advancedCounter();

    usersCounter.sumValue(3);  // 3
    usersCounter.sumValue(5);  // 8
    usersCounter.sumValue(20); // 28

    console.log(usersCounter.value())

    usersCounter.differenceValue (20); // 8
    usersCounter.differenceValue (5); // 3
    usersCounter.differenceValue (2);  //1
   
    console.log(usersCounter.value())

})