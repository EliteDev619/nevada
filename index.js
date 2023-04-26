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

        for (let i = 564; i < 3000; i++) {
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
                    "cookie": "ASP.NET_SessionId=4jzmd54ampem2zok43jwmjxs; aws-waf-token=1745dd67-4a64-4017-8025-ace3e2df3f05:EQoAoKuSH+8AAAAA:NUxZ42pGNmpnDUr+iyQ4149KaJFO/rFcgtSqBrtmeoXY6V6jwFYmxCqgauj+wpwrqHPFzWyzRYh7c0vsUgxK5hEx94gwlncpFpriBQ3cd4/wiELAncg+Ao8bHOpL4i1XiEVkklw0U3jkwbh03E1b4ogNdj57J+A9GwpHfXw2OSdD4+EZSm6yUwSiDSwzVFYGzwzUxys=",
                    "Referer": "https://red.prod.secure.nv.gov/Lookup/LicenseLookup.aspx",
                    "Referrer-Policy": "strict-origin-when-cross-origin"
                },
                "body": `ctl00%24ScriptManager1=ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24UpdtPanelGridLookup%7Cctl00%24MainContentPlaceHolder%24ucLicenseLookup%24gvSearchResults&ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24ctl03%24ddCredPrefix=B&ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24ctl03%24tbLicenseNumber=&ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24ctl03%24ddSubCategory=&ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24ctl03%24tbDBA_Contact=&ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24ctl03%24tbFirstName_Contact=&ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24ctl03%24tbLastName_Contact=&ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24ctl03%24tbMaidenName_Contact=&ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24ctl03%24tbCity_ContactAddress=&ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24ctl03%24ddStates=&ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24ctl03%24tbZipCode_ContactAddress=&ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24ctl03%24ddCounty=&ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24CaptchaSecurity1%24txtCAPTCHA=8XqRcT&ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24ResizeLicDetailPopupID_ClientState=0%2C0&__EVENTTARGET=ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24gvSearchResults&__EVENTARGUMENT=${page}&__VIEWSTATE=a%2BZX8rjTk%2BWSFLjrS81oKVXgx%2Bl4Ei0dLkqO07HNj%2Fagiax4dsJcD32AupizSQH7lbGoBcF0Oo2NNpUPL6f0nmNQVXUHgdo8nNOodgFikTRxB%2B6s0gCWEWBljVJPKuvxF6dQ4NaAB01vODB6gjqiUVcuudMW%2BxQTYyyUFhAYqw6SKYcTairh3Xb6ScnSVDsAt0NLA19PT5QjOI12tiIWJvlCcId2Ya9H5KWaFxIAKfIXNnobG0d3JBF17Ec%2BvnFYy5GV2HgwxjMOWlKNgGRH61ZYPE4V505aCS8N2simagiIKnnYhbXrQpgMqVjB2qfBy5o%2B6xCLczXFfoGqhy6va%2BqmPjUzYuz5Cm9NLpA9jGlH47YNrw7FE8l1G54Qs%2B2lq%2FhBHoKIOcBGCmeOnwCNCmoMmxbtSIhCDeY4fvNm0NBIKy5e%2FEM6ilpjg6AWPbcCGYjd4e8MZ0tP1rDoIUj3AFem%2BY%2FsPgsYzQ7u6DnfXPxxYoBqFt1v1HiqIMVL39EriejdkattQ8MRFS2hv9cmOEr05Q%2BKVzKHtmZ%2FlqmtOQeTM2bIlowejSZem%2FgOOmu%2BnJ7%2B8BO8ZNXdoeKgHEBQoTIljPEXRy45wrx9PaAyi61qRgnrO7Ak5WlaoTeeslM6c0rKJvYSqHWosdBJqPtL2FFwOqny1PShw5Qsi%2Bby5IQ%2BhtEWEEOqLMbY2Xf3BCrfWvkefdn5cG2UqZ406pXL%2FK6ZLeQqJ7kH36Q9xzFzKFJF07Oki9R5lJ6FczQEuFtH9Ff%2FkHjOcB9lzSuOwtsfrztOaG6wVFe6Mgp9Fji6HNWYvQ1kYa1lJGpcGjTDupSZVXT5mU8kj%2F3TwznDdOnjXadAHMsm1pSVM3z%2B8Gtkv7CrCBYxY3jpv8Su%2FeBDHMAUrIe5bSlqi%2BwEhNPyfY2%2BQgZoNzrQNOuMUPHZAN5Kqtud2SYnG1fd4Wnlg4fJiIzjhCLQWKRnFeAKzecssVfzNkAHdm82%2BfzArgeysgpS3GiT2S1oHh%2Fm3RqpecFsx8vrTV31axc%2FpW%2FyuWIBnD%2Brpa2ZzltKvV5WUmzAd%2FsmPx%2Fj95YsEfQ1fDcKQRQ14D5AvvYh7zJuVbjX29y%2BsBeCKgVHuCSITAbCN0gmTQaf%2Bf6gnCt71pEmlSzFfCrszdT8PbkHvisQmQPY4UlQseUtYW%2FqHHbdXZ1hqUKcN16EMcz05csr7QeZ1JELPvZFTiJjlk2PNDywLvb4vmzrmKFeXo6vS78LVlxpeunq9WCKfvbAiaV5mVA57UDReC0I7BzF7MjyxD0EFgqzAvdUmt3Ef4m%2F74FOmXEUmz5MiQxWFwNHBH9sS15whbQBPyvJcygrGzbdGn%2Fg3cG2Y2rSAvRqIbYd4i2fEvfm4v%2FbCdhjKOdDEaSjIcvul4GieOAOYs7gtE2eIRD0tYKionGSG19mlXRd4MsqpyGj0rvr2Cg34bjGcwsCRQoeCZU86utb0tHMreOhhkU76TgW8Vy%2FHVF5Do%2FLuwu1Y%2BCwcmbAqAuZQk3BQi%2By9TgR8crRWfsg%2BUrpkRadvT3I9qRpqple%2BgvA4KeCZMk8XgnJk%2F7sqPOO3x6lmDAZcFQ0gqhrbOHW67sDMf1LLgcW%2FEFLyam%2FO1%2BPo2taT9c8mZkRSMAJoWSOAD1a8lT8u%2FYqqoPJce8JHcW4ED0%2F2DMA4AoR%2BhS0u4kcP0KCNim5vnAAkaZzCLjdRy8QfIOtObeofikT3172gKtZrL4zLHTr7pRThn6TyGqz4XRlSczsusL1q7uFAtPp9H9xZm%2BnAhe5f0az1JUPW6n0w0uIoTa5C5i%2BKAR3k88Ir%2B6N0ZFn67Xa%2FcN8jFI2YjrypVGAFDaJiGK%2BR0Vl7IGG1LH%2FAKwcR3S3IKOu6MmyMpLRFRXa%2BwsT7j1zFjbwEpqvDEfHZHtxAyb8Hv1rh0%2BWQqxDkiO4BxZ5o4049ghkxzBouDhPgly48AEwcm7vCDDc7vlFYu64coLjb5rEwWE1rSLqazO66Kd6fWy7trDtMueyLt03FD7Sl0pfHOt2ROwEh4%2FQVO7DNkHkwrDO6sxk%2FaXDmg4aw7%2FUM%2FOHPCYJiPEDIQPBlS6Uf8DwjI21nYUKuDeixFbIYPriS8L7Sotu6BOSU2nTOgPZUsbkTnxqykC790xvurp%2FcqC5u742SrJhPd4OpjYGRcQ0W2N2hJhxnrRKQDbXvTRJ2LNQQmauoH6EwKD5IQLo0hXB9r3Fv6poRQ7lfJ87Yo3bRM9VXy%2F6k2LA9XLBWrt3y7mvA3BNnG5qXXZ3wUENyU60kChXOQPL3D1b5eohUE00dpkezFj4WddnyCxuIy2ZwHRqb%2Bvzl4fhpItkHT44fcPe1CVEjvetSxBY2FVS6j0LQ8yK0WEj1dYC1YkNBZ%2BCvD6lD%2FflezM4i7BxRmIt5wobfoXVDEKyo36Z98z3O%2BN2AmRPW1h7WODox4UTOFyg%2FHt2owH93a6O5BoUjik07UEfFkt2ybGs0bzPCuxOhWCoqllaGqDyHJV9Dv88zkKpqcxsJ%2BvQ1u3OoiRG%2FjEYFTu5Tobv4WGJxmwB9EvRJhjIimcDnaUbeh6ueQ5XiI2%2FsJ0266Jov9FBoT5ZclmnCK7vV9VklkbCHK3v9eHBPH%2FyY%2FIwOYeUHN%2FKHPILOBpTnyaGp2DZpSQOc8ugAvoYeZEpIBxUgvyTGydoAzgqYyIkUeTp8NhOklrlLzlbd7XvCcap7sT1y1HDgXB0enoruvoGC5EhVenwLe2%2B2%2BYyp6rM9KYrX2ZHkEpLnsRYumJ1RNMPfAjsMFEO1%2FizM084Rz%2BIhAAiDeSFsPkcIG7JT0lXIXqa0QX8OkaQ9AhRef%2BuuWwExhfQ0UAfyJ3CyubDeX4cALDRcrvoIjoThWTTf8moa%2FZr7PYrs6qmBlx6ka0Kq0yKRGwEvaF3JKCkAlcn9vp3lvDRxKDeAwPjoy4bqiybt%2B5atkWCxiarDIwxxoLaqxAgnMtfl6icNRIjy7LI4Cls28zvI9ap%2FFQrjZHIKfrKO20Hu0joHyeue1NBNuD7Ak9dgdsdzMgZKtYRErms2BuqZfjlzfaVtaEsSWzooDzKcYP0eyHa7ErjEn7VGlq6UDTm6PDQZaf9yYaOaO7FQtFVrvUtWVWZ72Y18oZw3MKw3AD%2F%2B0at1TuFdfgM0KEjKI1eIw0KHEFGMGNsx1jbHtFLPTx%2FEnBGIbsv0GgNUEjJHuEsUcW4fhRGQaE1tUGa3Pax9KvWweyLVroXzYq7yrXaMSx71Jo0D0ZIMVXg%2FhygjYfPUmEGuba5bru3Z%2F%2FsIrCHaj0qmk%2BWJx6aGXKt6auYg07uzBuUuFP%2BEQefIN5XYw2AtOEgGT6i%2FuBLk8mDIGFaFz0U6yeRXH2W%2BGx8hxE3rpJDk9kRXYwhzBf0NS0tezCZG4uPbH2onzgY8mbrqtP52YC%2BYqbqP4xvgGnev5J2KoCrkmfylOdzBqiJf265KWx4OKOdKprQNgxZOAMfIsr992Zvqh28UJKGy%2B0Bn%2BfGZf71lolO1XrfEwuEGc7O1siN3nO2qhkte2Hm4PaFs%2BmgzOb4W9uAzQPMaefedYTFBLD8PErDu4LLJQ0zn1O9MW0RmAi3Cis%2BU0GvDyNtKlgmOLTI1oJTI%2Bypv5qdUkC%2FOw7y9pX8DK9DZRhXXF3JzAzL%2BxLqv34lqxzwPEpQe2jzH3H0EXLq9RmNNGqBmFj6Tcs1zv1sqML%2BrKw9HhEaurgxLqYeD4hmRvxrPsHVp%2BIpbuQ8Y1FV0oVUH1fhWdi7%2FMAmj9IJo8T4Liv%2FwJYVmQ%2F2hBcvBX%2FxZCjHuoc2xq5zyswwPn993zDFFOz8wVxibh0IHkFDE%2BpPbLEMH4LZmPvE%2BRlWYdynOitnf0KJ0Nr1b9HOLvjykmbqpelQuGKwV1BE3T%2BZG963eCXvtmiSOA11YoTv8R64Qq1mAPH27qzoIhtzieM7BY6J0GpYtmu9deatxepm2mgZ9awfb%2F8zQVQH2sXa7qayQv%2Fzonnk32qAdK4iyHFPdBMn7VAdXqqgkZ0lawhzqSaRICXhnM8s%2BNMUxNfg8sjYnYp6kcKDDIvftzJI6mIf30EJjPeG1jivsEO0j2qmgMHsebDeOSc3HjgYincb5khMTPA2rmxrXoCbr8dOGkKlukxxVetlpPsyumbr3Ktb%2BWwf0fjtpwHfpbfFxDvV6NaxxfRd5C15xwZOJJa6xwkNVe3nceJ%2F5mb6OEjtIrJ46BtbrbHbQ64klc0WIR7SAaddO6cCjn67YW7WOJn57QVzeKls4%2FfMy10TRLVIQIBptf6E4XfqMrQXmpRXWWux6%2Brts7Bjt4umaXSwxmDMzPR4Tht%2BxUuwboZXi6UnZHpi2kqX8CuUOR1HlnOrBP%2B%2FU1Bs8D2gYsGFek9tFyIJdWU%2BwmcR6ciewaZpF0NCVBfZTUNtD8DXzSVnTxfyAgHAHfixRCJeVnd9P6dfb54qnJjmxtCJGgo3%2FtdVvY22RENKBWTwjRY3ZEXKyb34UR31fEhj7XU8QTGzwU1R%2B6WEswSP78ePrEdestAJvbUJJtVjOfYH55uw0m7oCdHOVYdplfihQPRPatk%2FkmFoTDN2pU7wPNjYUp6laB73ACF8K%2BD5clrqbeGCBElad45qblsbDXZq3MsKjFQzGOjHw%2BmI%2FnfKUf4StsRX7e2RlZjfuU0mzCEbR4PJAOAKs9jRWvIG4nfpbLzPyXwqLOR9nJkqmzPtutw%3D&__VIEWSTATEGENERATOR=44A23853&__VIEWSTATEENCRYPTED=&__ASYNCPOST=true&`,
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