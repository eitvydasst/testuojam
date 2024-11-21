"use strict";

//  import countries from './countries.js';

//  function updateLocalStorage(){
//     const existingData = localStorage.getItem("countries");
//     if (!existingData) {
//         const newData = countries.map((country, index) =>(
//         ({ countryNum: index +1,
//             countryName: country.name?.common || "data not found",
//             capital:country.capital?.[0] || "data not found"
//         })));
//         localStorage.setItem("countries", JSON.stringify(newData));

//     } else {
//         console.log("Salys jau egzistuoja LS");
//     }
//  }

//  function showData() {
//     const storedData = localStorage.getItem("countries");
//     if (storedData) {
//         const parsinam = JSON.parse(storedData);
//         console.log("Turima informacija apie salis", parsinam);
//     } 
//     else {
//         console.log("Data n/a in LS");
//     }
//  }
//  updateLocalStorage();


// Pirma

let skaicius = 1;
do {
    console.log(skaicius++);
} while(skaicius <= 5);


// Antra

const masyvas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const nelyginiai = (array) => array.filter(value => value % 2 !== 0);
console.log('Nelyginiai skaiciai: ', nelyginiai(masyvas));


// Trecia

const TV = {
    brand: 'LG',
    size: 55,
    price: 1999.99,
};
const calculateDiscount = (tv) => parseFloat((tv.price - (tv.price * 25 / 100)).toFixed(2));
let discountedPrice = calculateDiscount(TV);
console.log(discountedPrice);