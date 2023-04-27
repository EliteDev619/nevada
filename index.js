const { gotScraping } = require("got-scraping");
const ObjectsToCsv = require('objects-to-csv');
const cheerio = require('cheerio');

main();

async function main() {

    try {
        for (let i = 560; i < 3000; i++) {
            let page = encodeURIComponent('Page$' + i);
            console.log(page);

            const response = await gotScraping("https://red.prod.secure.nv.gov/Lookup/LicenseLookup.aspx", {
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
                    "Referrer-Policy": "strict-origin-when-cross-origin"
                },
                "body": `ctl00%24ScriptManager1=ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24UpdtPanelGridLookup%7Cctl00%24MainContentPlaceHolder%24ucLicenseLookup%24gvSearchResults&ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24ctl03%24ddCredPrefix=S&ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24ctl03%24tbLicenseNumber=&ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24ctl03%24ddSubCategory=&ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24ctl03%24tbDBA_Contact=&ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24ctl03%24tbFirstName_Contact=&ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24ctl03%24tbLastName_Contact=&ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24ctl03%24tbMaidenName_Contact=&ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24ctl03%24tbCity_ContactAddress=&ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24ctl03%24ddStates=&ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24ctl03%24tbZipCode_ContactAddress=&ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24ctl03%24ddCounty=&ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24CaptchaSecurity1%24txtCAPTCHA=5289T6&ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24ResizeLicDetailPopupID_ClientState=0%2C0&__EVENTTARGET=ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24gvSearchResults&__EVENTARGUMENT=${page}&__VIEWSTATE=5diGupP8vL9e7Jdn4bChOUkm7MqsKk%2FC5UzTkrsZkF3EaYYflQBbiAlnr2SjIIzviQG%2FZACo7Aib%2FK7%2B35diMnaKla3EGOTEbssosXLv6nYe1KGu5wo1%2FJerFZFwsoa09h78V0Ym39AkMwu5l5f9zrSleD2VRFsCjiynZT4kXzS%2BjiK1ODWHAtQgDykRAuAAU56URDkHj%2FO%2F7YjS0ehZH398VO33fa167KJsi5cKTpPbI6r1XT9F%2FtF8UTBc2Ci7LkpsPYRtGP4LT%2FnFC24%2FWFDz%2FKASRX%2FU7v%2F8PZKew3nHyFc3ix1RcFJ0CAypEFZEySew2tn98jUPeg7AFm0tW%2BoScK3viOSRA6kIM3jzUmJ33q5ajb9I2m3OYqx0TlD5%2BNBf8ptXgTu8nii637oH5pbRvFBcKg2ZIhFHP%2BpvHmJc1BQqXx5IvzTpejdzNMOeDCf9tivkG%2B3y3H9slAP5Dr8ZCXfrduDawN1pspomcQ60rYo5vskVKguTvzAIedivnr5qgtmHNxUseqiKZXBw5BJzcFDSFcXLRoFrrAHnavXmGPIh%2BcKOS5hIFkUKxZJEl8ttat2c%2FyLeRmCDYAB47%2BHKnAuUJs1BFahwMMSWha%2FCtFJfkPTb%2BQ2BaoahENfhwU4yKbnHCthKge5VlYN5dQWRwgMgrbiMweyvPM3tyZ6msS9%2FC6atc3OCGrMK5A5qKzWQ9CNBm%2BK%2FIfBF57apzmsXcxRxdVaFdeMtGuYWblfxWIfbN3cgSl%2FpTn5ZOxXBGGWjLOVuult1CREH1TZkhXnY1dX9U%2BKRoreizjIJn7%2BqISCsEwCIJj7a4fEvipo6W3Uku2NPBusH6%2Bvg5B9yNuisIHWN2s3cz9LZKTg%2FxqZJs58H004ZsspxJUhASt6QD27slWltpPY2YC%2B6rXLc0pgF1quVOtyItjPENp8aeDPIm%2FkCNl4jiWe0A%2BvFRnkQCi8z6Jm%2FYZDkO0%2FMFbHUebLGjiU83mEyyvAdo9TJ6fWqgZsTTHuqBVUXOIIaqAC8D%2BaF7x1SNVZ8IhDQDdc3GRoxcqY9n8NL26Zax5Z%2BNIUmsVtDue8AgGnoOSs25ub3ihSa2cP5Kw17oABUaIKotQEgZPuf9uiLAHdhEyjHGmLfU1GAdPBkautPTwuC5E4cqWRAaSVdZcJ%2FJs2UI59upnI9XhwyagVcQHFhkE1xdixAE6q24gOJXf44KmKw1BwF34%2F69EWFzcyNjjsWGv2WZ5O3vdA2IHVAeu8XHcUHag1jp37hWrLREfClNLd6vOOVMzM8HLYoU3UpEn5VD8ZR21Hi%2FNM26rGaiQfEECV9Mdgb1tiPK5lyyrkVtcz7aSTYiX0lWPvvxllha%2Bnp24TnkfBfizNa1AXGSbGcmjZdDPLx%2BF1v8yOojHkdQYGEEZFIs%2FaKX540Kg%2Fc7jqo5gBs2T6XPQAWx%2BefbjsoZ2sTVY8hDbWrOQIvlE4DuBA4sSKMmt2uh0rHO4Vd0PBV1K5Bc2kOsZZ%2B47RmEMDjEvf94h7DL1pj%2FKiTNSgv8gVRKbvw9MQzeQ0Naq50wuZu00fYM0nNmtky%2BNWKfBInN1L7piW9u9PwvN0vpnsOwxPOsVv46%2Fxjc9WEgv5gOoL53MUVwi%2Fh6hX7U59fR%2F4QM4FNoCjbzeL2%2Bj8T9yGINu9mFJebHkxPYtlFAlWzrtwTIQdjth43fgKD%2Fanp2VMD7uQNngttkUPDXhMWp61mHr2ddoJ6wiUMbP%2Bue7eALDViPiCdFhHYTsIfNIYhPzaPVrs2FrM1soaXCZBYktMhtfhcCgMQoQg2axxaAhgBRH91h34TTQ9EfI0aa6EjP0KVMy4sJXdNNOt38AwSwUigKktuGbzDWZ7ZjBSmzfZ2UW7WiGDyhHX4qTtmAgvMmfv3p46C21f1jENVJIe8XrrbGA0Mb%2FPfY78xj%2BYmd2axvGtPI0IcUJp67c91VnRFawxskCdOoRNKf93HfYzn%2Br3AmeRgcVw7HyFqNv9hvJ0k90eGS2lStNb3S3RqCG5wjA9ATttrrBIUND841ClPR0T1jBP0nDlwgRyBgA8W2rhDyaozsZkJZibCZFVrhdin%2FCXzk%2FnAu3guvDtXTK20WdStZa04ftpTOv2Rzem0roef9jdIkXq%2BO5TKCHp5byGxr%2FNBqbIKj%2Fg9wXRW0fDuQIXpzW2x8DmBDNl3aOpDNHSuafBcsOacPKgATWhM9j9A95StiqLZX%2F5tbViztDVXst%2BgcDcSzbjJBbXA0MwrTlUQnNQigIHpPNyih761Mlb7kq3gsFTLEGUS0XtNrpXG9GjK70wd6%2BYSIOH40OLKKSFKve%2BcmI4cr5dkTuKvapwZj99n1GZcSLFxVrgxLFwBS1sLISxHr0RkjSFc7pOfLLlh7Orxjb24qLAMTxd8H3YtVSq0K67AYRL2cDyW%2F9kw4PXfTOo2F8qkexurRCsZnMPrdtlNzmf%2Fx3YHy8N%2F1p0Wb%2F4cWMgeNHpVKk9qft09ln0e9dd8Y8PYCnk1foV%2Fh2oZGEvbQgn8SPYKffw6jCfkMGlMIGXal7oR8h9ZJPdQRNuNCds5ST43WjgA9RD0nr7%2FDaDO94Y2%2Fp7w%2BEuCPbUrYV78PyZpbW0SuytpPx0Rqjf1589jRdJFfeQaUkKMCOsDzkNRBejm8ldVlckv%2BGVJ5AthXAmbBrfJoOzDbp%2BbqKCOgOTj6OJdrJjWpxMK1sXoqn8iky6XiSM1jiCcaXgQ%2Fb87ar99OBwtMv%2B8xjkUl4ak8WiWcaxm%2F4Cmn7dear0HQvIdwB2BZt967UIJVoVnBqmty6lz%2BIqwZYSz7TC4mMqkaV4CHWgdWz7Ima7eI7FlX4VtGS4rCkY9fZTIbRi2y%2F7XUnOSbeaXtWJSKz8%2BPY5GWBJQYo71kGF5FN7XpUs5Ns2TVHyg2VfUdKEPj4bM7fvHpAWciYAPNJxMcGPNJ0zkCgD9mvhfPevEq4tQVADjFgotWoYX1nh%2Fa70Hwsh6VV2XQcL3Krn4bqstl3Ll10eik9NrT%2FaCwnizKI9bucsCXtUDoqAuq%2Beq3YDpA270%2FrvB4lONLiNihKnZLPcHAN24zKz0AE7J3%2BIgfA7YHiQCtYqnSVTg3%2F%2F%2BoeunJtjb5thvtv1e8TdK8rUNbASwI2TQIVGc6XzFoYVHE1eeR0vu4vzC5jCyWLKltF0mHEu99BZrMAxgz45umpHxHv2SzeEL7ATN8U5I7ek34axa1ALXPAwJA7mBfZhPNlhsLXpOjAD8rYQtQpdxL56Wqm4PEC3ddEBv0sdsIvMkH0OzzVze%2FUyk5AD8d8%2BxmUOJThVQtNpXxvp0T4l5Uv3eUUtqGgJuzKCdAQbwWOtYgHaQNP1V2U0SGUKqUi6f30TMcaBEr3g3LFjdI%2BbxqCXKCtI6zwmv7D6a05M3QTa9OU1rFUMoPjinvVWk6MLWPNHkFKIziDLvGnMPL2QdkNUeXXDFvGlokIlNmFPDViQ65RCo6Q50GEFCmdRlBHA%2Bi2yKpRrdXc%2BZzu6XlM%2BZScZ9u6mLgpjS7W5m2VTrEiYLJglU7All7QxMYFlWGzGz4ph5L3EhHG6vRUsHVhSV05MCygUNwSwMny0tgXB%2BT3%2FluqtBsKzNKNXnnKaF%2BEW2BrjgAZIsuLe591Yzj3LosFfVOfJFZDnq0p%2BOy5sOYuHlZvhQFSdJ4fy%2BoKgP3FD3wjRjW4AoyWZ8NZzNeyzqDkANMmPJN49oDFYt90aRPx%2BrTcCGObF3WojItEDn1YeRqZRdmAWHyeewArjh%2FNM0gnTOisw8Dsryzjs1r9lp2JlT4dr7%2F63MTsjufYqYYEfTB%2BVolonl4%2Fzn%2BVsQmFmjn6VtqoVYdMnfRfjjOaD53h3BEQhpu2jFTf4MVbG1zPT63cdAqJ89qxcAQjfx3mxBPMQkZm%2BMn3tohkwSEQPiKvOPbApfX9%2BDGpIHJHBzDHdbrpD3pWzI0oqKf%2FyUtr8B2%2FS8JC%2F0EN2gFCm6GoCpkKRQhfMPVLUwCfIFxJxYGhvFgu9fU8WwZz%2BA6V6ulnFrdpeufVQwNbtBpTBDXF2XYE5EE0atNO7aER4IvzyBicqt1Lsd8e%2BQLP1uVO8yAb1tu0VWdfq7haq0Yzr2%2FdnGPJhU3GQPrvjh6f6Skhd%2BA7DFncKp9WqR3BROvKOS%2FpOiUgTs9Zn9hDjmA0LOnm0qM9EyjrXNPValnbJcAela8EF7TZ%2Be1BGkrbDrExe3u6BLa3UPgpyLjgAFii5bXLIMI%2BBIVyXsyNZPW0vg9bG2FebiVePaTU36l%2FFav%2FsrPQrfiVJaK7nlAgxjjHtyVSTFCSPc1jIDxHiMpwhi9nxOmaosIYE530wOM886%2FG7S9uRt0KoLUnktWhe%2BbAfp1DLuRWV%2B%2FmvkOTvLffRdSxZPwiM1MYvZp6raT%2FVW5K4htZ5tBceenauxej7rqF2w%2BkA2M5Pl9wj%2FJyNIn2qUpdHf8XY2%2BJYN1rXuLb1LvyTHpKL2UwOVjWzwbySjyOm8JpQAZzzjIkMJ%2Fm8Zww20U9h3f93jmtLzFSsx85WSVmKmVDUUdl%2B4ynmvCAIKZGQsFz%2Bes0r0di79gfxYPEMivRqwJ9SL2UtRM1WZmqgcKelWrB84DRhwp%2F2OQypkYCBLySHs3NK4QlDb86X7BDQwGS0y8ozAMI4RRZNHZMSCiTWd4kpBFmYu18VgsygfK5PUNU7Ltyn9BJ%2BL15goO2RENmx2%2FliQFRE%3D&__VIEWSTATEGENERATOR=44A23853&__VIEWSTATEENCRYPTED=&__ASYNCPOST=true&`,
                "method": "POST"
            });

            if (response.statusCode == 405) break;
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