
/* Events Basics ================  */

//addEventListener

// const button = document.querySelector('.btn');

// button.addEventListener('event', function)

// button.addEventListener('click', () => {
//     console.log('you click me');
// })

const items = document.querySelectorAll('li');

items.forEach(item => {
    item.addEventListener('click', e => {
        // console.log('item click');
        // console.log(e);
        // console.log(e.target);
        // e.target.style.textDecoration = 'line-through';
        e.target.remove();
    });
});




/* Creating and Removing Elements ================  */

const ul = document.querySelector('ul');
const button = document.querySelector('.btn');


button.addEventListener('click', () =>{
    const li = document.createElement('li');
    li.textContent = 'something new';
    ul.append(li);
});

ul.addEventListener('click', e => {

    // console.log(e);
    if (e.target.tagName === 'LI') {
        e.target.remove();
    }
});