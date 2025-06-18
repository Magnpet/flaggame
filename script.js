
// Global ranking data objects - will be loaded from external JSON files
let hdiRankings = {};
let olympicRankings = {};
let populationRankings = {};
let landAreaRankings = {};
let lifeExpectancyRankings = {};
let averageTemperatureRankings = {};
let highestElevationRankings = {};
let gdpPerCapitaRankings = {};

// Game initialization flag
let gameDataLoaded = false;

// Load all ranking data from external JSON files
async function loadGameData() {
    try {
        console.log('Loading ranking data from external files...');
        
        const rankingTypes = [
            'hdi', 'olympic', 'population', 'land-area', 
            'life-expectancy', 'average-temperature', 
            'highest-elevation', 'gdp-per-capita'
        ];
        
        const rankings = await dataLoader.loadAllRankings(rankingTypes);
        
        // Assign to global variables
        hdiRankings = rankings.hdiRankings || {};
        olympicRankings = rankings.olympicRankings || {};
        populationRankings = rankings.populationRankings || {};
        landAreaRankings = rankings.landAreaRankings || {};
        lifeExpectancyRankings = rankings.lifeExpectancyRankings || {};
        averageTemperatureRankings = rankings.averageTemperatureRankings || {};
        highestElevationRankings = rankings.highestElevationRankings || {};
        gdpPerCapitaRankings = rankings.gdpPerCapitaRankings || {};
        
        gameDataLoaded = true;
        console.log('All ranking data loaded successfully');
        
        return true;
        
    } catch (error) {
        console.error('Failed to load game data:', error);
        gameDataLoaded = false;
        return false;
    }
}

// Show error message if data loading fails
function showDataLoadError() {
    const errorDiv = document.createElement('div');
    errorDiv.innerHTML = `
        <div style="text-align: center; padding: 20px; background: #ffe6e6; border: 1px solid #ff9999; margin: 20px; border-radius: 5px;">
            <h3>⚠️ Data Loading Error</h3>
            <p>Unable to load game data. Please check your internet connection and refresh the page.</p>
            <p><small>The game may not function correctly without this data.</small></p>
        </div>
    `;
    document.body.insertBefore(errorDiv, document.body.firstChild);
}

// Add this to the top of your script.js file or in a separate troubleshooting section



// Define the category pairs (highest/lowest for each category type)
const categoryPairs = [
    // HDI pair (top left position)
    {
        type: "hdi",
        boxId: "hdiBox", 
        rankElement: "hdiRank",
        rankingsVar: "hdiRankings",
        variants: [
            { id: "hdiHighest", name: "Highest HDI", isHigherBetter: true },
            { id: "hdiLowest", name: "Lowest HDI", isHigherBetter: false }
        ]
    },
    // Olympic pair (second from top, left side)
    {
        type: "olympic",
        boxId: "olympicBox",
        rankElement: "olympicRank",
        rankingsVar: "olympicRankings",
        variants: [
            { id: "olympicHighest", name: "Most Olympic Medals", isHigherBetter: true },
            { id: "olympicLowest", name: "Least Olympic Medals", isHigherBetter: false }
        ]
    },
    // Population pair (third from top, left side)
    {
        type: "population",
        boxId: "populationBox",
        rankElement: "populationRank",
        rankingsVar: "populationRankings",
        variants: [
            { id: "populationHighest", name: "Highest Population", isHigherBetter: true },
            { id: "populationLowest", name: "Lowest Population", isHigherBetter: false }
        ]
    },
    // Elevation pair (bottom left)
    {
        type: "elevation",
        boxId: "highestElevationBox",
        rankElement: "highestElevationRank",
        rankingsVar: "highestElevationRankings",
        variants: [
            { id: "elevationHighest", name: "Highest Elevation", isHigherBetter: true },
            { id: "elevationLowest", name: "Lowest Elevation", isHigherBetter: false }
        ]
    },
    // Life Expectancy pair (top right)
    {
        type: "lifeExpectancy",
        boxId: "lifeExpectancyBox",
        rankElement: "lifeExpectancyRank",
        rankingsVar: "lifeExpectancyRankings",
        variants: [
            { id: "lifeExpectancyHighest", name: "Highest Life Expectancy", isHigherBetter: true },
            { id: "lifeExpectancyLowest", name: "Lowest Life Expectancy", isHigherBetter: false }
        ]
    },
    // Land Area pair (second from top, right side)
    {
        type: "landArea",
        boxId: "landAreaBox",
        rankElement: "landAreaRank",
        rankingsVar: "landAreaRankings",
        variants: [
            { id: "landAreaHighest", name: "Largest Land Area", isHigherBetter: true },
            { id: "landAreaLowest", name: "Smallest Land Area", isHigherBetter: false }
        ]
    },
    // Temperature pair (third from top, right side)
    {
        type: "temperature",
        boxId: "averageTemperatureBox",
        rankElement: "averageTemperatureRank",
        rankingsVar: "averageTemperatureRankings",
        variants: [
            { id: "temperatureHighest", name: "Highest Avg Temperature", isHigherBetter: true },
            { id: "temperatureLowest", name: "Lowest Avg Temperature", isHigherBetter: false }
        ]
    },
    // GDP pair (bottom right)
    {
        type: "gdpPerCapita",
        boxId: "gdpPerCapitaBox",
        rankElement: "gdpPerCapitaRank",
        rankingsVar: "gdpPerCapitaRankings",
        variants: [
            { id: "gdpPerCapitaHighest", name: "Highest GDP per Capita", isHigherBetter: true },
            { id: "gdpPerCapitaLowest", name: "Lowest GDP per Capita", isHigherBetter: false }
        ]
    }
];

// Global variable to store the current game's categories
let currentGameCategories = [];

