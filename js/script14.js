document.addEventListener('DOMContentLoaded', () => {
  
    const array = [1, 2, 3, 4, 5, 6, 7]; 
    

    const removeElement = (array, item) => {
        while (array.includes(item)) {
        const index = array.findIndex((element) => element===item);
        array.splice(index, 1);
        }
    } 
    
    removeElement(array, 5);
    console.log(array);
})