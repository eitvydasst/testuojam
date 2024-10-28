"use strict";

// const firstname = "Jonas";
// console.log(firstname);

// let age = 25;
// console.log(age);

// console.log(firstname, age);

// console.log(typeof firstname);
// console.log(typeof age);

// const sum = "90"+ 1;
// console.log(sum);

// let isStudent = true;
// console.log(typeof isStudent);

// let word1 = "Labas";
// let word2 = "Labukas";
// let word3 = "Ate";

// console.log(word1, word2, word3);
// console.log(word1 + " Ona! " + word2 + " Jonai");
// console.log(`${word1} Ona! ${word2}, Jonai.`);

// console.log(word2.length);
// console.log(word2.charAt(2));
// console.log(word1.charAt(word1.length - 1));


// const array1 = ['y', 1, 'p', 9, 'oh'];
// const array2 = [1, 8, 'v', 'd'];
// const array3 = array1.concat(array2);

// console.log(array3);

// const str = 'The quick brown fox jums over the lazy dog.';
// console.log(str.slice(31));

// console.log(str.split(' '));

// console.log(str.repeat(6));

// const regex = /[^\w\s']/g;
// console.log(str.search(regex));

// console.log(str.toUpperCase());

// const str2 = 'The quick brown fox jums over the lazy dog.      ';
// console.log(str2);

// console.log(str2.trim());

// console.log(str.startsWith('The'));


// let inputValue = "36";

// let countingSum = parseInt(inputValue) + 4;
// let countingSum1 = + inputValue + 4;

// console.log(countingSum1);
// console.log(countingSum);

// let countingSum3 = parseFloat(inputValue) + 4;
// console.log(countingSum3);

// let countingSum4 = Number(inputValue) + 4;
// console.log(countingSum4);

// let countingSum5 = inputValue * 1 + 4;
// console.log(countingSum5);

// let countingSum6 = inputValue / 1 + 4;
// console.log(countingSum6);

// let countingSum7 = inputValue - 0 + 4;
// console.log(countingSum7);

// let countingSum8 = ~inputValue + 4;
// console.log(countingSum8);

// let countingSum9 = Math.floor(inputValue) + 4;
// console.log(countingSum9);

// let countingSum10 = Math.ceil(inputValue) + 4;
// console.log(countingSum10);

// let countingSum11 = Math.round(inputValue) + 4;
// console.log(countingSum11);

// let season = "Fall"; // pirma uzduotis
// season = "Winter";
// console.log(season);


// let skaicius = 10; //antra uzduotis
// console.log(skaicius);
// skaicius++;
// console.log(skaicius);
// skaicius++;
// console.log(skaicius);


// let skaicius2 = 10; // trecia uzduotis
// console.log(skaicius2);
// --skaicius2;
// console.log(skaicius2);
// --skaicius2;
// console.log(skaicius2);
// --skaicius2;
// console.log(skaicius2);

// let stringValue = "123456789"; // ketvirta uzduotis
// let numberValue = Number(stringValue);
// console.log(numberValue);
// console.log(typeof numberValue);

// let stringValue2 = "123456789";
// let numberValue2 = ~~stringValue2;
// console.log(numberValue2);
// console.log(typeof numberValue2);


// let firstVariable = 10
// let secondVariable = 15;
// let result = firstVariable + secondVariable;
// console.log(result);

// const Petras = {
//     svoris: 96,
//     ugis: 1.92
// };

// const Jonas = {
//     svoris: 70,
//     ugis: 1.86
// };

// const KmiPetro = Petras.svoris / (Petras.ugis * Petras.ugis);
// const KmiJono = Jonas.svoris / (Jonas.ugis * Jonas.ugis);

// console.log('Petro KMI yra: ${KmiPetro.toFixed(2)}');
// console.log('Jono KMI yra: ${KmiJono.toFixed(2)}');

 ////// užduotys 
let text = "HelloWorld"; 
if (text.length > 5) {
    console.log("Tekstas yra ilgesnis nei 5 simboliai.");
} else {
    console.log("Tekstas yra 5 ar mažiau simbolių ilgio.");
}

let number = -10;
if (number > 0) {
    console.log("Skaičius yra teigiamas.");
} else if (number < 0) {
    console.log("Skaičius yra neigiamas.");
} else {
    console.log("Skaičius yra nulis.");
}

let side1 = parseFloat(prompt("Įveskite pirmos kraštinės ilgį:"));
let side2 = parseFloat(prompt("Įveskite antros kraštinės ilgį:"));
let side3 = parseFloat(prompt("Įveskite trečios kraštinės ilgį:"));

let perimeter = side1 + side2 + side3;
alert("Trikampio perimetras yra: " + perimeter);