const flags = [
    'flags_images/andorra.png',
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
    'Canada', 'Central African Republic', 'Chad', 'Chile', 'China', 'Colombia', 'Comoros', 'Republic of the Congo', 'Costa Rica', 'Croatia', 'Cuba',
    'Cyprus', 'Czech Republic', 'Democratic Republic of the Congo', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea',
    'Eritrea', 'Estonia', 'Eswatini', 'Ethiopia', 'Fiji', 'Finland', 'France', 'Gabon', 'Gambia', 'Georgia', 'Germany',
    'Ghana', 'Greece', 'Grenada', 'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hungary', 'Iceland',
    'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Israel', 'Italy', 'Ivory Coast', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan',
    'Kenya', 'Kiribati', 'North Korea', 'South Korea', 'Kosovo', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon',
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

// Create a mapping of aliases to official country names - only for countries that need aliases
const countryAliases = {
    // Common abbreviations
    "usa": "United States",
    "uk": "United Kingdom",
    "uae": "United Arab Emirates",
    
    // Alternative names
    "great britain": "United Kingdom",
    
    // Long names with common shortened versions
    "bosnia": "Bosnia and Herzegovina",
    "saint vincent": "Saint Vincent and the Grenadines",
    "st vincent": "Saint Vincent and the Grenadines",
    "saint kitts": "Saint Kitts and Nevis",
    "st kitts": "Saint Kitts and Nevis",
    "st lucia": "Saint Lucia",
    "dr congo": "Democratic Republic of the Congo",
    "congo": "Republic of the Congo",
    "ivory coast": "Ivory Coast",
    "guinea bissau": "Guinea-Bissau",
    "czechia": "Czech Republic",
    "eswatini": "Eswatini",
    "swaziland": "Eswatini",
    "east timor": "Timor-Leste",
    "micronesia": "Federated States of Micronesia",
    "new zealand": "New Zealand",
};

// Function to get the official country name from an input (which might be an alias)
function getOfficialCountryName(input) {
    // Input validation
    if (typeof input !== 'string') {
        console.warn('getOfficialCountryName received non-string input:', input);
        return null;
    }
    
    // Additional security check for potential XSS
    if (input.includes('<') || input.includes('>') || input.includes('script')) {
        console.warn('Potentially unsafe input detected:', input);
        return null;
    }
    
    // Normalize input: trim whitespace and convert to lowercase
    const normalizedInput = input.trim().toLowerCase();
    
    // Check for empty input
    if (normalizedInput.length === 0) {
        return null;
    }
    
    // Check for excessively long input (prevent potential DoS)
    if (normalizedInput.length > 100) {
        console.warn('Input too long:', normalizedInput.length);
        return null;
    }
    
    // Check if the input is a direct match for an official country
    const directMatch = filteredCountryNames.find(country => 
        country.toLowerCase() === normalizedInput
    );
    
    if (directMatch) {
        return directMatch; // Return the officially cased country name
    }
    
    // Check if the input is an alias
    if (countryAliases[normalizedInput]) {
        return countryAliases[normalizedInput];
    }
    
    // No match found
    return null;
}
  
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

// Session tracking for playtime
let sessionStartTime = null;
let currentSessionPlaytime = 0;

// Function to start a play session
function startPlaySession() {
    if (!sessionStartTime) {
        sessionStartTime = Date.now();
        console.log('Play session started');
        
        // Check time-based achievements when starting any game session
        checkTimeBasedAchievements();
    }
}

// Function to end a play session and update playtime
function endPlaySession() {
    if (sessionStartTime) {
        const sessionDuration = Math.floor((Date.now() - sessionStartTime) / 60000); // Convert to minutes
        if (sessionDuration > 0) {
            currentSessionPlaytime += sessionDuration;
            updateStat('totalPlaytime', sessionDuration);
            console.log(`Session ended. Duration: ${sessionDuration} minutes`);
        }
        sessionStartTime = null;
    }
}

// Function to update current session playtime (called periodically)
function updateSessionPlaytime() {
    if (sessionStartTime) {
        const sessionDuration = Math.floor((Date.now() - sessionStartTime) / 60000);
        currentSessionPlaytime = sessionDuration;
    }
}

function rollFlag() {
    try {
        // Start session tracking when user begins playing
        startPlaySession();
        
        // Prevent multiple rapid clicks
        if (isRolling) return;
        isRolling = true;
        
        const flagBox = document.getElementById('flagBox');
        const countryNameDiv = document.getElementById('countryName');
        const containerDiv = document.querySelector('.container');
        const pickText = document.getElementById('pickText');
        const rollButton = document.querySelector('button');
        
        // Check if all required elements exist
        if (!flagBox || !countryNameDiv || !containerDiv || !pickText || !rollButton) {
            console.error('Required DOM elements not found for rollFlag');
            isRolling = false;
            return;
        }
        
        const rollDuration = 2000;

    // Handle skips
    if (currentRoll !== null && selectedBox === null) {
        skipsRemaining--;
        updateSkipsCounter();
    }

    containerDiv.classList.remove('roll-ended');
    pickText.style.visibility = 'hidden';
    selectedBox = null;

    let startTime = null;
    let randomCountryIndex;
    let animationFrameId;
    
    // Variables to control the "slot machine" feel
    let lastChangeTime = 0;
    let changeInterval = 50; // Start with very fast changes (50ms)

    function animateFlag(timestamp) {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const percentage = Math.min(progress / rollDuration, 1);
        const currentTime = performance.now();

        // Filter available country indices
        const availableCountryIndices = filteredCountryNames
            .map((_, index) => index)
            .filter(index => !rolledCountryIndices.has(index));
        
        // Change interval timing based on progress to simulate slot machine slowing down
        // Start very fast and gradually slow down
        if (percentage < 0.3) {
            changeInterval = 50; // Very fast at start (50ms)
        } else if (percentage < 0.6) {
            changeInterval = 100; // Slowing down (100ms)
        } else if (percentage < 0.8) {
            changeInterval = 200; // Even slower (200ms)
        } else if (percentage < 0.9) {
            changeInterval = 300; // Very slow near end (300ms)
        }
        
        // Only change flags when enough time has passed based on current changeInterval
        if (percentage < 0.9 && currentTime - lastChangeTime > changeInterval) {
            // Select a random index from available indices for the animation
            const randomIndex = Math.floor(Math.random() * availableCountryIndices.length);
            randomCountryIndex = availableCountryIndices[randomIndex];
            
            // Set the flag and country name for animation
            flagBox.style.backgroundImage = `url(${filteredFlags[randomCountryIndex]})`;
            countryNameDiv.textContent = filteredCountryNames[randomCountryIndex];
            
            lastChangeTime = currentTime;
        }
        
        if (percentage < 1) {
            animationFrameId = requestAnimationFrame(animateFlag);
        } else {
            // At the end of the animation, select the final country
            const finalIndex = Math.floor(Math.random() * availableCountryIndices.length);
            randomCountryIndex = availableCountryIndices[finalIndex];
            
            // Set the final flag and country
            flagBox.style.backgroundImage = `url(${filteredFlags[randomCountryIndex]})`;
            countryNameDiv.textContent = filteredCountryNames[randomCountryIndex];
            
            // Complete the animation
            startTime = null;
            containerDiv.classList.add('roll-ended');
            pickText.style.visibility = 'visible';
            rolledCountryIndices.add(randomCountryIndex);
            
            // Save the current roll
            currentRoll = randomCountryIndex;
            
            // Update button text
            if (skipsRemaining > 0) {
                rollButton.textContent = 'Re-roll';
            } else {
                rollButton.disabled = true;
                rollButton.style.opacity = '0.5';
                rollButton.style.cursor = 'not-allowed';
            }
            
            // Allow rolling again
            isRolling = false;
        }
    }

    animationFrameId = requestAnimationFrame(animateFlag);
    } catch (error) {
        console.error('Error in rollFlag function:', error);
        isRolling = false;
    }
}

// Function to shuffle array (Fisher-Yates algorithm)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Function to randomly select one variant from each category pair
function selectRandomCategories() {
    currentGameCategories = categoryPairs.map(pair => {
        // Randomly choose between the highest/lowest variant (50/50 chance)
        const randomIndex = Math.floor(Math.random() * 2);
        const selectedVariant = pair.variants[randomIndex];
        
        // Return the selected variant with additional information from the pair
        return {
            ...selectedVariant,
            boxId: pair.boxId,
            rankElement: pair.rankElement,
            rankingsVar: pair.rankingsVar
        };
    });
    
    return currentGameCategories;
}

// Function to set up the game board with the selected categories
// Function to initialize classic game mode
function initClassicGame() {
    console.log('🎮 INIT: Starting initClassicGame');
    console.log('🎮 INIT: Timestamp:', Date.now());
    console.log('🎮 INIT: gameDataLoaded:', gameDataLoaded);
    console.log('🎮 INIT: populationRankings keys:', Object.keys(populationRankings).length);
    
    // Track that classic game mode was played today
    trackGameModeToday('classic');
    
    // Ensure game data is loaded
    if (!gameDataLoaded || Object.keys(populationRankings).length === 0) {
        console.log('🎮 INIT: Game data not yet loaded for classic mode, waiting...');
        setTimeout(initClassicGame, 500);
        return;
    }
    
    console.log('🎮 INIT: Data is loaded, proceeding with setup');
    
    // Check if classic container is visible with multiple selectors
    const classicContainer = document.querySelector('.container.game-container') || document.querySelector('.container');
    const allContainers = document.querySelectorAll('.container');
    const gameContainers = document.querySelectorAll('.game-container');
    
    console.log('🎮 INIT: Container analysis:');
    console.log('  - Classic container found:', !!classicContainer);
    console.log('  - All .container elements:', allContainers.length);
    console.log('  - All .game-container elements:', gameContainers.length);
    console.log('  - Classic container display:', classicContainer?.style.display);
    console.log('  - Classic container opacity:', classicContainer?.style.opacity);
    console.log('  - Classic container visibility:', classicContainer?.style.visibility);
    
    if (!classicContainer) {
        console.error('🎮 INIT: ERROR - No classic container found during initialization!');
        console.log('🎮 INIT: Available containers:', Array.from(allContainers).map(c => c.className));
        return;
    }
    
    // Verify essential DOM elements exist
    const categoriesDiv = document.querySelector('.categories');
    const flagColumn = document.querySelector('.flag-column');
    const flagBox = document.getElementById('flagBox');
    const countryName = document.getElementById('countryName');
    
    console.log('🎮 INIT: DOM elements check:');
    console.log('  - Categories div:', !!categoriesDiv);
    console.log('  - Flag column:', !!flagColumn);
    console.log('  - Flag box:', !!flagBox);
    console.log('  - Country name:', !!countryName);
    
    // Initialize the game board
    console.log('🎮 INIT: Calling setupGameBoard');
    try {
        setupGameBoard();
        console.log('🎮 INIT: setupGameBoard completed successfully');
    } catch (error) {
        console.error('🎮 INIT: Error in setupGameBoard:', error);
        return;
    }
    
    // Reset any existing game state
    if (typeof resetGame === 'function') {
        console.log('🎮 INIT: Calling resetGame');
        try {
            resetGame();
            console.log('🎮 INIT: resetGame completed successfully');
        } catch (error) {
            console.error('🎮 INIT: Error in resetGame:', error);
        }
    } else {
        console.log('🎮 INIT: resetGame function not found');
    }
    
    // Ensure the roll button is enabled and ready
    const rollButton = document.querySelector('button[onclick="rollFlag()"]') || document.querySelector('button');
    console.log('🎮 INIT: Roll button found:', !!rollButton);
    console.log('🎮 INIT: Roll button text:', rollButton?.textContent);
    console.log('🎮 INIT: Roll button onclick:', rollButton?.onclick);
    
    if (rollButton) {
        rollButton.disabled = false;
        rollButton.style.opacity = '1';
        rollButton.style.cursor = 'pointer';
        rollButton.textContent = 'Roll';
        console.log('🎮 INIT: Roll button configured');
    } else {
        console.error('🎮 INIT: ERROR - Roll button not found!');
    }
    
    // Check category boxes
    const categoryBoxes = document.querySelectorAll('.category-box');
    const categoryElements = document.querySelectorAll('.category');
    console.log('🎮 INIT: Category elements found:');
    console.log('  - Category boxes (.category-box):', categoryBoxes.length);
    console.log('  - Category elements (.category):', categoryElements.length);
    
    // Log current game categories if available
    if (typeof currentGameCategories !== 'undefined') {
        console.log('🎮 INIT: Current game categories:', currentGameCategories.length);
    }
    
    console.log('🎮 INIT: Classic Flag Game initialization complete');
}

function setupGameBoard() {
    console.log('🏗️ SETUP: Starting setupGameBoard');
    
    // Select random variants for each category
    try {
        selectRandomCategories();
        console.log('🏗️ SETUP: selectRandomCategories completed');
    } catch (error) {
        console.error('🏗️ SETUP: Error in selectRandomCategories:', error);
        throw error;
    }
    
    if (!currentGameCategories || currentGameCategories.length === 0) {
        console.error('🏗️ SETUP: ERROR - No currentGameCategories available');
        return;
    }
    
    console.log('🏗️ SETUP: Setting up', currentGameCategories.length, 'categories');
    
    // Update each category box title
    currentGameCategories.forEach((category, index) => {
        console.log(`🏗️ SETUP: Processing category ${index + 1}:`, category.name, category.boxId);
        
        const categoryBox = document.getElementById(category.boxId);
        console.log(`🏗️ SETUP: Category box ${category.boxId} found:`, !!categoryBox);
        
        if (categoryBox) {
            const titleElement = categoryBox.querySelector('h2');
            console.log(`🏗️ SETUP: Title element found for ${category.boxId}:`, !!titleElement);
            
            if (titleElement) {
                titleElement.textContent = category.name;
                console.log(`🏗️ SETUP: Set title to "${category.name}"`);
            }
            
            // Store the category id on the box element for later reference
            categoryBox.dataset.categoryId = category.id;
            
            // Clear any previous rank
            const rankElement = document.getElementById(category.rankElement);
            console.log(`🏗️ SETUP: Rank element ${category.rankElement} found:`, !!rankElement);
            
            if (rankElement) {
                rankElement.textContent = '';
                rankElement.style.color = '#333';
            }
            
            // Clear any previous flag
            const categoryBoxElement = categoryBox.querySelector('.category-box');
            console.log(`🏗️ SETUP: Category box element found:`, !!categoryBoxElement);
            
            if (categoryBoxElement) {
                categoryBoxElement.style.background = 'none';
            }
        } else {
            console.error(`🏗️ SETUP: ERROR - Category box ${category.boxId} not found!`);
        }
    });
    
    console.log('🏗️ SETUP: setupGameBoard completed');
}

// Function to evaluate rank based on whether higher or lower is better
function evaluateRank(country, categoryId) {
    // Find the category in our current game categories
    const category = currentGameCategories.find(cat => cat.id === categoryId);
    
    if (!category) return "No data available";
    
    // Get the rankings data by directly referencing the variable instead of using window[]
    let rankingsData;
    switch (category.rankingsVar) {
        case "hdiRankings":
            rankingsData = hdiRankings;
            break;
        case "olympicRankings":
            rankingsData = olympicRankings;
            break;
        case "populationRankings":
            rankingsData = populationRankings;
            break;
        case "highestElevationRankings":
            rankingsData = highestElevationRankings;
            break;
        case "lifeExpectancyRankings":
            rankingsData = lifeExpectancyRankings;
            break;
        case "landAreaRankings":
            rankingsData = landAreaRankings;
            break;
        case "averageTemperatureRankings":
            rankingsData = averageTemperatureRankings;
            break;
        case "gdpPerCapitaRankings":
            rankingsData = gdpPerCapitaRankings;
            break;
        default:
            return "No data available";
    }
    
    if (!rankingsData) return "No data available";
    
// Get the country's rank
let rank = rankingsData[country];

// Special handling for Olympic rankings - use 134th as fallback
if (!rank && category.rankingsVar === "olympicRankings") {
    // If it's "Least Olympic Medals", they should tie for 1st place
    if (!category.isHigherBetter) {
        return "1st";
    } else {
        rank = "134th";
    }
} else if (!rank) {
    return "No data available";
}
    
    // If this is a "lowest is better" category, invert the displayed rank
    if (!category.isHigherBetter) {
        // Extract the number from the rank string (e.g., "190th" -> 190)
        const rankNum = parseInt(rank);
        if (!isNaN(rankNum)) {
            // Get total number of countries (estimate based on rankings objects)
            let totalCountries;
            switch (category.rankingsVar) {
                case "hdiRankings":
                    totalCountries = 191; // Based on the highest number in hdiRankings
                    break;
                case "olympicRankings":
                    totalCountries = 140; // Based on highest in olympicRankings
                    break;
                case "populationRankings":
                    totalCountries = 195; // Based on highest in populationRankings
                    break;
                case "highestElevationRankings":
                    totalCountries = 193; // Based on highest in highestElevationRankings
                    break;
                case "lifeExpectancyRankings":
                    totalCountries = 192; // Based on highest in lifeExpectancyRankings
                    break;
                case "landAreaRankings":
                    totalCountries = 196; // Based on highest in landAreaRankings
                    break;
                case "averageTemperatureRankings":
                    totalCountries = 194; // Based on highest in averageTemperatureRankings
                    break;
                case "gdpPerCapitaRankings":
                    totalCountries = 194; // Based on highest in gdpPerCapitaRankings
                    break;
                default:
                    totalCountries = 195; // Default estimate
            }
            
            // Calculate the inverted rank
            const invertedRankNum = totalCountries - rankNum + 1;
            
            // Convert back to string with correct suffix
            const suffix = getSuffix(invertedRankNum);
            rank = invertedRankNum + suffix;
        }
    }
    
    return rank;
}

// Helper function to get the correct suffix for a number
function getSuffix(num) {
    if (num >= 11 && num <= 13) {
        return "th";
    }
    
    switch (num % 10) {
        case 1:
            return "st";
        case 2:
            return "nd";
        case 3:
            return "rd";
        default:
            return "th";
    }
}

// Function to get the adjusted rank for average calculation
function getAdjustedRankValue(rankText, categoryId) {
    if (rankText.includes("No data")) return 0;
    
    // Extract the number from strings like "1st", "2nd", "3rd", "4th"
    const rankNum = parseInt(rankText);
    if (isNaN(rankNum)) return 0;
    
    // Find the category to determine if higher or lower is better
    const category = currentGameCategories.find(cat => cat.id === categoryId);
    if (!category) return rankNum;
    
    // If it's a category where lower is better, invert the rank
    if (!category.isHigherBetter) {
        const totalCountries = 195; // Approximate number of countries
        return totalCountries - rankNum + 1; // Invert the rank
    }
    
    return rankNum;
}

document.addEventListener('DOMContentLoaded', async function () {
    // Load game data first
    const dataLoaded = await loadGameData();
    if (!dataLoaded) {
        console.error('Failed to load game data - some features may not work');
        // Show error message to user
        showDataLoadError();
    }
    
    try {
        // Create skips counter display
        const flagContainer = document.querySelector('.flag-container');
        if (flagContainer) {
            const skipsCounter = document.createElement('div');
            skipsCounter.id = 'skipsCounter';
            skipsCounter.className = 'skips-counter';
            skipsCounter.textContent = `Skips: ${skipsRemaining}/${MAX_SKIPS}`;
            
            // Insert after the roll button
            const rollButton = document.querySelector('button');
            if (rollButton && rollButton.parentNode) {
                rollButton.parentNode.insertBefore(skipsCounter, rollButton.nextSibling);
            } else {
                console.error('Roll button not found');
            }
        } else {
            console.error('Flag container not found');
        }

        // Create high score display
        const highScoreDisplay = document.createElement('div');
        highScoreDisplay.id = 'highScoreDisplay';
        highScoreDisplay.className = 'high-score';
        highScoreDisplay.textContent = `High Score: ${getHighScore() || 'None'}`;
        
        // Set up the game board with random categories (after data loads)
        if (gameDataLoaded && Object.keys(populationRankings).length > 0) {
            setupGameBoard();
        } else {
            // Data not loaded yet, classic game will be initialized when switching to it
            console.log('Deferring classic game setup until data is loaded');
        }
        
        // Add high score at the bottom of the page
        const container = document.querySelector('.container');
        if (container) {
            container.appendChild(highScoreDisplay);
        } else {
            console.error('Container not found');
        }
    } catch (error) {
        console.error('Error during DOM initialization:', error);
    }

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
    const rollButton = document.querySelector('button');

    if (rollButton) {
        rollButton.addEventListener('click', function () {
        if (selectedBoxes.size === categoryBoxes.length) {
            console.log('🎯 RESET BUTTON: Game completed, calling window.resetGame. selectedBoxes.size:', selectedBoxes.size);
            window.resetGame();
        } else {
            // Always allow rolling, the rollFlag function will handle skips
            rollFlag();
        }
    });
    }

    categoryBoxes.forEach(box => {
        box.addEventListener('click', function () {
            
            // Only allow clicking if we're not in the middle of rolling
            if (!isRolling && !selectedBoxes.has(box) && currentRoll !== null) {
                selectedBox = box;
                const flagUrl = document.getElementById('flagBox').style.backgroundImage;
                const countryName = document.getElementById('countryName').textContent;
                
                // Remove the border and any background color
                box.style.border = 'none';
                box.style.boxShadow = 'none';
                box.style.background = 'transparent'; // Clear any background first
                
                // Set just the flag image with transparent background
                box.style.backgroundImage = flagUrl;
                box.style.backgroundSize = 'contain';
                box.style.backgroundPosition = 'center';
                box.style.backgroundRepeat = 'no-repeat';
                
                // Remove the pseudo-element gradient 
                box.classList.add('flag-placed');
                
                // Slightly increase the size to compensate for removed border
                box.style.width = '64px';
                box.style.height = '49px';
                
                selectedBoxes.add(box);
                
                // Get the category ID from the parent element
                const categoryBox = box.parentElement;
                const categoryId = categoryBox.dataset.categoryId;
                
                // Find the category
                const category = currentGameCategories.find(cat => cat.id === categoryId);
                
                if (category) {
                    // Get the rank element by ID (more reliable)
                    const rankElement = document.getElementById(category.rankElement);
                    
                    if (rankElement) {
                        // Set the rank text
                        const rankText = evaluateRank(countryName, categoryId);
                        rankElement.textContent = rankText;
                        
                        // Check for lucky number 7 achievement
                        if (rankText === "7th") {
                            playerStats.exactRankSeven = 1;
                            updateAchievementProgress('lucky-number-7', 1);
                        }
                        
                        // Colorize the rank
                        colorizeRank(rankElement, categoryId);
                    }
                }
    
                // Reset the roll button to "Roll" after placing a country
                rollButton.textContent = 'Roll';
                rollButton.disabled = false;
                rollButton.style.opacity = '1';
                rollButton.style.cursor = 'pointer';
                currentRoll = null;
    
                if (selectedBoxes.size === categoryBoxes.length) {
                    console.log('🎯 GAME COMPLETE: Setting button to Reset, selectedBoxes.size:', selectedBoxes.size);
                    rollButton.textContent = 'Reset';
                    displayAverageRanking();
                }
            }
        });
    })

    // Make resetGame globally accessible
    window.resetGame = resetGame;


// Modified function to colorize rank based on whether higher or lower is better
// Modified function to colorize rank based on whether higher or lower is better
function colorizeRank(rankElement, categoryId) {
    if (rankElement.textContent.includes("No data")) return;
    
    // Find the category to determine if higher or lower is better
    const category = currentGameCategories.find(cat => cat.id === categoryId);
    if (!category) return;
    
    // Extract the number from the rank (e.g., "1st" -> 1)
    const rankNum = parseInt(rankElement.textContent);
    
    // Always use the same coloring logic (good = green, medium = orange, bad = red)
    // regardless of whether higher or lower is better
    // For "lowest is better", the rank is already inverted in the evaluateRank function
    if (rankNum <= 30) {
        rankElement.style.color = '#008000'; // Green for good rankings (top 30)
    } else if (rankNum <= 100) {
        rankElement.style.color = '#FFA500'; // Orange for medium rankings
    } else {
        rankElement.style.color = '#FF0000'; // Red for poor rankings
    }
}

    function getHighScore() {
        try {
            return localStorage.getItem('flagGameHighScore');
        } catch (error) {
            console.error('Error reading from localStorage:', error);
            return null;
        }
    }

    function setHighScore(score) {
        try {
            localStorage.setItem('flagGameHighScore', score);
            if (highScoreDisplay) {
                highScoreDisplay.textContent = `High Score: ${score}`;
            }
        } catch (error) {
            console.error('Error writing to localStorage:', error);
        }
    }

    function displayAverageRanking() {
        const ranks = [];
        
        // Loop through each category to get ranks
        currentGameCategories.forEach(category => {
            const rankElement = document.getElementById(category.rankElement);
            
            if (rankElement && rankElement.textContent && !rankElement.textContent.includes("No data")) {
                // Always use the number that's actually displayed to the user
                const rankNum = parseInt(rankElement.textContent);
                if (!isNaN(rankNum)) {
                    ranks.push(rankNum);
                }
            }
        });
    
        if (ranks.length === 0) return; // No valid ranks to calculate
        
        const averageRanking = ranks.reduce((sum, rank) => sum + rank, 0) / ranks.length;
        const formattedAverage = averageRanking.toFixed(2);
    
        document.getElementById('averageRankingText').textContent = `Average Ranking: ${formattedAverage}`;
        
        // Check if this is a new high score (lower is better)
        const currentHighScore = getHighScore();
        
        if (!currentHighScore || parseFloat(formattedAverage) < parseFloat(currentHighScore)) {
            setHighScore(formattedAverage);
            
            // Create and display "New High Score!" message
            const newHighScoreMsg = document.createElement('div');
            newHighScoreMsg.textContent = "New High Score!";
            newHighScoreMsg.className = "new-high-score";
            
            document.getElementById('averageRankingText').appendChild(document.createElement('br'));
            document.getElementById('averageRankingText').appendChild(newHighScoreMsg);
        }
        
        // Update player stats and check milestones
        if (typeof playerStats !== 'undefined' && playerStats) {
            console.log('🎯 GAME COMPLETED: Starting milestone updates');
            
            // Update game stats
            updateStat('gamesPlayed', 1);
            updateStat('classicGamesCompleted', 1);
            
            // Track identified countries from Classic mode
            const currentSelectedBoxes = new Set(selectedBoxes);
            currentSelectedBoxes.forEach(box => {
                const backgroundImage = box.style.backgroundImage;
                if (backgroundImage) {
                    // Extract country code from URL like "url(flags_images/us.png)"
                    const match = backgroundImage.match(/flags_images\/([a-z-]+)\.png/);
                    if (match) {
                        const countryCode = match[1];
                        const flagPath = `flags_images/${countryCode}.png`;
                        const flagIndex = flags.indexOf(flagPath);
                        
                        if (flagIndex !== -1) {
                            const countryName = countryNames[flagIndex];
                            if (countryName && !playerStats.identifiedCountries.includes(countryName)) {
                                playerStats.identifiedCountries.push(countryName);
                            }
                        }
                    }
                }
            });
            
            // Check country achievements after adding new countries
            checkAllCountriesAchievement();
            
            // Update high score in player stats
            if (!playerStats.highScores.flagGame || parseFloat(formattedAverage) < playerStats.highScores.flagGame) {
                playerStats.highScores.flagGame = parseFloat(formattedAverage);
            }
            
            // Check ranking achievements
            console.log(`Checking ranking achievements for average: ${formattedAverage}`);
            updateAchievementProgress('classic-ranking-50', parseFloat(formattedAverage));
            updateAchievementProgress('classic-ranking-20', parseFloat(formattedAverage));
            updateAchievementProgress('global-perfection', parseFloat(formattedAverage));
            
            // End the play session when game completes
            endPlaySession();
            
            // Save data
            saveMilestonesData();
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
    
        const rollButton = document.querySelector('button');
        rollButton.textContent = 'Roll';
        rollButton.disabled = false;
        rollButton.style.opacity = '1';
        rollButton.style.cursor = 'pointer';
    
        const categoryBoxes = document.querySelectorAll('.category-box');
        categoryBoxes.forEach(box => {
            // Remove inline styles completely by setting them to empty string
            box.style = ''; 
            
            // Remove the flag-placed class that disables the gradient
            box.classList.remove('flag-placed');
            
            // If needed, you can explicitly set some key properties back
            // but removing inline styles should let the CSS take over again
            box.style.border = '2px solid var(--neutral)';
            box.style.width = '60px';
            box.style.height = '45px';
        });
        
        // Reset all rank displays
        const rankElements = document.querySelectorAll('.rank');
        rankElements.forEach(element => {
            element.textContent = '';
            element.style.color = '#333'; // Reset color
        });
        
        const averageRankingText = document.getElementById('averageRankingText');
        averageRankingText.textContent = '';
        
        // Set up a new game board with random categories
        setupGameBoard();
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
    
});

// Flag Duel variables
let currentScore = 0;
let duelHighScore = 0;
let leftCountry, rightCountry;
let currentCategory;
let answeredCorrectly = false;
// Function to get categories with current ranking data
function getCategories() {
    return [
        { name: "Population", rankings: populationRankings },
        { name: "Life Expectancy", rankings: lifeExpectancyRankings },
        { name: "Olympic Medals", rankings: olympicRankings },
        { name: "Land Area", rankings: landAreaRankings },
        { name: "HDI", rankings: hdiRankings },
        { name: "Average Temperature", rankings: averageTemperatureRankings },
        { name: "Highest Elevation", rankings: highestElevationRankings },
        { name: "GDP per Capita", rankings: gdpPerCapitaRankings }
    ];
}

// Legacy variable for backward compatibility
let categories = [];

// Function to load high score from localStorage
function getDuelHighScore() {
    try {
        return localStorage.getItem('flagDuelHighScore') || 0;
    } catch (error) {
        console.error('Error reading duel high score from localStorage:', error);
        return 0;
    }
}

// Function to save high score to localStorage
function setDuelHighScore(score) {
    try {
        localStorage.setItem('flagDuelHighScore', score);
        const duelHighScoreElement = document.getElementById('duelHighScore');
        if (duelHighScoreElement) {
            duelHighScoreElement.textContent = `High Score: ${score}`;
        }
    } catch (error) {
        console.error('Error saving duel high score to localStorage:', error);
    }
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
    startPlaySession();
    
    // Track that duel game mode was played today
    trackGameModeToday('duel');
    
    // Check if game data is loaded
    if (!gameDataLoaded || Object.keys(populationRankings).length === 0) {
        console.log('Game data not yet loaded for Flag Duel, waiting...');
        setTimeout(initFlagDuel, 500); // Try again in 500ms
        return;
    }
    
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
    // Check if game data is loaded
    if (!gameDataLoaded || Object.keys(populationRankings).length === 0) {
        console.log('Game data not yet loaded, waiting...');
        setTimeout(setupNewDuel, 500); // Try again in 500ms
        return;
    }
    
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
    const categories = getCategories(); // Get current categories with loaded data
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
        
        // Update player stats and check milestones
        if (typeof playerStats !== 'undefined' && playerStats) {
            // Update games played
            playerStats.gamesPlayed = (playerStats.gamesPlayed || 0) + 1;
            
            // Update duel-specific stats
            playerStats.duelGamesPlayed = (playerStats.duelGamesPlayed || 0) + 1;
            
            // Update high score in player stats
            if (currentScore > (playerStats.highScores.flagDuel || 0)) {
                playerStats.highScores.flagDuel = currentScore;
                playerStats.duelScore = currentScore;
            }
            
            // Save player stats to localStorage
            localStorage.setItem('flagGamePlayerStats', JSON.stringify(playerStats));
            
            // Trigger milestone checks
            if (typeof checkAllMilestones === 'function') {
                checkAllMilestones();
            }
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
    // setupSettingsButton(); // Function not defined, commenting out
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
                classicContainer.style.opacity = '1';
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
                duelContainer.style.opacity = '1';
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
                revealContainer.style.opacity = '1';
                
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
let revealGameTimer = null; // 2-minute countdown timer
let revealTimeRemaining = 120; // 2 minutes in seconds
let isGameActive = false;
let currentDifficulty = 'medium'; // 'easy', 'medium', 'hard'
let scoreMultiplier = 1;
let lastIncorrectGuessTime = 0; // Track time of last incorrect guess
let isProcessingGuess = false; // Prevent multiple simultaneous guess processing

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
    startPlaySession();
    
    // Track that reveal game mode was played today
    trackGameModeToday('reveal');
    
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
    
    // Reset lives and processing flag
    revealLives = 3;
    document.getElementById('revealLives').textContent = revealLives;
    isProcessingGuess = false;
    
    // Remove any existing event listeners to prevent duplicates
    submitGuessButton.replaceWith(submitGuessButton.cloneNode(true));
    const newSubmitButton = document.getElementById('submitGuessButton');
    
    countryGuessInput.replaceWith(countryGuessInput.cloneNode(true));
    const newCountryInput = document.getElementById('countryGuessInput');
    
    // Set up fresh event listeners
    newSubmitButton.addEventListener('click', handleGuessSubmit);
    newCountryInput.addEventListener('keypress', function(e) {
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
    
    // Set up the 2-minute countdown timer
    revealTimeRemaining = 120; // 2 minutes
    document.getElementById('revealTimer').textContent = '2:00';
    if (revealGameTimer) {
        clearInterval(revealGameTimer);
    }
    revealGameTimer = setInterval(updateRevealTimer, 1000);
    
    // Start the first round
    setupNewReveal();
    
    // Focus on the input box for quick entry
    setTimeout(() => {
        countryGuessInput.focus();
    }, 500);
}

// Function to set up a new flag reveal round
function setupNewReveal() {

        // Reset penalty tracking for each new round
        alreadyPenalized = false;
   
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
        isProcessingGuess = false; // Reset processing flag for new round
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
    // Exit early if game is not active
    if (!isGameActive) return;
    
    const puzzlePieces = document.querySelectorAll('.puzzle-piece:not(.revealed)');
    
    if (puzzlePieces.length === 0 || revealedPieces >= totalPieces) {
        // All pieces revealed, end the game
        clearInterval(revealTimer);
        
        // IMPORTANT: Only handle out of time if game is still active
        // This prevents handleOutOfTime from running after handleIncorrectGuess
        if (isGameActive) {
            handleOutOfTime();
        }
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
}

// Function to handle guess submission
function handleGuessSubmit() {
    // Prevent multiple simultaneous processing
    if (!isGameActive || isProcessingGuess) return;
    
    isProcessingGuess = true;
    
    const countryGuessInput = document.getElementById('countryGuessInput');
    const submittedGuess = countryGuessInput.value.trim();
    
    // Don't process empty guesses
    if (!submittedGuess) {
        isProcessingGuess = false;
        return;
    }
    
    const officialCountryName = getOfficialCountryName(submittedGuess);
    const correctAnswer = currentRevealCountry;
    
    // Stop the piece reveal timer (keep countdown timer running)
    clearInterval(revealTimer);
    
    if (officialCountryName === correctAnswer) {
        // Correct answer
        handleCorrectGuess();
    } else {
        // Incorrect answer
        handleIncorrectGuess();
    }
    
    // Reset processing flag after a short delay
    setTimeout(() => {
        isProcessingGuess = false;
    }, 100);
}

// Function to handle correct guess
function handleCorrectGuess() {
    const revealMessage = document.getElementById('revealMessage');
    const countryGuessInput = document.getElementById('countryGuessInput');
    
    // Calculate score: base score + bonus for guessing with fewer pieces revealed
    const baseScore = 50; // Base points for getting it right
    const speedBonus = Math.round((totalPieces - revealedPieces) * 10 * scoreMultiplier); // 10 points per unrevealed piece
    const lifeBonus = revealLives * 20; // 20 points per life remaining
    const scoreGain = baseScore + speedBonus + lifeBonus;
    
    revealScore += scoreGain;
    
    // Update UI with breakdown
    let bonusText = '';
    if (speedBonus > 0) bonusText += ` (+${speedBonus} speed bonus)`;
    if (lifeBonus > 0) bonusText += ` (+${lifeBonus} life bonus)`;
    
    revealMessage.textContent = `Correct! +${scoreGain} points${bonusText}`;
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
    
    // Update player stats and check milestones
    if (typeof playerStats !== 'undefined' && playerStats) {
        // Update games played
        playerStats.gamesPlayed = (playerStats.gamesPlayed || 0) + 1;
        
        // Update reveal-specific stats
        playerStats.revealGamesPlayed = (playerStats.revealGamesPlayed || 0) + 1;
        
        // Update high score in player stats
        if (revealScore > (playerStats.highScores.flagReveal || 0)) {
            playerStats.highScores.flagReveal = revealScore;
            playerStats.revealScore = revealScore;
        }
        
        // Save player stats to localStorage
        localStorage.setItem('flagGamePlayerStats', JSON.stringify(playerStats));
        
        // Trigger milestone checks
        if (typeof checkAllMilestones === 'function') {
            checkAllMilestones();
        }
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
        isGameActive = false;
        handleGameOver();
    } else {
        // Still have lives left
        revealMessage.textContent = `Incorrect. ${revealLives} attempt${revealLives === 1 ? '' : 's'} left.`;
        revealMessage.className = 'reveal-message incorrect';
        
        // Continue revealing pieces
        startRevealTimer();
        
        // Clear the input field
        countryGuessInput.value = '';
        
        // Focus on the input box for quick entry
        countryGuessInput.focus();
    }
}

// Function to handle out of time - FIXED VERSION
function handleOutOfTime() {
    isGameActive = false;
    
    const revealMessage = document.getElementById('revealMessage');
    const countryGuessInput = document.getElementById('countryGuessInput');
    
    // Update UI
    revealMessage.textContent = `Time's up! The country was ${currentRevealCountry}.`;
    revealMessage.className = 'reveal-message incorrect';
    
    // Simply set up a new round, no life reduction
    setTimeout(() => {
        setupNewReveal();
        
        // Focus on the input box for quick entry
        countryGuessInput.focus();
    }, 700);
}

// Function to handle game over
function handleGameOver() {
    isGameActive = false;
    
    // Stop both timers
    if (revealTimer) {
        clearInterval(revealTimer);
    }
    if (revealGameTimer) {
        clearInterval(revealGameTimer);
    }
    
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
        
        // Reset the timer
        revealTimeRemaining = 120; // Reset to 2 minutes
        document.getElementById('revealTimer').textContent = '2:00';
        if (revealGameTimer) {
            clearInterval(revealGameTimer);
        }
        revealGameTimer = setInterval(updateRevealTimer, 1000);
        
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

// Function to update the countdown timer
function updateRevealTimer() {
    if (!isGameActive) return;
    
    // Decrease time
    revealTimeRemaining--;
    
    // Format time as M:SS
    const minutes = Math.floor(revealTimeRemaining / 60);
    const seconds = revealTimeRemaining % 60;
    const formattedTime = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    
    // Update display
    document.getElementById('revealTimer').textContent = formattedTime;
    
    // Check for time up
    if (revealTimeRemaining <= 0) {
        handleRevealTimeUp();
    }
}

// Function to handle when the 2-minute countdown expires
function handleRevealTimeUp() {
    isGameActive = false;
    
    // Stop both timers
    if (revealTimer) {
        clearInterval(revealTimer);
    }
    if (revealGameTimer) {
        clearInterval(revealGameTimer);
    }
    
    const revealMessage = document.getElementById('revealMessage');
    const countryGuessInput = document.getElementById('countryGuessInput');
    const submitGuessButton = document.getElementById('submitGuessButton');
    
    // Update UI
    revealMessage.textContent = `Time's up! Final score: ${revealScore}`;
    revealMessage.className = 'reveal-message incorrect';
    
    // Disable input
    countryGuessInput.disabled = true;
    submitGuessButton.disabled = true;
    
    // Show play again button
    const nextRevealButton = document.getElementById('nextRevealButton');
    nextRevealButton.style.display = 'inline-block';
    nextRevealButton.textContent = 'Play Again';
    
    // Check for new high score
    if (revealScore > revealHighScore) {
        revealHighScore = revealScore;
        setRevealHighScore(revealHighScore);
        displayRevealHighScoreMessage();
    }
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
    startPlaySession();
    
    // Track that puzzle game mode was played today
    trackGameModeToday('puzzle');
    
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
    startPlaySession();
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
    startPlaySession();
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
    const submittedGuess = countryInput.value.trim();
    const officialCountryName = getOfficialCountryName(submittedGuess);
    
    // Clear input
    countryInput.value = '';
    
    // If no valid country name was found
    if (!officialCountryName) {
        puzzleMessage.textContent = 'Not a valid country name. Try again!';
        puzzleMessage.className = 'puzzle-message incorrect-message';
        
        // Apply the animation
        puzzleMessage.classList.add('message-pop');
        
        // Remove the animation class after it completes
        setTimeout(() => {
            puzzleMessage.classList.remove('message-pop');
        }, 300);
        
        return;
    }
    
    // Check if already guessed
    if (Array.from(guessedCountries).some(c => c === officialCountryName)) {
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
        flag.country === officialCountryName
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
    
    // Update player stats and check milestones
    if (typeof playerStats !== 'undefined' && playerStats) {
        console.log('🎯 PUZZLE COMPLETED: Starting milestone updates. Score:', puzzleScore);
        
        // Update game stats
        updateStat('gamesPlayed', 1);
        updateStat('puzzleCompleted', 1);
        
        // Update high score in player stats
        if (puzzleScore > (playerStats.highScores.flagPuzzle || 0)) {
            playerStats.highScores.flagPuzzle = puzzleScore;
            playerStats.puzzleScore = puzzleScore;
        }
        
        // Check puzzle score milestones
        console.log(`Checking puzzle score achievements for score: ${puzzleScore}`);
        updateAchievementProgress('puzzle-score-medium', puzzleScore);
        updateAchievementProgress('puzzle-score-high', puzzleScore);
        
        // End the play session when game completes
        endPlaySession();
        
        // Save data
        saveMilestonesData();
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

// Modal functionality for How to Play
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('howToPlayModal');
    const howToPlayButton = document.getElementById('howToPlayButton');
    const closeButton = document.querySelector('.close-button');
    
    // Open modal when How to Play button is clicked
    howToPlayButton.addEventListener('click', function() {
        modal.style.display = 'block';
    });
    
    // Close modal when X is clicked
    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    // Close modal when clicking outside of it
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});

function switchGameMode(mode) {
    console.log('🔄 SWITCH: switchGameMode called with mode:', mode);
    console.log('🔄 SWITCH: DOM ready state:', document.readyState);
    console.log('🔄 SWITCH: Current timestamp:', Date.now());
    
    currentGameMode = mode;
    
    // Get all game containers with more specific targeting
    const classicContainer = document.querySelector('.container.game-container');
    const classicContainerBackup = document.querySelector('.container');
    const duelContainer = document.getElementById('flagDuelContainer');
    const revealContainer = document.getElementById('flagRevealContainer');
    const puzzleContainer = document.getElementById('flagPuzzleContainer');
    const milestonesContainer = document.getElementById('milestonesContainer');
    
    console.log('🔄 SWITCH: Container detailed check:');
    console.log('  - Classic (specific):', !!classicContainer, classicContainer?.id || 'no-id');
    console.log('  - Classic (backup):', !!classicContainerBackup, classicContainerBackup?.id || 'no-id');
    console.log('  - Duel:', !!duelContainer, duelContainer?.style.display);
    console.log('  - Reveal:', !!revealContainer, revealContainer?.style.display);
    console.log('  - Puzzle:', !!puzzleContainer, puzzleContainer?.style.display);
    console.log('  - Milestones:', !!milestonesContainer, milestonesContainer?.style.display);
    
    // Use the most appropriate classic container
    const finalClassicContainer = classicContainer || classicContainerBackup;
    console.log('🔄 SWITCH: Using classic container:', !!finalClassicContainer);
    
    if (!finalClassicContainer) {
        console.error('🔄 SWITCH: ERROR - No classic container found!');
        console.log('🔄 SWITCH: All containers:', document.querySelectorAll('.container').length);
        console.log('🔄 SWITCH: Game containers:', document.querySelectorAll('.game-container').length);
        return;
    }
    
    // Fade out all containers including milestones
    [finalClassicContainer, duelContainer, revealContainer, puzzleContainer, milestonesContainer].forEach(container => {
        if (container) {
            console.log('🔄 SWITCH: Fading out container:', container.id || container.className);
            container.style.opacity = '0';
        }
    });
    
    // Add a slight delay before changing display property
    setTimeout(() => {
        console.log('🔄 SWITCH: Starting container display changes');
        
        // Hide all game containers with null checking
        if (finalClassicContainer) {
            finalClassicContainer.style.display = 'none';
            console.log('🔄 SWITCH: Classic container hidden');
        }
        if (duelContainer) {
            duelContainer.style.display = 'none';
            console.log('🔄 SWITCH: Duel container hidden');
        }
        
        if (revealContainer) {
            revealContainer.style.display = 'none';
            console.log('🔄 SWITCH: Reveal container hidden');
        }
        
        if (puzzleContainer) {
            puzzleContainer.style.display = 'none';
            console.log('🔄 SWITCH: Puzzle container hidden');
        }
        
        // Hide milestones container when switching to any game mode
        if (milestonesContainer) {
            milestonesContainer.style.display = 'none';
            milestonesContainer.classList.remove('active');
            milestonesContainer.style.visibility = 'hidden';
            console.log('🔄 SWITCH: Milestones container hidden');
        }
        
        // Show and fade in the selected container
        if (mode === 'classic') {
            console.log('🎮 CLASSIC MODE: Starting classic mode switch');
            console.log('🎮 CLASSIC MODE: Final classic container:', !!finalClassicContainer);
            console.log('🎮 CLASSIC MODE: Container class names:', finalClassicContainer?.className);
            console.log('🎮 CLASSIC MODE: Container current display:', finalClassicContainer?.style.display);
            
            if (!finalClassicContainer) {
                console.error('🎮 CLASSIC MODE: ERROR - No classic container available!');
                return;
            }
            
            console.log('🎮 CLASSIC MODE: Setting display to block');
            finalClassicContainer.style.display = 'block';
            finalClassicContainer.style.visibility = 'visible';
            
            setTimeout(() => {
                console.log('🎮 CLASSIC MODE: Setting opacity to 1');
                finalClassicContainer.style.opacity = '1';
                
                // Verify container is now visible
                const computedStyle = window.getComputedStyle(finalClassicContainer);
                console.log('🎮 CLASSIC MODE: Computed display:', computedStyle.display);
                console.log('🎮 CLASSIC MODE: Computed opacity:', computedStyle.opacity);
                console.log('🎮 CLASSIC MODE: Computed visibility:', computedStyle.visibility);
                
                console.log('🎮 CLASSIC MODE: About to call initClassicGame');
                // Ensure classic game is properly initialized
                initClassicGame();
            }, 50);
        } else if (mode === 'duel') {
            duelContainer.style.display = 'block';
            setTimeout(() => {
                duelContainer.style.opacity = '1';
            }, 50);
            
            if (typeof initFlagDuel === 'function') {
                initFlagDuel();
            }
        } else if (mode === 'reveal' && revealContainer) {
            revealContainer.style.display = 'block';
            setTimeout(() => {
                revealContainer.style.opacity = '1';
            }, 50);
            
            if (typeof initFlagReveal === 'function') {
                initFlagReveal();
            }
        } else if (mode === 'puzzle' && puzzleContainer) {
            puzzleContainer.style.display = 'block';
            setTimeout(() => {
                puzzleContainer.style.opacity = '1';
            }, 50);
            
            if (typeof initFlagPuzzle === 'function') {
                initFlagPuzzle();
            }
        }
        
        // After switching modes, re-setup the settings button
        setTimeout(() => {
            if (typeof setupSettingsButton === 'function') {
                setupSettingsButton();
            }
        }, 100);
    }, 300); // Wait for fade out to complete
}
// COMPLETE SETTINGS REBUILD
// Add this at the end of your script.js

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // 1. Find and hide the original settings tab
    const originalSettingsTab = document.getElementById('settingsTab');
    const changeModeTab = document.getElementById('changeModeTab');
    const header = document.querySelector('header');
    
    if (originalSettingsTab) {
      originalSettingsTab.style.display = 'none';
    }
    
    // 2. Create a completely new settings button
    const newSettingsButton = document.createElement('div');
    newSettingsButton.id = 'newSettingsButton';
    newSettingsButton.innerHTML = 'Settings ⚙';
    newSettingsButton.className = 'tab';
    newSettingsButton.style.position = 'absolute';
    newSettingsButton.style.top = '50%';
    newSettingsButton.style.right = '20px';
    newSettingsButton.style.transform = 'translateY(-50%)';
    newSettingsButton.style.backgroundColor = '#003366';
    newSettingsButton.style.color = 'white';
    newSettingsButton.style.padding = '10px 20px';
    newSettingsButton.style.borderRadius = '4px';
    newSettingsButton.style.cursor = 'pointer';
    newSettingsButton.style.zIndex = '10';
    newSettingsButton.style.fontFamily = 'var(--heading-font, Montserrat, sans-serif)';
    newSettingsButton.style.fontSize = '15px';
    newSettingsButton.style.fontWeight = '500';

      // Add the button to the header instead of the body
  if (header) {
    header.appendChild(newSettingsButton);
  } else {
    // Fallback to body if header not found
    document.body.appendChild(newSettingsButton);
  }
    
    // 3. Create a new settings modal
    const newSettingsModal = document.createElement('div');
    newSettingsModal.id = 'newSettingsModal';
    newSettingsModal.style.display = 'none';
    newSettingsModal.style.position = 'fixed';
    newSettingsModal.style.zIndex = '10000';
    newSettingsModal.style.left = '0';
    newSettingsModal.style.top = '0';
    newSettingsModal.style.width = '100%';
    newSettingsModal.style.height = '100%';
    newSettingsModal.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    
    // 4. Create the modal content
    const modalContent = document.createElement('div');
    modalContent.style.backgroundColor = 'white';
    modalContent.style.margin = '15% auto';
    modalContent.style.padding = '20px';
    modalContent.style.border = '1px solid #888';
    modalContent.style.borderRadius = '8px';
    modalContent.style.width = '80%';
    modalContent.style.maxWidth = '600px';
    modalContent.style.position = 'relative';
    
    // 5. Add a heading
    const heading = document.createElement('h2');
    heading.textContent = 'Settings';
    heading.style.marginTop = '0';
    
    // 6. Add a close button
    const closeButton = document.createElement('span');
    closeButton.innerHTML = '&times;';
    closeButton.style.position = 'absolute';
    closeButton.style.top = '10px';
    closeButton.style.right = '20px';
    closeButton.style.color = '#aaa';
    closeButton.style.fontSize = '28px';
    closeButton.style.fontWeight = 'bold';
    closeButton.style.cursor = 'pointer';
    
    // 7. Create settings section
    const settingsSection = document.createElement('div');
    settingsSection.style.marginTop = '20px';
    
    // 8. Create dark mode setting
    const darkModeSetting = document.createElement('div');
    darkModeSetting.style.display = 'flex';
    darkModeSetting.style.alignItems = 'center';
    darkModeSetting.style.justifyContent = 'space-between';
    darkModeSetting.style.padding = '10px';
    darkModeSetting.style.backgroundColor = '#f5f5f5';
    darkModeSetting.style.borderRadius = '8px';
    darkModeSetting.style.marginBottom = '20px';
    
    // 9. Create dark mode label
    const darkModeLabel = document.createElement('span');
    darkModeLabel.textContent = 'Dark Mode:';
    darkModeLabel.style.fontFamily = 'Montserrat, sans-serif';
    darkModeLabel.style.fontWeight = '500';
    darkModeLabel.style.fontSize = '16px';
    
    // 10. Create switch container
    const switchContainer = document.createElement('label');
    switchContainer.style.position = 'relative';
    switchContainer.style.display = 'inline-block';
    switchContainer.style.width = '60px';
    switchContainer.style.height = '34px';
    
    // 11. Create checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = 'newDarkModeToggle';
    checkbox.style.opacity = '0';
    checkbox.style.width = '0';
    checkbox.style.height = '0';
    
    // 12. Create slider
    const slider = document.createElement('span');
    slider.style.position = 'absolute';
    slider.style.cursor = 'pointer';
    slider.style.top = '0';
    slider.style.left = '0';
    slider.style.right = '0';
    slider.style.bottom = '0';
    slider.style.backgroundColor = '#ccc';
    slider.style.transition = '.4s';
    slider.style.borderRadius = '34px';
    
    // 13. Create slider button
    slider.innerHTML = '<span style="position: absolute; content: \'\'; height: 26px; width: 26px; left: 4px; bottom: 4px; background-color: white; transition: .4s; border-radius: 50%;"></span>';
    
    // 14. Assemble the elements
    switchContainer.appendChild(checkbox);
    switchContainer.appendChild(slider);
    
    darkModeSetting.appendChild(darkModeLabel);
    darkModeSetting.appendChild(switchContainer);
    
    settingsSection.appendChild(darkModeSetting);
    
    modalContent.appendChild(closeButton);
    modalContent.appendChild(heading);
    modalContent.appendChild(settingsSection);
    
    newSettingsModal.appendChild(modalContent);
    
    // 15. Add event listeners
    newSettingsButton.addEventListener('click', function() {
      newSettingsModal.style.display = 'block';
    });
    
    closeButton.addEventListener('click', function() {
      newSettingsModal.style.display = 'none';
    });
    
    window.addEventListener('click', function(event) {
      if (event.target === newSettingsModal) {
        newSettingsModal.style.display = 'none';
      }
    });
    
    // 16. Set up dark mode functionality
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    document.body.classList.toggle('dark-mode', isDarkMode);
    checkbox.checked = isDarkMode;
    
    function updateSliderStyle() {
      const sliderButton = slider.querySelector('span');
      if (checkbox.checked) {
        slider.style.backgroundColor = '#0059b3';
        sliderButton.style.transform = 'translateX(26px)';
      } else {
        slider.style.backgroundColor = '#ccc';
        sliderButton.style.transform = 'translateX(0)';
      }
    }
    
    updateSliderStyle();
    
    checkbox.addEventListener('change', function() {
      document.body.classList.toggle('dark-mode', this.checked);
      localStorage.setItem('darkMode', this.checked);
      updateSliderStyle();
    });
    
    // 17. Add the elements to the page
    document.body.appendChild(newSettingsModal);
    
    console.log('New settings button and modal created successfully');
  });

  // Add this code to customize dark mode at the end of your script.js file
// This will enhance the dark mode styles across all game modes

document.addEventListener('DOMContentLoaded', function() {
    // Create a style element to add custom dark mode CSS
    const darkModeStyles = document.createElement('style');
    darkModeStyles.id = 'custom-dark-mode-styles';
    darkModeStyles.textContent = `
      /* Global text color in dark mode */
      body.dark-mode {
        color: white !important;
      }
      
      /* Flag Game - category titles */
      body.dark-mode .category h2 {
        color: white !important;
      }
      
      /* Flag Game - skips counter */
      body.dark-mode .skips-counter {
        color: white !important;
      }
      
      /* Flag Game - rank display */
      body.dark-mode .rank {
        color: white !important;
      }
      
      /* Flag Game - pick text */
      body.dark-mode #pickText {
        color: white !important;
      }
      
      /* Flag Game - country name */
      body.dark-mode .country-name {
        color: white !important;
      }
      
      /* Flag Duel - all text elements */
      body.dark-mode .duel-content h2,
      body.dark-mode .duel-category,
      body.dark-mode .duel-country-name,
      body.dark-mode .duel-instruction,
      body.dark-mode .duel-score,
      body.dark-mode .duel-high-score,
      body.dark-mode .vs-container {
        color: white !important;
      }
      
      /* Flag Reveal - all text elements */
      body.dark-mode .reveal-content h2,
      body.dark-mode .reveal-progress,
      body.dark-mode .reveal-score,
      body.dark-mode .reveal-high-score,
      body.dark-mode .reveal-lives {
        color: white !important;
      }
      
      /* Flag Puzzle - all text elements */
      body.dark-mode .puzzle-content h2,
      body.dark-mode .puzzle-timer,
      body.dark-mode .puzzle-score,
      body.dark-mode .puzzle-high-score,
      body.dark-mode .puzzle-progress {
        color: white !important;
      }
      
      /* Guessed countries boxes in puzzle mode */
      body.dark-mode .guessed-flag {
        background-color: #003366 !important;
        color: white !important;
      }
      
      /* Keep correct/incorrect messages colored appropriately */
      body.dark-mode .correct-message {
        color: #00FF00 !important;
      }
      
      body.dark-mode .incorrect-message {
        color: #FF6666 !important;
      }
      
      /* Settings modal in dark mode */
      body.dark-mode #newSettingsModal .modal-content {
        background-color: #222 !important;
        color: white !important;
        border-color: #444 !important;
      }
      
      body.dark-mode #newSettingsModal h2 {
        color: white !important;
      }
      
      body.dark-mode #newSettingsModal .close-button {
        color: #ddd !important;
      }
      
      body.dark-mode #newSettingsModal .close-button:hover {
        color: white !important;
      }
      
      /* Dark mode setting in settings modal */
      body.dark-mode #newSettingsModal .dark-mode-setting {
        background-color: #333 !important;
      }
      
      body.dark-mode #newSettingsModal .dark-mode-label {
        color: white !important;
      }
      
      /* Apply all other dark mode styles from your original CSS */
      body.dark-mode .high-score {
        color: white !important;
        background-color: rgba(0, 0, 0, 0.3) !important;
      }
    `;
    
    // Add the styles to the document head
    document.head.appendChild(darkModeStyles);
    
    // Modify the settings modal creation to handle dark mode properly
    const updateSettingsModalForDarkMode = function() {
      const settingsModal = document.getElementById('newSettingsModal');
      const isDarkMode = document.body.classList.contains('dark-mode');
      
      if (settingsModal) {
        const modalContent = settingsModal.querySelector('.modal-content');
        const darkModeSetting = settingsModal.querySelector('.dark-mode-setting');
        const darkModeLabel = settingsModal.querySelector('.dark-mode-label');
        
        if (isDarkMode) {
          if (modalContent) {
            modalContent.style.backgroundColor = '#222';
            modalContent.style.color = 'white';
            modalContent.style.borderColor = '#444';
          }
          
          if (darkModeSetting) {
            darkModeSetting.style.backgroundColor = '#333';
          }
          
          if (darkModeLabel) {
            darkModeLabel.style.color = 'white';
          }
          
          const closeButton = settingsModal.querySelector('.close-button');
          if (closeButton) {
            closeButton.style.color = '#ddd';
          }
        } else {
          if (modalContent) {
            modalContent.style.backgroundColor = 'white';
            modalContent.style.color = '#333';
            modalContent.style.borderColor = '#ccc';
          }
          
          if (darkModeSetting) {
            darkModeSetting.style.backgroundColor = '#f5f5f5';
          }
          
          if (darkModeLabel) {
            darkModeLabel.style.color = '#333';
          }
          
          const closeButton = settingsModal.querySelector('.close-button');
          if (closeButton) {
            closeButton.style.color = '#aaa';
          }
        }
      }
    };
    
    // Update dark mode toggle to also update the settings modal appearance
    const darkModeToggle = document.getElementById('newDarkModeToggle');
    if (darkModeToggle) {
      // Get the original event listener
      const originalChangeHandler = darkModeToggle.onchange;
      
      // Replace with enhanced handler
      darkModeToggle.onchange = function() {
        if (this.checked) {
          document.body.classList.add('dark-mode');
          localStorage.setItem('darkMode', 'true');
        } else {
          document.body.classList.remove('dark-mode');
          localStorage.setItem('darkMode', 'false');
        }
        
        // Update the slider appearance
        const slider = this.nextElementSibling;
        const sliderButton = slider.querySelector('span');
        if (this.checked) {
          slider.style.backgroundColor = '#0059b3';
          sliderButton.style.transform = 'translateX(26px)';
        } else {
          slider.style.backgroundColor = '#ccc';
          sliderButton.style.transform = 'translateX(0)';
        }
        
        // Update settings modal appearance
        updateSettingsModalForDarkMode();
      };
    }
    
    // Apply dark mode to settings modal on initial load
    updateSettingsModalForDarkMode();
  });

  // Player stats object
let playerStats = {
    gamesPlayed: 0,
    classicGamesCompleted: 0,
    duelWins: 0,
    duelStreak: 0,
    revealFlagsIdentified: 0,
    puzzleCompleted: 0,
    totalPlaytime: 0, // in minutes
    consecutiveDays: 0,
    lastPlayedDate: null,
    identifiedCountries: [], // Array of country names
    highScores: {
        flagGame: 0, // Best average ranking
        flagDuel: 0, // Highest streak
        flagReveal: 0, // Highest score
        flagPuzzle: 0 // Highest score
    }
};

// Achievement unlocked history
let unlockedAchievements = [];

// Function to initialize milestones system
function initMilestones() {
    // Load saved data from localStorage
    loadMilestonesData();
    
    // Add event listener for the Milestones tab
    document.getElementById('milestonesTab').addEventListener('click', openMilestonesTab);
    
    // Add event listeners for milestone navigation
    const navButtons = document.querySelectorAll('.milestone-nav-btn');
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            navButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            // Filter milestones based on button type
            filterMilestones(this.getAttribute('data-type'));
        });
    });
    
    // Update high scores display
    updateHighScoreDisplay();
    
    // Add milestone checkpoints to different parts of the game
    setupMilestoneCheckpoints();
}

// Function to load milestones data from localStorage
function loadMilestonesData() {
    const savedStats = localStorage.getItem('flagGamePlayerStats');
    if (savedStats) {
        playerStats = JSON.parse(savedStats);
    }
    
    const savedMilestones = localStorage.getItem('flagGameMilestones');
    if (savedMilestones) {
        const savedData = JSON.parse(savedMilestones);
        
        // Update progress for basic milestones
        milestonesData.basicMilestones.forEach((milestone, index) => {
            if (savedData.basicMilestones[index]) {
                milestone.progress = savedData.basicMilestones[index].progress;
                milestone.completed = savedData.basicMilestones[index].completed || false;
            }
        });
        
        // Update progress for advanced achievements
        milestonesData.advancedAchievements.forEach((achievement, index) => {
            if (savedData.advancedAchievements[index]) {
                achievement.progress = savedData.advancedAchievements[index].progress;
                achievement.completed = savedData.advancedAchievements[index].completed || false;
            }
        });
    }
    
    const savedUnlocked = localStorage.getItem('flagGameUnlockedAchievements');
    if (savedUnlocked) {
        unlockedAchievements = JSON.parse(savedUnlocked);
    }
    
    // Check for consecutive days
    checkConsecutiveDays();
    
    // Sync countries identified achievements progress
    checkAllCountriesAchievement();
}

// Removed duplicate saveMilestonesData function - using the one with error handling later in the file

// Function to check consecutive days
function checkConsecutiveDays() {
    const today = new Date().toDateString();
    
    if (playerStats.lastPlayedDate) {
        const lastPlayed = new Date(playerStats.lastPlayedDate);
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        
        if (lastPlayed.toDateString() === yesterday.toDateString()) {
            // Played yesterday, increment streak
            playerStats.consecutiveDays++;
        } else if (lastPlayed.toDateString() !== today) {
            // Didn't play yesterday and hasn't played today yet, reset streak
            playerStats.consecutiveDays = 1;
        }
    } else {
        // First time playing
        playerStats.consecutiveDays = 1;
    }
    
    playerStats.lastPlayedDate = today;
    saveMilestonesData();
}

// Function to check time-based achievements
function checkTimeBasedAchievements() {
    const currentHour = new Date().getHours();
    
    // Night Owl (midnight to 6am: 0-5)
    if (currentHour >= 0 && currentHour < 6) {
        playerStats.playInNightTime = 1;
        updateAchievementProgress('night-owl', 1);
    }
    
    // Early Bird (7am to 10am: 7-9)  
    if (currentHour >= 7 && currentHour <= 10) {
        playerStats.playInMorningTime = 1;
        updateAchievementProgress('early-bird', 1);
    }
}

// Function to open the Milestones tab
function openMilestonesTab() {
    console.log("Opening milestones tab...");
    
    // Hide all game containers
    document.querySelectorAll('.game-container').forEach(container => {
        container.classList.remove('active');
        container.style.display = 'none';
        container.style.opacity = '0'; // Ensure opacity is reset
    });
    
    // Show milestones container
    const milestonesContainer = document.getElementById('milestonesContainer');
    if (!milestonesContainer) {
        console.error("Milestones container not found!");
        return;
    }
    
    // Make sure it's fully visible
    milestonesContainer.style.display = 'block';
    milestonesContainer.style.visibility = 'visible'; // Add explicit visibility
    milestonesContainer.style.position = 'relative'; // Normal position in document flow
    
    // Add a short delay before adding the active class for animation
    setTimeout(() => {
        milestonesContainer.style.opacity = '1';
        milestonesContainer.classList.add('active');
    }, 50);
    
    // Update display
    console.log("Calling renderMilestones()...");
    renderMilestones();
    
    console.log("Calling updateHighScoreDisplay()...");
    updateHighScoreDisplay();
    
    console.log("Milestones tab opened successfully");
}

// Function to filter milestones based on type (all, completed, in-progress)
function filterMilestones(type) {
    const basicItems = document.querySelectorAll('#basicMilestones .milestone-item');
    const advancedItems = document.querySelectorAll('#advancedAchievements .milestone-item');
    
    const allItems = [...basicItems, ...advancedItems];
    
    allItems.forEach(item => {
        const isCompleted = item.classList.contains('completed');
        
        if (type === 'all') {
            item.style.display = 'block';
        } else if (type === 'completed' && isCompleted) {
            item.style.display = 'block';
        } else if (type === 'in-progress' && !isCompleted) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Function to render all milestones
function renderMilestones() {
    const basicContainer = document.getElementById('basicMilestones');
    const advancedContainer = document.getElementById('advancedAchievements');
    
    // Clear containers
    basicContainer.innerHTML = '';
    advancedContainer.innerHTML = '';
    
    // Render basic milestones
    milestonesData.basicMilestones.forEach(milestone => {
        basicContainer.appendChild(createMilestoneElement(milestone));
    });
    
    // Render advanced achievements
    milestonesData.advancedAchievements.forEach(achievement => {
        advancedContainer.appendChild(createMilestoneElement(achievement));
    });
}

// Function to update high score display
function updateHighScoreDisplay() {
    document.getElementById('flagGameHighScore').textContent = playerStats.highScores.flagGame.toFixed(2);
    document.getElementById('flagDuelHighScore').textContent = playerStats.highScores.flagDuel;
    document.getElementById('flagRevealHighScore').textContent = playerStats.highScores.flagReveal;
    document.getElementById('flagPuzzleHighScore').textContent = playerStats.highScores.flagPuzzle;
}

// Set up periodic playtime tracking
setInterval(() => {
    updateSessionPlaytime();
    // Update milestone progress for playtime every 5 minutes if there's an active session
    if (sessionStartTime && currentSessionPlaytime > 0) {
        const totalMinutes = playerStats.totalPlaytime + currentSessionPlaytime;
        updateStat('totalPlaytime', 0); // This will update milestones with current total
    }
}, 300000); // Every 5 minutes

// Handle page visibility changes for session tracking
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // Page is hidden, end current session
        endPlaySession();
    } else {
        // Page is visible again, potentially start new session if user interacts
        // Session will start when user actually plays
    }
});

// Handle page unload to end session
window.addEventListener('beforeunload', () => {
    endPlaySession();
});

// Function to set up milestone checkpoints throughout the game
function setupMilestoneCheckpoints() {
    // Wait for resetGame function to be available
    const waitForResetGame = () => {
        if (typeof window.resetGame === 'function') {
            console.log('Found resetGame function, setting up milestone checkpoints');
            
            // Classic game completion checkpoint
            const originalResetGame = window.resetGame;
            window.resetGame = function() {
                // Capture the selectedBoxes size BEFORE the original function clears it
                const completedBoxes = selectedBoxes ? selectedBoxes.size : 0;
                console.log('🎯 HOOKED RESETGAME: Function called, selectedBoxes size:', completedBoxes);
                console.log('🎯 HOOKED RESETGAME: Call stack:', new Error().stack);
                
                // This is called when the game is being reset
                // Milestone logic has been moved to displayAverageRanking() where it belongs
                console.log('Game reset called - no milestone processing needed here');
        
                // Call original reset function
                originalResetGame();
            };
            
            return true; // Successfully set up
        } else {
            console.log('resetGame function not available yet, will retry...');
            return false; // Not ready yet
        }
    };
    
    // Try to set up the checkpoint immediately
    if (!waitForResetGame()) {
        // If not available, poll for it
        console.log('Setting up polling for resetGame function...');
        const pollInterval = setInterval(() => {
            if (waitForResetGame()) {
                console.log('Successfully set up resetGame checkpoint after polling');
                clearInterval(pollInterval);
            }
        }, 100); // Check every 100ms
        
        // Give up after 10 seconds
        setTimeout(() => {
            clearInterval(pollInterval);
            console.warn('Gave up waiting for resetGame function after 10 seconds');
        }, 10000);
    }
    
    // Flag Duel checkpoints
    const originalHandleFlagClick = handleFlagClick;
    window.handleFlagClick = function(side) {
        // Capture current streak before potentially losing
        const currentStreak = currentScore;
        
        // Call original function
        originalHandleFlagClick(side);
        
        // After the function ran, check if answered correctly
        if (answeredCorrectly) {
            // Increment duel wins
            updateStat('duelWins', 1);
            
            // Track identified countries from Flag Duel mode
            if (leftCountry && !playerStats.identifiedCountries.includes(leftCountry)) {
                playerStats.identifiedCountries.push(leftCountry);
            }
            if (rightCountry && !playerStats.identifiedCountries.includes(rightCountry)) {
                playerStats.identifiedCountries.push(rightCountry);
            }
            
            // Check country achievements after adding new countries
            checkAllCountriesAchievement();
            
            // Check for new best streak
            if (currentScore > playerStats.highScores.flagDuel) {
                playerStats.highScores.flagDuel = currentScore;
            }
            
            // Check streak achievements
            if (currentScore >= 15) {
                updateAchievementProgress('duel-streak-15', 15);
            }
            
            if (currentScore >= 25) {
                updateAchievementProgress('duel-streak-25', 25);
            }
            
            // Check for high score achievement
            if (currentScore >= 100) {
                updateAchievementProgress('century-club', 100);
            }
        } else {
            // Reset streak (the game already does this)
        }
        
        // Save data
        saveMilestonesData();
    };
    
    // Flag Reveal checkpoints
    const originalHandleCorrectGuess = handleCorrectGuess;
    window.handleCorrectGuess = function() {
        // We identified a flag
        updateStat('revealFlagsIdentified', 1);
        
        // Add country to identified list
        const countryName = currentRevealCountry;
        if (countryName && !playerStats.identifiedCountries.includes(countryName)) {
            playerStats.identifiedCountries.push(countryName);
            checkAllCountriesAchievement();
        }
        
        // Check for quick identification
        if (revealedPieces <= 3) {
            updateAchievementProgress('eagle-eye', 1);
        }
        
        // Check for high score
        if (revealScore > playerStats.highScores.flagReveal) {
            playerStats.highScores.flagReveal = revealScore;
        }
        
        // Check point milestones for Reveal mode
        if (revealScore >= 200) {
            updateAchievementProgress('reveal-score-medium', revealScore);
        }
        if (revealScore >= 500) {
            updateAchievementProgress('reveal-score-high', revealScore);
        }
        
        // Call original function
        originalHandleCorrectGuess();
        
        // Save data
        saveMilestonesData();
    };
    
    // Flag Puzzle checkpoints
    const originalHandlePuzzleGuess = handlePuzzleGuess;
    window.handlePuzzleGuess = function() {
        // Call original function
        originalHandlePuzzleGuess();
        
        // Check if a correct guess was made by checking if guessedCountries size increased
        const currentGuessedSize = guessedCountries.size;
        
        // We'll check after the function call if the size increased
        setTimeout(() => {
            if (guessedCountries.size > currentGuessedSize) {
                // A flag was correctly identified
                // Add country to identified list
                const latestGuess = Array.from(guessedCountries).pop();
                if (latestGuess && !playerStats.identifiedCountries.includes(latestGuess)) {
                    playerStats.identifiedCountries.push(latestGuess);
                    checkAllCountriesAchievement();
                }
                
                // Check high score
                if (puzzleScore > playerStats.highScores.flagPuzzle) {
                    playerStats.highScores.flagPuzzle = puzzleScore;
                }
                
                // Check point milestones for Puzzle mode
                if (puzzleScore >= 500) {
                    updateAchievementProgress('puzzle-score-medium', puzzleScore);
                }
                if (puzzleScore >= 1000) {
                    updateAchievementProgress('puzzle-score-high', puzzleScore);
                }
            }
            
            // If all flags in a puzzle are guessed, increment completed puzzles
            if (guessedCountries.size === mergedFlags.length) {
                updateStat('puzzleCompleted', 1);
            }
            
            // Save data
            saveMilestonesData();
        }, 100);
    };
    
    // Check all game modes achievement
    const gameModesPlayed = new Set();
    
    // Original mode switchers
    document.querySelectorAll('.dropdown-item').forEach(item => {
        item.addEventListener('click', function() {
            const mode = this.getAttribute('data-mode');
            gameModesPlayed.add(mode);
            
            // Check if all game modes have been played
            if (gameModesPlayed.size >= 4) {
                updateAchievementProgress('flag-aficionado', 4);
            }
        });
    });
}

// Function to update a player stat and check relevant milestones
function updateStat(statName, increment) {
    console.log(`Updating stat: ${statName} by ${increment}`);
    console.log(`Current ${statName} before update:`, playerStats[statName]);
    
    // Make sure playerStats is loaded from localStorage first
    const savedStats = localStorage.getItem('flagGamePlayerStats');
    if (savedStats) {
        try {
            const parsedStats = JSON.parse(savedStats);
            // Only update if the saved version is newer
            if (JSON.stringify(parsedStats) !== JSON.stringify(playerStats)) {
                console.log('Loading updated stats from localStorage');
                playerStats = parsedStats;
            }
        } catch (e) {
            console.error("Error parsing player stats:", e);
        }
    }
    
    // Ensure the stat exists before incrementing
    if (typeof playerStats[statName] === 'undefined') {
        console.warn(`Stat ${statName} doesn't exist, initializing to 0`);
        playerStats[statName] = 0;
    }
    
    // Increment the stat
    playerStats[statName] += increment;
    console.log(`New value for ${statName}: ${playerStats[statName]}`);
    
    // Update milestone progress
    let updated = false;
    
    // Check basic milestones
    milestonesData.basicMilestones.forEach(milestone => {
        if (milestone.requirement.type === statName) {
            // Update progress
            milestone.progress = playerStats[statName];
            console.log(`Updated milestone ${milestone.title} progress to ${milestone.progress}`);
            
            // Check if completed
            checkMilestone(milestone);
            updated = true;
        }
    });
    
    // Check advanced achievements
    milestonesData.advancedAchievements.forEach(achievement => {
        if (achievement.requirement.type === statName) {
            // Update progress
            achievement.progress = playerStats[statName];
            console.log(`Updated achievement ${achievement.title} progress to ${achievement.progress}`);
            
            // Check if completed
            checkMilestone(achievement);
            updated = true;
        }
    });
    
    if (!updated) {
        console.log(`No milestones found with requirement type ${statName}`);
    }
    
    // Save the updated data
    saveMilestonesData();
    
    // Refresh UI if milestones tab is active
    const milestonesContainer = document.querySelector('.milestones-container');
    if (milestonesContainer && (milestonesContainer.style.display === 'block' || milestonesContainer.style.display === '')) {
        console.log('Refreshing milestone UI after stat update');
        renderMilestones();
    }
    
    return playerStats[statName]; // Return the new value
}

// Function to update achievement progress
function updateAchievementProgress(achievementId, amount) {
    // Find the achievement
    let achievement = milestonesData.basicMilestones.find(m => m.id === achievementId);
    if (!achievement) {
        achievement = milestonesData.advancedAchievements.find(m => m.id === achievementId);
    }
    
    if (achievement) {
        console.log(`Updating achievement ${achievement.title} progress from ${achievement.progress} to ${amount}`);
        // Update progress
        achievement.progress = amount;
        
        // Use checkMilestone for all types of achievements for consistency
        checkMilestone(achievement);
        
        saveMilestonesData();
        
        // Refresh UI if milestones tab is active
        const milestonesContainer = document.querySelector('.milestones-container');
        if (milestonesContainer && (milestonesContainer.style.display === 'block' || milestonesContainer.style.display === '')) {
            console.log('Refreshing milestone UI after achievement update');
            renderMilestones();
        }
    } else {
        console.warn(`Achievement with ID ${achievementId} not found`);
    }
}

// Function to check a milestone/achievement
function checkMilestone(milestone) {
    if (milestone.completed) {
        console.log(`Milestone ${milestone.title} already completed`);
        return; // Already completed
    }
    
    const requirement = milestone.requirement.count;
    const progress = milestone.progress || 0;
    
    console.log(`Checking milestone ${milestone.id}: ${progress}/${requirement}`);
    
    let completed = false;
    
    if (milestone.requirement.compare === 'less') {
        // For "less than" requirements
        if (progress > 0 && progress < requirement) {
            completed = true;
        }
    } else {
        // For standard "greater than or equal" requirements
        if (progress >= requirement) {
            completed = true;
        }
    }
    
    if (completed) {
        console.log(`🎉 Milestone completed: ${milestone.title}`);
        milestone.completed = true;
        
        // Add to unlocked achievements if not already there
        if (!unlockedAchievements.includes(milestone.id)) {
            unlockedAchievements.push(milestone.id);
        }
        
        // Show notification with slight delay to ensure proper stacking
        setTimeout(() => {
            showAchievementNotification(milestone);
        }, unlockedAchievements.length * 100); // Stagger notifications by 100ms
        
        // Save immediately
        saveMilestonesData();
        
        // Refresh UI if milestones tab is active
        const milestonesContainer = document.querySelector('.milestones-container');
        if (milestonesContainer && (milestonesContainer.style.display === 'block' || milestonesContainer.style.display === '')) {
            console.log('Refreshing milestone UI after achievement update');
            renderMilestones();
        }
    }
}

// Function to track game modes played today
function trackGameModeToday(gameMode) {
    const today = new Date().toDateString();
    
    // Reset game modes if it's a new day
    if (playerStats.lastGameModeDate !== today) {
        playerStats.gameModesToday = [];
        playerStats.lastGameModeDate = today;
    }
    
    // Add game mode if not already played today
    if (!playerStats.gameModesToday.includes(gameMode)) {
        playerStats.gameModesToday.push(gameMode);
        playerStats.allGameModesInDay = playerStats.gameModesToday.length;
        
        // Check flag aficionado achievement (all 4 game modes in one day)
        if (playerStats.allGameModesInDay >= 4) {
            updateAchievementProgress('flag-aficionado', playerStats.allGameModesInDay);
        }
    }
}

// Function to check all countries achievement
function checkAllCountriesAchievement() {
    // Count unique countries identified
    const uniqueCountries = new Set(playerStats.identifiedCountries);
    
    // Update the allCountriesIdentified stat
    playerStats.allCountriesIdentified = uniqueCountries.size;
    
    // Update countries identified milestones - ALWAYS update progress for all
    const countryMilestones = [
        { id: 'countries-identified-25', count: 25 },
        { id: 'countries-identified-50', count: 50 },
        { id: 'countries-identified-100', count: 100 },
        { id: 'countries-identified-150', count: 150 },
        { id: 'countries-identified-195', count: 195 }
    ];
    
    countryMilestones.forEach(milestone => {
        // Always update progress, not just when milestone is reached
        updateAchievementProgress(milestone.id, uniqueCountries.size);
    });
    
    // Check for "Around the World" achievement
    updateAchievementProgress('around-the-world', uniqueCountries.size);
}

// Add this function to manually check all milestones (useful for debugging)
function checkAllMilestones() {
    console.log("Checking all milestones against current stats...");
    
    // First update player stats from localStorage
    const savedStats = localStorage.getItem('flagGamePlayerStats');
    if (savedStats) {
        try {
            playerStats = JSON.parse(savedStats);
            console.log("Loaded player stats:", playerStats);
        } catch (e) {
            console.error("Error parsing player stats:", e);
            return;
        }
    } else {
        console.warn("No saved player stats found");
        return;
    }
    
    // Check each basic milestone
    milestonesData.basicMilestones.forEach(milestone => {
        const statName = milestone.requirement.type;
        const statValue = playerStats[statName] || 0;
        
        // Update the progress
        milestone.progress = statValue;
        
        // Check if completed
        checkMilestone(milestone);
    });
    
    // Check each advanced achievement
    milestonesData.advancedAchievements.forEach(achievement => {
        const statName = achievement.requirement.type;
        const statValue = playerStats[statName] || 0;
        
        // Update the progress
        achievement.progress = statValue;
        
        // Check if completed
        checkMilestone(achievement);
    });
    
    // Save updated milestones
    saveMilestonesData();
    
    // Refresh the display
    renderMilestones();
}

// Function to check treasure hunter achievement
function checkTreasureHunterAchievement() {
    // Count completed achievements
    let completedCount = 0;
    
    milestonesData.basicMilestones.forEach(milestone => {
        if (milestone.completed) completedCount++;
    });
    
    milestonesData.advancedAchievements.forEach(achievement => {
        if (achievement.completed) completedCount++;
    });
    
    // Update treasure hunter progress
    updateAchievementProgress('treasure-hunter', completedCount);
}

// Function to show achievement notification
// Array to track active notifications for stacking
let activeNotifications = [];

function showAchievementNotification(achievement) {
    console.log("Achievement unlocked:", achievement.title);
    
    // Create a new notification element
    const notification = document.createElement('div');
    notification.className = 'achievement-notification';
    notification.innerHTML = `
        <div class="notification-content">
            <div class="notification-icon">${achievement.icon}</div>
            <div class="notification-text">
                <h3>Achievement Unlocked!</h3>
                <p>${achievement.title}</p>
            </div>
        </div>
    `;
    
    // Add to active notifications array
    activeNotifications.push(notification);
    
    // Position the notification based on existing notifications
    updateNotificationPositions();
    
    // Add to DOM
    document.body.appendChild(notification);
    
    // Trigger show animation
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    // Hide after 3 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            // Remove from DOM and active notifications array
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
            const index = activeNotifications.indexOf(notification);
            if (index > -1) {
                activeNotifications.splice(index, 1);
                // Reposition remaining notifications
                updateNotificationPositions();
            }
        }, 500);
    }, 3000);
}

