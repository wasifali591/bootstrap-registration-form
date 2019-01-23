/**
* File Name  : table-operations
* Description : js file
* Created date : 22/01/2019
* Author  : Md Wasif Ali
* Comments : all operations related to table like edit, delete methods are present
*/

var data = [];
var tableOperation = (function () {
    //
    var editableContentsArray = [];
    var editableContentIndex;
    var regTable = $("#registrationTable");
    /**
     * function-name: showResultOnTable
     * description: store the data taken from the form into the table
     * comment:
     */

    function showResultOnTable() {
        var registeredEmailIndex = 0;
        var checkedCheckbox = formOperation.checkBoxes();
        var checkedRadioButtons = formOperation.gender();
        var casteCatagoryName = formOperation.caste();
        name = $("#name").val();
        email = $("#email").val();
        password = $("#password").val();
        address = $("#address").val();
        dob = $("#dateOfBirth").val();
        emailArray[registeredEmailIndex] = email;
        registeredEmailIndex++;



        selectedCountryStateCityDetails();

        // data.push({
        //     name: name,
        //     email: email,
        //     password: password,
        //     address: address,
        //     country: selectedCountry,
        //     state: selectedState,
        //     city: SelectedCity,
        //     dob: dob,
        //     gender: checkedRadioButtons,
        //     caste: casteCatagoryName,
        //     subject: checkedCheckbox
        // });

        // var tableBody = $("#tableData");
        // var tableRow = document.createElement("tr");
        // tableRow.setAttribute("id", name);

        // tableRow.addEventListener('dblclick', function (e, ) {
        //     editRow(e.target.parentNode.id);
        // });

        // var tableData = document.createElement("td");
        // var tableDataValue = document.createTextNode(name);

        // tableData.append(tableDataValue);
        // tableRow.append(tableData);

        // //tableRow.html= "<td class='editableColumns editName'>" + name + "</td>");

        // tableBody.append(tableRow);
        var tableData='';
        
        tableData +='<tr>';
        tableData +='<td class="editableColumns">' + name + '</td>';
        tableData +='<td>' + email + '</td>';
        tableData +='<td class="editableColumns">' + password + '</td>';
        tableData +='<td class="editableColumns">' + address + '</td>';
        tableData +='<td class="editableColumns">' + selectedCountry + '</td>';
        tableData +='<td class="editableColumns">' + selectedState + '</td>';
        tableData +='<td class="editableColumns">' + SelectedCity + '</td>';
        tableData +='<td class="editableColumns">' + dob + '</td>';
        tableData +='<td class="editableColumns">' + checkedRadioButtons + '</td>';
        tableData +='<td class="editableColumns">' + casteCatagoryName + '</td>';
        tableData +='<td class="editableColumns">' + checkedCheckbox + '</td>';
        tableData +='<td><input type="button" value="Edit" id="editButton" class="btn btn-primary">';
        tableData +='<input type="button" value="Delete" id="deleteButton" class="btn btn-danger">';
        tableData +='<input type="button" value="Save" class="btn btn-success" id="saveButton" style="display:none">';
        tableData +='<input type="button" value="Cancel" id="cancelButton" style="display:none" class="btn btn-info"></td>';
        tableData +='</tr>';
        $("#tableData").append(tableData);

        inlineTableEdit();
    }

    /** 
     * function-name:inlineTableEdit
     * description:to edit table data, dpouble click on the table field
     * comments:
    */

    function inlineTableEdit() {
        $("td.editableColumns").dblclick(function (event) {
            $(this).prop('contenteditable', true);
        });
    }

    // function editRow(id) {
    //     var selecteData = data.find(function (item) {
    //         return id == item.name;
    //     });

    //     var tableRow = $("#" + id);
    //     tableRow.html("<input type='text' value='" + name + "' />'");
    //}

    /**
     * function-name: editTableData
     * description: inline edit after clicking on a button(editButton)
     * comments: after clicking on edit button make editable all td of the relevent row and two new buttons popup
     */

    function editTableData() {
        $(regTable).on('click', 'input[id="editButton"]', function (event) {
            editableContentIndex = 0;

            $(this).parents('tr').find('td.editableColumns').each(function () {
                $(this).prop('contenteditable', true);
                editableContentsArray[editableContentIndex] = $(this).html();
                editableContentIndex++;

            });

            $(this).hide();
            $("#deleteButton").hide();
            $("#saveButton").show();
            $("#cancelButton").show();
        });
    }

    /**
     * function-name:saveTableData
     * description: save the data into table after click on a button(saveButton)
     * commnets:
     */


    function saveTableData() {
        $(regTable).on('click', 'input[id="saveButton"]', function (event) {
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
        $(regTable).on('click', 'input[id="cancelButton"]', function (event) {
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
        $(regTable).on('click', 'input[id="deleteButton"]', function (event) {
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
        selectedCountry = $('#country').find(":selected").text();
        selectedState = $('#state').find(":selected").text();
        SelectedCity = $('#city').find(":selected").text();
    }

    return {
        editTable: editTableData,
        saveTable: saveTableData,
        cancelEdit: cancelTableEdit,
        deleteRow: deleteTableRow,
        showData: showResultOnTable
    };

})();
