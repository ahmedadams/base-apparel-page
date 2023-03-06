// 1. Goal - allow users to sign up for the company announcements and updates via email. Notify the user when they submitted successfully and show error if they submitted invalid email.

// 2. Designing script: 
// - Listen for the click event on submit button to check user input 
// - Validate the value of the input field
// - If the value user inputed is valid show the success message
// - Otherwise show the error message 
// - hide success message after 3 seconds 
// - hide error message if the emal is valid

window.onload = function () {
let body = document.getElementsByTagName('body')[0];
let emailInput = document.getElementsByClassName('email-field')[0];
let submit = document.getElementById('submit');
let errorMessage = document.getElementsByClassName('error-message')[0];
let errorIcon = document.getElementsByClassName('error-icon')[0];
let successMessage = document.getElementsByClassName('success-message')[0];

function emailIsValid (email) {
    return /\S+@\S+\.\S+/.test(email);
}

let hideSuccessMessage = function () {
    successMessage.classList.remove('success-visible');
};

let hideErrorMessage = function () {
    errorMessage.classList.remove('error-icon-visble');
    errorIcon.classList.remove('error-icon-visble');
};

let showSuccessMessage = function() {
    successMessage.classList.add('success-visible');
    setTimeout(() => {
        hideSuccessMessage();
      }, 3000);
};


let addErrors = function () {
    errorMessage.classList.add('error-icon-visble')
    errorIcon.classList.add('error-icon-visble');
};

// To check if the email valid or not
submit.addEventListener('click', function(){
    if (emailIsValid(emailInput.value)) {
        showSuccessMessage();
        hideErrorMessage();
    } else {
        addErrors();
    }
});

}


