const hdiRankings = {
    "Switzerland": "1st",
    "Norway": "2nd",
    "Iceland": "3rd",
    "Hong Kong": "4th",
    "Denmark": "5th",
    "Sweden": "6th",
    "Ireland": "7th",
    "Germany": "8th",
    "Singapore": "9th",
    "Netherlands": "10th",
    "Australia": "11th",
    "Liechtenstein": "12th",
    "Belgium": "13th",
    "Finland": "14th",
    "United Kingdom": "15th",
    "New Zealand": "16th",
    "United Arab Emirates": "17th",
    "Canada": "18th",
    "South Korea": "19th",
    "Luxembourg": "20th",
    "United States": "21st",
    "Slovenia": "22nd",
    "Austria": "23rd",
    "Japan": "24th",
    "Israel": "25th",
    "Malta": "26th",
    "Spain": "27th",
    "France": "28th",
    "Cyprus": "29th",
    "Italy": "30th",
    "Estonia": "31st",
    "Czech Republic": "32nd",
    "Greece": "33rd",
    "Bahrain": "34th",
    "Andorra": "35th",
    "Poland": "36th",
    "Latvia": "37th",
    "Lithuania": "38th",
    "Croatia": "39th",
    "Qatar": "40th",
    "Saudi Arabia": "41st",
    "Portugal": "42nd",
    "San Marino": "43rd",
    "Chile": "44th",
    "Turkey": "45th",
    "Slovakia": "46th",
    "Hungary": "47th",
    "Argentina": "48th",
    "Kuwait": "49th",
    "Montenegro": "50th",
    "Saint Kitts and Nevis": "51st",
    "Uruguay": "52nd",
    "Romania": "53rd",
    "Antigua and Barbuda": "54th",
    "Brunei": "55th",
    "Russia": "56th",
    "Bahamas": "57th",
    "Panama": "58th",
    "Oman": "59th",
    "Trinidad and Tobago": "60th",
    "Georgia": "61st",
    "Barbados": "62nd",
    "Malaysia": "63rd",
    "Costa Rica": "64th",
    "Serbia": "65th",
    "Thailand": "66th",
    "Seychelles": "67th",
    "Kazakhstan": "68th",
    "Belarus": "69th",
    "Bulgaria": "70th",
    "Palau": "71st",
    "Mauritius": "72nd",
    "Grenada": "73rd",
    "Albania": "74th",
    "China": "75th",
    "Armenia": "76th",
    "Mexico": "77th",
    "Iran": "78th",
    "Sri Lanka": "79th",
    "Bosnia and Herzegovina": "80th",
    "Saint Vincent and the Grenadines": "81st",
    "Dominican Republic": "82nd",
    "Ecuador": "83rd",
    "North Macedonia": "84th",
    "Cuba": "85th",
    "Moldova": "86th",
    "Maldives": "87th",
    "Peru": "88th",
    "Azerbaijan": "89th",
    "Brazil": "90th",
    "Colombia": "91st",
    "Libya": "92nd",
    "Algeria": "93rd",
    "Turkmenistan": "94th",
    "Guyana": "95th",
    "Mongolia": "96th",
    "Dominica": "97th",
    "Tonga": "98th",
    "Jordan": "99th",
    "Ukraine": "100th",
    "Tunisia": "101st",
    "Marshall Islands": "102nd",
    "Paraguay": "103rd",
    "Fiji": "104th",
    "Egypt": "105th",
    "Uzbekistan": "106th",
    "Vietnam": "107th",
    "Saint Lucia": "108th",
    "Lebanon": "109th",
    "South Africa": "110th",
    "Palestine": "111th",
    "Indonesia": "112th",
    "Philippines": "113th",
    "Botswana": "114th",
    "Jamaica": "115th",
    "Samoa": "116th",
    "Kyrgyzstan": "117th",
    "Belize": "118th",
    "Venezuela": "119th",
    "Morocco": "120th",
    "Bolivia": "121st",
    "Nauru": "122nd",
    "Gabon": "123rd",
    "Suriname": "124th",
    "Bhutan": "125th",
    "Tajikistan": "126th",
    "El Salvador": "127th",
    "Iraq": "128th",
    "Bangladesh": "129th",
    "Nicaragua": "130th",
    "Cape Verde": "131st",
    "Tuvalu": "132nd",
    "Equatorial Guinea": "133rd",
    "India": "134th",
    "Micronesia": "135th",
    "Guatemala": "136th",
    "Kiribati": "137th",
    "Honduras": "138th",
    "Laos": "139th",
    "Vanuatu": "140th",
    "São Tomé and Príncipe": "141st",
    "Eswatini": "142nd",
    "Namibia": "143rd",
    "Myanmar": "144th",
    "Ghana": "145th",
    "Nepal": "146th",
    "Kenya": "147th",
    "Cambodia": "148th",
    "Congo": "149th",
    "Angola": "150th",
    "Cameroon": "151st",
    "Comoros": "152nd",
    "Zambia": "153rd",
    "Papua New Guinea": "154th",
    "Timor-Leste": "155th",
    "Solomon Islands": "156th",
    "Syria": "157th",
    "Haiti": "158th",
    "Uganda": "159th",
    "Zimbabwe": "160th",
    "Rwanda": "161st",
    "Nigeria": "162nd",
    "Togo": "163rd",
    "Pakistan": "164th",
    "Mauritania": "165th",
    "Ivory Coast": "166th",
    "Tanzania": "167th",
    "Lesotho": "168th",
    "Senegal": "169th",
    "Sudan": "170th",
    "Djibouti": "171st",
    "Malawi": "172nd",
    "Benin": "173rd",
    "Gambia": "174th",
    "Eritrea": "175th",
    "Ethiopia": "176th",
    "Liberia": "177th",
    "Madagascar": "178th",
    "Guinea-Bissau": "179th",
    "DR Congo": "180th",
    "Guinea": "181st",
    "Afghanistan": "182nd",
    "Mozambique": "183rd",
    "Sierra Leone": "184th",
    "Burkina Faso": "185th",
    "Yemen": "186th",
    "Burundi": "187th",
    "Mali": "188th",
    "Niger": "189th",
    "Chad": "190th",
    "Central African Republic": "191st",
    "South Sudan": "192nd",
    "Somalia": "193rd"
};

const militaryRankings = {
    "United States": "1st",
    "Russia": "2nd",
    "China": "3rd",
    "India": "4th",
    "South Korea": "5th",
    "United Kingdom": "6th",
    "Japan": "7th",
    "Turkey": "8th",
    "Pakistan": "9th",
    "Italy": "10th",
    "France": "11th",
    "Brazil": "12th",
    "Indonesia": "13th",
    "Iran": "14th",
    "Egypt": "15th",
    "Australia": "16th",
    "Israel": "17th",
    "Ukraine": "18th",
    "Germany": "19th",
    "Spain": "20th",
    "Poland": "21st",
    "Vietnam": "22nd",
    "Saudi Arabia": "23rd",
    "Taiwan": "24th",
    "Thailand": "25th",
    "Algeria": "26th",
    "Canada": "27th",
    "Argentina": "28th",
    "Sweden": "29th",
    "Singapore": "30th",
    "Mexico": "31st",
    "Greece": "32nd",
    "South Africa": "33rd",
    "Philippines": "34th",
    "Myanmar": "35th",
    "North Korea": "36th",
    "Bangladesh": "37th",
    "Portugal": "38th",
    "Nigeria": "39th",
    "Netherlands": "40th",
    "Norway": "41st",
    "Malaysia": "42nd",
    "Switzerland": "43rd",
    "Colombia": "44th",
    "Iraq": "45th",
    "Czechia": "46th",
    "Romania": "47th",
    "Denmark": "48th",
    "Ethiopia": "49th",
    "Finland": "50th",
    "United Arab Emirates": "51st",
    "Chile": "52nd",
    "Peru": "53rd",
    "Hungary": "54th",
    "Angola": "55th",
    "Serbia": "56th",
    "Venezuela": "57th",
    "Kazakhstan": "58th",
    "Azerbaijan": "59th",
    "Syria": "60th",
    "Morocco": "61st",
    "Bulgaria": "62nd",
    "Qatar": "63rd",
    "Belarus": "64th",
    "Uzbekistan": "65th",
    "Croatia": "66th",
    "New Zealand": "67th",
    "Cuba": "68th",
    "Slovakia": "69th",
    "Belgium": "70th",
    "Austria": "71st",
    "Ecuador": "72nd",
    "Democratic Republic of the Congo": "73rd",
    "Tunisia": "74th",
    "Sri Lanka": "75th",
    "Sudan": "76th",
    "Kuwait": "77th",
    "Oman": "78th",
    "Libya": "79th",
    "Jordan": "80th",
    "Yemen": "81st",
    "Bolivia": "82nd",
    "Turkmenistan": "83rd",
    "Georgia": "84th",
    "Paraguay": "85th",
    "Bahrain": "86th",
    "Estonia": "87th",
    "Lithuania": "88th",
    "Kenya": "89th",
    "Albania": "90th",
    "Slovenia": "91st",
    "Mozambique": "92nd",
    "Chad": "93rd",
    "Ireland": "94th",
    "Honduras": "95th",
    "Uruguay": "96th",
    "Zambia": "97th",
    "Ivory Coast": "98th",
    "Latvia": "99th",
    "Kyrgyzstan": "100th",
    "Zimbabwe": "101st",
    "Armenia": "102nd",
    "Tanzania": "103rd",
    "Cameroon": "104th",
    "Mongolia": "105th",
    "Mali": "106th",
    "Tajikistan": "107th",
    "Guatemala": "108th",
    "Luxembourg": "109th",
    "North Macedonia": "110th",
    "Cambodia": "111th",
    "Laos": "112th",
    "Ghana": "113th",
    "Uganda": "114th",
    "Afghanistan": "115th",
    "Bosnia and Herzegovina": "116th",
    "Eritrea": "117th",
    "Lebanon": "118th",
    "South Sudan": "119th",
    "Nicaragua": "120th",
    "Niger": "121st",
    "Republic of the Congo": "122nd",
    "Dominican Republic": "123rd",
    "Namibia": "124th",
    "El Salvador": "125th",
    "Botswana": "126th",
    "Burkina Faso": "127th",
    "Nepal": "128th",
    "Montenegro": "129th",
    "Senegal": "130th",
    "Mauritania": "131st",
    "Gabon": "132nd",
    "Madagascar": "133rd",
    "Panama": "134th",
    "Kosovo": "135th",
    "Iceland": "136th",
    "Central African Republic": "137th",
    "Sierra Leone": "138th",
    "Belize": "139th",
    "Liberia": "140th",
    "Benin": "141st",
    "Somalia": "142nd",
    "Suriname": "143rd",
    "Moldova": "144th",
    "Bhutan": "145th"
};

const olympicRankings = {
    "United States": "1st",
    "Russia": "2nd",
    "Germany": "3rd",
    "Great Britain": "4th",
    "China": "5th",
    "France": "6th",
    "Italy": "7th",
    "Sweden": "8th",
    "Norway": "9th",
    "Japan": "10th",
    "Hungary": "11th",
    "Australia": "12th",
    "Canada": "13th",
    "Netherlands": "14th",
    "Finland": "15th",
    "South Korea": "16th",
    "Switzerland": "17th",
    "Austria": "18th",
    "Romania": "19th",
    "Cuba": "20th",
    "Poland": "21st",
    "Bulgaria": "22nd",
    "New Zealand": "23rd",
    "Spain": "24th",
    "Denmark": "25th",
    "Belgium": "26th",
    "Turkey": "27th",
    "Ukraine": "28th",
    "Brazil": "29th",
    "Greece": "30th",
    "Kenya": "31st",
    "Czech Republic": "32nd",
    "South Africa": "33rd",
    "Jamaica": "34th",
    "Iran": "35th",
    "Ethiopia": "36th",
    "Belarus": "37th",
    "Argentina": "38th",
    "Croatia": "39th",
    "North Korea": "40th",
    "Kazakhstan": "41st",
    "Slovakia": "42nd",
    "Estonia": "43rd",
    "Mexico": "44th",
    "Slovenia": "45th",
    "Ireland": "46th",
    "Uzbekistan": "47th",
    "Georgia": "48th",
    "India": "49th",
    "Thailand": "50th",
    "Indonesia": "51st",
    "Egypt": "52nd",
    "Bahamas": "53rd",
    "Azerbaijan": "54th",
    "Morocco": "55th",
    "Lithuania": "56th",
    "Serbia": "57th",
    "Latvia": "58th",
    "Colombia": "59th",
    "Portugal": "60th",
    "Algeria": "61st",
    "Tunisia": "62nd",
    "Uganda": "63rd",
    "Nigeria": "64th",
    "Venezuela": "65th",
    "Trinidad and Tobago": "66th",
    "Dominican Republic": "67th",
    "Zimbabwe": "68th",
    "Pakistan": "69th",
    "Ecuador": "70th",
    "Israel": "71st",
    "Cameroon": "72nd",
    "Kosovo": "73rd",
    "Mongolia": "74th",
    "Armenia": "75th",
    "Chile": "76th",
    "Hong Kong": "77th",
    "Luxembourg": "78th",
    "Liechtenstein": "79th",
    "Puerto Rico": "79th",
    "Uruguay": "79th",
    "Qatar": "82nd",
    "Bahrain": "83rd",
    "Fiji": "84th",
    "Philippines": "85th",
    "Vietnam": "86th",
    "Peru": "87th",
    "Singapore": "88th",
    "Costa Rica": "89th",
    "Ivory Coast": "89th",
    "Syria": "89th",
    "Tajikistan": "89th",
    "Grenada": "93rd",
    "Jordan": "93rd",
    "Burundi": "95th",
    "Panama": "96th",
    "Bermuda": "97th",
    "Mozambique": "97th",
    "Suriname": "97th",
    "United Arab Emirates": "97th",
    "Malaysia": "101st",
    "Namibia": "102nd",
    "Kyrgyzstan": "103rd",
    "Moldova": "104th",
    "Iceland": "105th",
    "Lebanon": "105th",
    "Saudi Arabia": "105th",
    "Sri Lanka": "108th",
    "Tanzania": "108th",
    "Ghana": "110th",
    "Bohemia": "111th",
    "San Marino": "112th",
    "Botswana": "113th",
    "Haiti": "113th",
    "Niger": "113th",
    "North Macedonia": "113th",
    "Zambia": "113th",
    "Cyprus": "118th",
    "Gabon": "118th",
    "Guatemala": "118th",
    "Montenegro": "118th",
    "Netherlands Antilles": "118th",
    "Paraguay": "118th",
    "Samoa": "118th",
    "Senegal": "118th",
    "Sudan": "118th",
    "Tonga": "118th",
    "Turkmenistan": "118th",
    "Virgin Islands": "118th",
    "Kuwait": "130th",
    "Afghanistan": "131st",
    "British West Indies": "131st",
    "Barbados": "133rd",
    "Burkina Faso": "133rd",
    "Djibouti": "133rd",
    "Eritrea": "133rd",
    "Guyana": "133rd",
    "Iraq": "133rd",
    "Mauritius": "133rd",
    "Togo": "133rd"
};

