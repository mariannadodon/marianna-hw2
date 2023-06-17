/*tasks1. Ви прийшли в Макдональдз з трьома друзями.
   * Всі вони хочуть зʼїсти гамбургер. Ви хочете зʼїсти гамбургер з картоплею.
   * Реалізувати код, який буде перевіряти, що якщо всім вистачає гамбургерів і картоплі,
   * то виводити текст "Ми поїли" в консоль. Якщо на всіх не вистачає їжі,
   * то виводити в консоль текст "Ми йдемо в інше кафе"
   *(Змінні типу інтеджер містять кількість продуктів в наявності у вигляді вхідних даних)
*/

let peopleQuantity = 4;
let hamburgersQuantity = 4;
let friesQuantity = 2;

let isEnoughFood = hamburgersQuantity >= peopleQuantity && friesQuantity >= peopleQuantity;
if (isEnoughFood) {
    console.log('We ate!')
} else {
    console.log('We go to another cafe')
}

/* tasks2. Напишіть умовну конструкцію if, що перевіряє, чи знаходиться значення ціни товару між 1000 та 1900 включно.
    Результат виводити в консоль.
*/

let productPrice = 1555;

if (1000 <= productPrice && productPrice <= 1900) {
    console.log('The price of the product is in the specified range')
}

/*tasks3.  Напишіть конструкцію if, щоб перевіряє, чи значення ціни товару не знаходиться між 1000 та 1900 включно.
    Реалізуйте два варіанти, один з оператором НЕ !, а інший без цього оператора.
    Результат виводити в консоль.
*/
let productPrice2 = 1;

if (productPrice2 <= 1000 && 1900 >= productPrice2) {
    console.log('the price of the product is not in the specified range')
}

/*tasks4.  За номером пори року вивести назву цієї пори року використовуючи оператор if-else-if
    Результат виводити в консоль.
*/

let seasonNumber = 4;

if (seasonNumber == 1) {
    console.log('The season is winter');
} else if (seasonNumber == 2) {
    console.log('The season is spring');
} else if (seasonNumber == 3) {
    console.log('The season is summer');
} else if (seasonNumber == 4) {
    console.log('The season is autumn');
}

/* tasks5.  Задано 3 числа (a, b, c), які не рівні між собою.
    Визначити середнє мід цими трьома числами
    (не середнє арифметичне значення, а яке з трьох заданих чисел среднє за значенням) використовуючи оператор if-else.
    Використати вкладені оператори if
    Результат виводити в консоль.
*/


let number1 = 1;
let number2 = 8;
let number3 = 4;

if ((number1 < number2) && (number2 < number3)) {
    console.log(number2);
} else if ((number2 < number1) && (number1 < number3)) {
    console.log(number1);
} else if ((number1 < number3) && (number3 < number2)) {
    console.log(number3);
}

/*6.  Задано номер дня тижня.
    За заданим номером вивести назву дня тижня використовуючи switch.
    Результат виводити в консоль.
*/

let dayN = 6;

switch (dayN) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
};

/*7.  За допомогою switch реалізуйте обчислення виразу, передаючи у switch, як параметр, символ математичної операції.
    Математичні операції для обчислення: "+", "-", "*", "/".
    Результат виводити в консоль.  */


let numberA = 6;
let numberB = 2;
let decision = '/'

switch (decision) {
    case '+':
        console.log(numberA + numberB);
        break;
    case '-':
        console.log(numberA - numberB);
        break;
    case '*':
        console.log(numberA * numberB);
        break;
    case '/':
        console.log(numberA / numberB);
        break;
}


/*8.*  Використовуючи властивості рядків (тип string), та регулярний вираз (regular expression) видалити голосні букви зі слова. */

function removeСharacter(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return str
        .split('')
        .filter(char => !vowels.includes(char))
        .join('');
}

console.log(removeСharacter('Marianna'));



/*9.*  Використовуючи оператор if реалізувати логіку переводу метрів в кілометри,
    так щоб в консоль виводився результат обчислень з правильним закінченням.
    Наприклад: 1000 метрів це 1 кілометр;  32 метри це 0,032 кілометра і т.д.

    Підказка(https://ukr-lifehacks.ed-era.com/rozdil-9/zvyazok_chislivnykiv)
*/


let meters = 5000;
let kilometers = meters / 1000;

let lastDigit = Math.round((meters % 10000) / 1000);

let metersInKilometrs = meters % 1000;

if (metersInKilometrs > 0) {
    console.log(kilometers, 'кілометра');
} else if (lastDigit == 1) {
    console.log(kilometers, "кілометр");
} else if (lastDigit >= 2 && lastDigit <= 4) {
    console.log(kilometers, "кілометра");
} else if (lastDigit >= 5) {
    console.log(kilometers, "кілометрів");
}

