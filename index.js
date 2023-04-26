const { gotScraping } = require("got-scraping");
const ObjectsToCsv = require('objects-to-csv');
const cheerio = require('cheerio');

main();

async function main() {

    try {
        // data: new URLSearchParams(tempPostData).toString(),

        for (let i = 166; i < 3000; i++) {
            let page = encodeURIComponent('Page$' + i);
            console.log(page);

            const response = await gotScraping("https://red.prod.secure.nv.gov/Lookup/LicenseLookup.aspx", {
                http2: true,
                "headers": {
                    "accept": "*/*",
                    "accept-language": "en-US,en;q=0.9",
                    "cache-control": "no-cache",
                    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                    "sec-ch-ua": "\"Chromium\";v=\"112\", \"Google Chrome\";v=\"112\", \"Not:A-Brand\";v=\"99\"",
                    "sec-ch-ua-mobile": "?0",
                    "sec-ch-ua-platform": "\"Windows\"",
                    "sec-fetch-dest": "empty",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-site": "same-origin",
                    "x-microsoftajax": "Delta=true",
                    "x-requested-with": "XMLHttpRequest",
                    "Referer": "https://red.prod.secure.nv.gov/Lookup/LicenseLookup.aspx",
                    "Referrer-Policy": "strict-origin-when-cross-origin",
                    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36'
                },
                "body": `ctl00%24ScriptManager1=ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24UpdtPanelGridLookup%7Cctl00%24MainContentPlaceHolder%24ucLicenseLookup%24gvSearchResults&ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24ctl03%24ddCredPrefix=B&ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24ctl03%24tbLicenseNumber=&ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24ctl03%24ddSubCategory=&ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24ctl03%24tbDBA_Contact=&ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24ctl03%24tbFirstName_Contact=&ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24ctl03%24tbLastName_Contact=&ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24ctl03%24tbMaidenName_Contact=&ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24ctl03%24tbCity_ContactAddress=&ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24ctl03%24ddStates=&ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24ctl03%24tbZipCode_ContactAddress=&ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24ctl03%24ddCounty=&ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24CaptchaSecurity1%24txtCAPTCHA=fgcRBd&ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24ResizeLicDetailPopupID_ClientState=0%2C0&__EVENTTARGET=ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24gvSearchResults&__EVENTARGUMENT=${page}&__VIEWSTATE=G%2F%2F9J80r6usMKUHG%2BrYZDxQTZ4XfWYD0DcoZGltYiS6SqU2ezUGvikXtHyifa2Ym8vSpWArp%2Bbplturf03Q1HLU5k1y0wQPUtDYXzaFaP3OYG8uPKq3YDfE41WejVI17a4USElNxV5gQvsDRgl45Ffg4I0n58P%2BC2rh3oeEQbxXBwQJLaly41HwyUDXpFcLW8O%2FjLRfXF0cxHa%2F58u0PyA8HoiHc11Bgs%2F8sqcN8XrUvvydduGvOfCnj0N23DJVK%2B0yiA1sIp3DOo0c0M66IF5yv80Y7PSG2qQNBZHV5qeuzfm%2B7dyz92hKzZmVxxNoAfwoY8yGRKPgjbvFs7TBBxyQk5whDv8L9mabq3AY0FYRjba6jQTenHRfEviabicYzg6oUpeWTE8vqSQBytgcDwJ5k2yLrBbh24eMcSBevX5xDM11rltsnmtzIokRYidg7%2BxIh13yiZuhtw5dufpmxdr6Oe4yW8rb2W%2FGdWyNs1LnoGlXJZqrFXep4eZJV0tnNkXmNi7DX%2FzkABugJOYceCQZ5WJKWzvsqUudLLglBfqBmPUcQeEGp7M6V8V4eEn2VZRXRWN3qGCrtRlT%2FDskY7r2qKQtgb3x5ELkpjzY9fhywTrf4ZvoeB8scSbpx8RNKeMtCyFMe%2F%2BceJMUZBWGFEb9va2UY%2BrcpJJljBO8N7u%2F16PQSUNOT7pDc3U7W0VZ9yAgK%2BXK%2FOs5P%2FkJqJNqz5ePrqc1qJbyYY1fdzM%2FfKeHAPHW7QnL8h0By5JZntF%2FfwApvk35BxEVbuUzKYeBGSMEOEbB77zyUKwerqOrm5XplLc8HUJm0Hj04eQxRWfeVJPdHVmsQ6KFYvAISmyKBaSG9IU%2Bqf1hoE6W%2FVJJRanZnhe3ZIqQTfmjpnjdlTqZWxAzKB9AzAUxYRbsq3sgLpiSO7rZ3d4M%2BE11XmjySLamiMeFU8bdnn32S%2F1eV2XKXUrnZeYU2vng1AKKf0Vgm%2BEd8R8ETqt9Zi6r42WVq78JkdDCECAMbJrQjwBpcm%2FOwTYXd3DfznY6tmteX2ECVxqRKMzYjX34QCyb1zm85A9%2FedhPm8fe4c%2BtSbkQg%2FShv23YArKL6z07zOkz0NCVojZwSBOaGnEZUhjIrjARBAZazHucxsgnSQAZhSnKd0YkK%2F%2Fo63%2BdT2CMS8fDrrv5sXy0fFLYVPza%2B7qEnmQGdy0haYFuSuHTKgCuM5sWwKzlLIX1BJreaFWJBSF%2BFBX2lk9cXDetl%2BesswdGqK%2FU7VbXde%2BowviRf1cwWIJ6iTArwwsX3nCulnoTMzB9OQvYRNCDQWW3URE65TF77xfETozUHXweHbYBWDiJq8C38PFpnNdGXcdMQZVGdbY7zs%2F3wsy%2BvJCZQi4U8jDh6MADXLKTdN9UTgQPCD%2BDpAkaaGbnNvLebyRwGtUq39YOWReWAAjQfSs9qnfM%2FhoBTE5YyB%2FxerWCl%2BAPRkjnWhxpJlINeszxrpgDPX97M7Yd1GmWA%2BL%2FnlCL6T%2BYLnMfFNUVt2JroxFjty6JwZxfLvra6uZyzQ%2F623tNTFvzGDEYQufgXaAw8zs%2Byr5xyVgL4OWwmbpd2vpOAMsa2zj3Y4%2BclBQEzrf%2BOQ4TNcAmna%2FsHvfZTOP%2BV9KZmIFC2sUP%2BHdTfmX%2FMCiZb1dTvrbviL1ROz9reUyjiASPRAgy7t0Y0c7B6NITYfXuOumb9bHOvxDm6uBZCsYhC37yJpEtFMZzcMowiIwiKDrOlwV%2BYWtVOOUh9yESWdNgXFmp4Dy5enNoQCJyAvuqScS2Qvi9PZIY701ctrh62OzS%2FwGYJ67H3hTWSxVCX7AufqyYLjjUzB7k2gbUhjAhbu42%2F7PrMGy%2FDUJYyeaxP%2F5loSVQLy15qyRPghTT28QKvFvsTdYJgj9d%2BekqdOWYxh8SlCPPMgDq%2FHJPEkL4c4tLzVox%2FKTezjxkKCWIoD6EVEBkjmHRTTw6sfjnKK572a5ZPMUM7vPXCZWNuyXZgJHFRzej4MIEtsFyHwaPRX9Dc5%2FLJi7l0YEWfkitp8XXelfKG9QR2zD%2BOXDQ4%2B7GXIsnjT%2B35amT4yzO22HqfgENhe5XehSQlHU%2BgKKTCQ7tpL%2Bvwl62bD3ewtGO6Z%2F7LUNuVeWTIDmVTVKDiFgTbKvG6aaw8aChsjPaB4O6k5vZDqtFvWQQs1R8KevaABFA6jqV9fklDF1auIESqXQ6hKWXWdKu0IO0PfSJeF27OL5BQnF%2Bk87AiTLy47Of7EjBSI0wz24q%2BD21NDyJuMl5AhuYSen%2BpXUGOPxp5%2BwngZZPF%2FZ6sV0Nu3n%2BIF24%2BEvXEQbRO%2BtB2Aeqs8DAfOSVjbMg%2FIYcVZ0srkg6PNWuhwWY72yDXnrDYd4w08AlEDGkQv38h4ii2w7ZuREA0yrpl0x4a4O9Gw9dqD5CfvXlL0P47OemCBX01SdWW69oSLyV%2FpSBCm5hKQqmocgvCSHsk8Oboj35GGdzi731Sk2cf1s3OLp3P0w6GNB22MKH0lIvXn%2FUBX3jTPsUegZrOEcQ7GHJ%2FYpToJ4tc1GvGfzdMN9Frdwrn4FPhCxjH%2BAmwIMCggnjzT0FQiU2Jz8i7uy0E0JQPaIbC7jY3z%2FD5fCKxyVGNf3gaLx5bE8OgWyJvUL6vEYqhd5N%2FEkot0LtE1Z3X51RnzP4L5onfF47zDg3%2Fax%2BI1y0mvNjWgaXQgbEJnr4xByd551TysoOX3ZIuqKmfb8%2B%2FUyZ8lPxWV44CPC38OHj4eIRdJZEgnQ3%2BZD%2BbhGuOgTxBZi803PjO2sKz9ehdNPWDNO%2FNiM4OSmE2pi%2Bh08ex8AElA8nj8svDlsiDXdO4x3nuJZYN%2FpS39CD2uXXPeLaYeBpPth8fn%2Fx1K3dCd8TsSi6lY6NStyhhO0VwJ8Dy59HFW55itHGFbd4LfSyAtm7tB5GThhSIGWA4NCw%2BtPvc8Mcrn5MteP3PHUYTenWPnITb0GUJg2yYbzL1SNQnurZeIgKGINUMo52Oj%2FnoLCdIwjI7%2F3A38eQYa6R4s2UvdPgmHQ0yXHkgwkDH5Wf1kXKgNphc0kHi%2BJ1lj90IMbE7JXuxmq5c%2FFKW2j7droRWtxEW%2FMAz4K2za644wKk8XoeeCM0FsYw2Dnjex%2F0K7QUqRvoke2NLFgYFAYEIZ3uZ8YeWsufrZPldoWm6rTqG7BOeh%2FG7ItHldbTAZDWiXZzDJivHsz4fWcYFKXrnDRGfZgiWf84EU4OwJQ39SkeFK3KyZNX2ccGF%2Fxrg%2Bc2aSWg7JgJohNO%2Bc5upQkmlfKzyTV5zhpqNVfAnNntUDorHnS6oPuLgjh5%2F%2BjCisUmPe%2BKcs1nXb5AptJiKLFPnDn%2Br6hbymTh8UPha3wTcodVo1JLk8LZbhBK8sWLITFd04KySaNHKhF1RYFqGk%2FEZyA2FIZB40y5%2B%2FsqqAjG53miJe0v4OSE067wGCaP%2FKgXIr4EAPZaF7YcoRhsZGQiOgd6grQEKCoGXRrVCD0QTyubw3RNj1zWTuY1gPj4W1UCyV9Wr%2FAblp4Qfi6aD4yjoSL0JYQ3AScJ%2BdhPvyvmSNJfg7xPNxmPPe9cs5wa4sRjpKg6z59qT1GBrdujmujtf1B98VGuk4b4D8zhvQ7W1R4ts4TH3OK2IhrVQdnbO2fMc78PL3csoNVAYRxo2SfSypM7Qh1U3CNh4UIEgsR7QlxnJ8Ijd6Tor0kSs72JOkZ5YzGbs1UC6NhYUK2xjTVdfKN2cXx5yECCMgx7qF4Pgp160blqM7oHw8epauf12OmDCRjo46wcgHJDIIXvcjaDzMYrx5BVvElDBDSaGJj5CD7AUi3y2RLGmFiaNxtx0KsawbO9A1BP8XkC4wjCQqSIUaGwo65JuWpD0imHjgZxQBj%2F1sEZHLCCFTdv11lFh8ijH5uZf4A6Y%2BcYaE0nZi8egCPVD8d7ao6ELnuCxjaikWxX9JjKwTnCZEqKSpFHx%2B4%2FlzH%2Bpu%2FHc2TVw2%2BYYx15ZTAjWSJRN6ln9v3W0Kd04AcO0q0l0UQYp%2BRS19yn1M2VRukmAC0xoVbItqdQgCj2zSHWwUHP65l7ijsmI1MonIkwiV%2FFvZqMNZxqcFBn74RckxA2xK5w8uDBCVo2f4gijxVtrfQkxDwJS2gLIn17%2ByXQjYEYvYfjJIzCCWxcA1ne2lc2xDsTCvn%2F%2Fq64darR50ALop8%2BiRIJR0wdm%2Bg96Him1BKmyn8uGM91QuD0cUSHhnmBYJeB5tmHeJKMrlXlXoTiF1rkCRHpZzR4iMpnlHJJimTk5L1tAbXaqmBY0tGDH8264F8Oi87pfHNr7YBjPqDQyZPLLBHhYrE7xbuxno30DHPIdA1G%2BXkFsTKllRo5XOl62aiDjd08BrKsoF9g9zC05e1e2ufPbCCpJShi%2FHpmzcEX1pSCHQ%2FqKAmYgj2r7a9DrXCLUxgil8eJaJC35DFYMw2aNVq%2BjwEs4jAUccvg0sksKtCPa8NhFl%2BsI7XDrHg6%2FHVgqNYEWScv%2FhyGs7fiecV9xWKwQpk7mLmubG06PUpSPlfQVbatR6G43eOobDiWEIb6Etgp7FJZ93U9z0D4QJJUxvYs8pYFdPZp8f7hba5w1uwU%2BCXDNw%2BqAqA8YeMqJTWiKcCfIa9OjKSuyPfJ8fbjmKMgBz%2BynnNUqwR09E8a4S8zjn0%2FKMN0hfg43KglMVmJMau%2ByQx9va4HUC9ruHOymy9zBh2RGfc1RkAABpas%3D&__VIEWSTATEGENERATOR=44A23853&__VIEWSTATEENCRYPTED=&__ASYNCPOST=true&`,
                "method": "POST"
            });

            console.log(response.statusCode);
            if (response.statusCode == 200) {
                let strBody = '<table>' + response.body.split('<tbody>')[1].split('</tbody>')[0] + '</table>';

                const $ = cheerio.load(strBody);
                let objRow = {};
                let arrResults = [];

                $("tr > td").each(async(index, element) => {

                    let val = $(element).text()
                    switch (index % 8) {
                        case 0:
                            let credential_param = $(element).children().first().attr().href.split("('")[1].split("')")[0];
                            if (credential_param.split(';')[4] == '') {
                                credential_param = credential_param.replace(';;', ';23019163;');
                            }
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
                            if (objRow.license_status != "CLOSED") {
                                arrResults.push(objRow);
                                objRow = {};
                            }
                    }
                });

                console.log("InClosed Data Count", arrResults.length);
                // console.log(arrResults);
                for (let item of arrResults) {
                    await getCredential(item);
                }

                if ($("tr > td").length < 96) {
                    break;
                }
            }
        }
    } catch (error) {
        console.log('Main Catch Error : ', error.message);
    }
}

async function getCredential(param, nTrial = 0) {

    try {
        var result = param;
        let time = Date.now();
        const response = await gotScraping.get(`https://red.prod.secure.nv.gov/Lookup/licensedetail.aspx?id=${result.credential_param}&_=${time}`, {
            http2: true,
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

        console.log("GetCredential Status Code: ", response.statusCode);
        if (response.statusCode == 200) {
            let strBody = '<table' + response.body.split("<table")[2].split("</table>")[0] + '</table>';
            const $ = cheerio.load(strBody);

            $("tr > td").each(async(index, element) => {
                let val = $(element).text();
                switch (index % 6) {
                    case 0:
                        result.credential = val;
                        break;
                    case 2:
                        result.issue_date = val;
                        break;
                    case 3:
                        result.expiration_date = val;
                        break;
                    case 5:
                        result.reason = val;
                        break;
                }
            });

            delete result['credential_param'];
            let temp = [];
            temp.push(result);
            new ObjectsToCsv(temp).toDisk('test.csv', { append: true });
            console.log("Export Successfully!");
        }
    } catch (error) {
        if (nTrial < 3) {
            await getCredential(param, nTrial + 1);
        }

        console.log('getCredential Error:', error.message)
    }
}