
/**
* File Name  : form-operation
* Description : js file
* Created date : 23/01/2019
* Author  : Md Wasif Ali
* Comments :all operations related to the form are present in this file  
*/



var formOperation = (function () {
    var checkboxes = $("input[name='sub[]']");
    var radioButtons = $("input[name='gender']");
    var form = $("#registarForm");
    var mail = $("#email");
    /** 
     * function-name:selectCheckbox
     * description: read the checked checkboxes value
     * comment: read the values from a array(sub) and store into another global array(checkedCheckbox)
    */

    function selectCheckbox() {
        var checkedCheckbox = [];

        var j = 0;
        for (var i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].checked) {
                checkedCheckbox[j] = checkboxes[i].value;
                j++;
            }
        }
        return checkedCheckbox;
    }

    /**
     *  function-name:selectGender
     * description: read the checked radio buttons value
     * comment: read the values from input(gender) and store into another global variable(checkedRadioButtons)
     */

    function selectGender() {
        var checkedRadioButtons;

        for (var i = 0; i < radioButtons.length; i++) {
            if (radioButtons[i].checked) {
                checkedRadioButtons = radioButtons[i].value;
            }
        }
        return checkedRadioButtons;
    }

    /**
     * function-name:selectCasteCatagory
     * description: read the selected value from a drop down list
     * comment: read the values from input(catagory) and store into another global variable(casteCatagoryName)
     */

    function selectCasteCatagory() {
        var casteCatagoryName = $('#casteCatagory').find(":selected").text();
        return casteCatagoryName;
    }

    /**
     * function-name:resetForm
     * description: reset all the input field
     * comments: reset all the textfield and other like DOB except gender and catagory. gender and 
            catagory are reset into a general value    
    */
    function resetForm() {
        $('#name').val("");
        $(mail).val("");
        $('#password').val("");
        $('#address').val("");
        $('dateOfBirth').val("");
        uncheckCheckbox();
        $('#Male').prop('checked', true);
        $('#casteCatagory').prop('selectedIndex', 0);
        $('#country').prop('selectedIndex', 0);
        $('#states').prop('selectedIndex', 0);
        $('#city').prop('selectedIndex', 0);
        $('#state').prop('selectedIndex', 0);
        $('#city').prop('selectedIndex', 0);
    }

    /**
     * function-name:uncheckCheckbox
     * description: unchecked all the checkboxes
     * comments:
    */

    function uncheckCheckbox() {
        $('#PHP').prop('checked', false);
        $('#JAVA').prop('checked', false);
        $('#HTML').prop('checked', false);
        $('#CSS').prop('checked', false);
    }

    /**
     * function-name:goUp
     * description: after refreshing the page , page will go on the top
     * comments:
    */

    function goUp() {
        $("html").animate({ scrollTop: 0 }, "slow");
    }

    /**
     * function-name:writeDataFormToTable
     * description: after clicking on a button(registerButtonn) date store from the form to the table
     * comments: before inserting the data into table flow goes through all the validation checking and 
            also for unique email-validation
    */

    function writeDataFormToTable() {

        jQuery.validator.setDefaults({
            debug: true,
            success: true
        });

        form.validate();

        $('#registerButtonn').click(function () {
            if (form.valid() == true) {
                email = mail.val();
                var flag = false;
                for (var i = 0; i < emailArray.length; i++) {
                    if (emailArray[i] == email) {
                        flag = true;
                    }
                }
                if (flag) {
                    alert("Email-Id is already used.Please try with a new Email-Id.")
                    resetForm();
                } else {
                    tableOperation.showData();
                    goUp();
                    resetForm();
                }

            }

        });
    }
    return {
        writeData: writeDataFormToTable,
        focusUp: goUp,
        checkBoxes: selectCheckbox,
        gender: selectGender,
        caste: selectCasteCatagory
    };
})();