const landAreaRankings = {
    "Russia": "1st",
    "Canada": "2nd",
    "United States": "3rd",
    "China": "4th",
    "Brazil": "5th",
    "Australia": "6th",
    "India": "7th",
    "Argentina": "8th",
    "Kazakhstan": "9th",
    "Algeria": "10th",
    "Democratic Republic of the Congo": "11th",
    "Kingdom of Denmark": "12th",
    "Saudi Arabia": "13th",
    "Mexico": "14th",
    "Indonesia": "15th",
    "Sudan": "16th",
    "Libya": "17th",
    "Iran": "18th",
    "Mongolia": "19th",
    "Peru": "20th",
    "Chad": "21st",
    "Niger": "22nd",
    "Angola": "23rd",
    "Mali": "24th",
    "South Africa": "25th",
    "Colombia": "26th",
    "Ethiopia": "27th",
    "Bolivia": "28th",
    "Mauritania": "29th",
    "Egypt": "30th",
    "Tanzania": "31st",
    "Nigeria": "32nd",
    "Venezuela": "33rd",
    "Pakistan": "34th",
    "Namibia": "35th",
    "Mozambique": "36th",
    "Turkey": "37th",
    "Chile": "38th",
    "Zambia": "39th",
    "Myanmar": "40th",
    "Afghanistan": "41st",
    "South Sudan": "42nd",
    "France": "43rd",
    "Somalia": "44th",
    "Central African Republic": "45th",
    "Ukraine": "46th",
    "Madagascar": "47th",
    "Botswana": "48th",
    "Kenya": "49th",
    "Yemen": "50th",
    "Thailand": "51st",
    "Spain": "52nd",
    "Turkmenistan": "53rd",
    "Cameroon": "54th",
    "Papua New Guinea": "55th",
    "Sweden": "56th",
    "Uzbekistan": "57th",
    "Morocco": "58th",
    "Iraq": "59th",
    "Paraguay": "60th",
    "Zimbabwe": "61st",
    "Norway": "62nd",
    "Japan": "63rd",
    "Germany": "64th",
    "Congo": "65th",
    "Finland": "66th",
    "Vietnam": "67th",
    "Malaysia": "68th",
    "Ivory Coast": "69th",
    "Poland": "70th",
    "Oman": "71st",
    "Italy": "72nd",
    "Philippines": "73rd",
    "Ecuador": "74th",
    "Burkina Faso": "75th",
    "New Zealand": "76th",
    "Gabon": "77th",
    "Guinea": "78th",
    "United Kingdom": "79th",
    "Uganda": "80th",
    "Ghana": "81st",
    "Romania": "82nd",
    "Laos": "83rd",
    "Guyana": "84th",
    "Belarus": "85th",
    "Kyrgyzstan": "86th",
    "Senegal": "87th",
    "Syria": "88th",
    "Cambodia": "89th",
    "Uruguay": "90th",
    "Suriname": "91st",
    "Tunisia": "92nd",
    "Bangladesh": "93rd",
    "Nepal": "94th",
    "Tajikistan": "95th",
    "Greece": "96th",
    "Nicaragua": "97th",
    "North Korea": "98th",
    "Malawi": "99th",
    "Eritrea": "100th",
    "Benin": "101st",
    "Honduras": "102nd",
    "Liberia": "103rd",
    "Bulgaria": "104th",
    "Cuba": "105th",
    "Guatemala": "106th",
    "Iceland": "107th",
    "South Korea": "108th",
    "Hungary": "109th",
    "Portugal": "110th",
    "Jordan": "111th",
    "Serbia": "112th",
    "Azerbaijan": "113th",
    "Austria": "114th",
    "United Arab Emirates": "115th",
    "Czech Republic": "116th",
    "Panama": "117th",
    "Sierra Leone": "118th",
    "Ireland": "119th",
    "Georgia": "120th",
    "Sri Lanka": "121st",
    "Lithuania": "122nd",
    "Latvia": "123rd",
    "Togo": "124th",
    "Croatia": "125th",
    "Bosnia and Herzegovina": "126th",
    "Costa Rica": "127th",
    "Slovakia": "128th",
    "Dominican Republic": "129th",
    "Estonia": "130th",
    "Netherlands": "131st",
    "Switzerland": "132nd",
    "Bhutan": "133rd",
    "Guinea-Bissau": "134th",
    "Moldova": "135th",
    "Belgium": "136th",
    "Lesotho": "137th",
    "Armenia": "138th",
    "Solomon Islands": "139th",
    "Albania": "140th",
    "Equatorial Guinea": "141st",
    "Burundi": "142nd",
    "Haiti": "143rd",
    "Rwanda": "144th",
    "North Macedonia": "145th",
    "Djibouti": "146th",
    "Belize": "147th",
    "Israel": "148th",
    "El Salvador": "149th",
    "Slovenia": "150th",
    "Fiji": "151st",
    "Kuwait": "152nd",
    "Eswatini": "153rd",
    "East Timor": "154th",
    "Bahamas": "155th",
    "Montenegro": "156th",
    "Vanuatu": "157th",
    "Qatar": "158th",
    "Gambia": "159th",
    "Jamaica": "160th",
    "Lebanon": "161st",
    "Cyprus": "162nd",
    "Palestine": "163rd",
    "Brunei": "164th",
    "Trinidad and Tobago": "165th",
    "Cape Verde": "166th",
    "Samoa": "167th",
    "Luxembourg": "168th",
    "Mauritius": "169th",
    "Comoros": "170th",
    "São Tomé and Príncipe": "171st",
    "Kiribati": "172nd",
    "Bahrain": "173rd",
    "Dominica": "174th",
    "Tonga": "175th",
    "Singapore": "176th",
    "Micronesia": "177th",
    "Saint Lucia": "178th",
    "Andorra": "179th",
    "Palau": "180th",
    "Seychelles": "181st",
    "Antigua and Barbuda": "182nd",
    "Barbados": "183rd",
    "Saint Vincent and the Grenadines": "184th",
    "Grenada": "185th",
    "Malta": "186th",
    "Maldives": "187th",
    "Saint Kitts and Nevis": "188th",
    "Monaco": "189th",
    "Vatican City": "190th"
};

const populationRankings = {
    "India": "1st",
    "China": "2nd",
    "United States": "3rd",
    "Indonesia": "4th",
    "Pakistan": "5th",
    "Nigeria": "6th",
    "Brazil": "7th",
    "Bangladesh": "8th",
    "Russia": "9th",
    "Mexico": "10th",
    "Ethiopia": "11th",
    "Japan": "12th",
    "Philippines": "13th",
    "Egypt": "14th",
    "DR Congo": "15th",
    "Vietnam": "16th",
    "Iran": "17th",
    "Turkey": "18th",
    "Germany": "19th",
    "Thailand": "20th",
    "United Kingdom": "21st",
    "Tanzania": "22nd",
    "France": "23rd",
    "South Africa": "24th",
    "Italy": "25th",
    "Kenya": "26th",
    "Myanmar": "27th",
    "Colombia": "28th",
    "South Korea": "29th",
    "Uganda": "30th",
    "Sudan": "31st",
    "Spain": "32nd",
    "Argentina": "33rd",
    "Algeria": "34th",
    "Iraq": "35th",
    "Afghanistan": "36th",
    "Poland": "37th",
    "Canada": "38th",
    "Morocco": "39th",
    "Saudi Arabia": "40th",
    "Ukraine": "41st",
    "Angola": "42nd",
    "Uzbekistan": "43rd",
    "Yemen": "44th",
    "Peru": "45th",
    "Malaysia": "46th",
    "Ghana": "47th",
    "Mozambique": "48th",
    "Nepal": "49th",
    "Madagascar": "50th",
    "Ivory Coast": "51st",
    "Venezuela": "52nd",
    "Cameroon": "53rd",
    "Niger": "54th",
    "Australia": "55th",
    "North Korea": "56th",
    "Taiwan": "57th",
    "Mali": "58th",
    "Burkina Faso": "59th",
    "Syria": "60th",
    "Sri Lanka": "61st",
    "Malawi": "62nd",
    "Zambia": "63rd",
    "Romania": "64th",
    "Chile": "65th",
    "Kazakhstan": "66th",
    "Chad": "67th",
    "Ecuador": "68th",
    "Somalia": "69th",
    "Guatemala": "70th",
    "Senegal": "71st",
    "Netherlands": "72nd",
    "Cambodia": "73rd",
    "Zimbabwe": "74th",
    "Guinea": "75th",
    "Rwanda": "76th",
    "Benin": "77th",
    "Burundi": "78th",
    "Tunisia": "79th",
    "Bolivia": "80th",
    "Haiti": "81st",
    "Belgium": "82nd",
    "Jordan": "83rd",
    "Dominican Republic": "84th",
    "Cuba": "85th",
    "South Sudan": "86th",
    "Sweden": "87th",
    "Honduras": "88th",
    "Czechia": "89th",
    "Azerbaijan": "90th",
    "Greece": "91st",
    "Papua New Guinea": "92nd",
    "Portugal": "93rd",
    "Tajikistan": "94th",
    "Hungary": "95th",
    "United Arab Emirates": "96th",
    "Belarus": "97th",
    "Israel": "98th",
    "Togo": "99th",
    "Austria": "100th",
    "Switzerland": "101st",
    "Sierra Leone": "102nd",
    "Laos": "103rd",
    "Serbia": "104th",
    "Nicaragua": "105th",
    "Libya": "106th",
    "Paraguay": "107th",
    "Kyrgyzstan": "108th",
    "Bulgaria": "109th",
    "Turkmenistan": "110th",
    "El Salvador": "111th",
    "Congo": "112th",
    "Singapore": "113th",
    "Denmark": "114th",
    "Slovakia": "115th",
    "Central African Republic": "116th",
    "Finland": "117th",
    "Norway": "118th",
    "Liberia": "119th",
    "Palestine": "120th",
    "Lebanon": "121st",
    "New Zealand": "122nd",
    "Costa Rica": "123rd",
    "Ireland": "124th",
    "Mauritania": "125th",
    "Oman": "126th",
    "Panama": "127th",
    "Kuwait": "128th",
    "Croatia": "129th",
    "Eritrea": "130th",
    "Georgia": "131st",
    "Mongolia": "132nd",
    "Moldova": "133rd",
    "Uruguay": "134th",
    "Bosnia and Herzegovina": "135th",
    "Albania": "136th",
    "Jamaica": "137th",
    "Armenia": "138th",
    "Gambia": "139th",
    "Lithuania": "140th",
    "Qatar": "141st",
    "Botswana": "142nd",
    "Namibia": "143rd",
    "Gabon": "144th",
    "Lesotho": "145th",
    "Guinea-Bissau": "146th",
    "Slovenia": "147th",
    "North Macedonia": "148th",
    "Latvia": "149th",
    "Equatorial Guinea": "150th",
    "Kosovo": "151st",
    "Trinidad and Tobago": "152nd",
    "Bahrain": "153rd",
    "East Timor": "154th",
    "Estonia": "155th",
    "Mauritius": "156th",
    "Cyprus": "157th",
    "Eswatini": "158th",
    "Djibouti": "159th",
    "Fiji": "160th",
    "Comoros": "161st",
    "Guyana": "162nd",
    "Bhutan": "163rd",
    "Solomon Islands": "164th",
    "Luxembourg": "165th",
    "Montenegro": "166th",
    "Suriname": "167th",
    "Cape Verde": "168th",
    "Malta": "169th",
    "Maldives": "170th",
    "Brunei": "171st",
    "Bahamas": "172nd",
    "Belize": "173rd",
    "Iceland": "174th",
    "Vanuatu": "175th",
    "Barbados": "176th",
    "São Tomé and Príncipe": "177th",
    "Samoa": "178th",
    "Saint Lucia": "179th",
    "Kiribati": "180th",
    "Grenada": "181st",
    "Micronesia": "182nd",
    "Tonga": "183rd",
    "Seychelles": "184th",
    "Andorra": "185th",
    "Dominica": "186th",
    "Antigua and Barbuda": "187th",
    "Saint Kitts and Nevis": "188th",
    "Nauru": "189th",
    "Tuvalu": "190th",
    "Monaco": "191st",
    "San Marino": "192nd",
    "Liechtenstein": "193rd",
    "Marshall Islands": "194th",
    "Vatican City": "195th"
};

