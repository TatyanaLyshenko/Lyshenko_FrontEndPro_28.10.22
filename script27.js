document.addEventListener('DOMContentLoaded', () => {

    function getPasswordFromUser(success, fail) {
        let password = prompt("Password?", '');
        if (password === "rockstar") success();
        else fail();
    }
      
    let user = {
        fName: 'Andrew',
      
        loginSuccess() {
          alert(`${this.fName} logged in`);
        },
      
        loginFail() {
          alert(`${this.fName} failed to log in`);
        },
      
    };
      
    getPasswordFromUser(user.loginSuccess.bind(user), user.loginFail.bind(user));  // 1-й варіант

    getPasswordFromUser(() => user.loginSuccess(), () => user.loginFail());  //  2-й варіант
})

//  getPasswordFromUser отримав функції loginSuccess() і loginFail() окремо від об’єкта, результат  – this втратився.

// 1-й варіант рішення - “прив’язаний варіант” функції getPasswordFromUser, з виправленим this=user.

// 2-й варіант - використати функцію обгортку.