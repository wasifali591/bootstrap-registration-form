/**
* File Name  : countries-data
* Description : js file
* Created date : 21/01/2019
* Author  : Md Wasif Ali
* Comments : 
*/

//relationship between country state and city
var countriesData = (function () {
    var countries = getCountries();
    /**
     * function-name:selectCountryName
     * description: make options for dropdown(selectCountry)
     * comments: ftech the country name form data.js file and show it to the corosponding dropdown
     */

    function selectCountryName() {
        $('#stateName').hide();
        $('#cityName').hide();

        var selectCountry = $("#selectCountry");
        var options = "<option value='' selected='selected'>-- Select Country --</option>";
        jQuery.each(countries, function (key, value) {
            options += "<option value='" + value.countryName + "'>" + value.countryName + "</option>";
        });
        selectCountry.html(options);

        selectStateName();

    }

    /**
     * function-name:selectStateName
     * description: make options for dropdown(selectState)
     * comments: ftech the state name form data.js file and show it to the corosponding dropdown 
    */

    function selectStateName() {
        // var cityOptions = "<option value='' selected='selected'>-- Select City --</option>";
        // selectCity.html(cityOptions);

        var selectState = $("#selectState");
        $('#selectCountry').on('change', function () {
            $('#stateName').show();
            $('#cityName').hide();
            var countryName = $('#selectCountry').val();
            var stateOptions = "<option value='' selected='selected'>-- Select States --</option>";
            jQuery.each(countries, function (key, value) {
                if (countryName == value.countryName) {
                    //console.log(value.states);
                    jQuery.each(value.states, function (key, value) {
                        stateOptions += "<option value='" + value.stateName + "'>" + value.stateName + "</option>";
                    });
                }
            });
            selectState.html(stateOptions);
        });
        selectCityName();
    }

    /**
     * function-name:selectCityName;
     * description: make options for dropdown(selectCity)
     * comments: ftech the city name form data.js file and show it to the corosponding dropdown
     */

    function selectCityName() {
        var selectCity = $("#selectCity");
        $('#selectState').on('change', function () {
            $('#cityName').show();
            var countryName = $('#selectCountry').val();
            var stateName = $('#selectState').val();
            var cityOptions = "<option value='' selected='selected'>-- Select City --</option>";
            jQuery.each(countries, function (key, value) {
                if (countryName == value.countryName) {

                    jQuery.each(value.states, function (key, value) {
                        if (stateName == value.stateName) {

                            jQuery.each(value.cities, function (key, value) {
                                cityOptions += "<option value='" + value.cityName + "'>" + value.cityName + "</option>";
                            });
                        }
                    });
                }
            });
            selectCity.html(cityOptions);
        });
    }

    return {
        countryName: selectCountryName,
        stateName: selectStateName,
        cityName: selectCityName
    };
})();