import React from 'react';
import styles from './App.module.css';
import AutoComplete from './AutoComplete';

const rawOptions = [
  { displayValue: 'Afghanistan', value: 'AF' },
  { displayValue: 'Åland Islands', value: 'AX' },
  { displayValue: 'Albania', value: 'AL' },
  { displayValue: 'Algeria', value: 'DZ' },
  { displayValue: 'American Samoa', value: 'AS' },
  { displayValue: 'AndorrA', value: 'AD' },
  { displayValue: 'Angola', value: 'AO' },
  { displayValue: 'Anguilla', value: 'AI' },
  { displayValue: 'Antarctica', value: 'AQ' },
  { displayValue: 'Antigua and Barbuda', value: 'AG' },
  { displayValue: 'Argentina', value: 'AR' },
  { displayValue: 'Armenia', value: 'AM' },
  { displayValue: 'Aruba', value: 'AW' },
  { displayValue: 'Australia', value: 'AU' },
  { displayValue: 'Austria', value: 'AT' },
  { displayValue: 'Azerbaijan', value: 'AZ' },
  { displayValue: 'Bahamas', value: 'BS' },
  { displayValue: 'Bahrain', value: 'BH' },
  { displayValue: 'Bangladesh', value: 'BD' },
  { displayValue: 'Barbados', value: 'BB' },
  { displayValue: 'Belarus', value: 'BY' },
  { displayValue: 'Belgium', value: 'BE' },
  { displayValue: 'Belize', value: 'BZ' },
  { displayValue: 'Benin', value: 'BJ' },
  { displayValue: 'Bermuda', value: 'BM' },
  { displayValue: 'Bhutan', value: 'BT' },
  { displayValue: 'Bolivia', value: 'BO' },
  { displayValue: 'Bosnia and Herzegovina', value: 'BA' },
  { displayValue: 'Botswana', value: 'BW' },
  { displayValue: 'Bouvet Island', value: 'BV' },
  { displayValue: 'Brazil', value: 'BR' },
  { displayValue: 'British Indian Ocean Territory', value: 'IO' },
  { displayValue: 'Brunei Darussalam', value: 'BN' },
  { displayValue: 'Bulgaria', value: 'BG' },
  { displayValue: 'Burkina Faso', value: 'BF' },
  { displayValue: 'Burundi', value: 'BI' },
  { displayValue: 'Cambodia', value: 'KH' },
  { displayValue: 'Cameroon', value: 'CM' },
  { displayValue: 'Canada', value: 'CA' },
  { displayValue: 'Cape Verde', value: 'CV' },
  { displayValue: 'Cayman Islands', value: 'KY' },
  { displayValue: 'Central African Republic', value: 'CF' },
  { displayValue: 'Chad', value: 'TD' },
  { displayValue: 'Chile', value: 'CL' },
  { displayValue: 'China', value: 'CN' },
  { displayValue: 'Christmas Island', value: 'CX' },
  { displayValue: 'Cocos (Keeling) Islands', value: 'CC' },
  { displayValue: 'Colombia', value: 'CO' },
  { displayValue: 'Comoros', value: 'KM' },
  { displayValue: 'Congo', value: 'CG' },
  { displayValue: 'Congo, The Democratic Republic of the', value: 'CD' },
  { displayValue: 'Cook Islands', value: 'CK' },
  { displayValue: 'Costa Rica', value: 'CR' },
  { displayValue: "Cote D'Ivoire", value: 'CI' },
  { displayValue: 'Croatia', value: 'HR' },
  { displayValue: 'Cuba', value: 'CU' },
  { displayValue: 'Cyprus', value: 'CY' },
  { displayValue: 'Czech Republic', value: 'CZ' },
  { displayValue: 'Denmark', value: 'DK' },
  { displayValue: 'Djibouti', value: 'DJ' },
  { displayValue: 'Dominica', value: 'DM' },
  { displayValue: 'Dominican Republic', value: 'DO' },
  { displayValue: 'Ecuador', value: 'EC' },
  { displayValue: 'Egypt', value: 'EG' },
  { displayValue: 'El Salvador', value: 'SV' },
  { displayValue: 'Equatorial Guinea', value: 'GQ' },
  { displayValue: 'Eritrea', value: 'ER' },
  { displayValue: 'Estonia', value: 'EE' },
  { displayValue: 'Ethiopia', value: 'ET' },
  { displayValue: 'Falkland Islands (Malvinas)', value: 'FK' },
  { displayValue: 'Faroe Islands', value: 'FO' },
  { displayValue: 'Fiji', value: 'FJ' },
  { displayValue: 'Finland', value: 'FI' },
  { displayValue: 'France', value: 'FR' },
  { displayValue: 'French Guiana', value: 'GF' },
  { displayValue: 'French Polynesia', value: 'PF' },
  { displayValue: 'French Southern Territories', value: 'TF' },
  { displayValue: 'Gabon', value: 'GA' },
  { displayValue: 'Gambia', value: 'GM' },
  { displayValue: 'Georgia', value: 'GE' },
  { displayValue: 'Germany', value: 'DE' },
  { displayValue: 'Ghana', value: 'GH' },
  { displayValue: 'Gibraltar', value: 'GI' },
  { displayValue: 'Greece', value: 'GR' },
  { displayValue: 'Greenland', value: 'GL' },
  { displayValue: 'Grenada', value: 'GD' },
  { displayValue: 'Guadeloupe', value: 'GP' },
  { displayValue: 'Guam', value: 'GU' },
  { displayValue: 'Guatemala', value: 'GT' },
  { displayValue: 'Guernsey', value: 'GG' },
  { displayValue: 'Guinea', value: 'GN' },
  { displayValue: 'Guinea-Bissau', value: 'GW' },
  { displayValue: 'Guyana', value: 'GY' },
  { displayValue: 'Haiti', value: 'HT' },
  { displayValue: 'Heard Island and Mcdonald Islands', value: 'HM' },
  { displayValue: 'Holy See (Vatican City State)', value: 'VA' },
  { displayValue: 'Honduras', value: 'HN' },
  { displayValue: 'Hong Kong', value: 'HK' },
  { displayValue: 'Hungary', value: 'HU' },
  { displayValue: 'Iceland', value: 'IS' },
  { displayValue: 'India', value: 'IN' },
  { displayValue: 'Indonesia', value: 'ID' },
  { displayValue: 'Iran, Islamic Republic Of', value: 'IR' },
  { displayValue: 'Iraq', value: 'IQ' },
  { displayValue: 'Ireland', value: 'IE' },
  { displayValue: 'Isle of Man', value: 'IM' },
  { displayValue: 'Israel', value: 'IL' },
  { displayValue: 'Italy', value: 'IT' },
  { displayValue: 'Jamaica', value: 'JM' },
  { displayValue: 'Japan', value: 'JP' },
  { displayValue: 'Jersey', value: 'JE' },
  { displayValue: 'Jordan', value: 'JO' },
  { displayValue: 'Kazakhstan', value: 'KZ' },
  { displayValue: 'Kenya', value: 'KE' },
  { displayValue: 'Kiribati', value: 'KI' },
  { displayValue: "Korea, Democratic People'S Republic of", value: 'KP' },
  { displayValue: 'Korea, Republic of', value: 'KR' },
  { displayValue: 'Kuwait', value: 'KW' },
  { displayValue: 'Kyrgyzstan', value: 'KG' },
  { displayValue: "Lao People'S Democratic Republic", value: 'LA' },
  { displayValue: 'Latvia', value: 'LV' },
  { displayValue: 'Lebanon', value: 'LB' },
  { displayValue: 'Lesotho', value: 'LS' },
  { displayValue: 'Liberia', value: 'LR' },
  { displayValue: 'Libyan Arab Jamahiriya', value: 'LY' },
  { displayValue: 'Liechtenstein', value: 'LI' },
  { displayValue: 'Lithuania', value: 'LT' },
  { displayValue: 'Luxembourg', value: 'LU' },
  { displayValue: 'Macao', value: 'MO' },
  { displayValue: 'Macedonia, The Former Yugoslav Republic of', value: 'MK' },
  { displayValue: 'Madagascar', value: 'MG' },
  { displayValue: 'Malawi', value: 'MW' },
  { displayValue: 'Malaysia', value: 'MY' },
  { displayValue: 'Maldives', value: 'MV' },
  { displayValue: 'Mali', value: 'ML' },
  { displayValue: 'Malta', value: 'MT' },
  { displayValue: 'Marshall Islands', value: 'MH' },
  { displayValue: 'Martinique', value: 'MQ' },
  { displayValue: 'Mauritania', value: 'MR' },
  { displayValue: 'Mauritius', value: 'MU' },
  { displayValue: 'Mayotte', value: 'YT' },
  { displayValue: 'Mexico', value: 'MX' },
  { displayValue: 'Micronesia, Federated States of', value: 'FM' },
  { displayValue: 'Moldova, Republic of', value: 'MD' },
  { displayValue: 'Monaco', value: 'MC' },
  { displayValue: 'Mongolia', value: 'MN' },
  { displayValue: 'Montserrat', value: 'MS' },
  { displayValue: 'Morocco', value: 'MA' },
  { displayValue: 'Mozambique', value: 'MZ' },
  { displayValue: 'Myanmar', value: 'MM' },
  { displayValue: 'Namibia', value: 'NA' },
  { displayValue: 'Nauru', value: 'NR' },
  { displayValue: 'Nepal', value: 'NP' },
  { displayValue: 'Netherlands', value: 'NL' },
  { displayValue: 'Netherlands Antilles', value: 'AN' },
  { displayValue: 'New Caledonia', value: 'NC' },
  { displayValue: 'New Zealand', value: 'NZ' },
  { displayValue: 'Nicaragua', value: 'NI' },
  { displayValue: 'Niger', value: 'NE' },
  { displayValue: 'Nigeria', value: 'NG' },
  { displayValue: 'Niue', value: 'NU' },
  { displayValue: 'Norfolk Island', value: 'NF' },
  { displayValue: 'Northern Mariana Islands', value: 'MP' },
  { displayValue: 'Norway', value: 'NO' },
  { displayValue: 'Oman', value: 'OM' },
  { displayValue: 'Pakistan', value: 'PK' },
  { displayValue: 'Palau', value: 'PW' },
  { displayValue: 'Palestinian Territory, Occupied', value: 'PS' },
  { displayValue: 'Panama', value: 'PA' },
  { displayValue: 'Papua New Guinea', value: 'PG' },
  { displayValue: 'Paraguay', value: 'PY' },
  { displayValue: 'Peru', value: 'PE' },
  { displayValue: 'Philippines', value: 'PH' },
  { displayValue: 'Pitcairn', value: 'PN' },
  { displayValue: 'Poland', value: 'PL' },
  { displayValue: 'Portugal', value: 'PT' },
  { displayValue: 'Puerto Rico', value: 'PR' },
  { displayValue: 'Qatar', value: 'QA' },
  { displayValue: 'Reunion', value: 'RE' },
  { displayValue: 'Romania', value: 'RO' },
  { displayValue: 'Russian Federation', value: 'RU' },
  { displayValue: 'RWANDA', value: 'RW' },
  { displayValue: 'Saint Helena', value: 'SH' },
  { displayValue: 'Saint Kitts and Nevis', value: 'KN' },
  { displayValue: 'Saint Lucia', value: 'LC' },
  { displayValue: 'Saint Pierre and Miquelon', value: 'PM' },
  { displayValue: 'Saint Vincent and the Grenadines', value: 'VC' },
  { displayValue: 'Samoa', value: 'WS' },
  { displayValue: 'San Marino', value: 'SM' },
  { displayValue: 'Sao Tome and Principe', value: 'ST' },
  { displayValue: 'Saudi Arabia', value: 'SA' },
  { displayValue: 'Senegal', value: 'SN' },
  { displayValue: 'Serbia and Montenegro', value: 'CS' },
  { displayValue: 'Seychelles', value: 'SC' },
  { displayValue: 'Sierra Leone', value: 'SL' },
  { displayValue: 'Singapore', value: 'SG' },
  { displayValue: 'Slovakia', value: 'SK' },
  { displayValue: 'Slovenia', value: 'SI' },
  { displayValue: 'Solomon Islands', value: 'SB' },
  { displayValue: 'Somalia', value: 'SO' },
  { displayValue: 'South Africa', value: 'ZA' },
  { displayValue: 'South Georgia and the South Sandwich Islands', value: 'GS' },
  { displayValue: 'Spain', value: 'ES' },
  { displayValue: 'Sri Lanka', value: 'LK' },
  { displayValue: 'Sudan', value: 'SD' },
  { displayValue: 'Suriname', value: 'SR' },
  { displayValue: 'Svalbard and Jan Mayen', value: 'SJ' },
  { displayValue: 'Swaziland', value: 'SZ' },
  { displayValue: 'Sweden', value: 'SE' },
  { displayValue: 'Switzerland', value: 'CH' },
  { displayValue: 'Syrian Arab Republic', value: 'SY' },
  { displayValue: 'Taiwan, Province of China', value: 'TW' },
  { displayValue: 'Tajikistan', value: 'TJ' },
  { displayValue: 'Tanzania, United Republic of', value: 'TZ' },
  { displayValue: 'Thailand', value: 'TH' },
  { displayValue: 'Timor-Leste', value: 'TL' },
  { displayValue: 'Togo', value: 'TG' },
  { displayValue: 'Tokelau', value: 'TK' },
  { displayValue: 'Tonga', value: 'TO' },
  { displayValue: 'Trinidad and Tobago', value: 'TT' },
  { displayValue: 'Tunisia', value: 'TN' },
  { displayValue: 'Turkey', value: 'TR' },
  { displayValue: 'Turkmenistan', value: 'TM' },
  { displayValue: 'Turks and Caicos Islands', value: 'TC' },
  { displayValue: 'Tuvalu', value: 'TV' },
  { displayValue: 'Uganda', value: 'UG' },
  { displayValue: 'Ukraine', value: 'UA' },
  { displayValue: 'United Arab Emirates', value: 'AE' },
  { displayValue: 'United Kingdom', value: 'GB' },
  { displayValue: 'United States', value: 'US' },
  { displayValue: 'United States Minor Outlying Islands', value: 'UM' },
  { displayValue: 'Uruguay', value: 'UY' },
  { displayValue: 'Uzbekistan', value: 'UZ' },
  { displayValue: 'Vanuatu', value: 'VU' },
  { displayValue: 'Venezuela', value: 'VE' },
  { displayValue: 'Viet Nam', value: 'VN' },
  { displayValue: 'Virgin Islands, British', value: 'VG' },
  { displayValue: 'Virgin Islands, U.S.', value: 'VI' },
  { displayValue: 'Wallis and Futuna', value: 'WF' },
  { displayValue: 'Western Sahara', value: 'EH' },
  { displayValue: 'Yemen', value: 'YE' },
  { displayValue: 'Zambia', value: 'ZM' },
  { displayValue: 'Zimbabwe', value: 'ZW' },
];

class App extends React.Component {
  state = {
    options: rawOptions,
  };

  _setOptions = value => {
    // debugger;
    const filteredOptions = rawOptions.filter(option =>
      option.displayValue.toLowerCase().includes(value.toLowerCase()),
    );
    this.setState(() => {
      return {
        options: filteredOptions,
      };
    });
  };

  render() {
    const { options } = this.state;
    return (
      <div>
        <div className={styles.example}>
          <AutoComplete
            options={options}
            onChange={value => this._setOptions(value)}
          />
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        hello world
      </div>
    );
  }
}

export default App;
