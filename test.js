const cheerio = require('cheerio');
const { gotScraping } = require("got-scraping");
const ObjectsToCsv = require('objects-to-csv');


let strBody = '<table>          <tr class="CavuGridRow" valign="top">                                <td style="white-space:nowrap;">                                                                        <a id="ctl00_MainContentPlaceHolder_ucLicenseLookup_gvSearchResults_ctl03_HyperLinkDetail" class="btn btn-primary btn-xs" href="javascript:DisplayLicenceDetail(&#39;16586;133906;0;A L \&#39;JACK\&#39; WAGNON;;0&#39;)">Detail</a>                                                                </td><td>A L "JACK" WAGNON</td><td>3229</d><td>BROKER</td><td>CLOSED</td><td>LAS VEGAS</td><td>NV</td><td>89121</td>                        </tr><tr class="CavuGridAlter" valign="top">                                <td style="white-space:nowrap;">                                                                        <a id="ctl00_MainContentPlaceHolder_ucLicenseLookup_gvSearchResults_ctl04_HyperLinkDetail" class="btn btn-primary btn-xs" href="javascript:DisplayLicenceDetail(&#39;16587;133906;0;A L \&#39;JACK\&#39; WAGNON;;0&#39;)">Detail</a>                                                                </td><td>A L "JACK" WAGNON</td><td>3229</td><td>BROKER</td><td>CLOSED</td><td>LAS VEGAS</td><td>NV</td><td>89121</td>                        </tr><tr class="CavuGridRow" valign="top">                                <td style="white-space:nowrap;">                                                                        <a id="ctl00_MainContentPlaceHolder_ucLicenseLookup_gvSearchResults_ctl05_HyperLinkDetail" class="btn btn-primary btn-xs" href="javascript:DisplayLicenceDetail(&#39;3328;64594;0;A MORGAN JONES;;0&#39;)">Detail</a>                                                                </td><td>A MORGAN JONES</td><td>20688</td><td>BROKER</td><td>CLOSED</td><td>SAN FRANCISCO</td><td>CA</td><td>94114</td>                        </tr><tr class="CavuGridAlter" valign="top">                                <td style="white-space:nowrap;">                                                                        <a id="ctl00_MainContentPlaceHolder_ucLicenseLookup_gvSearchResults_ctl06_HyperLinkDetail" class="btn btn-primary btn-xs" href="javascript:DisplayLicenceDetail(&#39;34138;25904;0;A RICHARD COHEN;;0&#39;)">Detail</a>                                                                </td><td>A RICHARD COHEN</td><td>46285</td><td>BROKER</td><td>ACTIVE</td><td>LAS VEGAS</td><td>NV</td><td>89135</td>                        </tr><tr class="CavuGridRow" valign="top">                                <td style="white-space:nowrap;">                                                                        <a id="ctl00_MainContentPlaceHolder_ucLicenseLookup_gvSearchResults_ctl07_HyperLinkDetail" class="btn btn-primary btn-xs" href="javascript:DisplayLicenceDetail(&#39;249684;40125;0;A RON EVANGELISTA;;0&#39;)">Detail</a>                                                                </td><td>A RON EVANGELISTA</td><td>1001754</td><td>BROKER</td><td>CLOSED</td><td>LAS VEGAS</td><td>NV</td><td>89147</td>                        </tr><tr class="CavuGridAlter" valign="top">                                <td style="white-space:nowrap;">                                                                        <a id="ctl00_MainContentPlaceHolder_ucLicenseLookup_gvSearchResults_ctl08_HyperLinkDetail" class="btn btn-primary btn-xs" href="javascript:DisplayLicenceDetail(&#39;159339;40125;0;A RON EVANGELISTA;;0&#39;)">Detail</a>                                                                </td><td>A RON EVANGELISTA</td><td>13404</td><td>BROKER</td><td>CLOSED</td><td>LAS VEGAS</td><td>NV</td><td>89147</td>                       </tr><tr class="CavuGridRow" valign="top">                                <td style="white-space:nowrap;">                                                                        <a id="ctl00_MainContentPlaceHolder_ucLicenseLookup_gvSearchResults_ctl09_HyperLinkDetail" class="btn btn-primary btn-xs" href="javascript:DisplayLicenceDetail(&#39;238176;280820;0;AARON ABDUS-SHAKOOR II;;0&#39;)">Detail</a>                                                                </td><td>AARON ABDUS-SHAKOOR II</td><td>1001587</td><td>BROKER</td><td>ACTIVE IN RENEWAL</td><td>N LAS VEGAS</td><td>NV</td><td>89081</td>                        </tr><tr class="CavuGridAlter" valign="top">                                <td style="white-space:nowrap;">                                                                        <a id="ctl00_MainContentPlaceHolder_ucLicenseLookup_gvSearchResults_ctl10_HyperLinkDetail" class="btn btn-primary btn-xs" href="javascript:DisplayLicenceDetail(&#39;246317;4674;0;AARON ALRED;;0&#39;)">Detail</a>                                                                </td><td>AARON ALRED</td><td>144746</td><td>BROKER</td><td>ACTIVE</td><td>HENDERSON</td><td>NV</td><td>89052</td>                        </tr><tr class="CavuGridRow" valign="top">                                <td style="white-space:nowrap;">                                                                        <a id="ctl00_MainContentPlaceHolder_ucLicenseLookup_gvSearchResults_ctl11_HyperLinkDetail" class="btn btn-primary btn-xs" href="javascript:DisplayLicenceDetail(&#39;281640;287836;0;AARON BATSON;;0&#39;)">Detail</a>                                                                </td><td>AARON BATSON</td><td>144935</td><td>BROKER</td><td>ACTIVE IN RENEWAL</td><td>LAS VEGAS</td><td>NV</td><td>89143</td>                        </tr><tr class="CavuGridAlter" valign="top">                                <td style="white-space:nowrap;">                                                                        <a id="ctl00_MainContentPlaceHolder_ucLicenseLookup_gvSearchResults_ctl12_HyperLinkDetail" class="btn btn-primary btn-xs" href="javascript:DisplayLicenceDetail(&#39;227022;259801;0;AARON CUHA;;0&#39;)">Detail</a>                                                                </td><td>AARON CUHA</td><td>1001297</td><td>BROKER</td><td>ACTIVE</td><td>STATELINE</td><td>NV</td><td>89449</td>                        </tr><tr class="CavuGridRow" valign="top">                                <td style="white-space:nowrap;">                                                                        <a id="ctl00_MainContentPlaceHolder_ucLicenseLookup_gvSearchResults_ctl13_HyperLinkDetail" class="btn btn-primary btn-xs" href="javascript:DisplayLicenceDetail(&#39;305681;368528;0;AARON H MULLER;;0&#39;)">Detail</a>                                                                </td><td>AARON H MULLER</td><td>1002846</td><td>BROKER</td><td>ACTIVE</td><td>LAS VEGAS</td><td>NV</td><td>89113</td>                        </tr><tr class="CavuGridAlter" valign="top">                                <td style="white-space:nowrap;">                                                                        <a id="ctl00_MainContentPlaceHolder_ucLicenseLookup_gvSearchResults_ctl14_HyperLinkDetail" class="btn btn-primary btn-xs" href="javascript:DisplayLicenceDetail(&#39;297395;255199;0;AARON JACQUES;;0&#39;)">Detail</a>                                                                </td><td>AARON JACQUES</td><td>146183</td><td>BROKER</td><td>ACTIVE</td><td>LAS VEGAS</td><td>NV</td><td>89169</td>                       </tr>                </table>';

