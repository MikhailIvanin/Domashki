let number = 1
if (number >=0){
    console.log("позитивним")
}
else {
    console.log("негативним")
}
let word = "word"
if (word != null && typeof word !== "undefined") {
    console.log(word)
}
if (!word) {
    console.log("Пусто");
}
let number1 = 20
let number2 = 2
if (number1 % number2 == 0 && number1 % 2 ==0 ){
    console.log("кратнопарное")
}
else {
    console.log("noup")
}
for (let i = 0; i <= 100; i++){
    console.log(i)
}
for (let i = 100; i >= 1; i--){
    console.log(i)
}
let j = 5
for (let i= 1; i < 10; i++){
    console.log(j * i)
}
for (let i = 1; i <= 50; i++){
    if (i % 2 == 0){
        console.log(i)
    }
}
let zvezda = ''
for (let i = 1; i <= 5; i++){
   for (let j = 1; j <= i; j++){
       zvezda += '*';
   }
    zvezda += '\n'
}
console.log(zvezda)

let tablica = "";

    for (let i = 1; i < 11; i++) {
        for (let j = 1; j < 11; j++) {
            tablica  += (j*i) + " ";
        }
        console.log(tablica);
        tablica = '';
    }