const tourismRankings = {
    "France": "1st",
    "Spain": "2nd",
    "United States": "3rd",
    "China": "4th",
    "Italy": "5th",
    "Turkey": "6th",
    "Mexico": "7th",
    "Thailand": "8th",
    "Germany": "9th",
    "United Kingdom": "10th",
    "Austria": "11th",
    "Japan": "12th",
    "Greece": "13th",
    "Malaysia": "14th",
    "Portugal": "15th",
    "Russia": "16th",
    "Hong Kong": "17th",
    "Canada": "18th",
    "United Arab Emirates": "19th",
    "Poland": "20th",
    "Netherlands": "21st",
    "Macao": "22nd",
    "Vietnam": "23rd",
    "India": "24th",
    "Saudi Arabia": "25th",
    "South Korea": "26th",
    "Croatia": "27th",
    "Hungary": "28th",
    "Indonesia": "29th",
    "Singapore": "30th",
    "Denmark": "31st",
    "Ukraine": "32nd",
    "Morocco": "33rd",
    "Egypt": "34th",
    "Switzerland": "35th",
    "Ireland": "36th",
    "South Africa": "37th",
    "Australia": "38th",
    "Tunisia": "39th",
    "Belgium": "40th",
    "Iran": "41st",
    "Kyrgyzstan": "42nd",
    "Philippines": "43rd",
    "Bulgaria": "44th",
    "Sweden": "45th",
    "Argentina": "46th",
    "Uzbekistan": "47th",
    "Cambodia": "48th",
    "Dominican Republic": "49th",
    "Brazil": "50th",
    "Albania": "51st",
    "Norway": "52nd",
    "Slovakia": "53rd",
    "Georgia": "54th",
    "Slovenia": "55th",
    "Israel": "56th",
    "Chile": "57th",
    "Jordan": "58th",
    "Laos": "59th",
    "Peru": "60th",
    "Myanmar": "61st",
    "Cuba": "62nd",
    "Colombia": "63rd",
    "Cyprus": "64th",
    "Bahrain": "65th",
    "New Zealand": "66th",
    "Pakistan": "67th",
    "Estonia": "68th",
    "Finland": "69th",
    "Uruguay": "70th",
    "Costa Rica": "71st",
    "Andorra": "72nd",
    "Azerbaijan": "73rd",
    "Lithuania": "74th",
    "Malta": "75th",
    "Jamaica": "76th",
    "Romania": "77th",
    "Montenegro": "78th",
    "Oman": "79th",
    "Syria": "80th",
    "Algeria": "81st",
    "Zimbabwe": "82nd",
    "Belarus": "83rd",
    "Qatar": "84th",
    "Ecuador": "85th",
    "Ivory Coast": "86th",
    "Mozambique": "87th",
    "Iceland": "88th",
    "Nigeria": "89th",
    "Lebanon": "90th",
    "Latvia": "91st",
    "Sri Lanka": "92nd",
    "Armenia": "93rd",
    "Kenya": "94th",
    "Serbia": "95th",
    "Bahamas": "96th",
    "El Salvador": "97th",
    "Panama": "98th",
    "Guatemala": "99th",
    "Maldives": "100th",
    "Guam": "101st",
    "Namibia": "102nd",
    "Rwanda": "103rd",
    "Uganda": "104th",
    "Botswana": "105th",
    "Tanzania": "106th",
    "Mauritius": "107th",
    "Nicaragua": "108th",
    "Zambia": "109th",
    "Tajikistan": "110th",
    "Bolivia": "111th",
    "Paraguay": "112th",
    "Bosnia and Herzegovina": "113th",
    "Nepal": "114th",
    "Ghana": "115th",
    "Aruba": "116th",
    "Luxembourg": "117th",
    "Malawi": "118th",
    "Fiji": "119th",
    "Togo": "120th",
    "Ethiopia": "121st",
    "Cabo Verde": "122nd",
    "Honduras": "123rd",
    "Palestine": "124th",
    "Eswatini": "125th",
    "Gambia": "126th",
    "Mongolia": "127th",
    "Barbados": "128th",
    "Belize": "129th",
    "Saint Lucia": "130th",
    "Trinidad and Tobago": "131st",
    "Seychelles": "132nd",
    "Madagascar": "133rd",
    "Monaco": "134th",
    "Brunei": "135th",
    "Bangladesh": "136th",
    "Bhutan": "137th",
    "Guyana": "138th",
    "Benin": "139th",
    "Antigua and Barbuda": "140th",
    "Haiti": "141st",
    "Bermuda": "142nd",
    "Angola": "143rd",
    "Mali": "144th",
    "Niger": "145th",
    "Grenada": "146th",
    "Moldova": "147th",
    "Samoa": "148th",
    "Papua New Guinea": "149th",
    "Kuwait": "150th",
    "Burkina Faso": "151st",
    "Vanuatu": "152nd",
    "Saint Kitts and Nevis": "153rd",
    "San Marino": "154th",
    "Liechtenstein": "155th",
    "Palau": "156th",
    "Dominica": "157th",
    "Central African Republic": "158th",
    "Saint Vincent and the Grenadines": "159th",
    "Chad": "160th",
    "Timor-Leste": "161st",
    "Tonga": "162nd",
    "Sierra Leone": "163rd",
    "Guinea-Bissau": "164th",
    "Comoros": "165th",
    "São Tomé and Príncipe": "166th",
    "Solomon Islands": "167th",
    "Micronesia": "168th",
    "Tuvalu": "169th"
};

const naturalCapitalRankings = {
    "Uruguay": "1st",
    "Paraguay": "2nd",
    "Bhutan": "3rd",
    "Iceland": "4th",
    "Canada": "5th",
    "Brazil": "6th",
    "Latvia": "7th",
    "Bolivia": "8th",
    "Colombia": "9th",
    "Russia": "10th",
    "Albania": "11th",
    "Laos": "12th",
    "Lithuania": "13th",
    "Peru": "14th",
    "Democratic Republic of Congo": "15th",
    "Venezuela": "16th",
    "Croatia": "17th",
    "Serbia": "18th",
    "Belarus": "19th",
    "Bosnia and Herzegovina": "20th",
    "Sweden": "21st",
    "Romania": "22nd",
    "Estonia": "23rd",
    "Finland": "24th",
    "Nicaragua": "25th",
    "Chile": "26th",
    "Panama": "27th",
    "Norway": "28th",
    "Sierra Leone": "29th",
    "Guyana": "30th",
    "Cambodia": "31st",
    "Argentina": "32nd",
    "Fiji": "33rd",
    "Burma": "34th",
    "Slovakia": "35th",
    "Switzerland": "36th",
    "Tanzania": "37th",
    "Ukraine": "38th",
    "Republic of Congo": "39th",
    "USA": "40th",
    "Papua New Guinea": "41st",
    "Portugal": "42nd",
    "Zambia": "43rd",
    "Bulgaria": "44th",
    "Ghana": "45th",
    "Ecuador": "46th",
    "Kyrgyzstan": "47th",
    "Ireland": "48th",
    "Suriname": "49th",
    "Georgia": "50th",
    "Equatorial Guinea": "51st",
    "Poland": "52nd",
    "Cote d'Ivoire": "53rd",
    "Austria": "54th",
    "Zimbabwe": "55th",
    "Central African Republic": "56th",
    "South Sudan": "57th",
    "Cameroon": "58th",
    "Kazakhstan": "59th",
    "Belize": "60th",
    "Denmark": "61st",
    "Czech Republic": "62nd",
    "Angola": "63rd",
    "Tajikistan": "64th",
    "Mozambique": "65th",
    "New Zealand": "66th",
    "Chad": "67th",
    "Costa Rica": "68th",
    "Guinea": "69th",
    "Australia": "70th",
    "Montenegro": "71st",
    "Mongolia": "72nd",
    "Turkey": "73rd",
    "France": "74th",
    "United Kingdom": "75th",
    "El Salvador": "76th",
    "Gabon": "77th",
    "Uganda": "78th",
    "Vietnam": "79th",
    "Indonesia": "80th",
    "Italy": "81st",
    "Nepal": "82nd",
    "Madagascar": "83rd",
    "Uzbekistan": "84th",
    "Solomon Islands": "85th",
    "Honduras": "86th",
    "Niger": "87th",
    "Slovenia": "88th",
    "Moldova": "89th",
    "Rwanda": "90th",
    "Spain": "91st",
    "Mexico": "92nd",
    "South Africa": "93rd",
    "Togo": "94th",
    "Lesotho": "95th",
    "Japan": "96th",
    "Saudi Arabia": "97th",
    "Bangladesh": "98th",
    "Cuba": "99th",
    "Sudan": "100th",
    "Hungary": "101st",
    "Tonga": "102nd",
    "Azerbaijan": "103rd",
    "North Macedonia": "104th",
    "Malawi": "105th",
    "India": "106th",
    "Burundi": "107th",
    "Turkmenistan": "108th",
    "Guatemala": "109th",
    "Namibia": "110th",
    "Nigeria": "111th",
    "Philippines": "112th",
    "Mali": "113th",
    "Luxembourg": "114th",
    "Afghanistan": "115th",
    "China": "116th",
    "Guinea-Bissau": "117th",
    "Germany": "118th",
    "Liberia": "119th",
    "Syria": "120th",
    "Dominican Republic": "121st",
    "Burkina Faso": "122nd",
    "Malaysia": "123rd",
    "Jamaica": "124th",
    "Senegal": "125th",
    "Oman": "126th",
    "St. Vincent and the Grenadines": "127th",
    "Armenia": "128th",
    "Dominica": "129th",
    "Botswana": "130th",
    "Morocco": "131st",
    "Samoa": "132nd",
    "Brunei": "133rd",
    "Mauritania": "134th",
    "Algeria": "135th",
    "Greece": "136th",
    "Ethiopia": "137th",
    "Netherlands": "138th",
    "Sri Lanka": "139th",
    "Thailand": "140th",
    "Mauritius": "141st",
    "Benin": "143rd",
    "Eswatini": "145th",
    "Iran": "146th",
    "Egypt": "147th",
    "Malta": "148th",
    "Micronesia": "149th",
    "Seychelles": "150th",
    "Djibouti": "151st",
    "Vanuatu": "152nd",
    "South Korea": "153rd",
    "Kiribati": "154th",
    "Kuwait": "156th",
    "Gambia": "157th",
    "Kenya": "158th",
    "Comoros": "159th",
    "Haiti": "160th",
    "United Arab Emirates": "161st",
    "Bahrain": "162nd",
    "Maldives": "163rd",
    "Yemen": "164th",
    "Pakistan": "165th",
    "Iraq": "166th",
    "Timor-Leste": "167th",
    "Qatar": "168th",
    "Eritrea": "169th",
    "Cyprus": "170th",
    "Sao Tome and Principe": "171st",
    "Trinidad and Tobago": "172nd",
    "Jordan": "173rd",
    "Tunisia": "174th",
    "Bahamas": "175th",
    "Belgium": "176th",
    "Israel": "177th",
    "Grenada": "178th",
    "Cape Verde": "179th",
    "Singapore": "180th"
};

const gdpPerCapitaRankings = {
    "Monaco": "1st",
    "Luxembourg": "2nd",
    "Norway": "3rd",
    "Ireland": "4th",
    "Switzerland": "5th",
    "Qatar": "6th",
    "Singapore": "7th",
    "USA": "8th",
    "Iceland": "9th",
    "Denmark": "10th",
    "Australia": "11th",
    "Netherlands": "12th",
    "Sweden": "13th",
    "Canada": "14th",
    "Israel": "15th",
    "United Arab Emirates": "16th",
    "Austria": "17th",
    "Finland": "18th",
    "Belgium": "19th",
    "Germany": "20th",
    "UK": "21st",
    "Andorra": "22nd",
    "Kuwait": "23rd",
    "France": "24th",
    "Brunei": "25th",
    "Italy": "26th",
    "Malta": "27th",
    "Japan": "28th",
    "Aruba": "29th",
    "South Korea": "30th",
    "Cyprus": "31st",
    "Bahamas": "32nd",
    "Saudi Arabia": "33rd",
    "Bahrain": "34th",
    "Spain": "35th",
    "Slovenia": "36th",
    "Estonia": "37th",
    "Czechia": "38th",
    "Lithuania": "39th",
    "Oman": "40th",
    "Portugal": "41st",
    "Latvia": "42nd",
    "Slovakia": "43rd",
    "Greece": "44th",
    "Uruguay": "45th",
    "Barbados": "46th",
    "Antigua and Barbuda": "47th",
    "Trinidad and Tobago": "48th",
    "Poland": "49th",
    "Croatia": "50th",
    "Hungary": "51st",
    "Guyana": "52nd",
    "Panama": "53rd",
    "Romania": "54th",
    "Chile": "55th",
    "Russia": "56th",
    "Bulgaria": "57th",
    "Argentina": "58th",
    "Costa Rica": "59th",
    "Seychelles": "60th",
    "Saint Lucia": "61st",
    "China": "62nd",
    "Malaysia": "63rd",
    "Maldives": "64th",
    "Mexico": "65th",
    "Kazakhstan": "66th",
    "Turkey": "67th",
    "Mauritius": "68th",
    "Dominican Republic": "69th",
    "Montenegro": "70th",
    "Grenada": "71st",
    "Serbia": "72nd",
    "Saint Vincent and the Grenadines": "73rd",
    "Brazil": "74th",
    "Gabon": "75th",
    "Turkmenistan": "76th",
    "Dominica": "77th",
    "Belarus": "78th",
    "Azerbaijan": "79th",
    "Botswana": "80th",
    "Bosnia and Herzegovina": "81st",
    "Equatorial Guinea": "82nd",
    "Peru": "83rd",
    "Armenia": "84th",
    "Belize": "85th",
    "Thailand": "86th",
    "Albania": "87th",
    "South Africa": "88th",
    "Libya": "89th",
    "Georgia": "90th",
    "Colombia": "91st",
    "North Macedonia": "92nd",
    "Ecuador": "93rd",
    "Paraguay": "94th",
    "Jamaica": "95th",
    "Iraq": "96th",
    "Suriname": "97th",
    "Moldova": "98th",
    "Guatemala": "99th",
    "Fiji": "100th",
    "Tuvalu": "101st",
    "El Salvador": "102nd",
    "Mongolia": "103rd",
    "Namibia": "104th",
    "Indonesia": "105th",
    "Iran": "106th",
    "Ukraine": "107th",
    "Algeria": "108th",
    "Jordan": "109th",
    "Egypt": "110th",
    "Vietnam": "111th",
    "Eswatini": "112th",
    "Cape Verde": "113th",
    "Tunisia": "114th",
    "Samoa": "115th",
    "Micronesia": "116th",
    "Bolivia": "117th",
    "Philippines": "118th",
    "Morocco": "119th",
    "Sri Lanka": "120th",
    "Vanuatu": "121st",
    "Djibouti": "122nd",
    "Papua New Guinea": "123rd",
    "Honduras": "124th",
    "Angola": "125th",
    "Bangladesh": "126th",
    "Republic of the Congo": "127th",
    "Ivory Coast": "128th",
    "India": "129th",
    "São Tomé and Príncipe": "130th",
    "Nicaragua": "131st",
    "Uzbekistan": "132nd",
    "Solomon Islands": "133rd",
    "Ghana": "134th",
    "Nigeria": "135th",
    "Kenya": "136th",
    "Mauritania": "137th",
    "Laos": "138th",
    "Cambodia": "139th",
    "Haiti": "140th",
    "Kiribati": "141st",
    "Zimbabwe": "142nd",
    "Kyrgyzstan": "143rd",
    "Senegal": "144th",
    "Pakistan": "145th",
    "Cameroon": "146th",
    "Guinea": "147th",
    "Comoros": "148th",
    "Zambia": "149th",
    "Nepal": "150th",
    "Benin": "151st",
    "Tanzania": "152nd",
    "Burma": "153rd",
    "Sudan": "154th",
    "Tajikistan": "155th",
    "Ethiopia": "156th",
    "Lesotho": "157th",
    "Rwanda": "158th",
    "Uganda": "159th",
    "Togo": "160th",
    "Mali": "161st",
    "Burkina Faso": "162nd",
    "Gambia": "163rd",
    "Guinea-Bissau": "164th",
    "Liberia": "165th",
    "Chad": "166th",
    "DR Congo": "167th",
    "Yemen": "168th",
    "Malawi": "169th",
    "Somalia": "170th",
    "Niger": "171st",
    "Mozambique": "172nd",
    "Madagascar": "173rd",
    "Sierra Leone": "174th",
    "Central African Republic": "175th",
    "Burundi": "176th"
};




