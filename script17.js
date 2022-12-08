document.addEventListener('DOMContentLoaded', () => {

    function pow(num, degree) {

        if (degree === 0)   //базовий сценарій
            return 1;
        
        if (degree < 0)
            return pow(num, degree + 1) / num;

        return pow(num, degree - 1) * num;   //рекурсія
    }

    console.log(pow(2, -5))
    console.log(pow(2, 5))
    console.log(pow(2, 0))

})