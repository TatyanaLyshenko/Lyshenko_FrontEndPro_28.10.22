
    const str1 = 'Hello!';
    const str2 = 'What is your name?';
    const str3 = 'How are you?';

    console.log(`${str1} ${str3} ${str2}`);

document.addEventListener('DOMContentLoaded', () => {
    const str1 = prompt('What is your name?');
    const str2 = prompt('Where are you from?');
    const str3 = prompt('How old are you?');

    alert(`${str1} ${str2} ${str3}`);
})