// Function to update positions of all active notifications
function updateNotificationPositions() {
    const baseBottom = 30; // Base distance from bottom
    const notificationHeight = 120; // Height including padding (80px min-height + 40px padding)
    const spacing = 10; // Spacing between notifications
    
    activeNotifications.forEach((notification, index) => {
        // Newer notifications (higher index) appear above older ones
        const bottomPosition = baseBottom + (index * (notificationHeight + spacing));
        notification.style.bottom = bottomPosition + 'px';
        // Set z-index so newer notifications appear on top
        notification.style.zIndex = 1000 + index;
    });
}

// Test function to demonstrate multiple notifications (for debugging purposes)
function testMultipleNotifications() {
    const testAchievements = [
        { title: "First Achievement", icon: "🏆" },
        { title: "Second Achievement", icon: "🎯" },
        { title: "Third Achievement", icon: "⭐" }
    ];
    
    testAchievements.forEach((achievement, index) => {
        setTimeout(() => {
            showAchievementNotification(achievement);
        }, index * 500); // Delay each notification by 500ms
    });
}

// Initialize milestones on page load
document.addEventListener('DOMContentLoaded', function() {
    // Wait a bit to ensure the rest of the page has loaded
    setTimeout(initMilestones, 500);
});


// Add a direct click handler for testing
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        // Force initialization
        console.log("Force initializing milestones system...");
        
        // Ensure player stats has default high scores
        if (!playerStats) {
            playerStats = {
                gamesPlayed: 0,
                classicGamesCompleted: 0,
                duelWins: 0,
                duelStreak: 0,
                revealFlagsIdentified: 0,
                puzzleCompleted: 0,
                totalPlaytime: 0,
                consecutiveDays: 0,
                lastPlayedDate: null,
                identifiedCountries: [],
                highScores: {
                    flagGame: 0,
                    flagDuel: 0,
                    flagReveal: 0,
                    flagPuzzle: 0
                }
            };
        }
        
        
        // Override the high score retrieval to sync with milestones system
        const originalGetHighScore = getHighScore || function() { return localStorage.getItem('flagGameHighScore'); };
        window.getHighScore = function() {
            const score = originalGetHighScore();
            if (score && playerStats) {
                // Sync the high score with the milestones system
                playerStats.highScores.flagGame = parseFloat(score);
                saveMilestonesData();
            }
            return score;
        };
        
        // Override setHighScore to update milestones
        const originalSetHighScore = setHighScore || function(score) { localStorage.setItem('flagGameHighScore', score); };
        window.setHighScore = function(score) {
            originalSetHighScore(score);
            
            // Update milestones high score
            if (playerStats) {
                playerStats.highScores.flagGame = parseFloat(score);
                saveMilestonesData();
                
                // Update display if milestones tab is active
                if (document.getElementById('milestonesContainer').classList.contains('active')) {
                    updateHighScoreDisplay();
                }
            }
        };
    }, 1000);
});

