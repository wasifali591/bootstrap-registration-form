/**
* File Name  : init-registration-script
* Description : js file
* Created date : 23/01/2019
* Author  : Md Wasif Ali
* Comments : initially operations start form this file  
*/


//initialization function
$(function () {
	showUserData.userData();
	country.countryName();
	validateForm.formValidation();
	//form operation
	formOperation.focusUp();
	formOperation.writeData();
	//operations on table
	tableOperation.editTable();
	tableOperation.saveTable();
	tableOperation.cancelEdit();
	tableOperation.deleteRow();
	tableOperation.inlineEdit();
});