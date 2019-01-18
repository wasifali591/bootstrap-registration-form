/**
* File Name  : field-validation
* Description : js file
* Created date : 18/01/2019
* Author  : Md Wasif Ali
* Comments : field validation checking methods are present in this file
*/

/*
	function-name: checkNameValidation() 
	description: address reali-time-validation on input for name
	comment: take the field-id(#name) as input, if the input does not matches with the validation show a error message
*/
function checkNameValidation() {
    $("#name").on('blur', function (event) {
        name = $("#name").val();
        if (name.length === 0) {
            $("#wrongName").html("Enter your Name.");
            $("#wrongName").show();
            nameHasError = 1;
        } else {
            $("#wrongName").hide();
            nameHasError = 0;
        }
    });

}

/*
	function-name: checkEmailValidation
	description: address reali-time-validation on input for email
	comment: take the field-id(#email) as input, if the input does not matches with the validation show a error message
*/
function checkEmailValidation() {
    $("#email").on('blur', function (event) {
        email = $("#email").val();
        var re = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if (!re.test(email)) {
            $("#wrongEmail").html("You have entered a wrong e-mail address. Please try again");
            $("#wrongEmail").show();
            emailHasError = 1;
        } else {
            $("#wrongEmail").hide();
            emailHasError = 0;
        }
    });

}

/*
	function-name: checkPasswordValidation
	description: address reali-time-validation on input for password
	comment: take the field-id(#password) as input, if the input does not matches with the validation show a error message
*/
function checkPasswordValidation() {
    $("#password").on('blur change', function (event) {
        password = $("#password").val();
        var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        if (!re.test(password)) {
            $("#wrongPassword").html("Password must contain the following:<br>1.A lower case letter<br>2.A capital letter<br>3.A number<br>4.Minimum 8 characters");
            $("#wrongPassword").show();
            passwordHasError = 1;
        } else {
            $("#wrongPassword").hide();
            passwordHasError = 0;
        }
    });
}