const flags = [
    'flags_images/ad.png',
    'flags_images/ae.png',
    'flags_images/af.png',
    'flags_images/ag.png',
    'flags_images/ai.png',
    'flags_images/al.png',
    'flags_images/am.png',
    'flags_images/ao.png',
    'flags_images/aq.png',
    'flags_images/ar.png',
    'flags_images/as.png',
    'flags_images/at.png',
    'flags_images/au.png',
    'flags_images/aw.png',
    'flags_images/ax.png',
    'flags_images/az.png',
    'flags_images/ba.png',
    'flags_images/bb.png',
    'flags_images/bd.png',
    'flags_images/be.png',
    'flags_images/bf.png',
    'flags_images/bg.png',
    'flags_images/bh.png',
    'flags_images/bi.png',
    'flags_images/bj.png',
    'flags_images/bl.png',
    'flags_images/bm.png',
    'flags_images/bn.png',
    'flags_images/bo.png',
    'flags_images/bq.png',
    'flags_images/br.png',
    'flags_images/bs.png',
    'flags_images/bt.png',
    'flags_images/bv.png',
    'flags_images/bw.png',
    'flags_images/by.png',
    'flags_images/bz.png',
    'flags_images/ca.png',
    'flags_images/cc.png',
    'flags_images/cd.png',
    'flags_images/cf.png',
    'flags_images/cg.png',
    'flags_images/ch.png',
    'flags_images/ci.png',
    'flags_images/ck.png',
    'flags_images/cl.png',
    'flags_images/cm.png',
    'flags_images/cn.png',
    'flags_images/co.png',
    'flags_images/cr.png',
    'flags_images/cu.png',
    'flags_images/cv.png',
    'flags_images/cw.png',
    'flags_images/cx.png',
    'flags_images/cy.png',
    'flags_images/cz.png',
    'flags_images/de.png',
    'flags_images/dj.png',
    'flags_images/dk.png',
    'flags_images/dm.png',
    'flags_images/do.png',
    'flags_images/dz.png',
    'flags_images/ec.png',
    'flags_images/ee.png',
    'flags_images/eg.png',
    'flags_images/eh.png',
    'flags_images/er.png',
    'flags_images/es.png',
    'flags_images/et.png',
    'flags_images/fi.png',
    'flags_images/fj.png',
    'flags_images/fk.png',
    'flags_images/fm.png',
    'flags_images/fo.png',
    'flags_images/fr.png',
    'flags_images/ga.png',
    'flags_images/gb-eng.png',
    'flags_images/gb-nir.png',
    'flags_images/gb-sct.png',
    'flags_images/gb-wls.png',
    'flags_images/gb.png',
    'flags_images/gd.png',
    'flags_images/ge.png',
    'flags_images/gf.png',
    'flags_images/gg.png',
    'flags_images/gh.png',
    'flags_images/gi.png',
    'flags_images/gl.png',
    'flags_images/gm.png',
    'flags_images/gn.png',
    'flags_images/gp.png',
    'flags_images/gq.png',
    'flags_images/gr.png',
    'flags_images/gs.png',
    'flags_images/gt.png',
    'flags_images/gu.png',
    'flags_images/gw.png',
    'flags_images/gy.png',
    'flags_images/hk.png',
    'flags_images/hm.png',
    'flags_images/hn.png',
    'flags_images/hr.png',
    'flags_images/ht.png',
    'flags_images/hu.png',
    'flags_images/id.png',
    'flags_images/ie.png',
    'flags_images/il.png',
    'flags_images/im.png',
    'flags_images/in.png',
    'flags_images/io.png',
    'flags_images/iq.png',
    'flags_images/ir.png',
    'flags_images/is.png',
    'flags_images/it.png',
    'flags_images/je.png',
    'flags_images/jm.png',
    'flags_images/jo.png',
    'flags_images/ke.png',
    'flags_images/kg.png',
    'flags_images/kh.png',
    'flags_images/ki.png',
    'flags_images/km.png',
    'flags_images/kn.png',
    'flags_images/kp.png',
    'flags_images/kr.png',
    'flags_images/kw.png',
    'flags_images/ky.png',
    'flags_images/kz.png',
    'flags_images/la.png',
    'flags_images/lb.png',
    'flags_images/lc.png',
    'flags_images/li.png',
    'flags_images/lk.png',
    'flags_images/lr.png',
    'flags_images/ls.png',
    'flags_images/lt.png',
    'flags_images/lu.png',
    'flags_images/lv.png',
    'flags_images/ly.png',
    'flags_images/ma.png',
    'flags_images/mc.png',
    'flags_images/md.png',
    'flags_images/me.png',
    'flags_images/mf.png',
    'flags_images/mg.png',
    'flags_images/mh.png',
    'flags_images/mk.png',
    'flags_images/ml.png',
    'flags_images/mm.png',
    'flags_images/mn.png',
    'flags_images/mo.png',
    'flags_images/mp.png',
    'flags_images/mq.png',
    'flags_images/mr.png',
    'flags_images/ms.png',
    'flags_images/mt.png',
    'flags_images/mu.png',
    'flags_images/mv.png',
    'flags_images/mw.png',
    'flags_images/mx.png',
    'flags_images/my.png',
    'flags_images/mz.png',
    'flags_images/na.png',
    'flags_images/nc.png',
    'flags_images/ne.png',
    'flags_images/nf.png',
    'flags_images/ng.png',
    'flags_images/ni.png',
    'flags_images/nl.png',
    'flags_images/no.png',
    'flags_images/np.png',
    'flags_images/nr.png',
    'flags_images/nu.png',
    'flags_images/nz.png',
    'flags_images/om.png',
    'flags_images/pa.png',
    'flags_images/pe.png',
    'flags_images/pf.png',
    'flags_images/pg.png',
    'flags_images/ph.png',
    'flags_images/pk.png',
    'flags_images/pl.png',
    'flags_images/pm.png',
    'flags_images/pn.png',
    'flags_images/pr.png',
    'flags_images/ps.png',
    'flags_images/pt.png',
    'flags_images/pw.png',
    'flags_images/py.png',
    'flags_images/qa.png',
    'flags_images/re.png',
    'flags_images/ro.png',
    'flags_images/rs.png',
    'flags_images/ru.png',
    'flags_images/rw.png',
    'flags_images/sa.png',
    'flags_images/sb.png',
    'flags_images/sc.png',
    'flags_images/sd.png',
    'flags_images/se.png',
    'flags_images/sg.png',
    'flags_images/sh.png',
    'flags_images/si.png',
    'flags_images/sj.png',
    'flags_images/sk.png',
    'flags_images/sl.png',
    'flags_images/sm.png',
    'flags_images/sn.png',
    'flags_images/so.png',
    'flags_images/sr.png',
    'flags_images/ss.png',
    'flags_images/st.png',
    'flags_images/sv.png',
    'flags_images/sx.png',
    'flags_images/sy.png',
    'flags_images/sz.png',
    'flags_images/tc.png',
    'flags_images/td.png',
    'flags_images/tf.png',
    'flags_images/tg.png',
    'flags_images/th.png',
    'flags_images/tj.png',
    'flags_images/tk.png',
    'flags_images/tl.png',
    'flags_images/tm.png',
    'flags_images/tn.png',
    'flags_images/to.png',
    'flags_images/tr.png',
    'flags_images/tt.png',
    'flags_images/tv.png',
    'flags_images/tw.png',
    'flags_images/tz.png',
    'flags_images/ua.png',
    'flags_images/ug.png',
    'flags_images/um.png',
    'flags_images/us.png',
    'flags_images/uy.png',
    'flags_images/uz.png',
    'flags_images/va.png',
    'flags_images/vc.png',
    'flags_images/ve.png',
    'flags_images/vg.png',
    'flags_images/vi.png',
    'flags_images/vn.png',
    'flags_images/vu.png',
    'flags_images/wf.png',
    'flags_images/ws.png',
    'flags_images/xk.png',
    'flags_images/ye.png',
    'flags_images/yt.png',
    'flags_images/za.png',
    'flags_images/zw.png',
    // Add more flag image URLs as needed
];

const countryNames = [
    'Andorra',
    'United Arab Emirates',
    'Afghanistan',
    'Antigua and Barbuda',
    'Anguilla',
    'Albania',
    'Armenia',
    'Angola',
    'Antarctica',
    'Argentina',
    'American Samoa',
    'Austria',
    'Australia',
    'Aruba',
    'Åland Islands',
    'Azerbaijan',
    'Bosnia and Herzegovina',
    'Barbados',
    'Bangladesh',
    'Belgium',
    'Burkina Faso',
    'Bulgaria',
    'Bahrain',
    'Burundi',
    'Benin',
    'Saint Barthélemy',
    'Bermuda',
    'Brunei Darussalam',
    'Bolivia',
    'Bonaire, Sint Eustatius and Saba',
    'Brazil',
    'Bahamas',
    'Bhutan',
    'Bouvet Island',
    'Botswana',
    'Belarus',
    'Belize',
    'Canada',
    'Cocos (Keeling) Islands',
    'Democratic Republic of the Congo',
    'Central African Republic',
    'Republic of the Congo',
    'Switzerland',
    'Ivory Coast',
    'Cook Islands',
    'Chile',
    'Cameroon',
    'China',
    'Colombia',
    'Costa Rica',
    'Cuba',
    'Cabo Verde',
    'Curaçao',
    'Christmas Island',
    'Cyprus',
    'Czech Republic',
    'Germany',
    'Djibouti',
    'Denmark',
    'Dominica',
    'Dominican Republic',
    'Algeria',
    'Ecuador',
    'Estonia',
    'Egypt',
    'Western Sahara',
    'Eritrea',
    'Spain',
    'Ethiopia',
    'Finland',
    'Fiji',
    'Falkland Islands (Malvinas)',
    'Federated States of Micronesia',
    'Faroe Islands',
    'France',
    'Gabon',
    'England (United Kingdom)',
    'Northern Ireland (United Kingdom)',
    'Scotland (United Kingdom)',
    'Wales (United Kingdom)',
    'United Kingdom',
    'Grenada',
    'Georgia',
    'French Guiana',
    'Guernsey',
    'Ghana',
    'Gibraltar',
    'Greenland',
    'Gambia',
    'Guinea',
    'Guadeloupe',
    'Equatorial Guinea',
    'Greece',
    'South Georgia and the South Sandwich Islands',
    'Guatemala',
    'Guam',
    'Guinea-Bissau',
    'Guyana',
    'Hong Kong',
    'Heard Island and McDonald Islands',
    'Honduras',
    'Croatia',
    'Haiti',
    'Hungary',
    'Indonesia',
    'Ireland',
    'Israel',
    'Isle of Man',
    'India',
    'British Indian Ocean Territory',
    'Iraq',
    'Iran',
    'Iceland',
    'Italy',
    'Jersey',
    'Jamaica',
    'Jordan',
    'Kenya',
    'Kyrgyzstan',
    'Cambodia',
    'Kiribati',
    'Comoros',
    'Saint Kitts and Nevis',
    'North Korea',
    'South Korea',
    'Kuwait',
    'Cayman Islands',
    'Kazakhstan',
    'Laos',
    'Lebanon',
    'Saint Lucia',
    'Liechtenstein',
    'Sri Lanka',
    'Liberia',
    'Lesotho',
    'Lithuania',
    'Luxembourg',
    'Latvia',
    'Libya',
    'Morocco',
    'Monaco',
    'Moldova',
    'Montenegro',
    'Saint Martin (French part)',
    'Madagascar',
    'Marshall Islands',
    'North Macedonia',
    'Mali',
    'Myanmar',
    'Mongolia',
    'Macao',
    'Northern Mariana Islands',
    'Martinique',
    'Mauritania',
    'Montserrat',
    'Malta',
    'Mauritius',
    'Maldives',
    'Malawi',
    'Mexico',
    'Malaysia',
    'Mozambique',
    'Namibia',
    'New Caledonia',
    'Niger',
    'Norfolk Island',
    'Nigeria',
    'Nicaragua',
    'Netherlands',
    'Norway',
    'Nepal',
    'Nauru',
    'Niue',
    'New Zealand',
    'Oman',
    'Panama',
    'Peru',
    'French Polynesia',
    'Papua New Guinea',
    'Philippines',
    'Pakistan',
    'Poland',
    'Saint Pierre and Miquelon',
    'Pitcairn',
    'Puerto Rico',
    'State of Palestine',
    'Portugal',
    'Palau',
    'Paraguay',
    'Qatar',
    'Réunion',
    'Romania',
    'Serbia',
    'Russia',
    'Rwanda',
    'Saudi Arabia',
    'Solomon Islands',
    'Seychelles',
    'Sudan',
    'Sweden',
    'Singapore',
    'Saint Helena, Ascension and Tristan da Cunha',
    'Slovenia',
    'Svalbard and Jan Mayen',
    'Slovakia',
    'Sierra Leone',
    'San Marino',
    'Senegal',
    'Somalia',
    'Suriname',
    'South Sudan',
    'Sao Tome and Principe',
    'El Salvador',
    'Sint Maarten (Dutch part)',
    'Syria',
    'Eswatini',
    'Turks and Caicos Islands',
    'Chad',
    'French Southern Territories',
    'Togo',
    'Thailand',
    'Tajikistan',
    'Tokelau',
    'Timor-Leste',
    'Turkmenistan',
    'Tunisia',
    'Tonga',
    'Turkey',
    'Trinidad and Tobago',
    'Tuvalu',
    'Taiwan',
    'Tanzania',
    'Ukraine',
    'Uganda',
    'United States Minor Outlying Islands',
    'United States',
    'Uruguay',
    'Uzbekistan',
    'Vatican City',
    'Saint Vincent and the Grenadines',
    'Venezuela',
    'British Virgin Islands',
    'U.S. Virgin Islands',
    'Vietnam',
    'Vanuatu',
    'Wallis and Futuna',
    'Samoa',
    'Kosovo',
    'Yemen',
    'Mayotte',
    'South Africa',
    'Zimbabwe',
]

