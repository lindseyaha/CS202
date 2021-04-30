const form = document.querySelector('.signup-form');
// const name = document.querySelector('#name');

const feedback = document.querySelector('.feedback');

form.addEventListener('submit', e => {
    e.preventDefault();
    //console.log('form submitted');

    //console.log(form.name.value);

    //variables
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const cpassword = form.cpassword.value;
    const phone = form.phone.value;

        //regular expression
        const namecheck = /^[A-Za-z_-]{3,20}$/;
        //email@gmail.com
        const emailcheck = /^[a-z_]{3,}@[a-z]{3,}[.]{1}[a-z]{}$/;
        const passwordcheck = /^[A-Za-z0-9!@#%&*]{3,}$/;
        const phonecheck = /^[0-9]{10}$/;

        if (namecheck.test(name)){
            //feedback
            feedback.innerHTML = '';
            // alert('Valid Name')
        }
        else{
            //alert('Invalid Name')
            feedback.innerHTML = 'Invalid Password';
            form.name.style.border = '1px solid red';
            return false;
        }
        if (emailcheck.test(email)){
            feedback.innerHTML = '';
        }
        else {
            feedback.innerHTML = 'Invalid Email';
            form.name.focus();
            return false;
        }

        if (isNaN(phone)){
            feedback.innerHTML = '';
        }
        else {
            feedback.innerHTML = 'Invalid Number';
        }

        if(password.match(cpassword)){
            feedback.innerHTML = ''
        }
        else{
            feedback.innerHTML = 'Password does not match';
        }

        //form submit
        form.submit();
});

//example password

// const password = 'skyfall';
// const pattern = /^[A-Za-z0-9!@&*^%]{3,}$/;

// let result = pattern.test(password);

// if (result) {
//     //feedback
//     console.log('Password is correct')
// }
// else{
//     //feedback
//     console.log('Password is incorrect')
// }