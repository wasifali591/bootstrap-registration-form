/**
* File Name  : init-registration-script
* Description : js file
* Created date : 21/01/2019
* Author  : Md Wasif Ali
* Comments : initially operations start form this file  
*/


//initialization function
$(function () {
	countriesData.countryName();
	//check all the required field vallidation
	fieldValidation.nameValidation();
	fieldValidation.emailValidation();
	fieldValidation.passwordValidation();
	//form operation
	formOperation.focusUp();
	formOperation.hideLabel();
	formOperation.writeData();
	//operations on table
	tableOperation.editTable();
	tableOperation.saveTable();
	tableOperation.cancelEdit();
	tableOperation.deleteRow();
});