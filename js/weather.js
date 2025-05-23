const apiKey="1dcbe652270407fc2d971c024ed7409f"
const weatherDisplay=document.getElementById('Weather-display')
const country_codes = {
    "AF": "Afghanistan",
    "AL": "Albania",
    "DZ": "Algeria",
    "AS": "American Samoa",
    "AD": "Andorra",
    "AO": "Angola",
    "AI": "Anguilla",
    "AQ": "Antarctica",
    "AG": "Antigua and Barbuda",
    "AR": "Argentina",
    "AM": "Armenia",
    "AW": "Aruba",
    "AU": "Australia",
    "AT": "Austria",
    "AZ": "Azerbaijan",
    "BS": "Bahamas, The",
    "BH": "Bahrain",
    "BD": "Bangladesh",
    "BB": "Barbados",
    "BY": "Belarus",
    "BE": "Belgium",
    "BZ": "Belize",
    "BJ": "Benin",
    "BM": "Bermuda",
    "BT": "Bhutan",
    "BO": "Bolivia",
    "BQ": "Bonaire",
    "BA": "Bosnia and Herzegovina",
    "BW": "Botswana",
    "BV": "Bouvet Island",
    "BR": "Brazil",
    "IO": "British Indian Ocean Territory",
    "VG": "British Virgin Islands",
    "BN": "Brunei",
    "BG": "Bulgaria",
    "BF": "Burkina Faso",
    "BI": "Burundi",
    "KH": "Cambodia",
    "CM": "Cameroon",
    "CA": "Canada",
    "CV": "Cape Verde",
    "KY": "Cayman Islands",
    "CF": "Central African Republic",
    "TD": "Chad",
    "CL": "Chile",
    "CN": "China",
    "CX": "Christmas Island",
    "CC": "Cocos (Keeling) Islands",
    "CO": "Colombia",
    "KM": "Comoros",
    "CK": "Cook Islands",
    "CR": "Costa Rica",
    "CI": "Cote D'Ivoire",
    "HR": "Croatia",
    "CU": "Cuba",
    "CW": "Curacao",
    "CY": "Cyprus",
    "CZ": "Czech Republic",
    "CD": "Democratic Republic of the Congo",
    "DK": "Denmark",
    "DJ": "Djibouti",
    "DM": "Dominica",
    "DO": "Dominican Republic",
    "EC": "Ecuador",
    "EG": "Egypt",
    "SV": "El Salvador",
    "GQ": "Equatorial Guinea",
    "ER": "Eritrea",
    "EE": "Estonia",
    "ET": "Ethiopia",
    "FK": "Falkland Islands",
    "FO": "Faroe Islands",
    "FM": "Federated States of Micronesia",
    "FJ": "Fiji",
    "FI": "Finland",
    "FR": "France",
    "GF": "French Guiana",
    "PF": "French Polynesia",
    "TF": "French Southern Territories",
    "GA": "Gabon",
    "GM": "Gambia, The",
    "GE": "Georgia",
    "DE": "Germany",
    "GH": "Ghana",
    "GI": "Gibraltar",
    "GR": "Greece",
    "GL": "Greenland",
    "GD": "Grenada",
    "GP": "Guadeloupe",
    "GU": "Guam",
    "GT": "Guatemala",
    "GG": "Guernsey",
    "GN": "Guinea",
    "GW": "Guinea-Bissau",
    "GY": "Guyana",
    "HT": "Haiti",
    "HM": "Heard Island and McDonald Islands",
    "HN": "Honduras",
    "HK": "Hong Kong",
    "HU": "Hungary",
    "IS": "Iceland",
    "IN": "India",
    "ID": "Indonesia",
    "IR": "Iran",
    "IQ": "Iraq",
    "IE": "Ireland",
    "IM": "Isle of Man",
    "IL": "Israel",
    "IT": "Italy",
    "JM": "Jamaica",
    "JP": "Japan",
    "JE": "Jersey",
    "JO": "Jordan",
    "KZ": "Kazakhstan",
    "KE": "Kenya",
    "KI": "Kiribati",
    "XK": "Kosovo",
    "KW": "Kuwait",
    "KG": "Kyrgyzstan",
    "LA": "Laos",
    "LV": "Latvia",
    "LB": "Lebanon",
    "LS": "Lesotho",
    "LR": "Liberia",
    "LY": "Libya",
    "LI": "Liechtenstein",
    "LT": "Lithuania",
    "LU": "Luxembourg",
    "MO": "Macau",
    "MK": "Macedonia",
    "MG": "Madagascar",
    "MW": "Malawi",
    "MY": "Malaysia",
    "MV": "Maldives",
    "ML": "Mali",
    "MT": "Malta",
    "MH": "Marshall Islands",
    "MQ": "Martinique",
    "MR": "Mauritania",
    "MU": "Mauritius",
    "YT": "Mayotte",
    "MX": "Mexico",
    "MD": "Moldova",
    "MC": "Monaco",
    "MN": "Mongolia",
    "ME": "Montenegro",
    "MS": "Montserrat",
    "MA": "Morocco",
    "MZ": "Mozambique",
    "MM": "Myanmar",
    "NA": "Namibia",
    "NR": "Nauru",
    "NP": "Nepal",
    "NL": "Netherlands",
    "NC": "New Caledonia",
    "NZ": "New Zealand",
    "NI": "Nicaragua",
    "NE": "Niger",
    "NG": "Nigeria",
    "NU": "Niue",
    "NF": "Norfolk Island",
    "KP": "North Korea",
    "MP": "Northern Mariana Islands",
    "NO": "Norway",
    "OM": "Oman",
    "PK": "Pakistan",
    "PW": "Palau",
    "PS": "Palestine",
    "PA": "Panama",
    "PG": "Papua New Guinea",
    "PY": "Paraguay",
    "PE": "Peru",
    "PH": "Philippines",
    "PN": "Pitcairn Islands",
    "PL": "Poland",
    "PT": "Portugal",
    "PR": "Puerto Rico",
    "QA": "Qatar",
    "CG": "Republic of the Congo",
    "RE": "Reunion",
    "RO": "Romania",
    "RU": "Russia",
    "RW": "Rwanda",
    "BL": "Saint Barthelemy",
    "SH": "Saint Helena",
    "KN": "Saint Kitts and Nevis",
    "LC": "Saint Lucia",
    "MF": "Saint Martin",
    "PM": "Saint Pierre and Miquelon",
    "VC": "Saint Vincent and the Grenadines",
    "WS": "Samoa",
    "SM": "San Marino",
    "ST": "Sao Tome and Principe",
    "SA": "Saudi Arabia",
    "SN": "Senegal",
    "RS": "Serbia",
    "SC": "Seychelles",
    "SL": "Sierra Leone",
    "SG": "Singapore",
    "SX": "Sint Maarten",
    "SK": "Slovakia",
    "SI": "Slovenia",
    "SB": "Solomon Islands",
    "SO": "Somalia",
    "ZA": "South Africa",
    "GS": "South Georgia and South Sandwich Islands",
    "KR": "South Korea",
    "SS": "South Sudan",
    "ES": "Spain",
    "SP": "Spratly Islands",
    "LK": "Sri Lanka",
    "SD": "Sudan",
    "SR": "Suriname",
    "SJ": "Svalbard And Jan Mayen",
    "SZ": "Swaziland",
    "SE": "Sweden",
    "CH": "Switzerland",
    "SY": "Syria",
    "TW": "Taiwan",
    "TJ": "Tajikistan",
    "TZ": "Tanzania",
    "TH": "Thailand",
    "TL": "Timor-Leste",
    "TG": "Togo",
    "TK": "Tokelau",
    "TO": "Tonga",
    "TT": "Trinidad and Tobago",
    "TN": "Tunisia",
    "TR": "Turkey",
    "TM": "Turkmenistan",
    "TC": "Turks and Caicos Islands",
    "TV": "Tuvalu",
    "UG": "Uganda",
    "UA": "Ukraine",
    "AE": "United Arab Emirates",
    "GB": "United Kingdom",
    "US": "United States",
    "UM": "United States Minor Outlying Islands",
    "UY": "Uruguay",
    "UZ": "Uzbekistan",
    "VU": "Vanuatu",
    "VE": "Venezuela",
    "VN": "Vietnam",
    "WF": "Wallis and Futuna",
    "EH": "Western Sahara",
    "YE": "Yemen",
    "ZM": "Zambia",
    "ZW": "Zimbabwe"
}

