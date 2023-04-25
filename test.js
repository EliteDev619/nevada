const cheerio = require('cheerio');
const { gotScraping } = require("got-scraping");


let strBody = '<table><tr class="CavuGridRow" valign="top"><td style="white-space:nowrap;"><a id="ctl00_MainContentPlaceHolder_ucLicenseLookup_gvSearchResults_ctl03_HyperLinkDetail" class="btn btn-primary btn-xs" href="javascript:DisplayLicenceDetail(&#39;25404;107968;0;A C ROBISON;23015331;0&#39;)">Detail</a>       </td><td>A C ROBISON</td><td>39189</td><td>BROKER</td><td>CLOSED</td><td>LOGANDALE</td><td>NV</td><td>89021</td></tr><tr class="CavuGridAlter" valign="top"><td style="white-space:nowrap;">                                        <a id="ctl00_MainContentPlaceHolder_ucLicenseLookup_gvSearchResults_ctl04_HyperLinkDetail" class="btn btn-primary btn-xs" href="javascript:DisplayLicenceDetail(&#39;6138;107968;0;A C ROBISON;23015331;0&#39;)">Detail</a>                                </td><td>A C ROBISON</td><td>22825</td><td>BROKER</td><td>CLOSED</td><td>LOGANDALE</td><td>NV</td><td>89021</td></tr><tr class="CavuGridRow" valign="top"><td style="white-space:nowrap;">                                        <a id="ctl00_MainContentPlaceHolder_ucLicenseLookup_gvSearchResults_ctl05_HyperLinkDetail" class="btn btn-primary btn-xs" href="javascript:DisplayLicenceDetail(&#39;180404;87110;0;A CAROL MOORE;23015331;0&#39;)">Detail</a>                                </td><td>A CAROL MOORE</td><td>19574</td><td>BROKER</td><td>CLOSED</td><td>LAS VEGAS</td><td>NV</td><td>89149</td></tr><tr class="CavuGridAlter" valign="top"><td style="white-space:nowrap;">                                        <a id="ctl00_MainContentPlaceHolder_ucLicenseLookup_gvSearchResults_ctl06_HyperLinkDetail" class="btn btn-primary btn-xs" href="javascript:DisplayLicenceDetail(&#39;146621;67569;0;A D KESSLER;23015331;0&#39;)">Detail</a>                                </td><td>A D KESSLER</td><td>16267</td><td>BROKER</td><td>CLOSED</td><td>RANCHO SANTA FE</td><td>CA</td><td>92067</td></tr><tr class="CavuGridRow" valign="top"><td style="white-space:nowrap;">                                        <a id="ctl00_MainContentPlaceHolder_ucLicenseLookup_gvSearchResults_ctl07_HyperLinkDetail" class="btn btn-primary btn-xs" href="javascript:DisplayLicenceDetail(&#39;150094;104730;0;A DAVID REID;23015331;0&#39;)">Detail</a>                               </td><td>A DAVID REID</td><td>13755</td><td>BROKER</td><td>CLOSED</td><td>LAS VEGAS</td><td>NV</td><td>89121</td></tr><tr class="CavuGridAlter" valign="top"><td style="white-space:nowrap;">            <a id="ctl00_MainContentPlaceHolder_ucLicenseLookup_gvSearchResults_ctl08_HyperLinkDetail" class="btn btn-primary btn-xs" href="javascript:DisplayLicenceDetail(&#39;200942;215045;0;A DOUGLAS RICKARD;23015331;0&#39;)">Detail</a>                                </td><td>A DOUGLAS RICKARD</td><td>1000537</td><td>BROKER COOPERATIVE</td><td>CLOSED</td><td>WOODLAND HILLS</td><td>CA</td><td>91364</td></tr><tr class="CavuGridRow" valign="top"><td style="white-space:nowrap;">                                        <a id="ctl00_MainContentPlaceHolder_ucLicenseLookup_gvSearchResults_ctl09_HyperLinkDetail" class="btn btn-primary btn-xs" href="javascript:DisplayLicenceDetail(&#39;31259;41670;0;A E FERRAND;23015331;0&#39;)">Detail</a>                                </td><td>A E FERRAND</td><td>10922</td><td>BROKER</td><td>CLOSED</td><td>LAS VEGAS</td><td>NV</td><td>89129</td></tr><tr class="CavuGridAlter" valign="top"><td style="white-space:nowrap;">                                        <a id="ctl00_MainContentPlaceHolder_ucLicenseLookup_gvSearchResults_ctl10_HyperLinkDetail" class="btn btn-primary btn-xs" href="javascript:DisplayLicenceDetail(&#39;151951;41670;0;A E FERRAND;23015331;0&#39;)">Detail</a>                                </td><td>A E FERRAND</td><td>12362</td><td>BROKER</td><td>CLOSED</td><td>LAS VEGAS</td><td>NV</td><td>89129</td></tr><tr class="CavuGridRow" valign="top"><td style="white-space:nowrap;">                                        <a id="ctl00_MainContentPlaceHolder_ucLicenseLookup_gvSearchResults_ctl11_HyperLinkDetail" class="btn btn-primary btn-xs" href="javascript:DisplayLicenceDetail(&#39;8791;85228;0;A GARY MILLER;23015331;0&#39;)">Detail</a>                                </td><td>A GARY MILLER</td><td>24710</td><td>BROKER</td><td>CLOSED</td><td>INCLINE VILLAGE</td><td>NV</td><td>89450</td></tr><tr class="CavuGridAlter" valign="top"><td style="white-space:nowrap;">                                        <a id="ctl00_MainContentPlaceHolder_ucLicenseLookup_gvSearchResults_ctl12_HyperLinkDetail" class="btn btn-primary btn-xs" href="javascript:DisplayLicenceDetail(&#39;8792;85228;0;A GARY MILLER;23015331;0&#39;)">Detail</a>                                </td><td>A GARY MILLER</td><td>24710</td><td>BROKER</td><td>CLOSED</td><td>INCLINE VILLAGE</td><td>NV</td><td>89450</td></tr><tr class="CavuGridRow" valign="top"><td style="white-space:nowrap;">                                        <a id="ctl00_MainContentPlaceHolder_ucLicenseLookup_gvSearchResults_ctl13_HyperLinkDetail" class="btn btn-primary btn-xs" href="javascript:DisplayLicenceDetail(&#39;21951;85228;0;A GARY MILLER;23015331;0&#39;)">Detail</a>                                </td><td>A GARY MILLER</td><td>36636</td><td>BROKER</td><td>CLOSED</td><td>INCLINE VILLAGE</td><td>NV</td><td>89450</td></tr><tr class="CavuGridAlter" valign="top"><td style="white-space:nowrap;">                                        <a id="ctl00_MainContentPlaceHolder_ucLicenseLookup_gvSearchResults_ctl14_HyperLinkDetail" class="btn btn-primary btn-xs" href="javascript:DisplayLicenceDetail(&#39;6429;85228;0;A GARY MILLER;23015331;0&#39;)">Detail</a>                                </td><td>A GARY MILLER</td><td>22802</td><td>BROKER</td><td>CLOSED</td><td>INCLINE VILLAGE</td><td>NV</td><td>89450</td></tr></table>';

main();

async function main() {

    const $ = cheerio.load(strBody);
    let results = [];
    let objRow = {};

    $("tr > td").each(async(index, element) => {

        let val = $(element).text()
        if (index < 8) {
            switch (index % 8) {
                case 0:
                    let crednetial_param = $(element).children().first().attr().href.split("('")[1].split("')")[0];
                    objRow.crednetial_param = encodeURIComponent(crednetial_param);
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
                    if (objRow.license_status != "CLOSED") {
                        console.log('closed');
                        // objRow = await getCredential(objRow);
                    }

                    objRow = await getCredential(objRow);
                    results.push(objRow);
                    objRow = {};
                    break;
            }
        }
    });

    console.log(results);
}

async function getCredential(param) {

    console.log(param);
    let time = Date.now();

    param.crednetial_param = '196496%3B17030%3B0%3BAARON%20J%20BROWN%3B23015502%3B0';
    const response = await gotScraping.get(`https://red.prod.secure.nv.gov/Lookup/licensedetail.aspx?id=${param.crednetial_param}&_=${time}`, {
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
    console.log(response.body);
}