// main();

async function main() {

    const $ = cheerio.load(strBody);
    let results = [];
    let objRow = {};

    $("tr > td").each(async(index, element) => {

        let val = $(element).text()
        switch (index % 8) {
            case 0:
                let credential_param = $(element).children().first().attr().href.split("('")[1].split("')")[0];
                objRow.credential_param = encodeURIComponent(credential_param);
                break;
            case 1:
                objRow.name = val;
                break;
            case 2:
                objRow.license_number = val;
                break;
            case 3:
                objRow.license_type = val;
                break;
            case 4:
                objRow.license_status = val;
                break;
            case 5:
                objRow.city = val;
                break;
            case 6:
                objRow.state = val;
                break;
            case 7:
                objRow.zipcode = val;
                results.push(objRow);
                objRow = {};
                if (objRow.license_status != "CLOSED") {
                    console.log('unclosed');
                    // await getCredential(objRow).then((result) => {
                    //     console.log('result ======', result);

                    //     delete result['credential_param'];
                    //     objRow = {};
                    //     results = [];
                    // }).catch(e => console.log(e));
                }
        }
    });

    console.log(results);
}
getCredential({ credential_param: "297395%3B255199%3B0%3BAARON%20JACQUES%3B%3B0" });

async function getCredential(param) {

    console.log('In getcredential function');
    let time = Date.now();
    const response = await gotScraping.get(`https://red.prod.secure.nv.gov/Lookup/licensedetail.aspx?id=${param.credential_param}&_=${time}`, {
        "headers": {
            "accept": "text/html, */*; q=0.01",
            "accept-language": "en-US,en;q=0.9",
            "sec-ch-ua": "\"Chromium\";v=\"112\", \"Google Chrome\";v=\"112\", \"Not:A-Brand\";v=\"99\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Windows\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "x-requested-with": "XMLHttpRequest",
            "Referer": "https://red.prod.secure.nv.gov/Lookup/LicenseLookup.aspx",
            "Referrer-Policy": "strict-origin-when-cross-origin"
        },
    });

    console.log(response.statusCode);
    if (response.statusCode == 200) {
        let strBody = '<table' + response.body.split("<table")[2].split("</table>")[0] + '</table>';
        const $ = cheerio.load(strBody);

        $("tr > td").each(async(index, element) => {
            let val = $(element).text();
            console.log(val);
            switch (index % 6) {
                case 0:
                    param.credential = val;
                    break;
                case 2:
                    param.issue_date = val;
                    break;
                case 3:
                    param.expiration_date = val;
                    break;
                case 5:
                    param.reason = val;
                    break;
            }
        });
        console.log(param);
    }

    return param
}