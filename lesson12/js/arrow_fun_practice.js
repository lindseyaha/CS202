// practise arrow functions

//1.
// const bill = function(products, tax){
//     let total = 0;
//     for (let i = 0; i < products.length; i++){
//         total += products[i] * tax;
//     }
//     return total;
// }

//arrow function
// const bill = (products, tax) => {
//     let total = 0;
//     for (let i = 0; i < products.length; i++){
//         total += products[i] * tax;
//     }
//     return total;
// }

// console.log(bill([32,22,12],0.2));

// //2.
// // let addNum = function (Num1) {
// //     return Num1 * Num1
// // }

// //arrow function
// let addNum = (Num1) => {
//     return Num1 * Num1
// }


// //3.
// let addNum = function (Num1, Num2) {
//     let add = Num1 * Num2;
//     return add;
// }

//arrow function
let addNum = (Num1, Num2) => {
    let add = Num1 * Num2;
    return add;
}


// //4.
// function addToTen(num) {
//     return 10 + num;
// }


// // 5.
// function divideUs(num1, num2){
//     return num1 / num2;
// }



// // 6.
// function sum(a, b) {
//     return a + b;
// }

const sumAdd 


// // 7.
// const people = [
//     {
//         fName: 'John',
//         lName: 'Smith'
//     },
//     {
//         fNmae: 'James',
//         lName: 'Rice'
//     }
// ];


// console.log(people.map(function (person) {
//     return person.fName;
// }));

console.log(people.map(person => person.fName;))

// 8.
// const smartPhones = [
//     { name: 'iphone', price: 649 },
//     { name: 'Galaxy S6', price: 576 },
//     { name: 'Galaxy Note 5', price: 489 }
// ];

// var prices = smartPhones.map(function (smartPhone) {
//     return smartPhone.price;
// });

// console.log(prices); // [649, 576, 489]













