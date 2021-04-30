// /* DOM */

// const para = document.querySelector('p');

// console.log(para);

// //id
// const para1 = document.querySelector('#page-title');
// console.log(para1);

// //class

// const content = document.querySelector('.content');

// console.log(content);

// //contextual element
// const para2 = document.querySelector('div.error');
// console.log(para2);

// //all p tags
// const paras = document.querySelectorAll('p');
// // console.log(paras);

// paras.forEach(para => {
//     console.log('para');
// })

/* Ways to Query the DOM ====================== */

//Element by id
const title = document.getElementById('page-title');
console.log(title);

//Element by class name

const para3 = document.getElementsByClassName('content');
console.log(para3);

//Element by tagname
const para4 = document.getElementsByTagName('p');
console.log(para4);