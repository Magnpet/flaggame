const hdiRankings = {
    "Switzerland": "1st",
    "Norway": "2nd",
    "Iceland": "3rd",
    "Denmark": "4th",
    "Sweden": "4th",
    "Ireland": "6th",
    "Germany": "6th",
    "Singapore": "8th",
    "Netherlands": "9th",
    "Australia": "9th",
    "Liechtenstein": "11th",
    "Belgium": "11th",
    "Finland": "11th",
    "Monaco": "11th", // Added - approximated to be similar to its neighbors (France & Liechtenstein)
    "United Kingdom": "14th",
    "New Zealand": "15th",
    "United Arab Emirates": "16th",
    "Canada": "17th",
    "South Korea": "18th",
    "Luxembourg": "19th",
    "United States": "19th",
    "Slovenia": "21st",
    "Austria": "21st",
    "Japan": "23rd",
    "Israel": "24th",
    "Malta": "24th",
    "Spain": "26th",
    "France": "27th",
    "Cyprus": "28th",
    "Italy": "29th",
    "Estonia": "30th",
    "Czech Republic": "31st",
    "Greece": "32nd",
    "Bahrain": "33rd",
    "Andorra": "34th",
    "Poland": "35th",
    "Latvia": "36th",
    "Lithuania": "36th",
    "Croatia": "38th",
    "Qatar": "39th",
    "Saudi Arabia": "39th",
    "Portugal": "41st",
    "San Marino": "42nd",
    "Chile": "43rd",
    "Turkey": "44th",
    "Slovakia": "44th",
    "Hungary": "46th",
    "Argentina": "47th",
    "Kuwait": "48th",
    "Montenegro": "49th",
    "Saint Kitts and Nevis": "50th",
    "Uruguay": "51st",
    "Romania": "52nd",
    "Antigua and Barbuda": "53rd",
    "Brunei": "54th",
    "Russia": "55th",
    "Bahamas": "56th",
    "Panama": "56th",
    "Oman": "58th",
    "Trinidad and Tobago": "59th",
    "Georgia": "59th",
    "Barbados": "61st",
    "Malaysia": "62nd",
    "Costa Rica": "63rd",
    "Serbia": "64th",
    "Thailand": "65th",
    "Seychelles": "66th",
    "Kazakhstan": "66th",
    "Belarus": "68th",
    "Bulgaria": "69th",
    "Palau": "70th",
    "Mauritius": "71st",
    "Grenada": "72nd",
    "Albania": "73rd",
    "China": "74th",
    "Armenia": "75th",
    "Mexico": "76th",
    "Iran": "77th",
    "Sri Lanka": "77th",
    "Bosnia and Herzegovina": "79th",
    "Saint Vincent and the Grenadines": "80th",
    "Dominican Republic": "81st",
    "Ecuador": "82nd",
    "North Macedonia": "82nd",
    "Cuba": "84th",
    "Moldova": "85th",
    "Maldives": "86th",
    "Peru": "86th",
    "Azerbaijan": "88th",
    "Brazil": "88th",
    "Colombia": "90th",
    "Libya": "91st",
    "Algeria": "92nd",
    "Turkmenistan": "93rd",
    "Guyana": "94th",
    "Mongolia": "95th",
    "Dominica": "96th",
    "Tonga": "97th",
    "Jordan": "98th",
    "Ukraine": "99th",
    "Tunisia": "100th",
    "Marshall Islands": "101st",
    "Paraguay": "101st",
    "Fiji": "103rd",
    "Egypt": "104th",
    "Uzbekistan": "105th",
    "Vietnam": "106th",
    "Saint Lucia": "107th",
    "Lebanon": "108th",
    "South Africa": "109th",
    "Indonesia": "110th",
    "Philippines": "111th",
    "Botswana": "112th",
    "Jamaica": "113th",
    "Samoa": "114th",
    "Kyrgyzstan": "115th",
    "Belize": "116th",
    "Venezuela": "117th",
    "Morocco": "118th",
    "Bolivia": "118th",
    "Nauru": "120th",
    "Gabon": "121st",
    "Suriname": "122nd",
    "Bhutan": "123rd",
    "Tajikistan": "124th",
    "El Salvador": "125th",
    "Iraq": "126th",
    "Bangladesh": "127th",
    "Nicaragua": "128th",
    "Cape Verde": "129th",
    "Tuvalu": "130th",
    "Equatorial Guinea": "131st",
    "India": "132nd",
    "Micronesia": "133rd",
    "Guatemala": "134th",
    "Kiribati": "135th",
    "Honduras": "136th",
    "Laos": "137th",
    "Vanuatu": "138th",
    "São Tomé and Príncipe": "139th",
    "Eswatini": "140th",
    "Namibia": "140th",
    "Myanmar": "142nd",
    "Ghana": "143rd",
    "Nepal": "144th",
    "Kenya": "144th",
    "Cambodia": "146th",
    "Congo": "147th",
    "Angola": "148th",
    "Cameroon": "149th",
    "Comoros": "150th",
    "Zambia": "151st",
    "Papua New Guinea": "152nd",
    "Timor-Leste": "153rd",
    "Solomon Islands": "154th",
    "Syria": "155th",
    "Haiti": "156th",
    "Uganda": "157th",
    "Zimbabwe": "157th",
    "Rwanda": "159th",
    "Nigeria": "159th",
    "Togo": "161st",
    "Pakistan": "162nd",
    "Mauritania": "162nd",
    "Ivory Coast": "164th",
    "Tanzania": "165th",
    "Lesotho": "166th",
    "Senegal": "167th",
    "Sudan": "168th",
    "Djibouti": "169th",
    "Malawi": "170th",
    "Benin": "171st",
    "Gambia": "172nd",
    "Eritrea": "173rd",
    "Ethiopia": "174th",
    "Liberia": "175th",
    "Madagascar": "175th",
    "Guinea-Bissau": "177th",
    "DR Congo": "178th",
    "Guinea": "179th",
    "Afghanistan": "180th",
    "Mozambique": "181st",
    "Sierra Leone": "182nd",
    "Burkina Faso": "183rd",
    "Yemen": "184th",
    "Burundi": "185th",
    "Mali": "186th",
    "Niger": "187th",
    "Chad": "187th",
    "Central African Republic": "189th",
    "South Sudan": "190th",
    "Somalia": "191st"
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
    "United Kingdom": "4th",
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
    "China": "3rd",
    "United States": "4th",
    "Brazil": "5th",
    "Australia": "6th",
    "India": "7th",
    "Argentina": "8th",
    "Kazakhstan": "9th",
    "Algeria": "10th",
    "Democratic Republic of the Congo": "11th",
    "Denmark": "12th",
    "Saudi Arabia": "13th",
    "Mexico": "14th",
    "Indonesia": "15th",
    "Sudan": "16th",
    "Libya": "17th",
    "Iran": "18th",
    "Mongolia": "19th",
    "Peru": "20th",
    "Chad": "21st",
    "Niger": "21st",
    "Angola": "22nd",
    "Mali": "23rd",
    "South Africa": "24th",
    "Colombia": "25th",
    "Ethiopia": "26th",
    "Bolivia": "27th",
    "Mauritania": "28th",
    "Egypt": "29th",
    "Tanzania": "30th",
    "Nigeria": "31st",
    "Venezuela": "32nd",
    "Pakistan": "33rd",
    "Namibia": "34th",
    "Mozambique": "35th",
    "Turkey": "36th",
    "Chile": "37th",
    "Zambia": "38th",
    "Myanmar": "39th",
    "Afghanistan": "40th",
    "South Sudan": "41st",
    "France": "42nd",
    "Somalia": "43rd",
    "Central African Republic": "44th",
    "Ukraine": "45th",
    "Madagascar": "46th",
    "Botswana": "47th",
    "Kenya": "48th",
    "Thailand": "49th",
    "Spain": "50th",
    "Turkmenistan": "51st",
    "Cameroon": "52nd",
    "Papua New Guinea": "53rd",
    "Yemen": "54th",
    "Sweden": "55th",
    "Uzbekistan": "56th",
    "Morocco": "57th",
    "Iraq": "58th",
    "Paraguay": "59th",
    "Zimbabwe": "60th",
    "Norway": "61st",
    "Japan": "62nd",
    "Germany": "63rd",
    "Republic of the Congo": "64th",
    "Finland": "65th",
    "Vietnam": "66th",
    "Malaysia": "67th",
    "Ivory Coast": "68th",
    "Poland": "69th",
    "Oman": "70th",
    "Italy": "71st",
    "Philippines": "72nd",
    "Ecuador": "73rd",
    "Burkina Faso": "74th",
    "New Zealand": "75th",
    "Gabon": "76th",
    "Guinea": "77th",
    "United Kingdom": "78th",
    "Uganda": "79th",
    "Ghana": "80th",
    "Romania": "81st",
    "Laos": "82nd",
    "Guyana": "83rd",
    "Belarus": "84th",
    "Kyrgyzstan": "85th",
    "Senegal": "86th",
    "Syria": "87th",
    "Cambodia": "88th",
    "Uruguay": "89th",
    "Suriname": "90th",
    "Tunisia": "91st",
    "Bangladesh": "92nd",
    "Nepal": "93rd",
    "Tajikistan": "94th",
    "Greece": "95th",
    "Nicaragua": "96th",
    "North Korea": "97th",
    "Malawi": "98th",
    "Eritrea": "99th",
    "Benin": "100th",
    "Honduras": "101st",
    "Liberia": "102nd",
    "Bulgaria": "103rd",
    "Cuba": "104th",
    "Guatemala": "105th",
    "Iceland": "106th",
    "South Korea": "107th",
    "Hungary": "108th",
    "Portugal": "109th",
    "Jordan": "110th",
    "Serbia": "111th",
    "Azerbaijan": "112th",
    "Austria": "113th",
    "United Arab Emirates": "114th",
    "Czech Republic": "115th",
    "Panama": "116th",
    "Sierra Leone": "117th",
    "Ireland": "118th",
    "Georgia": "119th",
    "Sri Lanka": "120th",
    "Lithuania": "121st",
    "Latvia": "122nd",
    "Togo": "123rd",
    "Croatia": "124th",
    "Bosnia and Herzegovina": "125th",
    "Costa Rica": "126th",
    "Slovakia": "127th",
    "Dominican Republic": "128th",
    "Estonia": "129th",
    "Netherlands": "130th",
    "Switzerland": "131st",
    "Bhutan": "133rd",
    "Guinea-Bissau": "134th",
    "Taiwan": "135th",
    "Moldova": "136th",
    "Belgium": "137th",
    "Lesotho": "138th",
    "Armenia": "139th",
    "Solomon Islands": "140th",
    "Albania": "141st",
    "Equatorial Guinea": "142nd",
    "Burundi": "143rd",
    "Haiti": "144th",
    "Rwanda": "145th",
    "North Macedonia": "146th",
    "Djibouti": "147th",
    "Belize": "148th",
    "Israel": "149th",
    "El Salvador": "150th",
    "Slovenia": "151st",
    "Fiji": "152nd",
    "Kuwait": "153rd",
    "Eswatini": "154th",
    "Timor-Leste": "155th",
    "Bahamas": "156th",
    "Montenegro": "157th",
    "Vanuatu": "158th",
    "Qatar": "159th",
    "Gambia": "160th",
    "Jamaica": "161st",
    "Kosovo": "162nd",
    "Lebanon": "163rd",
    "Cyprus": "164th",
    "Brunei": "165th",
    "Trinidad and Tobago": "166th",
    "Cape Verde": "167th",
    "Samoa": "168th",
    "Luxembourg": "169th",
    "Mauritius": "170th",
    "Comoros": "171st",
    "Sao Tome and Principe": "172nd",
    "Kiribati": "173rd",
    "Bahrain": "174th",
    "Dominica": "175th",
    "Tonga": "176th",
    "Singapore": "177th",
    "Micronesia": "178th",
    "Saint Lucia": "179th",
    "Andorra": "180th",
    "Palau": "181st",
    "Seychelles": "182nd",
    "Antigua and Barbuda": "183rd",
    "Barbados": "184th",
    "Saint Vincent and the Grenadines": "185th",
    "Grenada": "186th",
    "Malta": "187th",
    "Maldives": "188th",
    "Saint Kitts and Nevis": "189th",
    "Marshall Islands": "190th",
    "Liechtenstein": "191st",
    "San Marino": "192nd",
    "Tuvalu": "193rd",
    "Nauru": "194th",
    "Monaco": "195th",
    "Vatican City": "196th"
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
    "Japan": "11th",
    "Philippines": "12th",
    "Ethiopia": "13th",
    "Democratic Republic of the Congo": "14th",
    "Egypt": "15th",
    "Vietnam": "16th",
    "Iran": "17th",
    "Turkey": "18th",
    "Germany": "19th",
    "France": "20th",
    "United Kingdom": "21st",
    "Thailand": "22nd",
    "South Africa": "23rd",
    "Tanzania": "24th",
    "Italy": "25th",
    "Colombia": "26th",
    "Kenya": "27th",
    "Myanmar": "28th",
    "South Korea": "29th",
    "Sudan": "30th",
    "Spain": "31st",
    "Algeria": "32nd",
    "Argentina": "33rd",
    "Uganda": "34th",
    "Iraq": "35th",
    "Afghanistan": "36th",
    "Canada": "37th",
    "Uzbekistan": "38th",
    "Poland": "39th",
    "Morocco": "40th",
    "Angola": "41st",
    "Malaysia": "42nd",
    "Peru": "43rd",
    "Mozambique": "44th",
    "Ghana": "45th",
    "Ukraine": "46th",
    "Yemen": "47th",
    "Saudi Arabia": "48th",
    "Madagascar": "49th",
    "Ivory Coast": "50th",
    "Nepal": "51st",
    "Cameroon": "52nd",
    "Venezuela": "53rd",
    "Australia": "54th",
    "Niger": "55th",
    "North Korea": "56th",
    "Syria": "57th",
    "Burkina Faso": "58th",
    "Taiwan": "59th",
    "Mali": "60th",
    "Sri Lanka": "61st",
    "Kazakhstan": "62nd",
    "Malawi": "63rd",
    "Chile": "64th",
    "Zambia": "65th",
    "Romania": "66th",
    "Somalia": "67th",
    "Chad": "68th",
    "Senegal": "69th",
    "Netherlands": "70th",
    "Guatemala": "71st",
    "Cambodia": "72nd",
    "Ecuador": "73rd",
    "Zimbabwe": "74th",
    "South Sudan": "75th",
    "Guinea": "76th",
    "Rwanda": "77th",
    "Benin": "78th",
    "Burundi": "79th",
    "Haiti": "80th",
    "Tunisia": "81st",
    "Belgium": "82nd",
    "Papua New Guinea": "83rd",
    "Jordan": "84th",
    "Bolivia": "85th",
    "Cuba": "86th",
    "Czech Republic": "87th",
    "Dominican Republic": "88th",
    "United Arab Emirates": "89th",
    "Portugal": "90th",
    "Sweden": "91st",
    "Greece": "92nd",
    "Tajikistan": "93rd",
    "Azerbaijan": "94th",
    "Israel": "95th",
    "Honduras": "96th",
    "Hungary": "97th",
    "Austria": "98th",
    "Belarus": "99th",
    "Switzerland": "100th",
    "Sierra Leone": "101st",
    "Togo": "102nd",
    "Laos": "103rd",
    "Libya": "104th",
    "Kyrgyzstan": "105th",
    "Turkmenistan": "106th",
    "Nicaragua": "107th",
    "Serbia": "108th",
    "Central African Republic": "109th",
    "Bulgaria": "110th",
    "Republic of the Congo": "111th",
    "Paraguay": "112th",
    "Singapore": "113th",
    "El Salvador": "114th",
    "Denmark": "115th",
    "Finland": "116th",
    "Norway": "117th",
    "Lebanon": "118th",
    "Slovakia": "119th",
    "Ireland": "120th",
    "New Zealand": "121st",
    "Costa Rica": "122nd",
    "Oman": "123rd",
    "Liberia": "124th",
    "Mauritania": "125th",
    "Kuwait": "126th",
    "Panama": "127th",
    "Croatia": "128th",
    "Georgia": "129th",
    "Eritrea": "130th",
    "Mongolia": "131st",
    "Uruguay": "132nd",
    "Bosnia and Herzegovina": "133rd",
    "Armenia": "134th",
    "Namibia": "135th",
    "Lithuania": "136th",
    "Qatar": "137th",
    "Jamaica": "138th",
    "Moldova": "139th",
    "Gambia": "140th",
    "Botswana": "141st",
    "Gabon": "142nd",
    "Albania": "143rd",
    "Lesotho": "144th",
    "Slovenia": "145th",
    "Latvia": "146th",
    "North Macedonia": "147th",
    "Guinea-Bissau": "148th",
    "Bahrain": "149th",
    "Kosovo": "150th",
    "Equatorial Guinea": "151st",
    "Timor-Leste": "152nd",
    "Estonia": "153rd",
    "Trinidad and Tobago": "154th",
    "Mauritius": "155th",
    "Eswatini": "156th",
    "Djibouti": "157th",
    "Cyprus": "158th",
    "Fiji": "159th",
    "Comoros": "160th",
    "Bhutan": "161st",
    "Guyana": "162nd",
    "Solomon Islands": "163rd",
    "Luxembourg": "164th",
    "Montenegro": "165th",
    "Suriname": "166th",
    "Malta": "167th",
    "Maldives": "168th",
    "Cape Verde": "169th",
    "Brunei": "170th",
    "Belize": "171st",
    "Bahamas": "172nd",
    "Iceland": "173rd",
    "Vanuatu": "174th",
    "Barbados": "175th",
    "São Tomé and Príncipe": "176th",
    "Samoa": "177th",
    "Saint Lucia": "178th",
    "Kiribati": "179th",
    "Grenada": "180th",
    "Saint Vincent and the Grenadines": "181st",
    "Micronesia": "182nd",
    "Antigua and Barbuda": "183rd",
    "Tonga": "184th",
    "Andorra": "185th",
    "Dominica": "186th",
    "Saint Kitts and Nevis": "187th",
    "Marshall Islands": "188th",
    "Liechtenstein": "189th",
    "Monaco": "190th",
    "San Marino": "191st",
    "Palau": "192nd",
    "Nauru": "193rd",
    "Tuvalu": "194th",
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
    "Cape Verde": "122nd",
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
    "Sao Tome and Principe": "166th",
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
    "Liechtenstein": "2nd",
    "Luxembourg": "3rd",
    "Ireland": "4th",
    "Switzerland": "5th",
    "Norway": "6th",
    "Singapore": "7th",
    "Iceland": "8th",
    "United States": "9th",
    "Qatar": "10th",
    "Denmark": "11th",
    "Australia": "12th",
    "Netherlands": "13th",
    "San Marino": "14th",
    "Austria": "15th",
    "Israel": "16th",
    "Sweden": "17th",
    "Belgium": "18th",
    "Canada": "19th",
    "Germany": "20th",
    "Finland": "21st",
    "United Kingdom": "22nd",
    "New Zealand": "23rd",
    "United Arab Emirates": "24th",
    "Andorra": "25th",
    "France": "26th",
    "Malta": "27th",
    "Italy": "28th",
    "Cyprus": "29th",
    "Bahamas": "30th",
    "South Korea": "31st",
    "Kuwait": "32nd",
    "Spain": "33rd",
    "Japan": "34th",
    "Brunei": "35th",
    "Slovenia": "36th",
    "Saudi Arabia": "37th",
    "Czech Republic": "38th",
    "Estonia": "39th",
    "Bahrain": "40th",
    "Lithuania": "41st",
    "Portugal": "42nd",
    "Slovakia": "43rd",
    "Barbados": "44th",
    "Greece": "45th",
    "Uruguay": "46th",
    "Saint Kitts and Nevis": "47th",
    "Latvia": "48th",
    "Hungary": "49th",
    "Antigua and Barbuda": "50th",
    "Croatia": "51st",
    "Oman": "52nd",
    "Poland": "53rd",
    "Guyana": "54th",
    "Panama": "55th",
    "Romania": "56th",
    "Cuba": "57th",
    "Chile": "58th",
    "Trinidad and Tobago": "59th",
    "Costa Rica": "60th",
    "Seychelles": "61st",
    "Palau": "62nd",
    "Bulgaria": "63rd",
    "Nauru": "64th",
    "Argentina": "65th",
    "Mexico": "66th",
    "Russia": "67th",
    "Saint Lucia": "68th",
    "Kazakhstan": "69th",
    "Turkey": "70th",
    "Maldives": "71st",
    "China": "72nd",
    "Montenegro": "73rd",
    "Malaysia": "74th",
    "Mauritius": "75th",
    "Grenada": "76th",
    "Serbia": "77th",
    "Saint Vincent and the Grenadines": "78th",
    "Dominican Republic": "79th",
    "Brazil": "80th",
    "Dominica": "81st",
    "Bosnia and Herzegovina": "82nd",
    "North Macedonia": "83rd",
    "Armenia": "84th",
    "Albania": "85th",
    "Turkmenistan": "86th",
    "Gabon": "87th",
    "Georgia": "88th",
    "Peru": "89th",
    "Belarus": "90th",
    "Botswana": "91st",
    "Belize": "92nd",
    "Thailand": "93rd",
    "Azerbaijan": "94th",
    "Marshall Islands": "95th",
    "Colombia": "96th",
    "Tuvalu": "97th",
    "Jamaica": "98th",
    "Ecuador": "99th",
    "Equatorial Guinea": "100th",
    "Paraguay": "101st",
    "Kosovo": "102nd",
    "Libya": "103rd",
    "South Africa": "103rd",
    "Suriname": "103rd",
    "Fiji": "106th",
    "Mongolia": "107th",
    "Guatemala": "108th",
    "Moldova": "109th",
    "El Salvador": "110th",
    "Algeria": "111th",
    "Iraq": "112th",
    "Cape Verde": "113th",
    "Venezuela": "114th",
    "Indonesia": "115th",
    "Tonga": "116th",
    "Samoa": "117th",
    "Lebanon": "118th",
    "Ukraine": "119th",
    "Jordan": "120th",
    "Iran": "121st",
    "Vietnam": "122nd",
    "Namibia": "123rd",
    "Micronesia": "124th",
    "Tunisia": "125th",
    "Bhutan": "126th",
    "Morocco": "127th",
    "Philippines": "128th",
    "Eswatini": "129th",
    "Bolivia": "130th",
    "Sri Lanka": "131st",
    "Vanuatu": "132nd",
    "Djibouti": "133rd",
    "Honduras": "134th",
    "Papua New Guinea": "135th",
    "Sao Tome and Principe": "136th",
    "Egypt": "137th",
    "Nicaragua": "138th",
    "Uzbekistan": "139th",
    "Ivory Coast": "140th",
    "India": "141st",
    "Angola": "142nd",
    "Bangladesh": "142nd",
    "Cambodia": "144th",
    "Congo": "145th",
    "Ghana": "146th",
    "Kiribati": "147th",
    "Mauritania": "148th",
    "Solomon Islands": "149th",
    "Kyrgyzstan": "150th",
    "Laos": "151st",
    "Kenya": "152nd",
    "Zimbabwe": "153rd",
    "Cameroon": "154th",
    "Haiti": "155th",
    "Comoros": "156th",
    "Senegal": "157th",
    "Nigeria": "158th",
    "Guinea": "159th",
    "Timor-Leste": "160th",
    "Benin": "161st",
    "Nepal": "162nd",
    "Zambia": "163rd",
    "Ethiopia": "164th",
    "Syria": "165th",
    "Pakistan": "166th",
    "Tanzania": "167th",
    "Tajikistan": "168th",
    "Myanmar": "169th",
    "Uganda": "170th",
    "Rwanda": "171st",
    "Togo": "172nd",
    "Liberia": "173rd",
    "Lesotho": "174th",
    "Chad": "175th",
    "Gambia": "176th",
    "Burkina Faso": "177th",
    "Guinea-Bissau": "178th",
    "Mali": "179th",
    "Sierra Leone": "180th",
    "Sudan": "181st",
    "Eritrea": "182nd",
    "DR Congo": "183rd",
    "Niger": "184th",
    "North Korea": "185th",
    "Mozambique": "186th",
    "Madagascar": "187th",
    "Somalia": "188th",
    "Malawi": "189th",
    "Central African Republic": "190th",
    "South Sudan": "191st",
    "Afghanistan": "192nd",
    "Burundi": "193rd",
    "Yemen": "194th"
};
// Highest Elevation rankings data
const highestElevationRankings = {
    "China": "1st",
    "Nepal": "1st",
    "Pakistan": "3rd",
    "India": "4th",
    "Bhutan": "5th",
    "Tajikistan": "6th",
    "Afghanistan": "7th",
    "Kyrgyzstan": "8th",
    "Kazakhstan": "9th",
    "Argentina": "10th",
    "Chile": "11th",
    "Peru": "12th",
    "Bolivia": "13th",
    "Ecuador": "14th",
    "United States": "15th",
    "Canada": "16th",
    "Tanzania": "17th",
    "Myanmar": "18th",
    "Colombia": "19th",
    "Russia": "20th",
    "Mexico": "21st",
    "Iran": "22nd",
    "Georgia": "23rd",
    "Kenya": "24th",
    "Turkey": "25th",
    "Democratic Republic of the Congo": "26th",
    "Uganda": "26th",
    "Venezuela": "28th",
    "Indonesia": "29th",
    "France": "30th",
    "Italy": "30th",
    "Uzbekistan": "32nd",
    "Switzerland": "33rd",
    "Ethiopia": "34th",
    "Papua New Guinea": "35th",
    "Rwanda": "36th",
    "Azerbaijan": "37th",
    "Mongolia": "38th",
    "Guatemala": "39th",
    "Morocco": "40th",
    "Malaysia": "41st",
    "Armenia": "42nd",
    "Cameroon": "43rd",
    "Taiwan": "44th",
    "Costa Rica": "45th",
    "Austria": "46th",
    "Japan": "47th",
    "New Zealand": "48th",
    "Spain": "49th",
    "Yemen": "50th",
    "Iraq": "51st",
    "Lesotho": "52nd",
    "Panama": "53rd",
    "Chad": "54th",
    "South Africa": "55th",
    "South Sudan": "56th",
    "Vietnam": "57th",
    "Turkmenistan": "58th",
    "Dominican Republic": "59th",
    "Lebanon": "60th",
    "Sudan": "61st",
    "Eritrea": "62nd",
    "Oman": "62nd",
    "Saudi Arabia": "64th",
    "Equatorial Guinea": "65th",
    "Malawi": "66th",
    "Brazil": "67th",
    "Timor-Leste": "68th",
    "Germany": "69th",
    "Philippines": "70th",
    "Andorra": "71st",
    "Bulgaria": "72nd",
    "Greece": "73rd",
    "Algeria": "74th",
    "Madagascar": "75th",
    "Honduras": "76th",
    "Slovenia": "77th",
    "Laos": "78th",
    "Cape Verde": "79th",
    "Syria": "80th",
    "Guyana": "81st",
    "Albania": "82nd",
    "North Macedonia": "82nd",
    "North Korea": "84th",
    "El Salvador": "85th",
    "Burundi": "86th",
    "Haiti": "87th",
    "Kosovo": "88th",
    "Slovakia": "89th",
    "Egypt": "90th",
    "Angola": "91st",
    "Liechtenstein": "92nd",
    "Zimbabwe": "93rd",
    "Namibia": "94th",
    "Thailand": "95th",
    "Romania": "96th",
    "Montenegro": "97th",
    "Sri Lanka": "98th",
    "Poland": "99th",
    "Norway": "100th",
    "Somalia": "101st",
    "Mozambique": "102nd",
    "Nigeria": "103rd",
    "Bosnia and Herzegovina": "104th",
    "Comoros": "105th",
    "Portugal": "106th",
    "Zambia": "107th",
    "Solomon Islands": "108th",
    "Libya": "109th",
    "Jamaica": "110th",
    "Australia": "111th",
    "Serbia": "112th",
    "Iceland": "113th",
    "Sweden": "114th",
    "Nicaragua": "115th",
    "Ukraine": "116th",
    "Sao Tome and Principe": "117th",
    "Djibouti": "118th",
    "Niger": "119th",
    "Cuba": "120th",
    "Cyprus": "121st",
    "South Korea": "122nd",
    "Sierra Leone": "123rd",
    "United Arab Emirates": "124th",
    "Vanuatu": "125th",
    "Brunei": "126th",
    "Eswatini": "127th",
    "Samoa": "128th",
    "Jordan": "129th",
    "Croatia": "130th",
    "Cambodia": "131st",
    "Guinea": "132nd",
    "Ivory Coast": "132nd",
    "Czech Republic": "134th",
    "Tunisia": "135th",
    "Botswana": "136th",
    "Dominica": "137th",
    "Liberia": "137th",
    "Central African Republic": "139th",
    "Finland": "140th",
    "United Kingdom": "141st",
    "Fiji": "142nd",
    "Suriname": "143rd",
    "Saint Vincent and the Grenadines": "144th",
    "Israel": "145th",
    "Saint Kitts and Nevis": "146th",
    "Mali": "147th",
    "Belize": "148th",
    "Gabon": "149th",
    "Bangladesh": "150th",
    "Ireland": "151st",
    "Tonga": "152nd",
    "Republic of the Congo": "153rd",
    "Hungary": "154th",
    "Togo": "155th",
    "Saint Lucia": "156th",
    "Trinidad and Tobago": "157th",
    "Mauritania": "158th",
    "Seychelles": "159th",
    "Ghana": "160th",
    "Netherlands": "161st",
    "Paraguay": "162nd",
    "Grenada": "163rd",
    "Mauritius": "164th",
    "Burkina Faso": "165th",
    "San Marino": "166th",
    "Belgium": "167th",
    "Benin": "168th",
    "Senegal": "169th",
    "Luxembourg": "170th",
    "Uruguay": "171st",
    "Moldova": "172nd",
    "Antigua and Barbuda": "173rd",
    "Barbados": "174th",
    "Estonia": "175th",
    "Latvia": "176th",
    "Lithuania": "177th",
    "Kuwait": "178th",
    "Guinea-Bissau": "179th",
    "Malta": "180th",
    "Palau": "181st",
    "Denmark": "182nd",
    "Singapore": "183rd",
    "Monaco": "184th",
    "Bahrain": "185th",
    "Qatar": "186th",
    "Kiribati": "187th",
    "Vatican City": "188th",
    "Nauru": "189th",
    "Bahamas": "190th",
    "Gambia": "191st",
    "Marshall Islands": "192nd",
    "Maldives": "193rd",
    "Tuvalu": "193rd"
};
// Highest life expectancy rankings

