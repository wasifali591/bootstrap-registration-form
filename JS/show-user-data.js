/**
* File Name  : show-user-data
* Description : js file
* Created date : 23/01/2019
* Author  : Md Wasif Ali
* Comments : show static data from a json file into the table
*/
var showUserData = (function () {
    function showUserData() {
        $.getJSON("user-data.json", function (data) {
            var userData = '';
            $.each(data, function (key, value) {
                userData += '<tr>';
                userData += '<td class="editableColumns">' + value.name + '</td>';
                userData += '<td>' + value.email + '</td>';
                userData += '<td class="editableColumns">' + value.password + '</td>';
                userData += '<td class="editableColumns">' + value.address + '</td>';
                userData += '<td class="editableColumns">' + value.dob + '</td>';
                userData += '<td class="editableColumns">' + value.country + '</td>';
                userData += '<td class="editableColumns">' + value.state + '</td>';
                userData += '<td class="editableColumns">' + value.city + '</td>';
                userData += '<td class="editableColumns">' + value.gender + '</td>';
                userData += '<td class="editableColumns">' + value.caste + '</td>';
                userData += '<td class="editableColumns">' + value.subject + '</td>';
                userData += '<td><input type="button" value="Edit" id="editButton" class="btn btn-primary">';
                userData += '<input type="button" value="Delete" id="deleteButton" class="btn btn-danger">';
                userData += '<input type="button" value="Save" class="btn btn-success" id="saveButton" style="display:none">';
                userData += '<input type="button" value="Cancel" id="cancelButton" style="display:none" class="btn btn-info"></td>';
                userData += '</tr>';

            });
            $("#tableData").append(userData);
        });
    }
    return {
        userData: showUserData
    };
})();