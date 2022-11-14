document.addEventListener('DOMContentLoaded', () => {

    const userYearOfBirth = Number(prompt('Вітаємо! Вкажіть, будь ласка, ваш рік народження', 'xxxx'));
    if (!userYearOfBirth) {
        alert(`Шкода, що Ви не захотіли ввести свій рік народження.`);
    }

    const currentYear = 2022;
    const userAge = currentYear - userYearOfBirth;
    const resultAge = (!isNaN(userAge)) ? `Ваш вік - ${userAge} роки` : '';



    const userСity = prompt('В якому місті ви проживаєте?');
    if (!userСity) {
        alert(`Шкода, що Ви не захотіли вказати ваше місто проживання.`);
    }

    const capitalCountry = {
        київ: 'України',
        вашингтон: 'США',
        лондон: 'Беликобританії',
    };

    const city = userСity ? userСity.toLowerCase() : "";
    
    let resultCity;

    if (userСity && capitalCountry[city]) {
        resultCity = `Ви проживаєте у столиці ${capitalCountry[city]}.`;
    } else if (!userСity) {
        resultCity = '';
    } else resultCity = `Ви живете у місті ${userСity}.`;


    const userFavoriteSport = prompt('Який ваш улюблений вид спорту?'); 
    if (!userFavoriteSport) {
        alert(`Шкода, що Ви не захотіли вказати ваш улюблений вид спорту.`);
    }

    const sportChampion = {
        плавання: 'Михайло Романчук',
        бокс: 'Олександр Усик',
        фехтування: 'Ольга Харлан',
    };

    const userSport = userFavoriteSport ? userFavoriteSport.toLowerCase() : "";
    const resulеtSport = sportChampion[userSport] ? `Круто! Хочеш стати як ${sportChampion[userSport]}?` : '';


    alert(`Дякуємо за відповіді.
    ${resultAge}
    ${resultCity}
    ${resulеtSport}`);  

})