const lifeExpectancyRankings = {
    "Japan": "1st",
    "South Korea": "2nd",
    "Andorra": "3rd",
    "Switzerland": "4th",
    "Liechtenstein": "4th",
    "Australia": "5th",
    "Singapore": "6th",
    "Italy": "7th",
    "San Marino": "7th",
    "Spain": "8th",
    "France": "9th",
    "Monaco": "9th", 
    "Norway": "10th",
    "Malta": "11th",
    "Sweden": "12th",
    "United Arab Emirates": "13th",
    "Iceland": "14th",
    "Canada": "15th",
    "Israel": "16th",
    "Ireland": "16th",
    "Qatar": "18th",
    "Portugal": "19th",
    "Luxembourg": "20th",
    "Netherlands": "21st",
    "Belgium": "22nd",
    "New Zealand": "23rd",
    "Austria": "24th",
    "Denmark": "25th",
    "Finland": "26th",
    "Greece": "27th",
    "Cyprus": "28th",
    "Slovenia": "29th",
    "Germany": "30th",
    "United Kingdom": "31st",
    "Bahrain": "32nd",
    "Chile": "33rd",
    "Maldives": "34th",
    "Costa Rica": "35th",
    "Taiwan": "36th",
    "Kuwait": "37th",
    "Oman": "38th",
    "Czech Republic": "39th",
    "Albania": "40th",
    "Panama": "41st",
    "United States": "42nd",
    "Estonia": "43rd",
    "China": "44th",
    "Saudi Arabia": "45th",
    "Poland": "46th",
    "Croatia": "47th",
    "Slovakia": "48th",
    "Uruguay": "49th",
    "Cuba": "50th",
    "Kosovo": "51st",
    "Bosnia and Herzegovina": "52nd",
    "Lebanon": "53rd",
    "Jordan": "54th",
    "Peru": "55th",
    "Colombia": "56th",
    "Iran": "57th",
    "Antigua and Barbuda": "58th",
    "Sri Lanka": "59th",
    "Argentina": "60th",
    "North Macedonia": "60th",
    "Ecuador": "60th",
    "Turkey": "63rd",
    "Montenegro": "64th",
    "Hungary": "65th",
    "Serbia": "66th",
    "Malaysia": "67th",
    "Tunisia": "68th",
    "Thailand": "69th",
    "Algeria": "70th",
    "Latvia": "71st",
    "Barbados": "72nd",
    "Cape Verde": "73rd",
    "Lithuania": "74th",
    "Romania": "75th",
    "Brazil": "76th",
    "Armenia": "77th",
    "Bulgaria": "78th",
    "Brunei": "79th",
    "Morocco": "80th",
    "Grenada": "81st",
    "Mexico": "82nd",
    "Nicaragua": "83rd",
    "Mauritius": "84th",
    "Bangladesh": "85th",
    "Vietnam": "86th",
    "Bahamas": "87th",
    "Georgia": "88th",
    "Belarus": "89th",
    "Azerbaijan": "89th",
    "Kazakhstan": "91st",
    "Paraguay": "92nd",
    "Dominican Republic": "93rd",
    "North Korea": "94th",
    "Suriname": "95th",
    "Belize": "96th",
    "Trinidad and Tobago": "97th",
    "Ukraine": "98th",
    "Russia": "99th",
    "Bhutan": "100th",
    "Tonga": "101st",
    "Honduras": "102nd",
    "Seychelles": "103rd",
    "Saint Lucia": "104th",
    "Guatemala": "105th",
    "Venezuela": "106th",
    "Uzbekistan": "107th",
    "Iraq": "108th",
    "Syria": "109th",
    "El Salvador": "110th",
    "India": "111th",
    "Tajikistan": "112th",
    "Mongolia": "113th",
    "Samoa": "114th",
    "Kyrgyzstan": "115th",
    "Egypt": "116th",
    "Jamaica": "117th",
    "Vanuatu": "117th",
    "Saint Vincent and the Grenadines": "119th",
    "Moldova": "120th",
    "Indonesia": "121st",
    "Dominica": "122nd",
    "Cambodia": "123rd",
    "Solomon Islands": "124th",
    "Nepal": "125th",
    "Guyana": "126th",
    "Turkmenistan": "127th",
    "Philippines": "128th",
    "São Tomé and Príncipe": "129th",
    "Libya": "130th",
    "Yemen": "131st",
    "Botswana": "132nd",
    "Laos": "133rd",
    "Senegal": "134th",
    "Eritrea": "135th",
    "Bolivia": "136th",
    "Mauritania": "137th",
    "Gabon": "138th",
    "Uganda": "139th",
    "Rwanda": "140th",
    "Timor-Leste": "141st",
    "Pakistan": "142nd",
    "Namibia": "143rd",
    "Malawi": "144th",
    "Fiji": "145th",
    "Ethiopia": "146th",
    "Micronesia": "147th",
    "Tanzania": "148th",
    "Myanmar": "149th",
    "Comoros": "150th",
    "Kiribati": "151st",
    "Zambia": "152nd",
    "Sudan": "153rd",
    "South Africa": "154th",
    "Papua New Guinea": "155th",
    "Afghanistan": "156th",
    "Djibouti": "157th",
    "Gambia": "158th",
    "Congo": "159th",
    "Ghana": "160th",
    "Haiti": "161st",
    "Angola": "162nd",
    "Eswatini": "163rd",
    "Guinea-Bissau": "164th",
    "Equatorial Guinea": "165th",
    "Cameroon": "166th",
    "Burundi": "167th",
    "Kenya": "167th",
    "Madagascar": "169th",
    "Mozambique": "170th",
    "Zimbabwe": "171st",
    "Togo": "172nd",
    "Liberia": "173rd",
    "Ivory Coast": "174th",
    "DR Congo": "175th",
    "Sierra Leone": "176th",
    "Niger": "177th",
    "Burkina Faso": "178th",
    "Benin": "179th",
    "Guinea": "180th",
    "Mali": "181st",
    "Somalia": "182nd",
    "South Sudan": "183rd",
    "Central African Republic": "184th",
    "Lesotho": "185th",
    "Chad": "186th",
    "Nigeria": "187th"
};

