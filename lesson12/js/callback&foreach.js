// callbacks & forEach

const myFunc = (callbackFunc) => {
    let value = 50;

    callbackFunc(value);
}

myFunc((value) => {
    console.log(value);
});



//callback Function Example

let people = ['Benjamin', 'Nick', 'Audrey', 'Nial', 'Colin', 'Lindsey']

// people.forEach((function(person)){
//     //console.log('Something');
//     console.log(person);
// });

// people.forEach((person,index)=> {
//     //console.log('Something');
//     console.log(index,person);
// });

//call fucntion

const logPerson = (person,index) => {
    console.log(`${index} - Hello ${person}`);

    let html = `<li> ${index} - Hello ${person}</li>`
    document.write(html);
}

people.forEach(logPerson);