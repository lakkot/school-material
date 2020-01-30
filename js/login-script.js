//-------validation of email and password--------
//select input from html
var $emailInput = document.querySelector('#email-input');
var $passwordInput = document.querySelector('#password-input');

//build a function that will create error messages
function showErrorMessage($input, message) {
  // go to parent element of where the message should be displayed
  var $container = $input.parentElement;
  //delete the defalut browser messages - if a message shows up, delete it
  var error = $container.querySelector('.error-message');
  if (error) {
    $container.removeChild(error);
  }
  //add your own message (error) to show if the message isn't empty
  if (message) {
    var error = document.createElement('div');
    error.classList.add('error-message');
    error.innerText = message;
    $container.appendChild(error);
  }
}


//validate email - must have @ and . sign
function validateEmail() {
  var value = $emailInput.value;

  if (!value) {
    showErrorMessage($emailInput, 'e-mail is required');
    return false;
  }
  if (value.indexOf('@') === -1 && value.indexOf('.') === -1) {
    showErrorMessage($emailInput, 'enter a valid e-mail address');
    return false;
  }
  showErrorMessage($emailInput, null);
    return true;
}

//validate password - must have 8 or more characters
function validatePassword() {
  var value = $passwordInput.value;

  if(!value) {
    showErrorMessage($passwordInput, 'password is required');
    return false;
  }

  if(value.length < 8) {
    showErrorMessage($passwordInput, 'password must be at least 8 characters long');
    return false;
  }

  if($passwordInput, null) {
    return true;
  }
}



$emailInput.addEventListener('input', validateEmail);
$passwordInput.addEventListener('input', validatePassword);