// Average temperature rankings
const averageTemperatureRankings = {
    "Burkina Faso": "1st",
    "Mali": "2nd",
    "Senegal": "3rd",
    "Mauritania": "4th",
    "Tuvalu": "5th",
    "Djibouti": "6th",
    "Gambia": "7th",
    "United Arab Emirates": "8th",
    "Maldives": "9th",
    "Niger": "10th",
    "Benin": "11th",
    "Qatar": "11th",
    "Marshall Islands": "13th",
    "Guinea-Bissau": "14th",
    "South Sudan": "15th",
    "Sudan": "16th",
    "Palau": "17th",
    "Nauru": "18th",
    "Kiribati": "19th",
    "Bahrain": "20th",
    "Singapore": "21st",
    "Ghana": "22nd",
    "Oman": "23rd",
    "Chad": "24th",
    "Samoa": "25th",
    "Saint Kitts and Nevis": "26th",
    "Cambodia": "27th",
    "Togo": "28th",
    "Nigeria": "29th",
    "Micronesia": "30th",
    "Sri Lanka": "31st",
    "Antigua and Barbuda": "32nd",
    "Seychelles": "33rd",
    "Saint Lucia": "34th",
    "Brunei": "35th",
    "Somalia": "35th",
    "Thailand": "37th",
    "Dominica": "38th",
    "Ivory Coast": "39th",
    "Eritrea": "40th",
    "Barbados": "41st",
    "Suriname": "42nd",
    "Trinidad and Tobago": "43rd",
    "Sierra Leone": "44th",
    "Grenada": "45th",
    "Malaysia": "46th",
    "Kuwait": "47th",
    "Philippines": "48th",
    "Saint Vincent and the Grenadines": "49th",
    "Guyana": "50th",
    "Indonesia": "51st",
    "Saudi Arabia": "52nd",
    "Solomon Islands": "53rd",
    "Jamaica": "54th",
    "Nicaragua": "55th",
    "Guinea": "56th",
    "Cuba": "57th",
    "Bangladesh": "58th",
    "Venezuela": "58th",
    "Belize": "60th",
    "Panama": "61st",
    "Bahamas": "62nd",
    "Yemen": "63rd",
    "Central African Republic": "64th",
    "Liberia": "65th",
    "Brazil": "66th",
    "El Salvador": "67th",
    "Gabon": "68th",
    "Kenya": "69th",
    "Tonga": "70th",
    "Colombia": "71st",
    "Haiti": "72nd",
    "India": "73rd",
    "Costa Rica": "74th",
    "Cameroon": "75th",
    "Vietnam": "76th",
    "Congo": "77th",
    "Papua New Guinea": "77th",
    "Honduras": "79th",
    "Fiji": "80th",
    "Equatorial Guinea": "81st",
    "Timor-Leste": "82nd",
    "Dominican Republic": "83rd",
    "Sao Tome and Principe": "84th",
    "Vanuatu": "85th",
    "Mozambique": "86th",
    "Democratic Republic of the Congo": "87th",
    "Laos": "88th",
    "Paraguay": "89th",
    "Myanmar": "90th",
    "Comoros": "91st",
    "Guatemala": "92nd",
    "Algeria": "93rd",
    "Ethiopia": "94th",
    "Mauritius": "95th",
    "Uganda": "96th",
    "Egypt": "97th",
    "Iraq": "98th",
    "Tanzania": "99th",
    "Libya": "100th",
    "Malawi": "101st",
    "Madagascar": "102nd",
    "Cape Verde": "103rd",
    "Zambia": "104th",
    "Botswana": "105th",
    "Australia": "106th",
    "Zimbabwe": "107th",
    "Angola": "108th",
    "Israel": "109th",
    "Ecuador": "110th",
    "Pakistan": "111th",
    "Mexico": "112th",
    "Bolivia": "113th",
    "Eswatini": "114th",
    "Tunisia": "115th",
    "Burundi": "116th",
    "Namibia": "117th",
    "Peru": "118th",
    "Malta": "119th",
    "Jordan": "120th",
    "Rwanda": "121st",
    "Cyprus": "122nd",
    "Syria": "123rd",
    "Iran": "124th",
    "South Africa": "125th",
    "Morocco": "126th",
    "Uruguay": "127th",
    "Turkmenistan": "128th",
    "Argentina": "129th",
    "Portugal": "130th",
    "Lebanon": "131st",
    "Vatican City": "132nd",
    "Greece": "133rd",
    "Spain": "134th",
    "Uzbekistan": "135th",
    "Monaco": "136th",
    "Afghanistan": "137th",
    "Italy": "138th",
    "Azerbaijan": "139th",
    "San Marino": "140th",
    "Albania": "141st",
    "Lesotho": "142nd",
    "South Korea": "143rd",
    "Croatia": "144th",
    "Japan": "145th",
    "Turkey": "146th",
    "France": "147th",
    "Hungary": "148th",
    "Serbia": "149th",
    "Bulgaria": "150th",
    "Moldova": "151st",
    "North Macedonia": "152nd",
    "Belgium": "153rd",
    "Netherlands": "154th",
    "New Zealand": "155th",
    "Bhutan": "156th",
    "Bosnia and Herzegovina": "157th",
    "Romania": "158th",
    "Kosovo": "159th",
    "Luxembourg": "159th",
    "Montenegro": "161st",
    "Slovenia": "162nd",
    "Ireland": "163rd",
    "Germany": "164th",
    "United States": "165th",
    "Chile": "166th",
    "Ukraine": "167th",
    "United Kingdom": "168th",
    "Georgia": "169th",
    "Denmark": "170th",
    "Slovakia": "171st",
    "Poland": "172nd",
    "Czech Republic": "173rd",
    "Andorra": "174th",
    "Armenia": "175th",
    "China": "176th",
    "Liechtenstein": "177th",
    "Belarus": "178th",
    "Austria": "179th",
    "Lithuania": "180th",
    "Kazakhstan": "181st",
    "North Korea": "182nd",
    "Latvia": "183rd",
    "Switzerland": "184th",
    "Estonia": "185th",
    "Tajikistan": "186th",
    "Sweden": "187th",
    "Kyrgyzstan": "188th",
    "Finland": "189th",
    "Norway": "190th",
    "Iceland": "191st",
    "Mongolia": "192nd",
    "Russia": "193rd",
    "Canada": "194th"
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
    'flags_images/jp.png',
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
    'flags_images/zm.png',
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
    'Cape Verde',
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
    'Japan',
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
    'Zambia',
    'Zimbabwe',
]