async function getWeather()
{
    const city=document.getElementById('city-input').value.trim();
    if (!city) {
        alert('Please enter a city name.');
        return;
    }
     try
     {
        const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        if (!response.ok)
            {
                throw new Error(`HTTP error! Status:${response.status}`);
            }
        const data=await response.json();
        console.log(data)
        displayWeather(data);

     }
     catch(error)
     {
        console.error('Failed to fetch weather data : ',error);
        alert('City not found or Wrong input');
        weatherDisplay.innerHTML='<img id=error src="image/error.webp" alt="Error logo"/>';
     }
}

const displayWeather = (data) => {
    const { main: { temp, humidity }, weather, wind: { speed }, sys: { country }, name } = data;
    const [{ main: weatherMain, description, icon }] = weather;
    if (data.cod !== 200) {
        weatherDisplay.innerHTML = `<p>Error: ${data.message}</p>`;
        return;
    }
    
    const color=getBackgroundColor(weatherMain)
    let formattedDate = new Date().toLocaleDateString('en-IN',{ weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' });
    const fullName=country_codes[country]
    const weatherHTML = `
        <div id='Weather-content'>
            <div id='Weather-image' style='background-color:${color};'>
                <p>${weatherMain}</p>
                <img src='https://openweathermap.org/img/wn/${icon}.png' alt='Weather-icon'>
                <p>${temp} °C</p>
            </div>
            <div id='Weather-report'>
              <h2>Weather: ${description}</h2>
              <div class='date'>
                <i class="fa-regular fa-calendar-days"></i>
                <p>${formattedDate}</p>
              </div>
              <div class='location'>   
                <i class="fa-duotone fa-solid fa-location-arrow"></i>
                <p>${name},${fullName}</p>
              </div>
              <div class='wind'>  
                <i class="fa-duotone fa-solid fa-wind"></i>
                <p>Wind: ${speed} m/s</p>
              </div>  
              <div class='humidity'>
                <svg xmlns="http://www.w3.org/2000/svg"><path d="m7.56 17.19c0-.88.24-1.89.72-3.03s1.1-2.25 1.86-3.31c1.56-2.06 2.92-3.62 4.06-4.67l.75-.72c.25.26.53.5.83.72.41.42 1.04 1.11 1.88 2.09s1.57 1.85 2.17 2.65c.71 1.01 1.32 2.1 1.81 3.25s.74 2.16.74 3.03c0 1-.19 1.95-.58 2.86s-.91 1.7-1.57 2.36-1.45 1.19-2.37 1.58-1.89.59-2.91.59c-1 0-1.95-.19-2.86-.57s-1.7-.89-2.36-1.55c-.66-.65-1.19-1.44-1.58-2.35s-.59-1.89-.59-2.93zm2.26-2.93c0 .83.17 1.49.52 1.99.35.49.88.74 1.59.74.72 0 1.25-.25 1.61-.74.35-.49.53-1.15.54-1.99-.01-.84-.19-1.5-.54-2-.35-.49-.89-.74-1.61-.74-.71 0-1.24.25-1.59.74-.35.5-.52 1.16-.52 2zm1.57 0c0-.15 0-.27 0-.35s.01-.19.02-.33.02-.25.05-.32.05-.16.09-.24.09-.15.15-.18c.07-.04.14-.06.23-.06.14 0 .25.04.33.12s.14.21.17.38c.03.18.05.32.06.45s.01.3.01.52c0 .23 0 .4-.01.52s-.03.27-.06.45c-.03.17-.09.3-.17.38s-.19.12-.33.12c-.09 0-.16-.02-.23-.06s-.12-.1-.15-.18c-.04-.08-.07-.17-.09-.24-.02-.08-.04-.19-.05-.32-.01-.14-.02-.25-.02-.32s0-.19 0-.34zm.59 7.75h1.32l4.99-10.74h-1.35zm4.3-2.99c.01.84.2 1.5.55 2 .35.49.89.74 1.6.74.72 0 1.25-.25 1.6-.74s.52-1.16.53-2c-.01-.84-.18-1.5-.53-1.99s-.88-.74-1.6-.74c-.71 0-1.25.25-1.6.74-.36.49-.54 1.15-.55 1.99zm1.57 0c0-.23 0-.4.01-.52s.03-.27.06-.45.09-.3.17-.38.19-.12.33-.12c.09 0 .17.02.24.06s.12.1.16.19.07.17.1.24.04.18.05.32l.01.32v.34.35l-.01.32-.05.32-.1.24-.16.19-.24.06c-.14 0-.25-.04-.33-.12s-.14-.21-.17-.38c-.03-.18-.05-.33-.06-.45s-.01-.3-.01-.53z"/></svg>
                <p>Humidity: ${humidity}%</p>
              </div>  
            </div>
        </div>
    `;
    weatherDisplay.innerHTML = weatherHTML;
};
const getBackgroundColor=(weatherMain)=>{
   switch(weatherMain)
   {
    case 'Clear':
        return 'aliceblue';
    case 'Clouds':
        return 'orange';    
    case 'Snow':
        return 'skyblue'; 
    case 'Rain':
        return 'midnightblue';
    case 'Thunderstorm':
        return 'darkslateBlue';  
    case 'Drizzle':
        return 'white'; 
    case 'Mis':
    case 'Smoke': 
    case 'Haze':
    case 'Dust':
    case  'Fog':    
    case 'Sand':
    case 'Dust':
    case 'Ash' :
    case 'Squall':
    case 'Tornado':
        return 'mediumseagreen'
    default:
        return 'white'    
   }
}
