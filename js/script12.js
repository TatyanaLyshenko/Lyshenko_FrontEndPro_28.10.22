document.addEventListener('DOMContentLoaded', () => {

    const userArray = [];
    const lengthtArray = prompt('Enter the length of array');

    for (let i = 0; i < lengthtArray; i++) {
        userArray[i] = prompt(`Enter ${i+1} element of array`)
        };

    console.log(userArray);


    const stringArray = [];
    const numberArray = [];
    userArray.map((element) => {
        if (isNaN(element)) {
            stringArray.push(element);
        } else {
            numberArray.push(element);
        }
    });
    console.log(stringArray);
    console.log(numberArray);

    const sortUserArray = numberArray.sort((a,b) => a - b).concat(stringArray.sort());
    console.log(sortUserArray);


    const deleteElementUserArray = sortUserArray.splice(1, 3);
    console.log(deleteElementUserArray);   //  an array of deleted elements
})