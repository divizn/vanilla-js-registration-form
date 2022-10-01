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
    if (!(username && email && password && repPassword)){
            alert("Please fill in all text fields.");
    } else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))){
        alert("Invalid e-mail address. Please enter your e-mail again.");
    } else if (password.length<7){
        alert("Password is too short. Please select a password with 7 or more characters");
    } else if(password !== repPassword) {
        alert("Passwords do not match. Please retry");
    } else if(userType.length === 0){
        alert("Please check at least one checkbox to select being a seller or a buyer in the system.")
    } else if (!tosCheckBox){ 
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
        var formText = username + " registered as: "
                     + userType.join(" and ") 
                     + ".";


        createNewParagraph(formText);
    }
}