// List of 195 official countries in the world
const officialCountries = [
    'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Australia', 'Austria',
    'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bhutan', 'Bolivia',
    'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cabo Verde', 'Cambodia', 'Cameroon',
    'Canada', 'Central African Republic', 'Chad', 'Chile', 'China', 'Colombia', 'Comoros', 'Congo', 'Costa Rica', 'Croatia', 'Cuba',
    'Cyprus', 'Czechia', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'East Timor', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea',
    'Eritrea', 'Estonia', 'Eswatini', 'Ethiopia', 'Fiji', 'Finland', 'France', 'Gabon', 'Gambia', 'Georgia', 'Germany',
    'Ghana', 'Greece', 'Grenada', 'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hungary', 'Iceland',
    'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan',
    'Kenya', 'Kiribati', 'Korea, North', 'Korea, South', 'Kosovo', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon',
    'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali',
    'Malta', 'Marshall Islands', 'Mauritania', 'Mauritius', 'Mexico', 'Micronesia', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Morocco',
    'Mozambique', 'Myanmar', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'North Macedonia',
    'Norway', 'Oman', 'Pakistan', 'Palau', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal',
    'Qatar', 'Romania', 'Russia', 'Rwanda', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Vincent and the Grenadines', 'Samoa', 'San Marino', 'Sao Tome and Principe',
    'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa',
    'South Sudan', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania',
    'Thailand', 'Togo', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates',
    'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Vatican City', 'Venezuela', 'Vietnam', 'Yemen', 'Zambia', 'Zimbabwe'
  ];
  
// Filter the countryNames and flags to only include official countries
const filteredCountryNames = countryNames.filter(country => officialCountries.includes(country));
const filteredFlags = filteredCountryNames.map(country => {
    const index = countryNames.indexOf(country);
    return flags[index];
});

const imagePreloads = filteredFlags.map((flagUrl) => {
    const img = new Image();
    img.src = flagUrl;
    return img;
});

let selectedBox = null;
let rolledCountryIndices = new Set();
let skipsRemaining = 3; // Start with 3 skips
const MAX_SKIPS = 3;
let currentRoll = null; // Track the current country
let isRolling = false; // Flag to prevent double clicks
let selectedBoxes = new Set(); // Make this global so it's accessible everywhere

function rollFlag() {
    // Prevent multiple rapid clicks
    if (isRolling) return;
    isRolling = true;
    
    const flagBox = document.getElementById('flagBox');
    const countryNameDiv = document.getElementById('countryName');
    const containerDiv = document.querySelector('.container');
    const pickText = document.getElementById('pickText');
    const rollButton = document.querySelector('button');
    const rollDuration = 2000;

    // Check if we're re-rolling and need to count a skip
    if (currentRoll !== null && selectedBox === null) {
        // This is a re-roll, so decrease remaining skips
        console.log("Decreasing skips from", skipsRemaining);
        skipsRemaining--;
        console.log("Skips now:", skipsRemaining);
        updateSkipsCounter();
        
        // If we've used all skips, disable the button AFTER this roll
        if (skipsRemaining <= 0) {
            // We'll disable the button after the animation completes
            // This allows the last roll to happen
        }
    }

    containerDiv.classList.remove('roll-ended');
    pickText.style.visibility = 'hidden';
    selectedBox = null;

    let startTime = null;

    function animateFlag(timestamp) {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const percentage = Math.min(progress / rollDuration, 1);

        // Filter available country indices
        const availableCountryIndices = filteredCountryNames
            .map((_, index) => index)
            .filter(index => !rolledCountryIndices.has(index));
        
        // Select a random index from available indices
        const randomIndex = Math.floor(Math.random() * availableCountryIndices.length);
        const randomCountryIndex = availableCountryIndices[randomIndex];

        // Set the flag and country name
        flagBox.style.backgroundImage = `url(${filteredFlags[randomCountryIndex]})`;
        countryNameDiv.textContent = filteredCountryNames[randomCountryIndex];

        if (percentage < 1) {
            requestAnimationFrame(animateFlag);
        } else {
            startTime = null;
            containerDiv.classList.add('roll-ended');
            pickText.style.visibility = 'visible';
            rolledCountryIndices.add(randomCountryIndex); // Add the rolled country index to the set
            
            // Save the current roll
            currentRoll = randomCountryIndex;
            
            // Change button text to "Re-roll" if skips are available
            if (skipsRemaining > 0) {
                rollButton.textContent = 'Re-roll';
            } else {
                // Disable the button AFTER the final roll completes
                rollButton.disabled = true;
                rollButton.style.opacity = '0.5';
                rollButton.style.cursor = 'not-allowed';
            }
            
            // Allow rolling again
            isRolling = false;
        }
    }

    requestAnimationFrame(animateFlag);
}

document.addEventListener('DOMContentLoaded', function () {
    // Create skips counter display
    const flagContainer = document.querySelector('.flag-container');
    const skipsCounter = document.createElement('div');
    skipsCounter.id = 'skipsCounter';
    skipsCounter.className = 'skips-counter';
    skipsCounter.textContent = `Skips: ${skipsRemaining}/${MAX_SKIPS}`;
    
    // Insert after the roll button
    const rollButton = document.querySelector('button');
    rollButton.parentNode.insertBefore(skipsCounter, rollButton.nextSibling);

    // Create high score display
    const highScoreDisplay = document.createElement('div');
    highScoreDisplay.id = 'highScoreDisplay';
    highScoreDisplay.className = 'high-score';
    highScoreDisplay.textContent = `High Score: ${getHighScore() || 'None'}`;
    
    // Add high score at the bottom of the page
    const container = document.querySelector('.container');
    container.appendChild(highScoreDisplay);

    const categoryBoxes = document.querySelectorAll('.category-box');
    const hdiBox = document.getElementById('hdiBox');
    const hdiRank = document.getElementById('hdiRank');
    const militaryBox = document.getElementById('militaryBox');
    const militaryRank = document.getElementById('militaryRank');
    const olympicBox = document.getElementById('olympicBox');
    const olympicRank = document.getElementById('olympicRank');
    const landAreaBox = document.getElementById('landAreaBox');
    const landAreaRank = document.getElementById('landAreaRank');
    const populationBox = document.getElementById('populationBox');
    const populationRank = document.getElementById('populationRank');
    const tourismBox = document.getElementById('tourismBox');
    const tourismRank = document.getElementById('tourismRank');
    const naturalCapitalBox = document.getElementById('naturalCapitalBox');
    const naturalCapitalRank = document.getElementById('naturalCapitalRank');
    const gdpPerCapitaBox = document.getElementById('gdpPerCapitaBox');
    const gdpPerCapitaRank = document.getElementById('gdpPerCapitaRank');
    
    const averageRankingText = document.getElementById('averageRankingText');

    rollButton.addEventListener('click', function () {
        if (selectedBoxes.size === categoryBoxes.length) {
            resetGame();
        } else {
            // Always allow rolling, the rollFlag function will handle skips
            rollFlag();
        }
    });

    categoryBoxes.forEach(box => {
        box.addEventListener('click', function () {
            // Only allow clicking if we're not in the middle of rolling
            if (!isRolling && !selectedBoxes.has(box) && currentRoll !== null) {
                selectedBox = box;
                const flagUrl = document.getElementById('flagBox').style.backgroundImage;
                box.style.background = `${flagUrl} center/cover no-repeat`;
                selectedBoxes.add(box);

                const countryName = document.getElementById('countryName').textContent;
                if (box.parentElement.id === 'hdiBox') {
                    hdiRank.textContent = hdiRankings[countryName] || "No data available";
                    colorizeRank(hdiRank);
                } else if (box.parentElement.id === 'militaryBox') {
                    militaryRank.textContent = militaryRankings[countryName] || "No data available";
                    colorizeRank(militaryRank);
                } else if (box.parentElement.id === 'olympicBox') {
                    olympicRank.textContent = olympicRankings[countryName] || "No data available";
                    colorizeRank(olympicRank);
                } else if (box.parentElement.id === 'landAreaBox') {
                    landAreaRank.textContent = landAreaRankings[countryName] || "No data available";
                    colorizeRank(landAreaRank);
                } else if (box.parentElement.id === 'populationBox') {
                    populationRank.textContent = populationRankings[countryName] || "No data available";
                    colorizeRank(populationRank);
                } else if (box.parentElement.id === 'tourismBox') {
                    tourismRank.textContent = tourismRankings[countryName] || "No data available";
                    colorizeRank(tourismRank);
                } else if (box.parentElement.id === 'naturalCapitalBox') {
                    naturalCapitalRank.textContent = naturalCapitalRankings[countryName] || "No data available";
                    colorizeRank(naturalCapitalRank);
                } else if (box.parentElement.id === 'gdpPerCapitaBox') {
                    gdpPerCapitaRank.textContent = gdpPerCapitaRankings[countryName] || "No data available";
                    colorizeRank(gdpPerCapitaRank);
                }

                // Reset the roll button to "Roll" after placing a country
                rollButton.textContent = 'Roll';
                rollButton.disabled = false;
                rollButton.style.opacity = '1';
                rollButton.style.cursor = 'pointer';
                currentRoll = null;

                if (selectedBoxes.size === categoryBoxes.length) {
                    rollButton.textContent = 'Reset';
                    displayAverageRanking();
                }
            }
        });
    });

    function colorizeRank(rankElement) {
        if (rankElement.textContent.includes("No data")) return;
        
        // Extract the number from the rank (e.g., "1st" -> 1)
        const rankNum = parseInt(rankElement.textContent);
        
        if (rankNum <= 30) {
            rankElement.style.color = '#008000'; // Green for good rankings
        } else if (rankNum <= 100) {
            rankElement.style.color = '#FFA500'; // Orange for medium rankings
        } else {
            rankElement.style.color = '#FF0000'; // Red for poor rankings
        }
    }

    function getHighScore() {
        return localStorage.getItem('flagGameHighScore');
    }

    function setHighScore(score) {
        localStorage.setItem('flagGameHighScore', score);
        highScoreDisplay.textContent = `High Score: ${score}`;
    }

    function displayAverageRanking() {
        const ranks = [
            extractNumberFromRank(hdiRank.textContent),
            extractNumberFromRank(militaryRank.textContent),
            extractNumberFromRank(olympicRank.textContent),
            extractNumberFromRank(landAreaRank.textContent),
            extractNumberFromRank(populationRank.textContent),
            extractNumberFromRank(tourismRank.textContent),
            extractNumberFromRank(naturalCapitalRank.textContent),
            extractNumberFromRank(gdpPerCapitaRank.textContent)
        ];

        const validRanks = ranks.filter(rank => rank > 0);
        const averageRanking = validRanks.reduce((sum, rank) => sum + rank, 0) / validRanks.length;
        const formattedAverage = averageRanking.toFixed(2);

        averageRankingText.textContent = `Average Ranking: ${formattedAverage}`;
        
        // Check if this is a new high score (lower is better)
        const currentHighScore = getHighScore();
        
        if (!currentHighScore || parseFloat(formattedAverage) < parseFloat(currentHighScore)) {
            setHighScore(formattedAverage);
            
            // Create and display "New High Score!" message
            const newHighScoreMsg = document.createElement('div');
            newHighScoreMsg.textContent = "New High Score!";
            newHighScoreMsg.className = "new-high-score";
            
            averageRankingText.appendChild(document.createElement('br'));
            averageRankingText.appendChild(newHighScoreMsg);
        }
    }

    function extractNumberFromRank(rankText) {
        if (rankText.includes("No data")) return 0;
        // Extract the number from strings like "1st", "2nd", "3rd", "4th"
        return parseInt(rankText);
    }

    function resetGame() {
        selectedBoxes.clear();
        selectedBox = null;
        rolledCountryIndices.clear(); // Clear the set of rolled country indices
        skipsRemaining = MAX_SKIPS; // Reset to max skips
        currentRoll = null;
        isRolling = false;
        updateSkipsCounter();

        rollButton.textContent = 'Roll';
        rollButton.disabled = false;
        rollButton.style.opacity = '1';
        rollButton.style.cursor = 'pointer';

        categoryBoxes.forEach(box => {
            box.style.background = 'none';
        });
        
        // Reset all rank displays
        const rankElements = document.querySelectorAll('.rank');
        rankElements.forEach(element => {
            element.textContent = '';
            element.style.color = '#333'; // Reset color
        });
        
        averageRankingText.textContent = '';
    }
    
    // Make resetGame globally accessible
    window.resetGame = resetGame;
});

// Helper function to extract number from rank strings
function extractNumberFromRank(rankText) {
    if (!rankText || rankText.includes("No data")) return 0;
    return parseInt(rankText);
}

function updateSkipsCounter() {
    const skipsCounter = document.getElementById('skipsCounter');
    if (skipsCounter) {
        skipsCounter.textContent = `Skips: ${skipsRemaining}/${MAX_SKIPS}`;
    }
}

// Game mode management
let currentGameMode = 'classic'; // Default game mode

