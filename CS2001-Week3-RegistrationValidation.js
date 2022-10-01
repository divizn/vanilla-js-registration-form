//Let's define some variables to represent the form data
//At the beginning, let's assume the form is not valid
var formValid=false;
var username;
var email;
var password;
var repPassword;
var userType;
var tosCheckBox;

//Function to read the form
function readForm(){
    username = document.getElementById("name").value
    email = document.getElementById("email").value
    password = document.getElementById("password").value
    repPassword = document.getElementById("password2").value
    tosCheckBox = document.getElementById("tos").checked
    var buyerCheckBox = document.getElementById("buyer");
    var sellerCheckBox = document.getElementById("seller");
    userType = [];
    if(buyerCheckBox.checked)
        userType.push(buyerCheckBox.value);

    if(sellerCheckBox.checked)
        userType.push(sellerCheckBox.value);
}

//Function to validate the form
function validateForm() {
    formValid = false;
     //ToDo: Fill in the conditions to check the validity of the form.
    //For example, you need to check if any of the text fields are empty
    //If you have assigned the variables in readForm correctly, you can
    //see their values for example, by using value for a text input, or checked
    //for a checkbox
    //You can also follow HTML5 validation here: https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation
    //and see if you can use the validity field - for example, username.validity 
    //to check if the form input is valid
    if (false){/*ToDo: Add the correct condition to check no text field is empty*/
            alert("Please fill in all text fields.");
    } else if (false){/*ToDo: Add the correct condition to check email is of correct form*/
        alert("Invalid e-mail address. Please enter your e-mail again.");
    } else if (false){/*ToDo: Add the correct password condition*/
        alert("Password is too short. Please select another password");
    } else if(false) {/*ToDo: Check if passwords match*/
        alert("Passwords do not match. Please retry");
    } else if(userType.length === 0){
        alert("Please check at least one checkbox to select being a seller or a buyer in the system.")
    } else if (false){ /*ToDo: Add Condition to check Term and Conditions checked*/
        alert("Please agree to the Terms and Conditions, and Privacy Policy.")
    }else {
        formValid = true;
    }
}

//Function to write the Registration success on the page
function createNewParagraph(content){
    var text = document.createTextNode(content);
    var paragraph = document.createElement("p");
    paragraph.appendChild(text);

    var element = document.getElementById("hiddenSection");
    element.appendChild(paragraph);
}

//Function  to submit the form, this should be called by the Register button
//on click
function submitForm(){
    readForm();
    validateForm();
    if (formValid){
        var formText = username.value + " registered as: "
                     + userType.join(" and ") 
                     + ".";


        createNewParagraph(formText);
    }
}
