/* Adding and Changing Page Content ===================  */

// const para = document.querySelector('p');

// innerText
// console.log(para.innerText);
// para.innerText += 'Dawson is Awesome';

//change all the p tags
// const paras = document.querySelectorAll('p');

// paras.forEach(para => {
//     //para.innerText = 'New Text';
//     para.innerText += 'New Text'

//     //textContent
//     para.textContent = 'New Content';
// });

//inner HTML

// const title = document.querySelector('#page-title');
// title.innerHTML = `<p>The New HTML</p>`

// const content = document.querySelector('content');

// const people = ['Dawson', 'Nick', 'Lindsey', 'Nial', 'Benjamin', 'Audrey'];

// people.forEach(person => {
//     content.innerHTML += `<p>${person}</p>`
// });

/* Changing style==================================== */

const title = document.querySelector('#page-title');

console.log(title.style);
title.style.color = 'blue';
title.style.fontSize = '50px';
title.style.border = '1px solid #ccc';
title.style.textDecoration = 'line-through';
title.style.textAlign = 'center';





/* Add and Remove Classes ===================================  */

const content = document.querySelector('content');
content.classList.add('content');
content.classList.remove('content');