document.addEventListener('DOMContentLoaded', function() {
    // Get game mode elements
    const changeModeTab = document.getElementById('changeModeTab');
    const gameModeDropdown = document.getElementById('gameModeDropdown');
    const dropdownItems = document.querySelectorAll('.dropdown-item');
    const classicContainer = document.querySelector('.container');
    const duelContainer = document.getElementById('flagDuelContainer');
    
    // Initialize game containers
    classicContainer.classList.add('active');
    
    // Add click handlers for game mode selection
    dropdownItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent the dropdown from closing immediately
            
            const mode = this.getAttribute('data-mode');
            if (mode === currentGameMode) return; // No change needed
            
            // Update selection visual
            dropdownItems.forEach(i => i.classList.remove('selected'));
            this.classList.add('selected');
            
            // Hide dropdown after selection
            gameModeDropdown.classList.add('hidden');
            
            // Add a small timeout to hide dropdown, making it feel more natural
            setTimeout(() => {
                gameModeDropdown.classList.remove('hidden');
            }, 300);
            
            // Switch game mode
            switchGameMode(mode);
        });
    });
    
    // Add a click handler to the document to hide dropdown when clicking elsewhere
    document.addEventListener('click', function(e) {
        if (!changeModeTab.contains(e.target)) {
            gameModeDropdown.classList.add('hidden');
            setTimeout(() => {
                gameModeDropdown.classList.remove('hidden');
            }, 300);
        }
    });
    
    // Function to switch between game modes
    function switchGameMode(mode) {
        currentGameMode = mode;
        
        // Hide all game containers
        classicContainer.classList.remove('active');
        duelContainer.classList.remove('active');
        
        // Show the selected game container
        if (mode === 'classic') {
            classicContainer.classList.add('active');
            // Reset the classic game if needed
            if (typeof resetGame === 'function') {
                resetGame();
            }
        } else if (mode === 'duel') {
            duelContainer.classList.add('active');
            // Initialize the duel game
            if (typeof initFlagDuel === 'function') {
                initFlagDuel();
            }
        }
    }
});

// Flag Duel variables
let currentScore = 0;
let duelHighScore = 0;
let leftCountry, rightCountry;
let currentCategory;
let answeredCorrectly = false;
let categories = [
    { name: "Population", rankings: populationRankings },
    { name: "Military", rankings: militaryRankings },
    { name: "Olympic Medals", rankings: olympicRankings },
    { name: "Land Area", rankings: landAreaRankings },
    { name: "HDI", rankings: hdiRankings },
    { name: "Tourism", rankings: tourismRankings },
    { name: "Natural Capital", rankings: naturalCapitalRankings },
    { name: "GDP per Capita", rankings: gdpPerCapitaRankings }
];

// Function to load high score from localStorage
function getDuelHighScore() {
    return localStorage.getItem('flagDuelHighScore') || 0;
}

// Function to save high score to localStorage
function setDuelHighScore(score) {
    localStorage.setItem('flagDuelHighScore', score);
    document.getElementById('duelHighScore').textContent = `High Score: ${score}`;
}

// Function to display the new high score message
function displayNewHighScoreMessage() {
    // Remove existing message if there is one
    const existingMessage = document.querySelector('.new-high-score-duel');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Create new message
    const newHighScoreMsg = document.createElement('div');
    newHighScoreMsg.textContent = "New High Score!";
    newHighScoreMsg.className = "new-high-score-duel";
    
    // Add to the message container
    const messageContainer = document.querySelector('.duel-high-score-message-container');
    if (messageContainer) {
        messageContainer.appendChild(newHighScoreMsg);
    }
}

// Function to initialize Flag Duel game
function initFlagDuel() {
    console.log('Flag Duel mode initialized');
    
    // Get DOM elements
    const leftFlag = document.getElementById('leftFlag');
    const rightFlag = document.getElementById('rightFlag');
    const leftCountryName = document.getElementById('leftCountryName');
    const rightCountryName = document.getElementById('rightCountryName');
    const categoryNameSpan = document.getElementById('categoryName');
    const duelScoreDisplay = document.getElementById('duelScore');
    const duelHighScoreDisplay = document.getElementById('duelHighScore');
    const nextDuelButton = document.getElementById('nextDuelButton');
    
    // Reset score and get high score
    currentScore = 0;
    duelHighScore = getDuelHighScore();
    duelScoreDisplay.textContent = `Score: ${currentScore}`;
    duelHighScoreDisplay.textContent = `High Score: ${duelHighScore}`;
    
    // Set up click handlers for flags
    leftFlag.addEventListener('click', () => handleFlagClick('left'));
    rightFlag.addEventListener('click', () => handleFlagClick('right'));
    
    // Set up next button
    nextDuelButton.addEventListener('click', setupNewDuel);
    nextDuelButton.style.display = 'none';
    
    // Start the first duel
    setupNewDuel();
}

// Function to set up a new duel
function setupNewDuel() {
    // Reset flags
    const leftFlag = document.getElementById('leftFlag');
    const rightFlag = document.getElementById('rightFlag');
    leftFlag.classList.remove('correct', 'incorrect');
    rightFlag.classList.remove('correct', 'incorrect');
    
    // Hide next button
    const nextDuelButton = document.getElementById('nextDuelButton');
    nextDuelButton.style.display = 'none';
    
    // Clear any existing high score message
    const highScoreMessage = document.querySelector('.new-high-score-duel');
    if (highScoreMessage) {
        highScoreMessage.remove();
    }
    
    // Select two different random countries
    const availableCountries = filteredCountryNames.filter(country => {
        // Filter to only include countries that have data for all categories
        return categories.every(category => 
            category.rankings[country] !== undefined
        );
    });
    
    if (availableCountries.length < 2) {
        alert("Not enough countries with complete data for all categories.");
        return;
    }
    
    // Pick two random countries
    const country1Index = Math.floor(Math.random() * availableCountries.length);
    let country2Index;
    do {
        country2Index = Math.floor(Math.random() * availableCountries.length);
    } while (country1Index === country2Index);
    
    leftCountry = availableCountries[country1Index];
    rightCountry = availableCountries[country2Index];
    
    // Get flag URLs
    const leftFlagIndex = countryNames.indexOf(leftCountry);
    const rightFlagIndex = countryNames.indexOf(rightCountry);
    const leftFlagUrl = flags[leftFlagIndex];
    const rightFlagUrl = flags[rightFlagIndex];
    
    // Display flags and country names
    leftFlag.style.backgroundImage = `url(${leftFlagUrl})`;
    rightFlag.style.backgroundImage = `url(${rightFlagUrl})`;
    document.getElementById('leftCountryName').textContent = leftCountry;
    document.getElementById('rightCountryName').textContent = rightCountry;
    
    // Select random category
    const categoryIndex = Math.floor(Math.random() * categories.length);
    currentCategory = categories[categoryIndex];
    document.getElementById('categoryName').textContent = currentCategory.name;
    
    // Reset answered flag
    answeredCorrectly = false;
}

// Function to handle flag click
function handleFlagClick(side) {
    // Ignore clicks if already answered
    if (document.getElementById('nextDuelButton').style.display !== 'none') {
        return;
    }
    
    const leftFlag = document.getElementById('leftFlag');
    const rightFlag = document.getElementById('rightFlag');
    
    // Get rankings
    const leftRanking = extractNumberFromRank(currentCategory.rankings[leftCountry]);
    const rightRanking = extractNumberFromRank(currentCategory.rankings[rightCountry]);
    
    // Determine correct answer (lower ranking is better)
    const correctSide = leftRanking < rightRanking ? 'left' : 'right';
    
    // Handle correctness
    if (side === correctSide) {
        // Correct answer
        if (side === 'left') {
            leftFlag.classList.add('correct');
            rightFlag.classList.add('incorrect');
        } else {
            rightFlag.classList.add('correct');
            leftFlag.classList.add('incorrect');
        }
        
        // Increment score
        currentScore++;
        document.getElementById('duelScore').textContent = `Score: ${currentScore}`;
        
        // Check for new high score
        if (currentScore > duelHighScore) {
            duelHighScore = currentScore;
            setDuelHighScore(duelHighScore);
            
            // Add high score celebration
            displayNewHighScoreMessage();
        }
        
        answeredCorrectly = true;
    } else {
        // Incorrect answer
        if (side === 'left') {
            leftFlag.classList.add('incorrect');
            rightFlag.classList.add('correct');
        } else {
            rightFlag.classList.add('incorrect');
            leftFlag.classList.add('correct');
        }
        
        // Game over - reset score
        answeredCorrectly = false;
    }
    
    // Show next button
    const nextDuelButton = document.getElementById('nextDuelButton');
    nextDuelButton.style.display = 'inline-block';
    
    // If incorrect, change button text to "Try Again"
    nextDuelButton.textContent = answeredCorrectly ? "Next Duel" : "Try Again";
    
    // If incorrect, reset score on next attempt
    if (!answeredCorrectly) {
        nextDuelButton.addEventListener('click', function resetScore() {
            currentScore = 0;
            document.getElementById('duelScore').textContent = `Score: ${currentScore}`;
            
            // Hide high score message if visible
            const highScoreMessage = document.querySelector('.new-high-score-duel');
            if (highScoreMessage) {
                highScoreMessage.remove();
            }
            
            nextDuelButton.removeEventListener('click', resetScore);
        }, { once: true });
    }
}

// Expose the initFlagDuel function globally
window.initFlagDuel = initFlagDuel;

// Add this at the very bottom of your script.js file
document.addEventListener('DOMContentLoaded', function() {
    // Fix for all game mode options
    const modeItems = document.querySelectorAll('.dropdown-item');
    
    modeItems.forEach(item => {
        item.addEventListener('click', function() {
            const mode = this.getAttribute('data-mode');
            console.log(`${mode} clicked`);
            
            const classicContainer = document.querySelector('.container');
            const duelContainer = document.getElementById('flagDuelContainer');
            const revealContainer = document.getElementById('flagRevealContainer');
            
            // Update selected visual
            modeItems.forEach(i => i.classList.remove('selected'));
            this.classList.add('selected');
            
            // Hide dropdown after selection
            const gameModeDropdown = document.getElementById('gameModeDropdown');
            gameModeDropdown.classList.add('hidden');
            
            // Add a small timeout to hide dropdown, making it feel more natural
            setTimeout(() => {
                gameModeDropdown.classList.remove('hidden');
            }, 300);
            
            // Toggle game modes
            if (mode === 'classic') {
                classicContainer.classList.add('active');
                classicContainer.style.display = 'block';
                duelContainer.classList.remove('active');
                duelContainer.style.display = 'none';
                revealContainer.classList.remove('active');
                revealContainer.style.display = 'none';
                
                // Reset the classic game if needed
                if (typeof resetGame === 'function') {
                    resetGame();
                }
            } else if (mode === 'duel') {
                classicContainer.classList.remove('active');
                classicContainer.style.display = 'none';
                duelContainer.classList.add('active');
                duelContainer.style.display = 'block';
                revealContainer.classList.remove('active');
                revealContainer.style.display = 'none';
                
                // Initialize Flag Duel
                if (typeof initFlagDuel === 'function') {
                    initFlagDuel();
                }
            } else if (mode === 'reveal') {
                classicContainer.classList.remove('active');
                classicContainer.style.display = 'none';
                duelContainer.classList.remove('active');
                duelContainer.style.display = 'none';
                revealContainer.classList.add('active');
                revealContainer.style.display = 'block';
                
                // Initialize Flag Reveal
                if (typeof initFlagReveal === 'function') {
                    initFlagReveal();
                }
            }
        });
    });
});

// Flag Reveal variables
let revealScore = 0;
let revealHighScore = 0;
let currentRevealCountry = null;
let revealLives = 3;
let totalPieces = 16; // 4x4 grid
let revealedPieces = 0;
let revealTimer = null;
let revealInterval = 1500; // Time in ms between piece reveals (1.5 seconds)
let isGameActive = false;
let currentDifficulty = 'medium'; // 'easy', 'medium', 'hard'
let scoreMultiplier = 1;

// Function to load high score from localStorage
function getRevealHighScore() {
    return localStorage.getItem('flagRevealHighScore') || 0;
}

// Function to save high score to localStorage
function setRevealHighScore(score) {
    localStorage.setItem('flagRevealHighScore', score);
    document.getElementById('revealHighScore').textContent = score;
}

// Function to initialize Flag Reveal game
function initFlagReveal() {
    console.log('Flag Reveal mode initialized');
    
    // Get DOM elements
    const revealFlag = document.getElementById('revealFlag');
    const puzzleGrid = document.getElementById('puzzleGrid');
    const countryGuessInput = document.getElementById('countryGuessInput');
    const submitGuessButton = document.getElementById('submitGuessButton');
    const nextRevealButton = document.getElementById('nextRevealButton');
    const revealMessage = document.getElementById('revealMessage');
    
    // Reset score and get high score
    revealScore = 0;
    revealHighScore = getRevealHighScore();
    document.getElementById('revealScore').textContent = revealScore;
    document.getElementById('revealHighScore').textContent = revealHighScore;
    
    // Reset lives
    revealLives = 3;
    document.getElementById('revealLives').textContent = revealLives;
    
    // Set up event listeners
    submitGuessButton.addEventListener('click', handleGuessSubmit);
    countryGuessInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleGuessSubmit();
        }
    });
    
    // Hide the "Next Flag" button as we won't be using it except for game over
    nextRevealButton.style.display = 'none';
    nextRevealButton.addEventListener('click', function() {
        // Reset the game
        revealScore = 0;
        document.getElementById('revealScore').textContent = revealScore;
        revealLives = 3;
        document.getElementById('revealLives').textContent = revealLives;
        
        // Remove any high score message
        const highScoreMessage = document.querySelector('.reveal-high-score-message');
        if (highScoreMessage) {
            highScoreMessage.remove();
        }
        
        // Start a new round
        setupNewReveal();
    });
    
    // Start the first round
    setupNewReveal();
    
    // Focus on the input box for quick entry
    setTimeout(() => {
        countryGuessInput.focus();
    }, 500);
}

