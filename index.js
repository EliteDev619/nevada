const { gotScraping } = require("got-scraping");
const ObjectsToCsv = require('objects-to-csv');
const cheerio = require('cheerio');
const http2 = require("http2-wrapper");

main();

async function main() {

    try {
        // data: new URLSearchParams(tempPostData).toString(),
        let agent = new http2.proxies.Http2OverHttp({
            proxyOptions: {
                url: 'http://qyqfqdxl-rotate:a9sxtwmb6ucf@p.webshare.io:80',
            },
        });

        for (let i = 635; i < 3000; i++) {
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
                    "Referrer-Policy": "strict-origin-when-cross-origin"
                },
                "body": `ctl00%24ScriptManager1=ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24UpdtPanelGridLookup%7Cctl00%24MainContentPlaceHolder%24ucLicenseLookup%24gvSearchResults&ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24ctl03%24ddCredPrefix=B&ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24ctl03%24tbLicenseNumber=&ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24ctl03%24ddSubCategory=&ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24ctl03%24tbDBA_Contact=&ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24ctl03%24tbFirstName_Contact=&ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24ctl03%24tbLastName_Contact=&ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24ctl03%24tbMaidenName_Contact=&ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24ctl03%24tbCity_ContactAddress=&ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24ctl03%24ddStates=&ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24ctl03%24tbZipCode_ContactAddress=&ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24ctl03%24ddCounty=&ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24CaptchaSecurity1%24txtCAPTCHA=41t84A&ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24ResizeLicDetailPopupID_ClientState=0%2C0&__EVENTTARGET=ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24gvSearchResults&__EVENTARGUMENT=${page}&__VIEWSTATE=mMwMp2qMRFitaavnP2CZeZdKby1o7BcnjtqSMlWqJiNNBc1WZakq8FoJIv0FimSwlY7bswLUwAnF48ix%2BBfUHPRPaOcStw9XKbC1d93x0e9kLrCZzl4PRbsHsJJp%2FAxget6unD5xS1tndrXvKLzg78n7eO%2B0YQcwbphTObLK0%2BEq5nYrgaA5zFnLlzfaQ1DonYi%2BmbYiJP6MGDtJkqjN%2FsAF5K2TgJC%2BAk0P0nG1rmFEZ2zBDStIuLJdHRS3FrM4FK7%2FS7P06%2FVxbh9DDembWpOyNpoF9zaBhd%2BISKjyLs9ZmVZa984yhrLyn7h2%2BD4NmWHOm0cWXCVv%2BiQlZTz11oTMYwX4eqGvQ1hx%2FZZ4a4vH49wDn9jVuOf0naK2cm6puvWatODNrQSZuJz2hnVom7AehqmJY4zEVNGIjBtUq4AJ9bqHtbP8YGQEdsYZx6toK18bOtJWsQVSUfzvb1gKyWIuQqaAX0lRRkylQIhx1zYYhC6Thmg2b%2F73%2BlzChzRD4ohmaY5DKBWDuNmtcLr1NRj%2BkKerRSOtN32ItgzF5fIY92rUnY62hKAQfYpaH9uAcIcqUpRlBLP74en18GoqwyGodnEXnBmbe55ur5CVLEN239tvCSKzwVnvHm3KAq4sDCXCE0GcfQIqZECxfHLIQEvvml%2BefJveQTUQoGlT14cRbgdF4FE7tDHwJBy9NJ3CeSinHkAQzOWoaDfKbnq%2FI8veeMbgWtmee5QtaJrFJAKBlW900rX57DcRrsWrAJcSnEzB1doCtpIsMcBJR%2FXo7tBS9Z3hQOfkTbOFJURmlIQH0VXnGOVElXdTfbaS%2BZ01og6s4E4NjjJcJri67cN0BCIRUSeaW38AmADk0%2BDH6Q%2B9ijXPajFY5IS4%2BpvdAWau8DOEGXXnWfbKG3piTNpKINmPC%2BcAs1RZSkiokMH04g9qyIi9GrwbyiTXVx84cTDmeqJnmhUnNlijgQ7%2F3FoEUbTVwF1wHMglDYNE98xOVd9EEbcsyzGm81lOPUqzaJBYRvEiluhcrrG1hyEVoBaQT46KMSXTlSu2x4IKLJQDIWii3uBbwciYlUVSbEdGXlqetsyX%2FUK8RA6gzGdfk1C3rzhAs7fpSqFFylMkdjlF3bV0BEqj1mkoRftzaeRcOeopZv%2FhlhZZQclK%2FEXPhoMN0awB6VhxYuim4phwFgdfx%2BG9xfWWoJcRbqRtwHGSF7dGN2ef5LP%2F6qEypKlvYf%2B%2BXjUyeac6OJJ%2BvCk3Pv%2FRrGwdUwq5fOtrCfS8XtG%2BMPfkeTTJz9eACy5gm1NkAx8nAJD%2BF%2F1Hj80lg6ErLP63iSD8GkLEezGpZtXRdDtE8Nyegqy6Hg1%2F%2BgT0juL96cjoEctCQd0cIIRkmqlH%2FNMGvDe8DZOYHAt0BB8qE1pYsyA6MzBHaApxhz3nRzGUiYqumBI3QCCLx8%2Bc5FbORXD3%2BsYFu2aVKxA0eeARh%2FO41A%2FwktYNKVVX4WDlzBtedx6OmsGaKNNEg4MWE7Tt4NFByUewj7ndbjBaPRCRmsiiRYM78HFikwwtbbSm2OZQe7naV6cd4Z%2B%2BaLtew%2FtESkZgfmqcIZvBonm%2FjBjEZRV9CJBuF16MfoJ1mYf19YkTJHSrb8U34Aj5ZdoZbByCf5e%2BbbYLoRWxy%2BVYMUwSDtA7kXFWc7fFj6b2UCyF9%2BHdcdLByOLtPSHUJp1b4k82Nki4fI5SYUMq7GWJffqpW2jbhqJlA2bY%2FJhKIiUlxuAS7j2IFhBFoCQ%2F8KUp77daOYgQQqpillrpSYUclIktzuICNtdwoWByi5fODb%2B%2BZzK9zMZtg9fwfe75V8QQCl2NXmqlcppWt4Slg%2FdS4dfeFvqhXNl451ZJ0qx43NF5fwe6txDZlMSs6rWvi6m8Xk8s%2FFZMJS8ZTkOLW1JshBE3YTDck04HLv5lIBLx%2FuHuGlVeJgxLMju3SCPdAtYl1l0g0Q4%2F8%2FKBcOFWjexJXFRcsrrereIaSRazq4T86%2FcBAykfPFSFRQGuNeTjO5hbNv5E0lyITv4GCRfWkss3Ocv%2FpXI73IM0sshlRUexn9f2S%2FFcPmgwuKpupJX7b9WhrzZzaZKQgF5f%2FYyyC79S5RUR4e3PAn%2F2ni1YA80wKuclnnEbUNVCTEPhIqXjszdc6ZhROW%2Fg7HYpBtSM9ac0zsXrMs1BiHhX7slMpupvIAiLGr2yBxdt3Dq%2B9hv%2BiXOH31rgMlyQR2n%2Bni4hhge%2Blq9AuKPaPdgN9IyxjRCkXLPBhZxl5HssVOdvDHu5wJLSrjSQFgKxTfj%2FNjF1%2FUHCsvZucSoYD4HMWo%2BIeI%2F6YFeT4E%2F2Uewf%2B61kYuq7RRmmT3dLs00ceQHZlBSnP1CIgHBWU7btMJDDcgsaCPGIvPb%2BgKNdZWgM94hEu%2F%2F5YWB0kIEDB4b0cDo71D7hewBL5VC7Ntql9yGHMjHj6vc%2FIBIjsJZJqUbi9etXQeSmHnNAf%2FB0Y4XLBLHrGj1BXKTBw%2FQnyEKb005yU5li1%2Fp1IVOJrROUr3aQevIMrrw31vw%2FkZVxor1jLEE4%2FiAXdMFnkkh6BKHAz0HFpbW84h6%2BF4nM5NSi3f5hhEyyJYPZ28StuDcOCPwtEfbnOdonPZWuIGmuwe9d7gG0n6G1wfA1FoFWMT4nHMNGGuR2mUCvWZ4idS46IDj9vvKYs7B4FmztHA7kmeGaDfubZTVXKhGzsW%2BitpZesd1fnE6zNgbvsdsPNbtHTbPN2y6Y8ro7FNJ5ZiQGWUdgRVl9%2FzPMyuITG7diR5ldW0dLbTlyay%2B1vbT2xNvu3Vn9e%2FmFXMD9vxHtvVJl7dHGi3Fx8r7A6WkWUF0Fw8MktbXVCYUyN13PW3RgqidU6eiHCwLkKU1z0yaaMCGpNJxz9doehLv%2ByIVEAxNyk31pHYrRM15j%2BhptUMaJ%2BhMS9fSjOTMPdgK5r%2BNBbuXeZBVmxXI4uYD%2BVlRlCruGrcWhau9zfFZ7G51w%2FhEZIDYYNuSq5xkUmBydDKetdizDbRhtVX0E4Hnyw%2Bzj9h2T2VquU5a40KXrJc29HCE8tskDIWeZOW59CNzPOCrAtd323j1a2%2FsfLrm62I6i0UDwAklSnFEYHolD%2FkFbqb4TdmaNl9nt4TR0Tf1WFbc2aF%2FngayJZr4Lb0Z%2FR9ltumUoSc8wsz3vEzloEGuEcmevJN5Wstz99YBXBn1qgpCrnPeXI%2FZRglI%2Fc2lEFOWh8cehbHLoOyJOFThdJ0WHJg6QN39%2BSOmhAe%2FhRI6of9AIQkrDfQfrGtr6N54siw4D%2BWZJ1S0V6SoeTkAHuvdT%2FwmJn06TBq3eP6N5wJZ59ACGDKnmpX92VFt7%2BzFjEkDETcdaNPToPC9rLRQeS8HZ%2Fme1a0LIee%2BYhgq9iqnsHSTHEH1wSQKfVaZLXcsA71s8CwyzFZ9qFwKVY0b%2BK7f4KIkWDI7y0R1wMnbY4RdRVL4mOiKgyYqGPtltyGRCfXU3f2Ad2iepnLAu8wGVmruf1iHWf8liIojAQDX6GMRlKrJqRGACu3fVwoKqzz65a7ZlNdYv8r7TOlpX72qBYrV9aNbKkkPlfqcf3NnrGzOu6l08nI%2B7VyoLHsiUWsZctkNHq4kvbEMdVDb%2FLzLuHQoLetmvZJaJAOJrvXRwJ9bu%2FcvKsPFhG8xOkbmXwxa0oqUAZUENTUxXe9FzRkxC2gcQGxS%2BPPbnLsYKqaTdJ21SJfwRWwdlYwMf8%2B3GfpVatRu2C0pYUDKK26z4%2Bs8UMA6jcMtiPR3ndaAc%2FtH6wIa%2BhUjwrpNZFDeKY%2BwurmpD7AaYqq4VNClzARar%2FJpIKrE3Se1jrqLrJp6OAK7Rhb0QfryyFOoYRVhUSK9astBrviz9U93sqI7oLfYP9k6sschKfbF%2BKAt1zLmAkxEiVwV4Is%2BhYfngxRVzMCSNcNnlLjwjG8fTbtMljbXeopoUXgZlPYK6tkpb0EhqSVjSNmOpYlJ3%2FNR%2FUnHodQg7jd3pnt2u9tiE1wbTQlr3REuKd2Ux9CCYsBuM8ak3ugdgvPyrkAyenWUnBqh2BkaOaMLUTH9VRyb5OH9af5KrG2WpoymDghg%2FQvbA3IGp2HcbBWAZiFTypwuEFo0TbNifJhr1FBRoIJ7a2UwaY2A3r1r3zsCM0XKpo6%2Ffn1Oz3a4P7f0o3GMaqVl%2BkHyOcovDOsPx4DRxXMU3sO4%2BvBQprDI%2F8ePLL%2FoNE149y4S9Mljs1g%2BqO%2BUj8R9noiLD%2BBALYa7HTaeXufV5E87aW8SF3zDdtuz%2BWgkUIdg7P2GKl9AIWmuzb2U2SvFj3MTWAPw3iOxn0wEYgjMfFSPZOidO4Lg%2FH5R46qDHfMztIjP82zjUflBekbp26QXZN7XuAM4eJ%2BmTn3eoywQwcEJM%2FqkuBblRFYc6uAhND6gMQhENRnzHjDfaRKEVE3uaG5nXs5kJcbIP1Ne67CiWdlBG29IRHRKlCdBx2PbJ7%2BXo3ZiWVPAu8XCFK8dGcnRibtzA1HF99cmNrOkwhgjYxSIjsQWiMDWEoJoTL3CmeV%2BOivAw8M2IBP6bS%2Fg1JdhLSB0eGEPDWCkWvKwqhCqozjEh8qYzGB1heEanWkZE3Ct4MtrlILyRwC%2B4D41x2NJhZHzSibevWM9NMNqceN6FYxAemDcZSE8xZBuEbT3JTZPO60vokKJ1qk7OYKf7XRaoaXzBGP9XNNO%2FedsbIDul98x4kHWIcQwWRko%3D&__VIEWSTATEGENERATOR=44A23853&__VIEWSTATEENCRYPTED=&__ASYNCPOST=true&`,
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