// Add this to initialize high scores on page load
document.addEventListener('DOMContentLoaded', function() {
    // Initialize high scores display with values from localStorage
    setTimeout(() => {
        // Check for high scores in localStorage
        const flagGameHS = localStorage.getItem('flagGameHighScore');
        const flagDuelHS = localStorage.getItem('flagDuelHighScore');  
        const flagRevealHS = localStorage.getItem('flagRevealHighScore');
        const flagPuzzleHS = localStorage.getItem('flagPuzzleHighScore');
        
        console.log("Loading high scores:", {
            flagGame: flagGameHS,
            flagDuel: flagDuelHS,
            flagReveal: flagRevealHS,
            flagPuzzle: flagPuzzleHS
        });
        
        // Make sure playerStats exists
        if (typeof playerStats !== 'object') {
            window.playerStats = {
                highScores: {
                    flagGame: 0,
                    flagDuel: 0,
                    flagReveal: 0,
                    flagPuzzle: 0
                }
            };
        }
        
        // Update playerStats with localStorage values
        if (flagGameHS) playerStats.highScores.flagGame = parseFloat(flagGameHS);
        if (flagDuelHS) playerStats.highScores.flagDuel = parseInt(flagDuelHS);
        if (flagRevealHS) playerStats.highScores.flagReveal = parseInt(flagRevealHS);
        if (flagPuzzleHS) playerStats.highScores.flagPuzzle = parseInt(flagPuzzleHS);
        
        // Make sure the high score elements exist before trying to update them
        if (document.getElementById('flagGameHighScore')) {
            document.getElementById('flagGameHighScore').textContent = 
                playerStats.highScores.flagGame ? playerStats.highScores.flagGame.toFixed(2) : "0.00";
        }
        
        if (document.getElementById('flagDuelHighScore')) {
            document.getElementById('flagDuelHighScore').textContent = 
                playerStats.highScores.flagDuel || "0";
        }
        
        if (document.getElementById('flagRevealHighScore')) {
            document.getElementById('flagRevealHighScore').textContent = 
                playerStats.highScores.flagReveal || "0";
        }
        
        if (document.getElementById('flagPuzzleHighScore')) {
            document.getElementById('flagPuzzleHighScore').textContent = 
                playerStats.highScores.flagPuzzle || "0";
        }
        
        console.log("High scores initialized");
    }, 1500);
});

