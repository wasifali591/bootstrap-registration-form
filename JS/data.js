/**
* File Name  : data
* Description : js file
* Created date : 18/01/2019
* Author  : Md Wasif Ali
* Comments :  country-state-city realtion and data are present within one function(getCountries), that return the hole data
*/

function getCountries() {
    var data =
        [
            {
                "countryName": "India",
                "states": [
                    {
                        "stateName": "West Bengal",
                        "cities": [{ "cityName": "Mednipur" },
                        { "cityName": "Kolkata" },
                        { "cityName": "Durgapur" }
                        ]
                    },
                    {
                        "stateName": "Odhisa",
                        "cities": [{ "cityName": "Mednipur" },
                        { "cityName": "Kolkata" },
                        { "cityName": "Durgapur" }
                        ]
                    }
                ]
            },
            {
                "countryName": "America",
                "states": [
                    {
                        "stateName": "California",
                        "cities": [{ "cityName": "Mednipur" },
                        { "cityName": "Kolkata" },
                        { "cityName": "Durgapur" }
                        ]
                    },
                    {
                        "stateName": "Seattle",
                        "cities": [{ "cityName": "Mednipur" },
                        { "cityName": "Kolkata" },
                        { "cityName": "Durgapur" }
                        ]
                    }
                ]
            }
        ];
    return data;
}