/**
* File Name  : form-validation
* Description : js file
* Created date : 22/01/2019
* Author  : Md Wasif Ali
* Comments : field validation checking methods are present in this file
*/

var validateForm = (function () {

    function formValidation() {

        $.validator.addMethod('strongPassword', function (value, element) {
            return this.optional(element) ||
                value.length >= 6 &&
                /[a-z]/i.test(value);
        }, 'Your password must be at least 6 characters long and contain at least one number and one char.');

        $('#registarForm').validate({
            rules: {
                name: {
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                password: {
                    required: true,
                    strongPassword: true
                }

            },
            message: {
                name: {
                    name: 'enter your full name.'
                },
                email: {
                    email: 'please enter a valid email address.'
                },
                password: {
                    password: 'enter a valid password.'
                }
            }
        });
    }
    return{
        formValidation:formValidation
    };
})();