// Function reference fixes (ADD THIS FIRST)
if (typeof getHighScore !== 'function') {
    window.getHighScore = function() {
        return localStorage.getItem('flagGameHighScore');
    };
}

if (typeof setHighScore !== 'function') {
    window.setHighScore = function(score) {
        localStorage.setItem('flagGameHighScore', score);
        document.getElementById('highScoreDisplay').textContent = `High Score: ${score}`;
    };
}

// IMPORTANT: Add this code as a single block at the end of your script.js file

// Define milestonesData first before any references to it

window.milestonesData = {
    // Basic milestones that track progress (35 total)
    basicMilestones: [
        // Games Played Milestones (5)
        {
            id: 'games-played-1',
            title: 'First Steps',
            description: 'Play your first game',
            icon: '🎮',
            rarity: 'common',
            requirement: { type: 'gamesPlayed', count: 1 },
            progress: 0
        },
        {
            id: 'games-played-10',
            title: 'Getting Started',
            description: 'Play 10 games',
            icon: '🎮',
            rarity: 'common',
            requirement: { type: 'gamesPlayed', count: 10 },
            progress: 0
        },
        {
            id: 'games-played-50',
            title: 'Regular Player',
            description: 'Play 50 games',
            icon: '🎮',
            rarity: 'uncommon',
            requirement: { type: 'gamesPlayed', count: 50 },
            progress: 0
        },
        {
            id: 'games-played-100',
            title: 'Flag Enthusiast',
            description: 'Play 100 games',
            icon: '🎮',
            rarity: 'rare',
            requirement: { type: 'gamesPlayed', count: 100 },
            progress: 0
        },
        {
            id: 'games-played-500',
            title: 'Flag Expert',
            description: 'Play 500 games',
            icon: '🎮',
            rarity: 'epic',
            requirement: { type: 'gamesPlayed', count: 500 },
            progress: 0
        },
        
        // Countries Identified Milestones (5)
        {
            id: 'countries-identified-25',
            title: 'Flag Spotter',
            description: 'Identify 25 different countries',
            icon: '🔍',
            rarity: 'common',
            requirement: { type: 'countriesIdentified', count: 25 },
            progress: 0
        },
        {
            id: 'countries-identified-50',
            title: 'Flag Collector',
            description: 'Identify 50 different countries',
            icon: '🔍',
            rarity: 'uncommon',
            requirement: { type: 'countriesIdentified', count: 50 },
            progress: 0
        },
        {
            id: 'countries-identified-100',
            title: 'World Traveler',
            description: 'Identify 100 different countries',
            icon: '🔍',
            rarity: 'rare',
            requirement: { type: 'countriesIdentified', count: 100 },
            progress: 0
        },
        {
            id: 'countries-identified-150',
            title: 'Global Explorer',
            description: 'Identify 150 different countries',
            icon: '🔍',
            rarity: 'epic',
            requirement: { type: 'countriesIdentified', count: 150 },
            progress: 0
        },
        {
            id: 'countries-identified-195',
            title: 'Complete Collection',
            description: 'Identify all 195 countries',
            icon: '🔍',
            rarity: 'legendary',
            requirement: { type: 'countriesIdentified', count: 195 },
            progress: 0
        },
        
        // Classic Game Mode Milestones (5)
        {
            id: 'classic-games-5',
            title: 'Classic Starter',
            description: 'Complete 5 Classic games',
            icon: '🎯',
            rarity: 'common',
            requirement: { type: 'classicGamesCompleted', count: 5 },
            progress: 0
        },
        {
            id: 'classic-games-25',
            title: 'Classic Player',
            description: 'Complete 25 Classic games',
            icon: '🎯',
            rarity: 'uncommon',
            requirement: { type: 'classicGamesCompleted', count: 25 },
            progress: 0
        },
        {
            id: 'classic-games-100',
            title: 'Classic Master',
            description: 'Complete 100 Classic games',
            icon: '🎯',
            rarity: 'rare',
            requirement: { type: 'classicGamesCompleted', count: 100 },
            progress: 0
        },
        {
            id: 'classic-ranking-50',
            title: 'Above Average Ranker',
            description: 'Achieve average ranking below 50',
            icon: '📊',
            rarity: 'uncommon',
            requirement: { type: 'classicAverageRanking', count: 50, compare: 'less' },
            progress: 0
        },
        {
            id: 'classic-ranking-20',
            title: 'Elite Ranker',
            description: 'Achieve average ranking below 20',
            icon: '📊',
            rarity: 'epic',
            requirement: { type: 'classicAverageRanking', count: 20, compare: 'less' },
            progress: 0
        },
        
        // Duel Game Mode Milestones (5)
        {
            id: 'duel-wins-5',
            title: 'Duel Beginner',
            description: 'Win 5 duels',
            icon: '⚔️',
            rarity: 'common',
            requirement: { type: 'duelWins', count: 5 },
            progress: 0
        },
        {
            id: 'duel-wins-25',
            title: 'Duel Fighter',
            description: 'Win 25 duels',
            icon: '⚔️',
            rarity: 'uncommon',
            requirement: { type: 'duelWins', count: 25 },
            progress: 0
        },
        {
            id: 'duel-wins-100',
            title: 'Duel Champion',
            description: 'Win 100 duels',
            icon: '⚔️',
            rarity: 'rare',
            requirement: { type: 'duelWins', count: 100 },
            progress: 0
        },
        {
            id: 'duel-streak-15',
            title: 'Winning Streak',
            description: 'Win 15 duels in a row',
            icon: '🔥',
            rarity: 'rare',
            requirement: { type: 'duelStreak', count: 15 },
            progress: 0
        },
        {
            id: 'duel-streak-25',
            title: 'Undefeated Champion',
            description: 'Win 25 duels in a row',
            icon: '🔥',
            rarity: 'legendary',
            requirement: { type: 'duelStreak', count: 25 },
            progress: 0
        },
        
        // Reveal Game Mode Milestones (5)
        {
            id: 'reveal-flags-5',
            title: 'Reveal Novice',
            description: 'Identify 5 flags in Reveal mode',
            icon: '🧩',
            rarity: 'common',
            requirement: { type: 'revealFlagsIdentified', count: 5 },
            progress: 0
        },
        {
            id: 'reveal-flags-25',
            title: 'Reveal Pro',
            description: 'Identify 25 flags in Reveal mode',
            icon: '🧩',
            rarity: 'uncommon',
            requirement: { type: 'revealFlagsIdentified', count: 25 },
            progress: 0
        },
        {
            id: 'reveal-flags-100',
            title: 'Reveal Expert',
            description: 'Identify 100 flags in Reveal mode',
            icon: '🧩',
            rarity: 'rare',
            requirement: { type: 'revealFlagsIdentified', count: 100 },
            progress: 0
        },
        {
            id: 'reveal-score-medium',
            title: 'Point Collector',
            description: 'Reach 2000 points in Reveal mode',
            icon: '🏆',
            rarity: 'uncommon',
            requirement: { type: 'revealScore', count: 2000 },
            progress: 0
        },
        {
            id: 'reveal-score-high',
            title: 'Point Hoarder',
            description: 'Reach 3800 points in Reveal mode',
            icon: '🏆',
            rarity: 'legendary',
            requirement: { type: 'revealScore', count: 3800 },
            progress: 0
        },
        
        // Puzzle Game Mode Milestones (5)
        {
            id: 'puzzle-completed-5',
            title: 'Puzzle Beginner',
            description: 'Complete 5 puzzles',
            icon: '🧩',
            rarity: 'common',
            requirement: { type: 'puzzleCompleted', count: 5 },
            progress: 0
        },
        {
            id: 'puzzle-completed-25',
            title: 'Puzzle Solver',
            description: 'Complete 25 puzzles',
            icon: '🧩',
            rarity: 'uncommon',
            requirement: { type: 'puzzleCompleted', count: 25 },
            progress: 0
        },
        {
            id: 'puzzle-completed-100',
            title: 'Puzzle Master',
            description: 'Complete 100 puzzles',
            icon: '🧩',
            rarity: 'epic',
            requirement: { type: 'puzzleCompleted', count: 100 },
            progress: 0
        },
        {
            id: 'puzzle-score-medium',
            title: 'Puzzle Scorer',
            description: 'Reach 600 points in Puzzle mode',
            icon: '🏆',
            rarity: 'uncommon',
            requirement: { type: 'puzzleScore', count: 600 },
            progress: 0
        },
        {
            id: 'puzzle-score-high',
            title: 'Puzzle Champion',
            description: 'Reach 1200 points in Puzzle mode',
            icon: '🏆',
            rarity: 'legendary',
            requirement: { type: 'puzzleScore', count: 1200 },
            progress: 0
        },
        
        // Time-Based Milestones (5)
        {
            id: 'consecutive-days-3',
            title: 'Daily Habit',
            description: 'Play on 3 consecutive days',
            icon: '📅',
            rarity: 'common',
            requirement: { type: 'consecutiveDays', count: 3 },
            progress: 0
        },
        {
            id: 'consecutive-days-7',
            title: 'Weekly Dedication',
            description: 'Play on 7 consecutive days',
            icon: '📅',
            rarity: 'uncommon',
            requirement: { type: 'consecutiveDays', count: 7 },
            progress: 0
        },
        {
            id: 'consecutive-days-30',
            title: 'Monthly Commitment',
            description: 'Play on 30 consecutive days',
            icon: '📅',
            rarity: 'legendary',
            requirement: { type: 'consecutiveDays', count: 30 },
            progress: 0
        },
        {
            id: 'total-playtime-1',
            title: 'Just Warming Up',
            description: 'Total play time: 1 hour',
            icon: '⏱️',
            rarity: 'common',
            requirement: { type: 'totalPlaytime', count: 60 }, // minutes
            progress: 0
        },
        {
            id: 'total-playtime-10',
            title: 'Dedicated Player',
            description: 'Total play time: 10 hours',
            icon: '⏱️',
            rarity: 'epic',
            requirement: { type: 'totalPlaytime', count: 600 }, // minutes
            progress: 0
        }
    ],
    
    // Advanced achievements that are more challenging to complete (16 total)
    advancedAchievements: [
        // Classic Flag Game Achievements (4)
        {
            id: 'global-perfection',
            title: 'Global Perfection',
            description: 'Achieve an average ranking below 10.0 in a complete game',
            icon: '🌍',
            rarity: 'legendary',
            requirement: { type: 'classicAverageRanking', count: 10, compare: 'less' },
            progress: 0,
            completed: false
        },
        {
            id: 'continental-collector',
            title: 'Continental Collector',
            description: 'Identify flags from 100 different countries',
            icon: '🗺️',
            rarity: 'rare',
            requirement: { type: 'allCountriesIdentified', count: 100 },
            progress: 0,
            completed: false
        },
        {
            id: 'lucky-number-7',
            title: 'Lucky Number 7',
            description: 'Place a country with exactly 7th place ranking in any category',
            icon: '7️⃣',
            rarity: 'epic',
            requirement: { type: 'exactRankSeven', count: 1 },
            progress: 0,
            completed: false
        },
        {
            id: 'top-of-the-world',
            title: 'Top of the World',
            description: 'Achieve an average ranking below 5 in classic games',
            icon: '🏔️',
            rarity: 'rare',
            requirement: { type: 'classicAverageRanking', count: 5, compare: 'less' },
            progress: 0,
            completed: false
        },
        
        // Flag Duel Achievements (4)
        {
            id: 'mind-reader',
            title: 'Mind Reader',
            description: 'Win 50 duels total',
            icon: '🧠',
            rarity: 'epic',
            requirement: { type: 'duelWins', count: 50 },
            progress: 0,
            completed: false
        },
        {
            id: 'david-vs-goliath',
            title: 'David vs Goliath',
            description: 'Win 200 duels total',
            icon: '📏',
            rarity: 'rare',
            requirement: { type: 'duelWins', count: 200 },
            progress: 0,
            completed: false
        },
        {
            id: 'category-master',
            title: 'Category Master',
            description: 'Achieve a duel streak of 50 wins',
            icon: '📊',
            rarity: 'epic',
            requirement: { type: 'duelStreak', count: 50 },
            progress: 0,
            completed: false
        },
        {
            id: 'century-club',
            title: 'Century Club',
            description: 'Win 100 duels total',
            icon: '💯',
            rarity: 'legendary',
            requirement: { type: 'duelWins', count: 100 },
            progress: 0,
            completed: false
        },
        
        // Flag Reveal Achievements (3)
        {
            id: 'eagle-eye',
            title: 'Eagle Eye',
            description: 'Identify 200 flags in Reveal mode',
            icon: '🦅',
            rarity: 'epic',
            requirement: { type: 'revealFlagsIdentified', count: 200 },
            progress: 0,
            completed: false
        },
        {
            id: 'flawless-reveal',
            title: 'Flawless Reveal',
            description: 'Reach 4000 points in Reveal mode',
            icon: '✨',
            rarity: 'legendary',
            requirement: { type: 'revealScore', count: 4000 },
            progress: 0,
            completed: false
        },
        
        // Flag Puzzle Achievements (1)
        {
            id: 'puzzle-wizard',
            title: 'Puzzle Wizard',
            description: 'Complete 200 puzzles',
            icon: '🧙',
            rarity: 'legendary',
            requirement: { type: 'puzzleCompleted', count: 200 },
            progress: 0,
            completed: false
        },
        
        // Special Achievements (5)
        {
            id: 'around-the-world',
            title: 'Around the World',
            description: 'Identify all country flags at least once across any game mode',
            icon: '🌎',
            rarity: 'legendary',
            requirement: { type: 'allCountriesIdentified', count: 195 },
            progress: 0,
            completed: false
        },
        {
            id: 'flag-aficionado',
            title: 'Flag Aficionado',
            description: 'Play all game modes in a single day',
            icon: '🎭',
            rarity: 'epic',
            requirement: { type: 'allGameModesInDay', count: 4 },
            progress: 0,
            completed: false
        },
        {
            id: 'night-owl',
            title: 'Night Owl',
            description: 'Play the game between midnight and 6am',
            icon: '🦉',
            rarity: 'uncommon',
            requirement: { type: 'playInNightTime', count: 1 },
            progress: 0,
            completed: false
        },
        {
            id: 'early-bird',
            title: 'Early Bird',
            description: 'Play the game between 7am and 10am',
            icon: '🐦',
            rarity: 'uncommon',
            requirement: { type: 'playInMorningTime', count: 1 },
            progress: 0,
            completed: false
        },
        {
            id: 'treasure-hunter',
            title: 'Treasure Hunter',
            description: 'Discover all achievements in the game',
            icon: '💎',
            rarity: 'epic',
            requirement: { type: 'achievementsUnlocked', count: 51 }, // Total number of achievements
            progress: 0,
            completed: false
        }
    ]
};

