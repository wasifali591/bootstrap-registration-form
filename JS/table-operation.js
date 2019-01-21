/**
* File Name  : table-operations
* Description : js file
* Created date : 21/01/2019
* Author  : Md Wasif Ali
* Comments : all operations related to table like edit, delete methods are present
*/

var data = [];
var tableOperation = (function () {
    /**
     * function-name: showResultOnTable
     * description: store the data taken from the form into the table
     * comment:
     */

    function showResultOnTable() {
        name = $("#name").val();

        email = $("#email").val();
        emailArray[registeredEmailIndex] = email;
        registeredEmailIndex++;
        formOperation.checkBoxes();
        formOperation.gender();
        formOperation.caste();
        selectedCountryStateCityDetails();

        data.push({
            name: name,
            email: email,
            country: selectedCountry
        });

        console.log(data);

        $("#tableData").append('<tr><td class="editableColumns editName">'+ $("#name").val() + '</td><td class="editableColumns">'+
            email + '</td><td class="editableColumns" >' + $("#password").val() + '</td><td class="editableColumns" >' +
            $("#address").val()+'</td><td class="editableColumns">'+selectedCountry+'</td><td class="editableColumns" >' +
            selectedState + '</td><td class="editableColumns" >' + SelectedCity + '</td><td class="editableColumns" >' +
            $("#dateOfBirth").val() + '</td><td class="editableColumns" >' + checkedRadioButtons +
            '</td><td class="editableColumns" >' + casteCatagoryName + '</td><td class="editableColumns" >' +
            checkedCheckbox + '</td><td><input type="button" value="Edit" id="editButton" class="btn btn-primary">' +
            '<input type="button" value="Delete" id="deleteButton" class="btn btn-danger">' +
            '<input type="button" value="Save" class="btn btn-success" id="saveButton" style="display:none">' +
            '<input type="button" value="Cancel" id="cancelButton" style="display:none" class="btn btn-info"></td></tr>');
        $("#wrongInput").hide();
        inlineTableEdit();
    }

    /** 
     * function-name:inlineTableEdit
     * description:to edit table data, dpouble click on the table field
     * comments:
    */

    function inlineTableEdit() {
        $("td").dblclick(function (event){
            $(this).prop('contenteditable', true);
        });
    }

    /**
     * function-name: editTableData
     * description: inline edit after clicking on a button(editButton)
     * comments: after clicking on edit button make editable all td of the relevent row and two new buttons popup
     */

    function editTableData() {
        $("#registrationTable").on('click', 'input[id="editButton"]', function (event) {
            editableContentIndex = 0;
            $(this).hide();
            $("#deleteButton").hide();
            $("#saveButton").show();
            $("#cancelButton").show();
            $(this).parents('tr').find('td.editableColumns').each(function () {
                $(this).prop('contenteditable', true);
                editableContentsArray[editableContentIndex] = $(this).html();
                editableContentIndex++;

            });
        });
    }

    /**
     * function-name:saveTableData
     * description: save the data into table after click on a button(saveButton)
     * commnets:
     */


    function saveTableData() {
        $("#registrationTable").on('click', 'input[id="saveButton"]', function (event) {
            $(this).parents('tr').find('td.editableColumns').each(function () {
                $(this).prop('contenteditable', false);
            });
            $(this).hide();
            $("#deleteButton").show();
            $("#editButton").show();
            $("#cancelButton").hide();
        });
    }
    /**
     * function-name:saveTableData
     * description: cancel the edit process after click on a button(cancelButton)
     * commnets: clicking on cancel button editing process will be canceled and the previous values will be added
                with corosponding field
     */

    function cancelTableEdit() {
        $("#registrationTable").on('click', 'input[id="cancelButton"]', function (event) {
            editableContentIndex = 0;
            $(this).parents('tr').find('td.editableColumns').each(function () {
                $(this).prop('contenteditable', false);
                $(this).html(editableContentsArray[editableContentIndex]);
                editableContentIndex++;

            });
            $(this).hide();
            $("#deleteButton").show();
            $("#saveButton").hide();
            $("#editButton").show();
        });
    }

    /** 
     * function-name:deleteTableRow
     * description: delete a row from the table
     * comments: row will be deleted after a confermation checking
    */
    function deleteTableRow() {
        $("#registrationTable").on('click', 'input[id="deleteButton"]', function (event) {
            var choice = confirm('Do you really want to delete this record?');
            if (choice === true) {
                $(this).parent().parent().remove();
            }
        });
    }

    /**
     * function-name:selectedCountryStateCityDetails
     * description: fetch the value from dropdown list and store into corosponding variables
     * comments:
     */

    function selectedCountryStateCityDetails() {
        selectedCountry = $('#selectCountry').find(":selected").text();
        selectedState = $('#selectState').find(":selected").text();
        SelectedCity = $('#selectCity').find(":selected").text();
    }

    return {
        editTable: editTableData,
        saveTable: saveTableData,
        cancelEdit: cancelTableEdit,
        deleteRow: deleteTableRow,
        showData: showResultOnTable
    };

})();
