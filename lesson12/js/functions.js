// function declaration
/* function functionName(){
    //statement
} */
//call the function
//functionName();

// function showAlert(){
//     alert('Hello, World');
// }

// showAlert();
// showAlert();
// showAlert();

// function greet(){
//     console.log('Hello Everyone');
// }

// greet();
// greet();
// greet();


//function expression
//speak(); - cant be called before function
// const speak = function (){
//     console.log('Good day!')
// }

// speak();
// speak();
// speak();

// arguments & parameters

// const speak = function (name = 'Benjamin',time = 'Day'){
//     console.log('Good ${time} ${name}')
// }

// speak('Justice', 'morning');
// speak();

// returning values

const calcArea = function(radius){
    let area = 3.14 * radius ** 2;
    console.log(area)

    return area;
}
let a = calcArea(5);
console.log(a);

// calcArea(5);

