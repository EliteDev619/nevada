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

        for (let i = 904; i < 3000; i++) {
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
                "body": `ctl00%24ScriptManager1=ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24UpdtPanelGridLookup%7Cctl00%24MainContentPlaceHolder%24ucLicenseLookup%24gvSearchResults&ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24ctl03%24ddCredPrefix=B&ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24ctl03%24tbLicenseNumber=&ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24ctl03%24ddSubCategory=&ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24ctl03%24tbDBA_Contact=&ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24ctl03%24tbFirstName_Contact=&ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24ctl03%24tbLastName_Contact=&ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24ctl03%24tbMaidenName_Contact=&ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24ctl03%24tbCity_ContactAddress=&ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24ctl03%24ddStates=&ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24ctl03%24tbZipCode_ContactAddress=&ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24ctl03%24ddCounty=&ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24CaptchaSecurity1%24txtCAPTCHA=DpfC8J&ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24ResizeLicDetailPopupID_ClientState=0%2C0&__EVENTTARGET=ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24gvSearchResults&__EVENTARGUMENT=${page}&__VIEWSTATE=njp4zY6RVyJbgImqAt2KMUn6bDLfywfB7moUcEqDJ3FGpUMtrtC0F%2BljyDN7P0ODaL2AA7y%2BtwgAOtunR2HeS8FSk%2B3EOSQQyGBQB%2BDtosS%2BxzjKvBuLMHYHQfG5SWRDN40aryoQapGZXnVL8Fk9OddG%2FsYOHccvZnTdNAwkQ495Bn8qeA5hfR6xYHY%2Bri4XGP2%2F6yxjPQqcZ6YHt6jxujCAY%2BQz6huwIWheCwEpH%2BeqrZgbGgZ5O6CuosGGPo4gmKIRrtEQODxWK1PNnxQfjX%2FiDuo97NtHqvvg%2Bi1kw7k0z0wpYfuYJrNkiKACbD4MZsvkCq6mW0wC8mjcs44trbr5%2BXZbby1HQy1m5j%2B4tF%2B8ZfTTPDUJbMOiykegQNAI6O9kNvXzRXQQNiJL6zKmOiMM%2FMAXFvp7fRMFkv7EWQt2BXKtWiwDX6ydDH8mukMbrXm87JtCUL6NnOjBw%2B9lG%2FLmFWRycYPP%2B%2Bc6jGETlnmbWmQCKBE8DUS5zeE3a9uerDSRCovDHLM%2Be2ifjlPquNJbg83YpP8%2FWnNomVR%2BGLDjVdwrRzuCXImgVJsgn2PRc1RgTV75H%2Fz137lBpXXk%2BzRNP9cMzJ8598KW1mrfef21bkaw7%2BEL%2Fus1HHkWkSdqLY%2BC2VC3z061DWOeB0mkNyZsGXINVVnBw4hr0pcpZOf1ydlamk1n8kPx9yLi76rXCQhaKtpfRc03jiyHjNBCTykYt2yZujrdjDXcUlHW3mpBwK3YylhOBafFNe9IspuPqIs0jG2yFTGFW8qdvMqKQSDeiAURTLyDXHSSWd9gTfwN2BpvJvPJCr35Kuhzg4p0kQdF0Rn8Fo%2B8%2BhVWJzxrqCBwYoYIGVUzY9gK8EEUcGaDR7m1WYgb39hls17WqYOHa3g9TYcewwHhUJemSW9aTbvtunwHLD1gr0MBQ1GzJUIjB2KlzUACpBPU6YiQlieaGl5irBsI9otV451kwlsOs69zkPaPccYEUfKW2yPFA20JtByVupfcdthLpHFcB1VLFTkdN%2Ff7RVO38e2gI7xu9IFcTGtrM3erINJl%2B2Tv5lM5PA0TpJ3n2ydssUrtWC11MnfUUBhCtWk70R6NLvrPGn%2Ff%2BHVPQdW6Es10Lbr1%2BpFhxCsBJ%2BUYVFPIz5o0M%2FuKmnUr22xJobuyoQAOgJnbFCX5AdyEGrmJO4c2bx7XmiV%2BHlhd%2BBpKTs8ZXzo8eKPIapIho4CAMJzd2VBObBiwyJyR2c2EPM3Z3xbLwV%2F2YeJK%2Bwwo0bMcVcAUZmgzcjRI%2BL3mBa3mp3bg8sq9Zp60dTAnuG%2FOeGda5RS3Uh1%2BycJpa4wAucVU1fCNBKQJabwF87MNjzSOLAcIe8uKVhZjMb3tJGJ3v6JWeZq1xq1wW66jUhtuHtoFoyWDdRyi9FvV8aM5B6Na7qvlwzcvXJO0GoTUj3waIeXNGceJnaPfL%2F70YFq7hFkFza8j90ARvMFgxJ0lQA%2FgVdmwi%2BQ5t0Cb11s1WfSD4guhRjIpqfFHKL6a83EQ%2Bwhweq1UqVmujrkXguISee3mn%2FzWsKvl%2FUfojrUgyQGdCYg3TuPlts3BzMKUiDFrtmOQEXKk1NsnTIrDcWpR1gqA2z1sXRyrtxK6ZaYwHzHE7qsHpQJezFK%2BuUogq5xodfU1Em%2FORBM85FbxKXSuugKamT4sAllGY0v2ggUKq0UVMKdUJTGRFcbdXaLfD3eEOux59rYL9xTmz8HShXGU3mXdV1HdDhML1rjyisGeunENkVkjuf15qHNbiyz0u4ecJhAwJNggyyAZfrpwzFvUUQpQvWa304qqGR2i6cYzYReWLVCg5Ckxa%2BrI0qeygUlxOl3Wy%2BMyVaseJqZbG%2F4jlt6iFff9YyhnNs1ox273EJUZ9Rqct0bIdUCgDCidLtd5NmuhBoDTxI0Bf2fMmnWIX20Dee4l8L3%2F0q6lJ9jk%2FMDTuvohiFBW0WSP4gdt3mQRSBnVBV%2FZQJdvD9ULVVbmXh%2F1mJfbfUNCiosLS9iCrJiPT0VRW1gqih%2FnjqksMt%2BDmVL4PJqQjHqxZo71Eq4laMslRTHlHxD3WxHWPvU0mLsExVdOEEgio9zHhKFtPmF9I1oo75rWk0n0r4WpgLz6XIA7b17jiIGdmga54yaXxNDLAUGh%2BlUMukfeK2J5HZvbKGlOlCsrs2gecm0Mv34YstxbBo6SYpMZF5OMa51QXe0HF4r5BQ%2FoIQNqcTmf%2F6QIWAO5146njo6n3fJfH3bG6%2BngIAEhGuqYLi4ptwGWxkhG4Fh9IQ2uC6235BHxkQKW2iEj14lze%2B2XZ5W%2F%2BsG5OEnJP9bq0QH8jm%2Fv7EF3CGsRVHK0nWMXapk%2BAkRvlobIhGurp0A2ryTGlkq%2B6NS7Ucao1pE4SzOyfwOVrQxcpscQHW2uFywI0TfSODG00FlsfmtWl48BQPawSl4kcRBKK4e52cKWN3AHcRQ%2F4duniHtedXUW5fm2txl1J4%2Fcozk0fVjUvXhnW0uTCrDCqFZ5yaFLOGhPs5FsvwOMdX8NpSOlhhN944U40OvqbH63z7%2FL42JM9hQRT0lLsYe0oYQL7x1kXGm1vlAd1LAQq%2FNe7H4ayByptUkSND4mGSF72PQd4xe974JIbzH%2F5J7oFUy9HYpo68uakv6YnuFl51AQ51SLfuPiJH02Vgos0ADYEhJHSKvxk%2BOuJ8qXcIi%2FF1JaXqORXG%2BuJTNHCqIdQs%2BFdwvVnPu7JL5sx7OM8gNzYpaEvxbu2VN40NZhSg75atR3lcC6v4Qg9x8M%2BvkLMSLi2rl%2ByqKOkH8bRkSNwuV%2FY9LAso6jRajQu7Uj2djUWxAyYX0qijxA7kV7wV45cjMB5QRx%2FaumCuOc9IKQZ6%2BWV%2B0cm0mZblc39VEaMs%2BXWv%2FR1DtjTEG5X7diIgIHnMEjh2sQQ6hjYZejdepuYSKOuRFmxZXNfuswBbv9zF%2BtxzpHYxdg7l0Jr49o%2BPrQEgNhWxVmUwCrFcJ41JqIC8M%2Fk6AaOznzymkYmJaIJvONI0WJiJNXNulH9hD%2FzvSq%2Bq%2FltNZOL2pundjloztzK9C4ovn6AfhL1o8KhIjlIglpEFMFydoMzLImMk9HTfXT1EwWmybm2GdeA3om8lDBxOrNjQmMMzTFtSfbzV%2BPndvfoV8I7l924fTeCiIOEJccmP6GgMwbvws51afpoktDza0MqlniXIGCNHLBzmfNtJQldSWiRZ7wdpoJ2kt1dgL5mmUmj2Zo0OUsflw%2FQjTZAntE1GKJp4u3uyQCosggLryeU7o3iuGfse7kMIgyaKIBQNPro2AA8Oe7Cz8%2BTrXW2v8F3AhS6akocy9DtE6hXRt7F7Z1FfkF9z3V37JZbWO0gxvc1AS8WZmIi192q7THqKCO%2Fuq%2Ftk3f2YyEGZ6t5q61H44TfOwfo7xes8xBllH6Ocjj1eeuBeJ4oWxBfBrUXYtG3sdx1IHmfU%2FT11QsO0%2Bm0aVN1tckR9FfHI%2BYkw%2FHv%2FhMjQU6x8TjabvqGshNlkox9YMa1t9pU6z9oVFFEN%2FdAKltXyHLQm8Hp1R9p3XtT0gh8vX9EzDTazBpIb8p%2Ba9fIz6aA4Hbv9fRN2ew7r2z7NetLyMZaCs1JO3Uj%2BlgkK0FXhU8vYrdVFG%2FQnOpkKkGQtqngv%2FjbrOdQdPLVqSp0cHh4l%2BPSv6wPkf5d8OZAoUiJKYlqexYC8geSLi12XjUkOOeGfuBjSoIkeMnfwCgS8ZyGPmsUuyXXC%2ByMy5vYP0Bul9m3T8tqhva8UkVEsY0JE0V2mR4vvbphCfRMsOClRWoFb8zE8MxEbs1lu9dyuznfdMh%2BWW%2FEW4L1HmRSFC%2Bfn5RSNiC5tCNN3WBX7ZxErzFHO%2BFc3NxcIVYtGNm0WHjRHMA0I0Wedc3RqIe2SkragNDKbKVyQGO1svXNepRzYc7NN%2BsMZBcFmmi5oy1d1SPvypXRsbSfcN%2FKLCN8LsRWqFsEmofX9R2p982d9YZSOjay98rBCqUz1kzysx70zx67EGsOaEqXx6ZD%2BEbB7E6OJLlE5niO%2BWPzHtGHWpx8L8ds7S8G2D8AvremNXKdrV1YbGySBcUXHTHFOc%2BvWqOjjpDF13Zs8%2BQD50VAYbagZrjp4sdWw92U%2FQcRlNFy1ip5M%2BbUtV9KpFn6%2FGrIbOQIORKTngxsY3qvyEhQeWfsMDRMxP7PEa3fuIlxidXQoeXGTiYnW3Xc6tGrsbEi9a9Q9Ozjq1Pv9WvxJalHN98hLcQP0%2FoDZDypkRQbMae%2BQ36xY9puozL0sfUb4MJAbReHrvqEalw1Zx1YenoIVi74GFdwkAF5XNfzubsxrE4DipucM1kzkt6vKHqqlNonaWS%2F%2BK7MxaKUmu6UDtX%2FgDJLBwEhiDbXA0mm35q3CGZ8bLgCQqn3bULR5hOYNLE1JZQao6RoeeYI5hSFCyfwT3mdMW8L%2FwLj9aFJkX0u353ktBbWklVcWPVY35rtXf8GOaL1qu4veONfIFf8JEhgrYZVqSsstKsos8rUn5Q8Dlw6LaiHhCFChS%2BKKbiP5BtzxwLVGbLcgZQts2wn44yUkCcBz0eFL0uI%2BZg6VvSWDH354Aylmq0jDQ1VFcq7%2FED7jJsmfil%2F4%2BJRbg41F4jGITVhGjN3Oz7JUdD6aPaJfuDAp6CZ9R%2FFeRWB43%2B0woIQtDw3tux%2Fl%2BLL0F6fhKZ053hwDkUP2sAuW0VNd6jYerp42IXXiI%3D&__VIEWSTATEGENERATOR=44A23853&__VIEWSTATEENCRYPTED=&__ASYNCPOST=true&`,
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