// Function to set up a new flag reveal round
function setupNewReveal() {
    // Reset UI elements
    const revealFlag = document.getElementById('revealFlag');
    const puzzleGrid = document.getElementById('puzzleGrid');
    const revealMessage = document.getElementById('revealMessage');
    const nextRevealButton = document.getElementById('nextRevealButton');
    const countryGuessInput = document.getElementById('countryGuessInput');
    const submitGuessButton = document.getElementById('submitGuessButton');
    
    // Hide the flag initially
    revealFlag.style.visibility = 'hidden';
    
    revealMessage.textContent = '';
    revealMessage.className = 'reveal-message';
    nextRevealButton.style.display = 'none';
    countryGuessInput.value = '';
    countryGuessInput.disabled = false;
    submitGuessButton.disabled = false;
    
    // First create the puzzle pieces
    puzzleGrid.innerHTML = '';
    
    for (let i = 0; i < totalPieces; i++) {
        const piece = document.createElement('div');
        piece.className = 'puzzle-piece';
        piece.dataset.index = i;
        puzzleGrid.appendChild(piece);
    }
    
    // Reset revealed pieces counter
    revealedPieces = 0;
    document.getElementById('revealProgress').textContent = revealedPieces;
    
    // Select a random country
    const availableCountries = filteredCountryNames.filter(country => {
        // Ensure the country has a flag
        const index = countryNames.indexOf(country);
        return index >= 0 && index < flags.length;
    });
    
    if (availableCountries.length === 0) {
        alert("No countries with flags available.");
        return;
    }
    
    const randomIndex = Math.floor(Math.random() * availableCountries.length);
    currentRevealCountry = availableCountries[randomIndex];
    
    // Wait a very short time to ensure all pieces are rendered before showing the flag
    setTimeout(() => {
        // Set the flag image
        const flagIndex = countryNames.indexOf(currentRevealCountry);
        const flagUrl = flags[flagIndex];
        revealFlag.style.backgroundImage = `url(${flagUrl})`;
        revealFlag.style.visibility = 'visible'; // Make flag visible only after pieces are ready
        
        // Start revealing pieces
        isGameActive = true;
        if (revealTimer) {
            clearInterval(revealTimer);
        }
        startRevealTimer();
        
        // Focus on the input box for quick entry
        countryGuessInput.focus();
    }, 50); // 50ms delay should be enough
}

// Function to start the reveal timer
function startRevealTimer() {
    // Clear any existing timer
    if (revealTimer) {
        clearInterval(revealTimer);
    }
    
    // Set the interval based on difficulty
    switch (currentDifficulty) {
        case 'easy':
            revealInterval = 1200; // 1.2 seconds
            scoreMultiplier = 0.75;
            break;
        case 'medium':
            revealInterval = 1500; // 1.5 seconds
            scoreMultiplier = 1;
            break;
        case 'hard':
            revealInterval = 2000; // 2 seconds
            scoreMultiplier = 1.5;
            break;
    }
    
    // Start new timer
    revealTimer = setInterval(revealRandomPiece, revealInterval);
}

// Function to reveal a random puzzle piece
function revealRandomPiece() {
    if (!isGameActive) return;
    
    const puzzlePieces = document.querySelectorAll('.puzzle-piece:not(.revealed)');
    
    if (puzzlePieces.length === 0 || revealedPieces >= totalPieces) {
        // All pieces revealed, end the game
        clearInterval(revealTimer);
        return;
    }
    
    // Select a random piece to reveal
    const randomIndex = Math.floor(Math.random() * puzzlePieces.length);
    const pieceToReveal = puzzlePieces[randomIndex];
    
    // Reveal the piece
    pieceToReveal.classList.add('revealed');
    revealedPieces++;
    
    // Update progress
    document.getElementById('revealProgress').textContent = revealedPieces;
    
    // If all pieces revealed, show the answer after a brief delay
    if (revealedPieces >= totalPieces) {
        setTimeout(() => {
            if (isGameActive) {
                handleOutOfTime();
            }
        }, 1000);
    }
}

// Function to handle guess submission
function handleGuessSubmit() {
    if (!isGameActive) return;
    
    const countryGuessInput = document.getElementById('countryGuessInput');
    const submittedGuess = countryGuessInput.value.trim().toLowerCase();
    const correctAnswer = currentRevealCountry.toLowerCase();
    
    // Stop the timer
    clearInterval(revealTimer);
    
    if (submittedGuess === correctAnswer) {
        // Correct answer
        handleCorrectGuess();
    } else {
        // Incorrect answer
        handleIncorrectGuess();
    }
}

// Function to handle correct guess - with much shorter delay
function handleCorrectGuess() {
    isGameActive = false;
    
    const revealMessage = document.getElementById('revealMessage');
    const countryGuessInput = document.getElementById('countryGuessInput');
    
    // Calculate score based on pieces revealed
    const scoreGain = Math.round(100 * (1 - revealedPieces / totalPieces) * scoreMultiplier);
    revealScore += scoreGain;
    
    // Update UI
    revealMessage.textContent = `Correct! +${scoreGain} points`;
    revealMessage.className = 'reveal-message correct';
    document.getElementById('revealScore').textContent = revealScore;
    
    // Reveal all pieces
    const puzzlePieces = document.querySelectorAll('.puzzle-piece:not(.revealed)');
    puzzlePieces.forEach(piece => {
        piece.classList.add('revealed');
    });
    
    // Check for new high score
    if (revealScore > revealHighScore) {
        revealHighScore = revealScore;
        setRevealHighScore(revealHighScore);
        
        // Display high score message
        displayRevealHighScoreMessage();
    }
    
    // Wait just a very short moment to show the correct answer, then go to next flag
    setTimeout(() => {
        // Clear any high score message
        const highScoreMessage = document.querySelector('.reveal-high-score-message');
        if (highScoreMessage) {
            highScoreMessage.remove();
        }
        
        // Clear the message
        revealMessage.textContent = '';
        revealMessage.className = 'reveal-message';
        
        // Set up a new round
        setupNewReveal();
        
        // Focus on the input box for quick entry
        countryGuessInput.focus();
    }, 300); // Only 300ms delay - very quick transition
}

// Function to handle incorrect guess
function handleIncorrectGuess() {
    // Decrease lives
    revealLives--;
    document.getElementById('revealLives').textContent = revealLives;
    
    const revealMessage = document.getElementById('revealMessage');
    const countryGuessInput = document.getElementById('countryGuessInput');
    
    if (revealLives <= 0) {
        // Game over
        handleGameOver();
    } else {
        // Still have lives left
        revealMessage.textContent = `Incorrect. ${revealLives} attempts left.`;
        revealMessage.className = 'reveal-message incorrect';
        
        // Continue revealing pieces
        startRevealTimer();
        
        // Clear the input field
        countryGuessInput.value = '';
        
        // Focus on the input box for quick entry
        countryGuessInput.focus();
    }
}

// Function to handle running out of time - with shorter delay
function handleOutOfTime() {
    isGameActive = false;
    
    const revealMessage = document.getElementById('revealMessage');
    const nextRevealButton = document.getElementById('nextRevealButton');
    const countryGuessInput = document.getElementById('countryGuessInput');
    
    // Update UI
    revealMessage.textContent = `Time's up! The country was ${currentRevealCountry}.`;
    revealMessage.className = 'reveal-message incorrect';
    
    // Decrease lives
    revealLives--;
    document.getElementById('revealLives').textContent = revealLives;
    
    if (revealLives <= 0) {
        // Game over
        handleGameOver();
    } else {
        // Still have lives, automatically go to next flag after a shorter delay
        setTimeout(() => {
            setupNewReveal();
            
            // Focus on the input box for quick entry
            countryGuessInput.focus();
        }, 700); // 700ms - short but enough to read the message
    }
}

// Function to handle game over
function handleGameOver() {
    isGameActive = false;
    
    const revealMessage = document.getElementById('revealMessage');
    const nextRevealButton = document.getElementById('nextRevealButton');
    const countryGuessInput = document.getElementById('countryGuessInput');
    const submitGuessButton = document.getElementById('submitGuessButton');
    
    // Update UI
    revealMessage.textContent = `Game Over! The country was ${currentRevealCountry}. Final score: ${revealScore}`;
    revealMessage.className = 'reveal-message incorrect';
    
    // Disable input
    countryGuessInput.disabled = true;
    submitGuessButton.disabled = true;
    
    // Show retry button
    nextRevealButton.style.display = 'inline-block';
    nextRevealButton.textContent = 'Play Again';
    
    // Add event to reset the game on next button click
    nextRevealButton.addEventListener('click', function resetGame() {
        revealScore = 0;
        document.getElementById('revealScore').textContent = revealScore;
        revealLives = 3;
        document.getElementById('revealLives').textContent = revealLives;
        
        // Remove any high score message
        const highScoreMessage = document.querySelector('.reveal-high-score-message');
        if (highScoreMessage) {
            highScoreMessage.remove();
        }
        
        nextRevealButton.removeEventListener('click', resetGame);
    }, { once: true });
}

// Function to display high score message
function displayRevealHighScoreMessage() {
    // Remove existing message if there is one
    const existingMessage = document.querySelector('.reveal-high-score-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Create new message
    const newHighScoreMsg = document.createElement('div');
    newHighScoreMsg.textContent = "New High Score!";
    newHighScoreMsg.className = "reveal-high-score-message";
    
    // Add to the message container
    const messageContainer = document.getElementById('revealMessage').parentNode;
    messageContainer.insertBefore(newHighScoreMsg, document.getElementById('nextRevealButton'));
}

// Expose the initFlagReveal function globally
window.initFlagReveal = initFlagReveal;

// Flag Puzzle Guesser variables
let puzzleScore = 0;
let puzzleHighScore = 0;
let puzzleTimer = null;
let puzzleTimeRemaining = 120; // 2 minutes in seconds
let puzzleIsActive = false;
let mergedFlags = [];
let guessedCountries = new Set();
let puzzleDifficulty = 2; // Default number of flags to merge

// Function to load high score from localStorage
function getPuzzleHighScore() {
    return localStorage.getItem('flagPuzzleHighScore') || 0;
}

// Function to save high score to localStorage
function setPuzzleHighScore(score) {
    localStorage.setItem('flagPuzzleHighScore', score);
    document.getElementById('puzzleHighScore').textContent = score;
}

// Function to initialize Flag Puzzle game
function initFlagPuzzle() {
    console.log('Flag Puzzle mode initialized');
    
    // Get DOM elements
    const puzzleContainer = document.getElementById('flagPuzzleContainer');
    const mergedFlagDiv = document.getElementById('puzzleMergedFlag');
    const countryInput = document.getElementById('countryPuzzleInput');
    const submitButton = document.getElementById('submitPuzzleButton');
    const startButton = document.getElementById('startPuzzleButton');
    const restartButton = document.getElementById('restartPuzzleButton');
    const puzzleMessage = document.getElementById('puzzleMessage');
    const totalFlagsSpan = document.getElementById('totalFlags');
    
    // Reset score and get high score
    puzzleScore = 0;
    puzzleHighScore = getPuzzleHighScore();
    document.getElementById('puzzleScore').textContent = puzzleScore;
    document.getElementById('puzzleHighScore').textContent = puzzleHighScore;
    
    // Initialize flags count display
    totalFlagsSpan.textContent = puzzleDifficulty;
    document.getElementById('flagsIdentified').textContent = 0;
    
    // Remove any existing event listeners (to prevent duplicates)
    const newStartButton = startButton.cloneNode(true);
    const newRestartButton = restartButton.cloneNode(true);
    const newSubmitButton = submitButton.cloneNode(true);
    const newCountryInput = countryInput.cloneNode(true);
    
    startButton.parentNode.replaceChild(newStartButton, startButton);
    restartButton.parentNode.replaceChild(newRestartButton, restartButton);
    submitButton.parentNode.replaceChild(newSubmitButton, submitButton);
    countryInput.parentNode.replaceChild(newCountryInput, countryInput);
    
    // Re-assign the elements after replacing
    const updatedStartButton = document.getElementById('startPuzzleButton');
    const updatedRestartButton = document.getElementById('restartPuzzleButton');
    const updatedSubmitButton = document.getElementById('submitPuzzleButton');
    const updatedCountryInput = document.getElementById('countryPuzzleInput');
    
    // Set up event listeners
    updatedSubmitButton.addEventListener('click', handlePuzzleGuess);
    updatedCountryInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handlePuzzleGuess();
        }
    });
    
    // Add the start game functionality
    updatedStartButton.addEventListener('click', startPuzzleGame);
    updatedRestartButton.addEventListener('click', restartPuzzleGame);
    
    // Initialize UI
    puzzleMessage.textContent = 'Try to identify the merged flags! Click Start to begin.';
    puzzleMessage.className = 'puzzle-message';
    updatedStartButton.style.display = 'block';
    updatedRestartButton.style.display = 'none';
    updatedCountryInput.disabled = true;
    updatedSubmitButton.disabled = true;
}

// Function to start a new game
function startPuzzleGame() {
    console.log("startPuzzleGame called");
    
    // Reset game state
    puzzleScore = 0;
    document.getElementById('puzzleScore').textContent = puzzleScore;
    document.getElementById('flagsIdentified').textContent = 0;
    guessedCountries.clear();
    document.getElementById('guessedFlags').innerHTML = '';
    
    // Enable input
    document.getElementById('countryPuzzleInput').disabled = false;
    document.getElementById('submitPuzzleButton').disabled = false;
    
    // Update buttons
    document.getElementById('startPuzzleButton').style.display = 'none';
    document.getElementById('restartPuzzleButton').style.display = 'none';
    
    // Clear any existing message
    document.getElementById('puzzleMessage').textContent = '';
    document.getElementById('puzzleMessage').className = 'puzzle-message';
    
    // Set up timer
    puzzleTimeRemaining = 120; // 2 minutes
    updatePuzzleTimer();
    if (puzzleTimer) {
        clearInterval(puzzleTimer);
    }
    puzzleTimer = setInterval(updatePuzzleTimer, 1000);
    
    // Start game
    puzzleIsActive = true;
    createNewPuzzle();
    
    // Focus the input field
    document.getElementById('countryPuzzleInput').focus();
}

// Function to restart the game
function restartPuzzleGame() {
    // Hide restart button and show start button
    document.getElementById('restartPuzzleButton').style.display = 'none';
    document.getElementById('startPuzzleButton').style.display = 'block';
    
    // Clear any previous high score message
    const highScoreMessage = document.querySelector('.puzzle-high-score-message');
    if (highScoreMessage) {
        highScoreMessage.remove();
    }
    
    // Reset UI
    document.getElementById('puzzleMessage').textContent = 'Try to identify the merged flags! Click Start to begin.';
    document.getElementById('countryPuzzleInput').value = '';
    document.getElementById('guessedFlags').innerHTML = '';
    
    // If there's a game over overlay, remove it
    const gameOverOverlay = document.querySelector('.game-over-overlay');
    if (gameOverOverlay) {
        gameOverOverlay.remove();
    }
}

