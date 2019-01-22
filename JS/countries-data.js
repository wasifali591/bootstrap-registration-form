/**
* File Name  : countries-data
* Description : js file
* Created date : 21/01/2019
* Author  : Md Wasif Ali
* Comments : 
*/

//relationship between country state and city
var country = (function () {
    function countryName() {
        $('#stateName').hide();
        $('#cityName').hide();
        load_json_data('country', '');
        function load_json_data(id, parent_id) {
            var html_code = '';
            $.getJSON('country-data.json', function (data) {
                html_code += '<option value="">Select ' + id + '</option>';
                //All the country values is loaded in this function
                $.each(data, function (key, value) {
                    if (id == 'country') {
                        if (value.parent_id == '0') {
                            html_code += '<option value="' + value.id + '">' + value.name + '</option>';
                        }
                    }
                    else {
                        if (value.parent_id == parent_id) {
                            html_code += '<option value="' + value.id + '">' + value.name + '</option>';
                        }
                    }
                });
                console.log(html_code);
                $('#' + id).html(html_code);
            });
        }


        //All the State values is loaded in this function
        $(document).on('change', '#country', function () {
            $('#stateName').show();
            $('#cityName').hide();
            var country_id = $(this).val();
            if (country_id != '') {
                load_json_data('state', country_id);
            }
            else {
                $('#state').html('<option value="">Select state</option>');
                $('#city').html('<option value="">Select city</option>');
            }
        });


        //All the city value is loaded in this function
        $(document).on('change', '#state', function () {
            $('#cityName').show();
            var state_id = $(this).val();
            if (state_id != '') {
                load_json_data('city', state_id);
            }
            else {
                $('#city').html('<option value="">Select city</option>');
            }
        });
    }
    return{
        countryName : countryName
    };
})();