// Define player stats
window.playerStats = {
    gamesPlayed: 0,
    classicGamesCompleted: 0,
    classicAverageRanking: 0, // Average ranking in classic games
    duelWins: 0,
    duelStreak: 0,
    duelScore: 0, // Highest duel score
    revealFlagsIdentified: 0,
    revealScore: 0, // Highest reveal score
    puzzleCompleted: 0,
    puzzleScore: 0, // Highest puzzle score
    totalPlaytime: 0, // in minutes
    consecutiveDays: 0,
    lastPlayedDate: null,
    identifiedCountries: [], // Array of country names
    allCountriesIdentified: 0, // Count of unique countries identified
    allGameModesInDay: 0, // Count of different game modes played today
    gameModesToday: [], // Array of game modes played today
    lastGameModeDate: null, // Date when game modes were last tracked
    exactRankSeven: 0, // For lucky number 7 achievement
    rankOne: 0, // For top of the world achievement
    allRankingsBelow: 0, // For perfectly balanced achievement
    playInNightTime: 0, // For night owl achievement (midnight to 6am)
    playInMorningTime: 0, // For early bird achievement (7am to 10am)
    highScores: {
        flagGame: 0, // Best average ranking
        flagDuel: 0, // Highest streak
        flagReveal: 0, // Highest score
        flagPuzzle: 0 // Highest score
    }
};

