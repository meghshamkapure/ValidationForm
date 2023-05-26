
function validateFirstName() {
    var firstNameField = document.getElementById("firstname");
    var errorElement = firstNameField.parentNode.nextSibling.nextSibling;
    var firstName = firstNameField.value.trim();
    if(firstName === ""){
        errorElement.innerHTML = "Please Enter first name";
    }
    else{
        errorElement.innerHTML = "";
    }
}

function validateLastName() {
    var lastNameField = document.getElementById("lastname");
    var errorElement = lastNameField.parentNode.nextSibling.nextSibling;
    var lastName = lastNameField.value.trim();

    if (lastName === "") {
        errorElement.innerHTML = "Please Enter last name";
    } else {
        errorElement.innerHTML = "";
    }
}

function validateEmail() {
    var emailField = document.getElementById("emailid");
    var errorElement = emailField.parentNode.nextSibling.nextSibling;
    var email = emailField.value.trim();
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "" || !emailRegex.test(email)) {
        errorElement.innerHTML = "Please Enter emailid";
    } else {
        errorElement.innerHTML = "";
    }
}


function validatePhoneNumber() {
    var phoneField = document.getElementById("PhoneNo");
    var errorElement = phoneField.parentNode.nextSibling.nextSibling;
    var phoneNumber = phoneField.value.trim();
    var phoneRegex = /^\d{10}$/;

    if (phoneNumber === "" || !phoneRegex.test(phoneNumber)) {
        errorElement.innerHTML = "Please Enter PhoneNo";
    } else {
        errorElement.innerHTML = "";
    }
}


function validateForm() {
    // var isValid = true;

   
    // isValid = validateFirstName() && isValid;
    // isValid = validateLastName() && isValid;
    // isValid = validateEmail() && isValid;
    // isValid = validatePhoneNumber() && isValid;

    // return isValid;
    
}


document.getElementById("firstname").addEventListener("input", validateFirstName);
document.getElementById("lastname").addEventListener("input", validateLastName);
document.getElementById("emailid").addEventListener("input", validateEmail);
document.getElementById("PhoneNo").addEventListener("input", validatePhoneNumber);
