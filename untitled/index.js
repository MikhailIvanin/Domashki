let number = 1;
let boolean = true;
let string = "Tekst";
let test = null;
console.log(typeof number);
console.log(number);
console.log(typeof boolean);
console.log(boolean);
console.log(typeof string);
console.log(string);
console.log(test);
console.log(typeof test);
let firstName = "Mikhail";
let lastName = "Ivanin";
let nameUser =prompt("Enter your name");
let ageUser =prompt("Enter your age");
let hello = nameUser + (" ") + "Тебе сейчас" + (" ") + ageUser;
alert(hello);
let country =confirm("ти з України?");
let age =confirm("тобі більше 21?");
let education =confirm("ти маєш вищу освіту?");
let secondCar =confirm("в тебе є друге авто?");
let child =confirm("в тебе є діти?");
let crash =confirm("чи були в тебе ДТП?");
let aaaaaa =confirm("чи є у твоему імені літера \"А\"?");
const a = A;
let preDecision = country && (!crash || age && education && child) || aaaaaa;
if (preDecision = true)
    decision = "true"
else
    decision = "false";
let decision1 = "Статус рішення -" + (" ") + decision + (" ") + "З повагою, страхова компанія" + (" ") + a;
alert(decision1);