// Define unlockedAchievements
window.unlockedAchievements = [];

// Simple milestone element creator function
function createMilestoneElement(milestone) {
    const milestoneElement = document.createElement('div');
    milestoneElement.className = 'milestone-item';
    
    if (milestone.completed) {
        milestoneElement.classList.add('completed');
    } else {
        milestoneElement.classList.add('incomplete');
    }
    
    const iconContainer = document.createElement('div');
    iconContainer.className = `milestone-icon-container rarity-${milestone.rarity}`;
    iconContainer.textContent = milestone.icon;
    
    const title = document.createElement('div');
    title.className = 'milestone-title';
    title.textContent = milestone.title;
    
    const description = document.createElement('div');
    description.className = 'milestone-description';
    description.textContent = milestone.description;
    
    const progress = document.createElement('div');
    progress.className = 'milestone-progress';
    
    const progressBar = document.createElement('div');
    progressBar.className = 'milestone-progress-bar';
    
    // Calculate progress percentage
    const requirement = milestone.requirement.count;
    const currentProgress = milestone.progress || 0;
    let percentage = 0;
    
    if (milestone.completed) {
        // For completed milestones, show full progress bar
        percentage = 100;
    } else {
        // For incomplete milestones, calculate based on requirement type
        if (milestone.requirement.compare === 'less') {
            // For "less than" requirements, show progress towards the goal
            if (currentProgress > 0 && currentProgress <= requirement) {
                // Show how close we are to the target (inverted)
                percentage = Math.max(0, Math.min(((requirement - currentProgress) / requirement) * 100, 100));
            }
        } else {
            // For standard "greater than or equal" requirements
            percentage = Math.min((currentProgress / requirement) * 100, 100);
        }
    }
    
    progressBar.style.width = `${percentage}%`;
    
    progress.appendChild(progressBar);
    
    milestoneElement.appendChild(iconContainer);
    milestoneElement.appendChild(title);
    milestoneElement.appendChild(description);
    milestoneElement.appendChild(progress);
    
    // Add completed checkmark for completed milestones
    if (milestone.completed) {
        const completedIcon = document.createElement('div');
        completedIcon.className = 'milestone-completed';
        completedIcon.textContent = '✓';
        milestoneElement.appendChild(completedIcon);
    }
    
    return milestoneElement;
}

