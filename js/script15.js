document.addEventListener('DOMContentLoaded', () => {

    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

    const generateKey = (length, possible) => {
    
        let result = '';
        for (let i = 0; i < length; i++) {
            const casual = Math.floor(Math.random() * possible.length);
            result += possible[casual];
        }
        return result;
    };

    const key = generateKey(16, characters);
  
    console.log(key)
    
})