// Function to update the timer
function updatePuzzleTimer() {
    if (!puzzleIsActive) return;
    
    // Decrease time
    puzzleTimeRemaining--;
    
    // Format time as M:SS
    const minutes = Math.floor(puzzleTimeRemaining / 60);
    const seconds = puzzleTimeRemaining % 60;
    const formattedTime = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    
    // Update display
    document.getElementById('puzzleTimer').textContent = formattedTime;
    
    // Check for time up
    if (puzzleTimeRemaining <= 0) {
        endPuzzleGame();
    }
}

// Function to create a new puzzle
// Replace the createNewPuzzle function with this improved version:

function createNewPuzzle() {
    // Clear the message first
    const puzzleMessage = document.getElementById('puzzleMessage');
    puzzleMessage.textContent = '';
    puzzleMessage.className = 'puzzle-message';
    
    // Clear previous guessed countries
    guessedCountries.clear();
    document.getElementById('guessedFlags').innerHTML = '';
    document.getElementById('flagsIdentified').textContent = 0;
    document.getElementById('countryPuzzleInput').value = '';
    
    // Rest of your existing createNewPuzzle function...
    // (Keep all the code that selects and displays the flags)
    
    // Select random countries
    const availableCountries = filteredCountryNames.filter(country => {
        const index = countryNames.indexOf(country);
        return index >= 0 && index < flags.length;
    });
    
    if (availableCountries.length < puzzleDifficulty) {
        alert("Not enough countries with flags available.");
        return;
    }
    
    // Select random countries
    mergedFlags = [];
    const selectedIndices = new Set();
    
    while (selectedIndices.size < puzzleDifficulty) {
        const randomIndex = Math.floor(Math.random() * availableCountries.length);
        selectedIndices.add(randomIndex);
    }
    
    // Create merged flags array
    mergedFlags = Array.from(selectedIndices).map(index => {
        const country = availableCountries[index];
        const flagIndex = countryNames.indexOf(country);
        return {
            country: country,
            flagUrl: flags[flagIndex]
        };
    });
    
    // Create merged flag visualization
    const mergedFlagDiv = document.getElementById('puzzleMergedFlag');
    
    // Clear any previous styles and content
    mergedFlagDiv.style = '';
    mergedFlagDiv.className = 'puzzle-merged-flag';
    mergedFlagDiv.innerHTML = '';
    
    // Decide which merging style to use
    const mergeStyles = ['horizontal-split', 'vertical-split', 'diagonal-split'];
    const randomStyle = mergeStyles[Math.floor(Math.random() * mergeStyles.length)];
    
    if (randomStyle === 'horizontal-split') {
        // Horizontal split (top/bottom) without dividing line
        mergedFlagDiv.style.position = 'relative';
        mergedFlagDiv.style.width = '100%';
        mergedFlagDiv.style.height = '100%';
        mergedFlagDiv.style.backgroundColor = '#f0f0f0'; // Background color to fill any gaps
        
        mergedFlagDiv.innerHTML = `
            <div style="position: absolute; top: 0; left: 0; width: 100%; height: 50%; background-image: url('${mergedFlags[0].flagUrl}'); background-size: 100% 200%; background-position: center top; background-repeat: no-repeat;"></div>
            <div style="position: absolute; top: 50%; left: 0; width: 100%; height: 50%; background-image: url('${mergedFlags[1].flagUrl}'); background-size: 100% 200%; background-position: center bottom; background-repeat: no-repeat;"></div>
        `;
    } else if (randomStyle === 'vertical-split') {
        // Vertical split (left/right) without dividing line
        mergedFlagDiv.style.position = 'relative';
        mergedFlagDiv.style.width = '100%';
        mergedFlagDiv.style.height = '100%';
        mergedFlagDiv.style.backgroundColor = '#f0f0f0'; // Background color to fill any gaps
        
        mergedFlagDiv.innerHTML = `
            <div style="position: absolute; top: 0; left: 0; width: 50%; height: 100%; background-image: url('${mergedFlags[0].flagUrl}'); background-size: 200% 100%; background-position: left center; background-repeat: no-repeat;"></div>
            <div style="position: absolute; top: 0; left: 50%; width: 50%; height: 100%; background-image: url('${mergedFlags[1].flagUrl}'); background-size: 200% 100%; background-position: right center; background-repeat: no-repeat;"></div>
        `;
    } else {
        // Diagonal split without dividing line
        mergedFlagDiv.style.position = 'relative';
        mergedFlagDiv.style.width = '100%';
        mergedFlagDiv.style.height = '100%';
        mergedFlagDiv.style.backgroundColor = '#f0f0f0'; // Background color to fill any gaps
        
        mergedFlagDiv.innerHTML = `
            <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden;">
                <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-image: url('${mergedFlags[0].flagUrl}'); background-size: cover; background-position: center; clip-path: polygon(0 0, 100% 0, 0 100%);"></div>
            </div>
            <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden;">
                <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-image: url('${mergedFlags[1].flagUrl}'); background-size: cover; background-position: center; clip-path: polygon(100% 0, 100% 100%, 0 100%);"></div>
            </div>
        `;
    }
    
    // Update the count of total flags
    document.getElementById('totalFlags').textContent = mergedFlags.length;
}

// Function to get a random color (for diagonal splits)
function getRandomColor() {
    const colors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF', 
                   '#FFA500', '#800080', '#008000', '#000080', '#800000'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Function to handle guess submission
function handlePuzzleGuess() {
    if (!puzzleIsActive) return;
    
    const countryInput = document.getElementById('countryPuzzleInput');
    const puzzleMessage = document.getElementById('puzzleMessage');
    const submittedGuess = countryInput.value.trim().toLowerCase();
    
    // Clear input
    countryInput.value = '';
    
    // Check if already guessed
    if (Array.from(guessedCountries).some(c => c.toLowerCase() === submittedGuess)) {
        puzzleMessage.textContent = 'You already guessed that country!';
        puzzleMessage.className = 'puzzle-message incorrect-message';
        
        // Apply the animation
        puzzleMessage.classList.add('message-pop');
        
        // Remove the animation class after it completes
        setTimeout(() => {
            puzzleMessage.classList.remove('message-pop');
        }, 300);
        
        return;
    }
    
    // Check if correct
    const correctGuess = mergedFlags.find(flag => 
        flag.country.toLowerCase() === submittedGuess
    );
    
    if (correctGuess) {
        // Add to guessed countries
        guessedCountries.add(correctGuess.country);
        
        // Update UI with animation
        document.getElementById('flagsIdentified').textContent = guessedCountries.size;
        puzzleMessage.textContent = `Correct! You identified ${correctGuess.country}!`;
        puzzleMessage.className = 'puzzle-message correct-message';
        
        // Apply the animation
        puzzleMessage.classList.add('message-pop');
        
        // Remove the animation class after it completes
        setTimeout(() => {
            puzzleMessage.classList.remove('message-pop');
        }, 300);
        
        // Add to guessed flags display
        const guessedFlagsDiv = document.getElementById('guessedFlags');
        const flagElement = document.createElement('div');
        flagElement.className = 'guessed-flag';
        flagElement.textContent = correctGuess.country;
        guessedFlagsDiv.appendChild(flagElement);
        
        // Add points (more points for earlier guesses)
        const pointsPerFlag = 50;
        const timeBonus = Math.floor(puzzleTimeRemaining / 10); // Bonus based on remaining time
        const points = pointsPerFlag + timeBonus;
        puzzleScore += points;
        document.getElementById('puzzleScore').textContent = puzzleScore;
        
        // Check if all flags have been identified
        if (guessedCountries.size === mergedFlags.length) {
            // All flags guessed, create a new puzzle after a delay
            setTimeout(() => {
                // Clear the message before creating a new puzzle
                puzzleMessage.textContent = '';
                puzzleMessage.className = 'puzzle-message';
                createNewPuzzle();
            }, 1000);
        }
    } else {
        // Incorrect guess with animation
        puzzleMessage.textContent = 'Incorrect guess. Try again!';
        puzzleMessage.className = 'puzzle-message incorrect-message';
        
        // Apply the animation
        puzzleMessage.classList.add('message-pop');
        
        // Remove the animation class after it completes
        setTimeout(() => {
            puzzleMessage.classList.remove('message-pop');
        }, 300);
    }
    
    // Focus back on input
    countryInput.focus();
}

// Function to end the game
function endPuzzleGame() {
    puzzleIsActive = false;
    
    // Stop timer
    clearInterval(puzzleTimer);
    
    // Disable input
    document.getElementById('countryPuzzleInput').disabled = true;
    document.getElementById('submitPuzzleButton').disabled = true;
    
    // Create game over overlay
    const puzzleContainer = document.querySelector('.puzzle-game-area');
    const gameOverOverlay = document.createElement('div');
    gameOverOverlay.className = 'game-over-overlay';
    
    const gameOverText = document.createElement('div');
    gameOverText.className = 'game-over-text';
    gameOverText.textContent = 'Time\'s Up!';
    
    const finalScore = document.createElement('div');
    finalScore.className = 'final-score';
    finalScore.textContent = `Final Score: ${puzzleScore}`;
    
    gameOverOverlay.appendChild(gameOverText);
    gameOverOverlay.appendChild(finalScore);
    puzzleContainer.appendChild(gameOverOverlay);
    
    // Check for new high score
    if (puzzleScore > puzzleHighScore) {
        puzzleHighScore = puzzleScore;
        setPuzzleHighScore(puzzleHighScore);
        
        // Display high score message
        displayPuzzleHighScoreMessage();
    }
    
    // Reveal any remaining countries
    const unguessedCountries = mergedFlags.filter(flag => 
        !Array.from(guessedCountries).includes(flag.country)
    );
    
    if (unguessedCountries.length > 0) {
        document.getElementById('puzzleMessage').textContent = `Remaining countries: ${unguessedCountries.map(f => f.country).join(', ')}`;
    }
    
    // Automatically remove the overlay after 2 seconds
    setTimeout(() => {
        if (gameOverOverlay && gameOverOverlay.parentNode) {
            gameOverOverlay.parentNode.removeChild(gameOverOverlay);
        }
        
        // Show restart button (renamed to "Try Again")
        const startButton = document.getElementById('startPuzzleButton');
        const restartButton = document.getElementById('restartPuzzleButton');
        
        startButton.style.display = 'none';
        restartButton.style.display = 'block';
        restartButton.textContent = 'Try Again';
    }, 2000);
}

// Function to display high score message
function displayPuzzleHighScoreMessage() {
    // Remove existing message if there is one
    const existingMessage = document.querySelector('.puzzle-high-score-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Create new message
    const newHighScoreMsg = document.createElement('div');
    newHighScoreMsg.textContent = "New High Score!";
    newHighScoreMsg.className = "puzzle-high-score-message";
    
    // Add to the game area
    const messageContainer = document.querySelector('.puzzle-game-area');
    messageContainer.appendChild(newHighScoreMsg);
}

// Expose the initFlagPuzzle function globally
window.initFlagPuzzle = initFlagPuzzle;

// Update the dropdown menu for game modes to include the Flag Puzzle Guesser
document.addEventListener('DOMContentLoaded', function() {
    // Check if we need to add the Flag Puzzle option to the dropdown
    const dropdown = document.getElementById('gameModeDropdown');
    if (dropdown && dropdown.querySelector('[data-mode="puzzle"]') === null) {
        // Add Puzzle Guesser option if it doesn't exist
        const puzzleOption = document.createElement('div');
        puzzleOption.className = 'dropdown-item';
        puzzleOption.setAttribute('data-mode', 'puzzle');
        puzzleOption.textContent = 'Flag Puzzle Guesser';
        dropdown.appendChild(puzzleOption);
    }
    
    // Update the game mode selector to handle the Flag Puzzle Guesser
    const modeItems = document.querySelectorAll('.dropdown-item');
    
    modeItems.forEach(item => {
        item.addEventListener('click', function() {
            const mode = this.getAttribute('data-mode');
            
            // Get all game containers
            const classicContainer = document.querySelector('.container');
            const duelContainer = document.getElementById('flagDuelContainer');
            const revealContainer = document.getElementById('flagRevealContainer');
            const puzzleContainer = document.getElementById('flagPuzzleContainer');
            
            // Update selected visual
            modeItems.forEach(i => i.classList.remove('selected'));
            this.classList.add('selected');
            
            // Hide dropdown after selection
            const gameModeDropdown = document.getElementById('gameModeDropdown');
            gameModeDropdown.classList.add('hidden');
            
            // Add a small timeout to hide dropdown
            setTimeout(() => {
                gameModeDropdown.classList.remove('hidden');
            }, 300);
            
            // Hide all containers first
            classicContainer.classList.remove('active');
            classicContainer.style.display = 'none';
            duelContainer.classList.remove('active');
            duelContainer.style.display = 'none';
            revealContainer.classList.remove('active');
            revealContainer.style.display = 'none';
            
            if (puzzleContainer) {
                puzzleContainer.classList.remove('active');
                puzzleContainer.style.display = 'none';
            }
            
            // Toggle game modes
            if (mode === 'classic') {
                classicContainer.classList.add('active');
                classicContainer.style.display = 'block';
                
                // Reset the classic game if needed
                if (typeof resetGame === 'function') {
                    resetGame();
                }
            } else if (mode === 'duel') {
                duelContainer.classList.add('active');
                duelContainer.style.display = 'block';
                
                // Initialize Flag Duel
                if (typeof initFlagDuel === 'function') {
                    initFlagDuel();
                }
            } else if (mode === 'reveal') {
                revealContainer.classList.add('active');
                revealContainer.style.display = 'block';
                
                // Initialize Flag Reveal
                if (typeof initFlagReveal === 'function') {
                    initFlagReveal();
                }
            } else if (mode === 'puzzle') {
                if (puzzleContainer) {
                    puzzleContainer.classList.add('active');
                    puzzleContainer.style.display = 'block';
                    
                    // Initialize Flag Puzzle
                    if (typeof initFlagPuzzle === 'function') {
                        initFlagPuzzle();
                    }
                }
            }
        });
    });
});
