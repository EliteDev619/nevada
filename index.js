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

        for (let i = 708; i < 3000; i++) {
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
                "body": `ctl00%24ScriptManager1=ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24UpdtPanelGridLookup%7Cctl00%24MainContentPlaceHolder%24ucLicenseLookup%24gvSearchResults&ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24ctl03%24ddCredPrefix=B&ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24ctl03%24tbLicenseNumber=&ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24ctl03%24ddSubCategory=&ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24ctl03%24tbDBA_Contact=&ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24ctl03%24tbFirstName_Contact=&ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24ctl03%24tbLastName_Contact=&ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24ctl03%24tbMaidenName_Contact=&ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24ctl03%24tbCity_ContactAddress=&ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24ctl03%24ddStates=&ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24ctl03%24tbZipCode_ContactAddress=&ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24ctl03%24ddCounty=&ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24CaptchaSecurity1%24txtCAPTCHA=54F376&ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24ResizeLicDetailPopupID_ClientState=0%2C0&__EVENTTARGET=ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24gvSearchResults&__EVENTARGUMENT=${page}&__VIEWSTATE=PwNUOghxzVtCfccozc0uuz9kUglWKdV1xbaQSvYDAJEpckx%2BTIFd%2FuebuZ3mY4l%2FQFHg6pj0KG%2F2C%2F1sI75Bvw88tzGWgp1E2JKwREAtMHK9M6UmH%2FFGVhRwRr63nVp3Od%2F5PfVCdJt8QXa7%2B17iL2kyktGzb0B5eb5KZdzTz49T1%2F%2BQI8kMKjWHHmVlaNzdtg2wtN4mZO1uEvH%2BrVRA3m7xOAFm5zE6v697N4V48KPCUaI5eKzIKAyboBoAduXWEcLG0CYbKjB5%2BbciZmE3FIQbSFTnjYEGxEtcNAMRawNSDCKtuWyOq8ZzZS%2BSIExBsgEV7Dz9cpO2E201d7ZS3MubRaGFGf%2BL103v2gQPvgmsiH7IuNoYuHR7UTK9kNdnbvCusGSKncDkqd5D5UsZKsBN4sC%2FQr2PxN%2BphY2Vm8owz98vS1HYJXxI%2FttqxvH2cnBlaRU7rsexpUOVXhxCuhhDnsDF1yFgpZKxGW1NaBVzwQfUzTNvamuxD2qvYZdKWhNPANvYdHO%2BfKGS2zF0SGmyU4J88LJJIk2Cbu9dgy3%2F3ZDIvqwJ0D9PgTwXSnilhRyQHSTjGbJWGYp7ZktGiXjYIYJbhCjYeE5Z3BYx296GkSm%2B%2B6TpGxr%2FpaeHUTRvfXPdADzr%2BHI5xpb7gxBYDB47SLebL3vGJrSXc%2BTPRgAAtIX7Cs2QPhUS0NrzgH6p3mwxU3aAMZPvxcUlrOrFOSEGHbk7sK633LcABCOwJwXdRRMLZ6XpkFtAZY4I6aHQrxF0vWLwj3GrcOaZgQXNNC4jedt0an%2BxDBDDT5O68BAXmkglyfiQPYo9rJOdAL45eopvKrv6trZjzlTcWwizcS3L9LwDnNPl4yVMagWOtg1YHNNan5S0Ib4bQeOua%2B9MaVGUqNe2zXvjOe3AFEDSiws3uCWKaGRdkxtk3DbLFXGIyUdTtAFoO7FCftt50ECljvfoGbp59cPKs4z%2FchUaa6X34KmrZoNBiYE36q84on5QejxJL6farZTmml2xtY6dcEjKM2sUM2P3k4mzQpaQLFY5a3FotMvG9oNAL3i62FgMP5VXxoEcg0LoVUQwUT6kG0S8h9ShFQ10cXsYROP5bQH8qTdPyWRfvDgYn0mgksvpn0IpsDfPIpPbmhPObnludgkDpLip3P4HhaL%2B0cLqL7mOaMCtaCV5gI2pGbFRAdnaTnXY3DLHrDU5UH4yDfDC4w9zBM23A1%2F%2F%2F1hwIDUGlZYKfM3NZ%2BXRGvV7zAHXmqIfoNPihMcpakgmahWYvX8xCNeEeefnIjW1DBjlI%2Bu3WEQwCNBE38IiXYMZd5KoXcmHhDdLLdtFLsqW3jol1GV1v3UvLFFKGfDlbduNeGq3ZXJ8EjmVVleXuKTnJv6l8Ab6o53xLmf%2BEI0PBy6rxvezhv1gLkLP5Zk7EqWciT%2B%2Bj1j3V4EW%2F3x4qisAHYUqC40fVZKw%2B2r5jb8WNcUzxpz7hWELxIMiSlASRW3lctUVqxQVTyXKFulIPcl5i%2FLo6lbjvN3QBc%2BsH0WDEgzbecxWKtr%2B5N1daRnewWdZvFaP0BMSgB1buu7cb0G1PN7Jk%2FFFJd7Jp688osOflyL2k4NYheOQndMdVct%2FpSRvKeKbuwV8UD4TrlI9r%2FYJon7A7zsoRCS3p7k%2BwciSznh6%2F88nIbGC6EGnYQ6rgnU0BmItaVTFHYRIjvXSIAWXUzQWSdVoBCZJ2NqUzDGt1mXYGHN4e%2Bw%2BeHA7FvEZ1ZJc2THzcL3k8dKxwwX11dICKp1G61QGPkCZrVClRYejtmj3pdXSXJ1j3oomQf%2FC07taYCl21bQGg3mkbHxFA9CZYe%2FfexMXBfiM5WWNzQAs1EcbNSpjvyskjYEqsAaUW631wGlqpJ0jzQTL2jkHWUzZ3rW411imfq6wloZeyKzPGRF5JAYOMTGBEuJ85cWpkcKJMXDdUEV4lJghjEw3Cqsy%2BcREwQHr%2B%2Bo9G8CeQIOL61MZkR1XWFQBLcAjyPMM5jDoiGrN%2FWlt3mrvZzcEOIq4QH89fE2HjlES9KaTvwM1oPHTf2%2BL%2Bd5bPLENwk0N5lc22d7Yyoe7Cxr%2FDJP4RI4Xhm97DfE4RwAz2GG%2BaFv9OtuaNv6%2BbpKeAcKa%2FTIZ0uq98nQY74LVs0qoACy8i1%2BliQ4b%2FiaX7DppgQUyAXYaGFX6WwbFfA9g0fsST92QGIdESnPiw8e8Z0QbM7ikiVbGCagQizv%2B%2FdXFTVOzcQYk5z2jcjy8k5cA%2F6iqTZXUKLcAmWgdFFspZZFS2Cm%2BXWYyD1NPaQaYG%2B4Nl56nd4hdIy%2FY37pZtI8Q%2BX%2B%2BgWFmHLnjX2284N0QMazOutyTc8c1fXaF67VCCGz%2Fgvv2b45yVuLwTNSGVsGX1Jk%2BOVoHngS%2BUU9uLoBc5lTTY40dt4d4EEXfOQG4nMHeH0KlBHTUzECg7c1ekLBuHo0ZqZJu3e6HpDkHZqc48LFEmMLetdZ5sRgWzx3uv9aU1w9ze4AcVhBT49CaMwU%2BXNIrSxbmRVZw1AabtHEYZaDovY1TuCM1E49JdhdsuQzYw9pHUpqd7eAUOpmXf51ivtvUCHLf6SHFE%2FCX684Tp%2BZqHeqRhlxJAD7NLZZ2rP%2BaJndWGupANU%2BkekJezc%2FAdFknIiTEpv6LCmF9vVIaW9DjVUp9R9x2tMWJPSMaqzuGq%2FaJIj4Rl6ag69UKAD0BVlN65yx26QptV0YxPczr3tuAAilEeR5ofAQ0LeFIUfXg2RA9TuL%2FngBVXT%2B%2FE4wT5YfYjWZ2tzwJVfurZ0ap7I8JLkPHv14jgOIszh4tInzJNSfs1BR%2FXQgGDs2UrBSpCaelTYoewnBOcQ8PEUQftFVUJjNg4BuDEkZu%2BVtXIyizme%2BeHUPIdnJzcgw22g0%2FTb1N7Z%2B5XKLOKdN5bnsjRj0X5y8uGotaDdW9xD9CyTB4TgzRDUooS2zndT%2BXK9sNcx9l15KeugCjcaV%2BjdgoA4KvOog0KiGXjnMYcjzyjC%2BvxHYSDTa6gFJ7ML9VEybMiQmiDweXwrjt1tY0tZzz456tXlTRr%2BM%2F5fmaGHgrEcpMzky4c3fumvW56hUEU0ouX5NbIilN6f%2FHigW7nsmFS4Mo9MQt3b0%2Fhq%2BW2ucRSfg1aGSg%2B363N%2BNmFjYqXNejgmUxFeB9pUX8UK2Li3Cz6ly78Bm6SJewEUpoVvAfOsVS6%2B%2BdtJEUwvrcdFEHASFtuvfpsZs8XhY4rXSDc4N1NvRFwqleukjSVpigHCNAwBKvVvS%2FU%2B1HeqfuRe3hNxofFk3vktqxMOe7YTlBaaTfzNl4uKbgKZ2uWZPNOS6ne9JqzbSrD3rPaVXEl3f26it69%2FvF8wB1ANkkMsLUo0uVq6LgegLc9OCSyuQwjvBuZuI3ALTPL4%2BaULCQszqV5UdRghIPnQkb4ZG4YZkKuaH4vLZuxjCWtcr8Rfb56%2FmoiR3iQi50pUNqrIrfa8TElsIvu2haOXPzk0aJu1R7Wauq2tq0eOjB5VbuedSRsFcfwDunoXhMP7RXe1qcvSa7g0v6u1L52d1fPt%2FwN7nHI9h2f2ZUPDLf%2BQYeBCbgsK3xgxa8S3HvHpNx3vYiE2BY4tT0A63wOSDXA9iKgCKoE%2BPQIJhayoyKAQ5jfCfnG0aR%2BuvOWIPREElqDmsLc4BRrzko4%2F6sgpCXk7m96cl42OwCLsLssljuDJX5wJQu793nXOh3dFYqpiB6DDb2uI5x1SjvJRQqO5oLRVtx1wKVZx26eS6TH5sIdVxGVtUF6INSViQ0hAO08Z5xh94hd4Dstz%2FvU5QT9An%2FG6G77gExpepW5Wu%2FNeFImj2U1gAegHwvq%2FvVjGc4Vw0igLDuDjFmgsMThiDk97uzloBhudTlnSFsuebDJ9z%2Bpj6qId%2Fjrp0xsyqLACbOcNugnmkWLAowuD7Cd%2BsP2fW05M8YpiyTdlgZ%2BPgpDsvKYA9IW2n9a15bGwcIKoBCRAr4EMjcD1xlyRsjlPGnxyoOPVYQNRLAZSI3lC19Svdhu%2F4su%2BmEe7ZUdkGAaranOa%2BnnPuLWjfhiZB7f7SxNqCrJrTyTsSWSlZR9C%2BdxdFXfiovphqV3jG1Ce3od7Yo8JEenzKA4dlYLsU4Wr2wrU5mZ1j3%2FxqYwygAl%2BvchLXFjJSxoovV%2FTCTGhfZlqF%2FGaFKrGSPNfPi43qwfdwUq7%2BnqcAnvGxZ3PaulqHgt%2F1duD5%2FJ5gAf%2FNHsxGKMyrj0oA82DVVYhFRIi7dPUnTY%2BMtX37liziFveikkrkLUGJ0N%2BWzUJPnTEtBU8vMAkiifgk6HYO2ju%2BHuF%2FyQvaYFm0lii15f4HfOxryYmnqcwEWa0NV%2BBFNsJ8oY%2BZyHuWNDt%2FdVimDovZfg04rBTK3fIVBwK7flTLmGiAF0X1%2FY05WJlZlet1A8CWd2J%2FeEZF%2BnIqKCVvX39%2BbvO9I1iwlf7ogiJqPpcs%2Btjvpsf55qrDpKqN7x6s5IBONBkrURwo4ptqgAR2X7jHa%2FpihQyJztBI9%2FYEIp2l0QLE9t4t68yQJthMxQek9DK8V51lDyUK1fyAkc1nOVoVIPFx0MjZIR0nMImCLaqdv6SXFX51qFHUMwtTs3M7UWQcXlpG0iUwLZyURDw6Dn%2BkcehJTklm2K9u%2BTaBcYhyyoYbiLogv0E%2FjeiHIWpR7WjzmD9x9eeoY9zaT4soT00UGa7uxULnOfNUJZ1b0oNJw%2FRkZvS0%3D&__VIEWSTATEGENERATOR=44A23853&__VIEWSTATEENCRYPTED=&__ASYNCPOST=true&`,
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