// List of 195 official countries in the world
const officialCountries = [
    'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Australia', 'Austria',
    'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bhutan', 'Bolivia',
    'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cape Verde', 'Cambodia', 'Cameroon',
    'Canada', 'Central African Republic', 'Chad', 'Chile', 'China', 'Colombia', 'Comoros', 'Congo', 'Costa Rica', 'Croatia', 'Cuba',
    'Cyprus', 'Czechia', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea',
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
    'South Sudan', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Timor-Leste', 'Tanzania',
    'Thailand', 'Togo', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates',
    'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Vatican City', 'Venezuela', 'Vietnam', 'Yemen', 'Zambia', 'Zimbabwe'
  ];
  
// Filter the countryNames and flags to only include official countries
const filteredCountryNames = countryNames.filter(country => 
    officialCountries.includes(country) && 
    country !== "Vatican City" && 
    country !== "Taiwan"
);
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
    const lifeExpectancyBox = document.getElementById('lifeExpectancyBox');
    const lifeExpectancyRank = document.getElementById('lifeExpectancyRank');
    const olympicBox = document.getElementById('olympicBox');
    const olympicRank = document.getElementById('olympicRank');
    const landAreaBox = document.getElementById('landAreaBox');
    const landAreaRank = document.getElementById('landAreaRank');
    const populationBox = document.getElementById('populationBox');
    const populationRank = document.getElementById('populationRank');
    const averageTemperatureBox = document.getElementById('averageTemperatureBox');
    const averageTemperatureRank = document.getElementById('averageTemperatureRank');
    const highestElevationBox = document.getElementById('highestElevationBox');
    const highestElevationRank = document.getElementById('highestElevationRank');
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
                }else if (box.parentElement.id === 'lifeExpectancyBox') {
                    lifeExpectancyRank.textContent = lifeExpectancyRankings[countryName] || "No data available";
                    colorizeRank(lifeExpectancyRank);
                } else if (box.parentElement.id === 'olympicBox') {
                    olympicRank.textContent = olympicRankings[countryName] || "134th";
                    colorizeRank(olympicRank);
                }
                 else if (box.parentElement.id === 'landAreaBox') {
                    landAreaRank.textContent = landAreaRankings[countryName] || "No data available";
                    colorizeRank(landAreaRank);
                } else if (box.parentElement.id === 'populationBox') {
                    populationRank.textContent = populationRankings[countryName] || "No data available";
                    colorizeRank(populationRank);
                } else if (box.parentElement.id === 'averageTemperatureBox') {
                    averageTemperatureRank.textContent = averageTemperatureRankings[countryName] || "No data available";
                    colorizeRank(averageTemperatureRank);
                } else if (box.parentElement.id === 'highestElevationBox') {
                    highestElevationRank.textContent = highestElevationRankings[countryName] || "No data available";
                    colorizeRank(highestElevationRank);
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
            extractNumberFromRank(lifeExpectancyRank.textContent),
            extractNumberFromRank(olympicRank.textContent),
            extractNumberFromRank(landAreaRank.textContent),
            extractNumberFromRank(populationRank.textContent),
            extractNumberFromRank(averageTemperatureRank.textContent),
            extractNumberFromRank(highestElevationRank.textContent),
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
        const revealContainer = document.getElementById('flagRevealContainer');
        const puzzleContainer = document.getElementById('flagPuzzleContainer');
        
        if (revealContainer) {
            revealContainer.classList.remove('active');
            revealContainer.style.display = 'none';
        }
        
        if (puzzleContainer) {
            puzzleContainer.classList.remove('active');
            puzzleContainer.style.display = 'none';
        }
        
        // Show the selected game container
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
            // Initialize the duel game
            if (typeof initFlagDuel === 'function') {
                initFlagDuel();
            }
        } else if (mode === 'reveal' && revealContainer) {
            revealContainer.classList.add('active');
            revealContainer.style.display = 'block';
            // Initialize the reveal game
            if (typeof initFlagReveal === 'function') {
                initFlagReveal();
            }
        } else if (mode === 'puzzle' && puzzleContainer) {
            puzzleContainer.classList.add('active');
            puzzleContainer.style.display = 'block';
            // Initialize the puzzle game
            if (typeof initFlagPuzzle === 'function') {
                initFlagPuzzle();
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
    { name: "Life Expectancy", rankings: lifeExpectancyRankings },
    { name: "Olympic Medals", rankings: olympicRankings },
    { name: "Land Area", rankings: landAreaRankings },
    { name: "HDI", rankings: hdiRankings },
    { name: "Average Temperature", rankings: averageTemperatureRankings },
    { name: "Highest Elevation", rankings: highestElevationRankings },
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
    // Reset game state
    puzzleScore = 0;
    document.getElementById('puzzleScore').textContent = puzzleScore;
    document.getElementById('flagsIdentified').textContent = 0;
    guessedCountries.clear();
    document.getElementById('guessedFlags').innerHTML = '';
    
    // Enable input and skip button
    document.getElementById('countryPuzzleInput').disabled = false;
    document.getElementById('submitPuzzleButton').disabled = false;
    document.getElementById('skipPuzzleButton').disabled = false;
    
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
    
    // Disable input and skip button
    document.getElementById('countryPuzzleInput').disabled = true;
    document.getElementById('submitPuzzleButton').disabled = true;
    document.getElementById('skipPuzzleButton').disabled = true;
    
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
// Function to handle the skip button click
function handleSkipPuzzle() {
    if (!puzzleIsActive) return;
    
    // Create a message showing what the flags were
    const puzzleMessage = document.getElementById('puzzleMessage');
    puzzleMessage.textContent = `Skipped flags: ${mergedFlags.map(f => f.country).join(', ')}`;
    puzzleMessage.className = 'puzzle-message';
    
    // Add a brief timeout before showing the next puzzle
    setTimeout(() => {
        createNewPuzzle();
        
        // Focus the input field after creating a new puzzle
        document.getElementById('countryPuzzleInput').focus();
    }, 1500);
    
    // Temporarily disable the skip button to prevent rapid skipping
    const skipButton = document.getElementById('skipPuzzleButton');
    skipButton.disabled = true;
    
    // Re-enable after new puzzle loads
    setTimeout(() => {
        skipButton.disabled = false;
        
        // Focus the input field again after re-enabling button
        document.getElementById('countryPuzzleInput').focus();
    }, 2000);
}

// Add this at the bottom of your script.js file
document.addEventListener('DOMContentLoaded', function() {
    // Check if we're in the puzzle game mode
    const skipButton = document.getElementById('skipPuzzleButton');
    if (skipButton) {
        skipButton.addEventListener('click', handleSkipPuzzle);
        skipButton.disabled = true; // Start disabled
    }
});
