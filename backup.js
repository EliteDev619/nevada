const { gotScraping } = require("got-scraping");
const ObjectsToCsv = require('objects-to-csv');
const cheerio = require('cheerio');

main();

async function main() {

    try {
        // data: new URLSearchParams(tempPostData).toString(),
        let tempPostData = {};
        let page = 1;
        for (let i = 2; i < 6; i++) {

            if (i == 1) {
                page = 1;
            } else {
                page = 'Page$' + i;
            }
            page = encodeURIComponent(page);
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
                    "cookie": "ASP.NET_SessionId=4jzmd54ampem2zok43jwmjxs",
                    "Referer": "https://red.prod.secure.nv.gov/Lookup/LicenseLookup.aspx",
                    "Referrer-Policy": "strict-origin-when-cross-origin"
                },
                "body": `ctl00%24ScriptManager1=ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24UpdtPanelGridLookup%7Cctl00%24MainContentPlaceHolder%24ucLicenseLookup%24gvSearchResults&ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24ctl03%24ddCredPrefix=B&ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24ctl03%24tbLicenseNumber=&ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24ctl03%24ddSubCategory=&ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24ctl03%24tbDBA_Contact=&ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24ctl03%24tbFirstName_Contact=&ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24ctl03%24tbLastName_Contact=&ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24ctl03%24tbMaidenName_Contact=&ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24ctl03%24tbCity_ContactAddress=&ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24ctl03%24ddStates=&ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24ctl03%24tbZipCode_ContactAddress=&ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24ctl03%24ddCounty=&ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24CaptchaSecurity1%24txtCAPTCHA=2q64g3&ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24ResizeLicDetailPopupID_ClientState=0%2C0&__EVENTTARGET=ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24gvSearchResults&__EVENTARGUMENT=${page}&__VIEWSTATE=7tlQS1BnpIV5kukDQbTGbVM7LndEeBB3qknBdEPqv%2BKlbuAczNvhlbxNrO3cokr%2BTcTH0pyZr%2FkFz7uHmuMW9FCiEFMbovOf9j0UqFOqCokKkbGiEJjKVrFBUwU%2FN8OwGOgh5HyfUwm7qzx3mFe8%2FWttF4NRtFfwlywSnC5gxSRfYp0nSp1ttFQHmQLJbxRgyzflwTEGTZI8xKDnc4fTtvLEnl0wZeTO4wxCBBrbXyAzrhXeAM%2F41YGGY%2BtReSmcrOLvkYYYY8iWs2nyyYWSqbG8td9c4pyzbKrdeR%2FgHD%2FFeUiuhqAVJSaNe1bseDkCU9c0rPy48vDcuDylYgloD47Tmp10Bw51%2BHil9npwHs%2Fy6gazJkzYV3fgNkU%2FF4TxFAl75lb4Kco968rMZ%2Fpgdz%2FZOAguHKZ8OKe2xx7Z4wphz1n0nhW3rqTEOLiRuJyvIAeVLQWiVGYiIdcwGr1beYpY8jwaQiHmKtCw0Mxjj%2FJ0PowejDZK6Kb%2FTDe5rn%2FlhY4AiZWqDNq5GQFzqyyZDhDphfWzIZkwME1dSI4UqRYpcXN2iwnGCQouIun0UShmDDRPFHFau%2BvDsrxuo%2FXKkAtObYpC2arlrtSm7J5709VmLuPf%2BpxwrhO4wpqkIGxmHBnHLsjoHd9JJhpJiTF80YrIGfbGQve69J7DxRwxCI5XBrQaQHSCwXMiaRoQsxwSCeNs%2Fun0iFWStnCVA5hawYe%2BkMbPgocPqFIjrEedDfY3bNizW55lc%2BQydVCWn0z5TN3ha6518iAFvxRVa7HkCaK0xlOfCwVs%2FpQe9V50c7KoslshF55LltQDdTEW2moY32x6UF1O%2BRNbQkYUGtm0EazOdk9cSiaXdvgfmFrHAeOf5gYHblp16SV%2F5WtX2DnB%2BhnI5Ry13jJk6t2Z2qpMoMmUMDri01ZZBNX0oAVXc4kinktp6%2F3bmwYK86sKXWwx2hiGLOKz%2B%2BrH3syrmyO838jcPHa3p%2FrOUIp%2F08D8zyMJohtlWDpgaXw5hdEjlBTnBGIqqqL%2B3%2BmeTx7irF2F18ZcvWJqcuQ8yN93k%2Brai48eM0p3Shd8AdgDsJlWJeq1YWXMudE%2BfBBHdlo1BWe%2Ffnbxngqszz9Ijsvl6X38af2DT79Afb8SALRTow8kbiZjGv8Vdi6%2FqZt1JhXu4Pae%2BB%2FQDN3G7HwpZfWLSQr8c%2BdrUriJPqNHz07Iv5GwnMPyT0WUr%2B1qpzvBB5N2%2FLVTUC1M%2FllQw1y411Q62Ok1yBJ7zqhE%2B0RQsbQziPr0CSjUX%2BbzGwuAyNa2ReSHKLUWpEiwF%2F4IJMYpsU5UznA9%2B%2BWB9Grw3CtGOnkUFLZZLw0kbmnb5pBqu8CdZsD%2BP%2Bu7KpyIjtUfqGURL%2FYE%2FvoUz6848K918Xh4czhfltKMDbwDaO8gPWKZor5wNOQbIK3LGOkwyyc9HJF79GTlEIhHt1MbOMjECk1%2FyUuUYC%2BZ15AF%2FcNJE0hNy5aOQDaAnfwANF8TnEBjegoxBX4s76aiOpmjF3Oq9zjxAouWP5miN0ytovS3GjJJMc5AoZhHydrap9BFWGtcCH5TQMJXDwPs%2B1dUt4bfjMwE0unHJZYt3viWq1rwqlCEHErGCTS2oL3aKuk8qshDdCt%2FkV8W2hXjnXaCz9h3h4L%2Bs2pSxPc7aghs8Izd0UI0gIkBDQV%2FWxOEXR2HpY15IPYQQ8xYUt9%2BKETlQDmDRy%2BLqzVhfQ4X9otS8LONsakMf4hHcUIc6BVG%2BMX0kqfaeMYh7HkocBJYtx5Bxr2RRzL2tbwPe92EYaPgBMBNjewJKtmoQBjS6P%2BFvfp8MZB7dRTp1bstL0YXQ17u3K0yUhODMI00mwtaWKGH4NLuAiTYdtyUvgv1oLvFLWwZ0rd%2FLVUbriXKmcH4WFs1UFzGFkwX3jQJiKtTxoIPEaVTPVkUFNMSabDY3uYYLqB%2FhKxEFj3pqYt%2B%2F53g6spr3m2cauqZuqSikPcNUi544JB4JciywdzDRXSkhMNhidGeCz3oyR77xaRf%2FkhSdCFKm2k%2Btt9XyDduIKJ7qIhl%2BFnmDuZHG1wsYFegbkXm79L6silQIyX6DIzaXQYlOjoLMM1uhl%2FyJKE3S7I8ITqhKUWVRTDffOK40NEyq%2BUSxrQVkhTqx12yuVDFegBM0QXs4dO25F77uIyYJrn5oxAvkdxeZdUphrmqNKT2YADaraE90YA6k3HcTosdn5bdKg7B5LjYU1dSarIkW86TTX3%2F9zWkfDv6rf0HxhY18lz9rd8KcJxKa4JXXOaT2cW9gIFxsVOQ8fbwt%2F9K8OE1KbwwxCGB9Xqu%2B8u82ErObugI2968enA%2B1MiqhEhbhwfFDSaLECgwTqOG7UAFc7s2FWQhRY2dTFUa5oUbP2ugOYQUMQslOCyDTqUrHr2oR0fLHoWS%2BtB3Gb5as4mwgBoSMs3hEpw43r0AR%2FyN7fmqmzShm%2Fv%2B%2B2zo7ZrbaEvKyhMSyzggWcfytSmwbqQNEOuFtnNjjHKDuqbzgeRdsntlxVaeplMPeby%2BYcD6B9GkCBaccUzpaXfr2cRR1QK99dWAdMk9U3z2fHRel2tPVLTsRHqsQQoyGFi1j2%2FIVibvLWxHceMJnVtMERHbS59DjTwiuC8I%2BPxPR938oT0TTonLTU%2FJkT0ODPWa%2FilK5QnmnNb7880KLogZ7Spi1SB3Rs3XkBg3Vi6YrZOzvP%2BdlrugMpHhN9SD6Z4A7m0D8hfii97UW0pbYzIcxJXAUCWjF3p%2FETZmiPE1K1m0IhTDA1AefzF8DV6WJ39wBMAia18VLFWHJUZj7Oh9Vf3TUedVhqB0cGZGeCAuQvgJmpaW4%2FvQo6wuaID2SMO9Jc6c1cUevj4ay%2BVBXQ%2FzY5dO8GS4sX0btZnZAwJ%2BFNHIdq7bwEeDw9h%2BUstES0sjUOLBC24Fcu1MX5Y3Hj222Ky8viu8jF%2FnFX3%2BonNAP6%2FlaM4mGy8uuvVAhvCWXbn5OdI2wyUMs5GOo488kT%2BIuGVKr%2BQ5Qo0HGN545x5B6eEm8VlrTl5kUozKSNRvPgjA9g4HSt1irn5VOa3NByFBWBiCB%2BBVm2g1VrpFUaVKd0Icp125jPKsI%2FM2GU5pCM9d7kEnSmGV5bXDEaBDuMzf6KDtOw6XnudpPpTBdr6rLL40IT5JVyuWMJVGPDEZRSICrsSIflhKEQJQnw%2FSUcKNn3YOrrU%2FDW7TPgWODeWOXbUCqxYijVrrfI9Jt3n8HANPI4IhREClwvT3uaJgNA6uNsvm3SeJM95btucQE2QZ93wBVl5U6z9Lhj2Giu%2B2wNZ7E%2Fy9m5dnMeq0p0lnNT%2FeMxtz0%2BIMdsuE3neZjjXHoy3F7gxbyRuzEZ0Or2K4IUMRnaXT7oBF%2BrotXI%2F2hrQcUp6DVjDhaC%2FlNPdNVPnyN32Ah25N0%2BGElUv0TR0m%2BYWSotaChzllVsMaSCWVJQWHVAC4U4X1XpgMxV4uCxtTrixDVpDL%2Fn4Mo2p%2B56zdn0nPC%2BNsidBoUuztr5qfqe7WMsBNMP4uvD8nGMmKj0GBIDdPjx1Y8AT8EektWfwE6Ufxi7OxeCdoNDYc0yxFGvjicLjv0rettVNvpM1CeClc2Y9vvNUsOhw4zHqEtckEd6GP2aM0vtY%2FAeGZ6NTQTE5ecmJvXGAaFcxDnn6S9P5yGJx%2BltVEvasIslvWFeixt3wpBj30rDwoS6HdnzWFHKUz1qYoGgUmo7AkjC1tY8Jp60MT0ef5prSab%2FId7rOF5LqGp%2FR6%2BZrNjIdWm94wujKOtS56%2Bh%2FXT7GW2%2FWOJ1bdTVsJ2hQdlmjYHnVCeEOPqPHx8F3RAfGWEekf1xr%2FoXV56GuU%2BXejzMYYnGilAJZtAnX4eoU07jfYLpUfJKUi3VA5ei45c0mBkBteMKBTBET2oj3TP4%2Flw1XDEABeuI%2F0rhTyiCi3EhEJdjiy4hwOsYc2ldVCrC9wtsMWMUgwAV6FLAFVWCdBGrF6ByK%2BmMIdsqia8GArsuzySLEzDx3dT99J7EPEO5co8cJHFpyayHNbR911qMfKXdnpUt42wnGd5pPRGa%2FKqiSitT2SRq%2BP0SAbrqVvvSOlQFSpqVeFb6B3bWVFO0Qd4UafjjkGSNOFuc14jpwK04IZiEHWuGOsyKvvabCbzWeRevWbBUk%2BmW34cizoHRbyT47lTEt1LyZTusbdZ0AYxfixXPCfjSGXG9gnnLWkuqFH7tAKHCji74xV1m7%2BHpdopDMr5cOVREvG4vpff2W7O%2F9pts4AWCAdslNlxfrmY30Gmz0b8%2F0Ha%2FwGSRBkD4pSzCTIX%2BXHsVE5zEBdVySthdkAbFKXZT7pWXGvpd%2F6Iut2u3DtNnmI6yzpZijX7l6wjK112nW5AUI2UQMSSYNZRmgajpmQMqMQ3VmZVecLkdhM1Ks5WzpCLI9wjtZcRuN1EY%2FiLnTm3Uxmlzj7cG0RIh9eC29vR8x1SxiE7KKvoYaVRbyP3OUASEAtX53KRXrT4L%2B2cP7FP%2B5YvCLeJRGs62xcAnYgYj9lz1xI0XK4WoblkCPaGRTEvoNzacbrdFv3ET4yGG6GpOgzgLfWwQRa7PJXe9PrqvhmgqI%3D&__VIEWSTATEGENERATOR=44A23853&__VIEWSTATEENCRYPTED=&__ASYNCPOST=true&`,
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
            new ObjectsToCsv(temp).toDisk('results.csv', { append: true });
            console.log("Export Successfully!");
        }
    } catch (error) {
        if (nTrial < 3) {
            await getCredential(param, nTrial + 1);
        }

        console.log('getCredential Error:', error.message)
    }
}