// Save milestones data
function saveMilestonesData() {
    console.log("Saving milestones data...");
    console.log("Current playerStats:", JSON.stringify(playerStats, null, 2));
    
    try {
        localStorage.setItem('flagGamePlayerStats', JSON.stringify(playerStats));
        localStorage.setItem('flagGameMilestones', JSON.stringify(milestonesData));
        localStorage.setItem('flagGameUnlockedAchievements', JSON.stringify(unlockedAchievements));
        console.log("Data saved successfully");
        
        // Verify the save worked
        const verification = localStorage.getItem('flagGamePlayerStats');
        if (verification) {
            const parsed = JSON.parse(verification);
            console.log("Verified saved data:", {
                classicGamesCompleted: parsed.classicGamesCompleted,
                gamesPlayed: parsed.gamesPlayed,
                totalPlaytime: parsed.totalPlaytime
            });
        }
    } catch (e) {
        console.error("Error saving milestones data:", e);
    }
}

// Render milestones
function renderMilestones() {
    console.log("Rendering milestones...");
    
    // Check if milestonesData exists
    if (!milestonesData) {
        console.error("milestonesData is not defined!");
        return;
    }
    
    // Get containers
    const basicContainer = document.getElementById('basicMilestones');
    const advancedContainer = document.getElementById('advancedAchievements');
    
    if (!basicContainer || !advancedContainer) {
        console.error("Milestone containers not found!");
        return;
    }
    
    // Clear containers
    basicContainer.innerHTML = '';
    advancedContainer.innerHTML = '';
    
    console.log("Rendering basic milestones:", milestonesData.basicMilestones.length);
    
    // Render basic milestones
    milestonesData.basicMilestones.forEach(milestone => {
        basicContainer.appendChild(createMilestoneElement(milestone));
    });
    
    console.log("Rendering advanced achievements:", milestonesData.advancedAchievements.length);
    
    // Render advanced achievements
    milestonesData.advancedAchievements.forEach(achievement => {
        advancedContainer.appendChild(createMilestoneElement(achievement));
    });
    
    console.log("Milestones rendered successfully");
}

// Update high score display
function updateHighScoreDisplay() {
    console.log("Updating high score display...");
    
    // Get high scores from localStorage
    const flagGameHS = localStorage.getItem('flagGameHighScore');
    const flagDuelHS = localStorage.getItem('flagDuelHighScore');  
    const flagRevealHS = localStorage.getItem('flagRevealHighScore');
    const flagPuzzleHS = localStorage.getItem('flagPuzzleHighScore');
    
    // Update playerStats with localStorage values
    if (flagGameHS) playerStats.highScores.flagGame = parseFloat(flagGameHS);
    if (flagDuelHS) playerStats.highScores.flagDuel = parseInt(flagDuelHS);
    if (flagRevealHS) playerStats.highScores.flagReveal = parseInt(flagRevealHS);
    if (flagPuzzleHS) playerStats.highScores.flagPuzzle = parseInt(flagPuzzleHS);
    
    // Update display
    if (document.getElementById('flagGameHighScore')) {
        document.getElementById('flagGameHighScore').textContent = 
            playerStats.highScores.flagGame ? playerStats.highScores.flagGame.toFixed(2) : "0.00";
    }
    
    if (document.getElementById('flagDuelHighScore')) {
        document.getElementById('flagDuelHighScore').textContent = 
            playerStats.highScores.flagDuel || "0";
    }
    
    if (document.getElementById('flagRevealHighScore')) {
        document.getElementById('flagRevealHighScore').textContent = 
            playerStats.highScores.flagReveal || "0";
    }
    
    if (document.getElementById('flagPuzzleHighScore')) {
        document.getElementById('flagPuzzleHighScore').textContent = 
            playerStats.highScores.flagPuzzle || "0";
    }
    
    console.log("High score display updated");
}



// This duplicate hook has been removed - the main hook is in setupMilestoneCheckpoints()

// Add this JavaScript code to attach the click handler
// DEBUG BUTTONS REMOVED - Uncomment below to add back for testing:
/*
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        const checkButton = document.getElementById('checkMilestonesButton');
        if (checkButton) {
            checkButton.addEventListener('click', function() {
                console.log("Manual milestone check requested");
                checkAllMilestones();
            });
        }
        
        // Add reset button functionality
        const resetButton = document.getElementById('resetMilestonesButton');
        if (resetButton) {
            resetButton.addEventListener('click', function() {
                if (confirm('⚠️ This will reset ALL milestone progress and stats. Are you sure? This is for testing purposes only.')) {
                    resetMilestoneProgress();
                }
            });
        }
    }, 1000);
});
*/

// DEBUG FUNCTION REMOVED - Uncomment below to add back for testing:
/*
// Function to reset milestone progress for testing
function resetMilestoneProgress() {
    console.log('Resetting milestone progress...');
    
    // Clear localStorage
    localStorage.removeItem('flagGamePlayerStats');
    localStorage.removeItem('flagGameMilestones');
    localStorage.removeItem('flagGameHighScore');
    localStorage.removeItem('flagDuelHighScore');
    localStorage.removeItem('flagRevealHighScore');
    localStorage.removeItem('flagPuzzleHighScore');
    
    // Reset global variables
    if (typeof playerStats !== 'undefined') {
        playerStats = {
            gamesPlayed: 0,
            classicGamesCompleted: 0,
            duelWins: 0,
            duelStreak: 0,
            revealFlagsIdentified: 0,
            puzzleCompleted: 0,
            totalPlaytime: 0,
            consecutiveDays: 0,
            lastPlayedDate: null,
            identifiedCountries: [],
            highScores: {
                flagGame: 0,
                flagDuel: 0,
                flagReveal: 0,
                flagPuzzle: 0
            }
        };
    }
    
    // Reset milestones data
    if (typeof milestonesData !== 'undefined') {
        milestonesData.basicMilestones.forEach(milestone => {
            milestone.progress = 0;
            milestone.completed = false;
        });
        milestonesData.advancedAchievements.forEach(achievement => {
            achievement.progress = 0;
            achievement.completed = false;
        });
    }
    
    // Clear unlocked achievements
    if (typeof unlockedAchievements !== 'undefined') {
        unlockedAchievements.length = 0;
    }
    
    console.log('Milestone progress reset complete!');
    
    // Reload the page to ensure everything is fresh
    alert('✅ Milestone progress reset! Page will reload to apply changes.');
    location.reload();
}
*/

// Add this specific listener to handle dropdown clicks
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        // Add event listeners to dropdown items
        const gameModeBtns = document.querySelectorAll('.dropdown-item');
        if (gameModeBtns.length > 0) {
            gameModeBtns.forEach(btn => {
                btn.addEventListener('click', function() {
                    // Only hide milestones when switching to actual game modes
                    // Don't interfere when clicking milestones tab
                    const mode = this.getAttribute('data-mode');
                    if (mode) {
                        const milestonesContainer = document.getElementById('milestonesContainer');
                        if (milestonesContainer) {
                            milestonesContainer.style.display = 'none';
                            milestonesContainer.classList.remove('active');
                        }
                    }
                });
            });
            console.log("Added milestones hiding to game mode buttons");
        } else {
            console.warn("No game mode buttons found");
        }
    }, 1000);
});

