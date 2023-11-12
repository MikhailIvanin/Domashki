
/*Напишіть функцію, яка приймає масив чисел та повертає суму всіх елементів. */

function sum(numbers) {
    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    return sum;
}
    alert(sum([1, 2, 3, 4, 5]));

/* Створіть об'єкт "користувач" з полями "ім'я", "вік" та "статус". Напишіть функцію, яка приймає цей об'єкт і
повертає рядок у форматі "Ім'я: [ім'я], Вік: [вік], Статус: [статус]".*/

let userObject = {
    userName:'Name',
    userAge: 1,
    userStatus: 'Status',
};

function showObject(object) {
    for (let key in userObject) {
        console.log(`${key} - ${userObject[key]}`);
    }
}
    console.log(showObject(userObject))


/* Напишіть функцію, яка приймає рядок і повертає новий рядок із перевернутим порядком символів.  */


function reverseStr(str) {
    return str.split("").reverse().join("");
}

console.log(reverseStr("1234"));

/* Створіть об'єкт"автомобіль" з полями "марка", "модель" та "рік випуску". Напишіть функцію, яка приймає цей об'єкт
і виводить інформацію про автомобіль у консоль.*/

let car = {
    mark:'bmw',
    model: 'X5',
    age: '2012',
};
function showCar(car1) {
    for (let key in car) {
        console.log(`${key} - ${car[key]}`);
    }
}
console.log(showCar(car))

/* Створіть просту гру "Вгадай число". Генеруйте випадкове число від 1 до 100, а потім пропонуйте користувачеві вгадати
це число, підказуючи "більше" або "менше" до тих пір, поки користувач не вгадає число. Використовуйте  prompt для того,
 щоб запитати у коритсувача його варіант, та  alert для виведення підказок (більше, менше) */

let prNum, tempOut;
prNum = Math.round(Math.random() * 100);

function guessNum() {
   while (true){
       let num = prompt('Введите число');
       if ( num < 0 || num > 100){
           alert('Не корректное число')
       }
       else if (num < prNum){
           alert('Мало')
       }
       else if (num > prNum){
           alert('Много')
       }
       else {
           alert('Верно!')
           return
       }
   }
}
guessNum()