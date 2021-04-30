// if statements
//if, else if, 
// valid = false;

// if(false){
//     console.log('Run your code');
// } else if (true){
//     console.log('Run your code');
// } else {
//     console.log('Run your code');
// }

// const age = 20;

// if(age > 20) {
//     console.log('You are older than 20 years old')
// } else if (age === 20){
//     console.log('you are equal to the age group');
// } else {
//     console.log('you are less than the age group');
// }

//password

// cont password = 'password';

// if (password.length >= 8) {
//     console.log('you password is fairly strong');
// } else if (password.length >= 12){
//     console.log('your password is very strong');
// } else {
//     console.log('your password is very weak');
// } 

// if (password === 'password') {
//     console.log('you password is correct');
// }



//Logical operators || OR,,, && AND,, ! NOT

const email = 'justice@justicebanson.com';

if(email.length >= 12 && email.includes('@')){
    console.log('Your email is correct!');
} else if (email.length >= 8 || email.includes('@')){
    console.log('Your email is fairly strong')
} else{
    console.log('Your email is weak')
}

//password != conformpassword

/* if (!user){
    console.log('You cannot log into the account');
} */

console.log(!true);
console.log(!false);