const { gotScraping } = require("got-scraping");
const ObjectsToCsv = require('objects-to-csv');
const cheerio = require('cheerio');

main();

async function main() {

    try {
        // data: new URLSearchParams(tempPostData).toString(),
        let tempPostData = {};

        for (let i = 56; i < 3000; i++) {
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
                http2: true,
                "body": `ctl00%24ScriptManager1=ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24UpdtPanelGridLookup%7Cctl00%24MainContentPlaceHolder%24ucLicenseLookup%24gvSearchResults&ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24ctl03%24ddCredPrefix=B&ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24ctl03%24tbLicenseNumber=&ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24ctl03%24ddSubCategory=&ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24ctl03%24tbDBA_Contact=&ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24ctl03%24tbFirstName_Contact=&ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24ctl03%24tbLastName_Contact=&ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24ctl03%24tbMaidenName_Contact=&ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24ctl03%24tbCity_ContactAddress=&ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24ctl03%24ddStates=&ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24ctl03%24tbZipCode_ContactAddress=&ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24ctl03%24ddCounty=&ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24CaptchaSecurity1%24txtCAPTCHA=154TwW&ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24ResizeLicDetailPopupID_ClientState=0%2C0&__EVENTTARGET=ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24gvSearchResults&__EVENTARGUMENT=${page}&__VIEWSTATE=z%2FRFshhozjRk0lKF8uunJ2r%2FDPYTqL6OczUFolGYX6bOr48uqBd81ASCjlMq3LqitGjVehSPeMkLQKsXN5hbTpbkaNs3P3FgXkoY%2Bq99ijO5ymCzFLvtJzheHJOcbzoimRqofykl1DptvUBarGqkyQqeJ3G9ev1e54laQIj1zlLoajCqv7WYm6aj4Ih1DbVvWQL2wlfbsaRX7BQRqGZFFRBBU%2FaA3k%2BiVxKSh5XYuWoPum0oWmz%2FNSnM27aZAaeWOy8jrOSp%2FW748EuPt5pMVvqXJ3R5RhuV5y9bDO2Cjnpr0%2BzW5hDoTFs1rb14KOkP%2FFeJKeEh7DMLx9mNYBi0rwz41ceYrhPMLzhzjy9uqqfkikyU%2FFDLB1sKS7r%2F5%2F664t2wLnJm2xmEsONaKul2DK5mherI0wLmDtp3Yw40tUg69RWy5mV6ZsFC6%2BwLVi9KSgABwSDwsl0RrwBxwQuVCFikOC2kzCYeY%2ByzarYYshn%2F5QUi%2BrITM2L3jSkrmpoXGyNrWHE7Yobw%2B9jgDPb315E5a%2BP%2FLODtyHlB2faFkkn3Acomgh%2BrI73a7ieBmPqr6EKtRBs4hFD9yS7F%2FOC0cS87ua161X4A5pyvZc0yPlWOykrFE%2Br00dQOA9WUg0%2BThn98GG1mI3GdAjg4XSPBDL%2FXNSjbi2%2Bc0TrwvX00n3SaGuEoMx%2FiZMzmUpwaVtT9jOno2futQAiqsIJag48CLz1y1%2B5olArcRDykHUo%2F%2BNlQ3bbINPCbQQAT1UECg6M0Fp8gEIZgUvbaPcdZfmQsHQECGxRjHK72Y1iyXsbXFmcjHx%2Bl%2Fd%2BMc5ZGK2uV1N27B%2B2onhIquyRZDkAGb3ypHa%2BnipoXkfrHxqbgtEuJmK7tJxvsdSy7fSN779IioArJbbm3PbHTqYlAFS1GH%2F1h5KqVvkOorCz7YiivZB3YnDWXSjjPwDzIlcUegvLxJtOOenWChnsHHR%2BlT5H%2FaBcOla3EHekGCGjseCjbkb5mo%2Fsh3eKZb%2BrtPV6TA59UsGZjQVXtmcTPYt0JfGVGacmWrozKThcqhMDpPvvt3ZcYPHlE95YgCRZKKsKSXWGM%2FCGM%2B0wTOE0YhjxQGDt1%2Fk08m0WnhbhuF%2B%2F3Y4a0ur4bbOKTkykBwzgOxlJ7NlYQXs6qvwWGj8Iz4K1QCfRgfVFgmE3kEHpymaS7Mod2HSFNpAhWEWrQMXQyegJonvDAqqGGympJ3Dj25NQdRoQGRfPVuwigKECkMXZoK6XOHT3LG2jThtYJxrzXkrhkxAVykW4WhFDW8ODAv58hj%2BNN86Q8y3gFWCOqPCo5A6xIG31s4ke0IJyH6J6N1I7htGIc%2BDmYvBf3jI2ZTUJH43RbF7OkqrX7bIVtxjLCq%2Fqq%2FytOqEegwFkj1HdGWfa4W6mUxNFkSDokc8iaePykhU386V%2Ft0ZgDBTvM1PjXg9HC8D34i1hUFv1sj8kevTs7pAyrLjYKo2zDxWYrHvPHn%2BCowyo4%2FdVevoWCkc4UF2RBAh1FIQ26FA%2Bdpgr0tFsH5DBpM%2FMVVUn5LSfhxvw%2BKOz0uogQrGgPbpqtOiCW6T97jzp61c7sP7HgeDb7UYEsVcNDBQNrD20VbsRM9L7IxqTSC%2B%2B3GCRF2I%2BgoWnuOFarHzwHPIartKCDGUXNa16vP%2Bybv9LplOsYYiNpdHrbGQcJB5pGnd1E9A6N8WMevROJVxGijPDiZvSi9kneQOxPcn3ovdLiev3bXU5fC%2BWQVktEm6nt6GDLNdUa7a3zPRjsUAQ8u143m4cHz4E5N%2FEJ4s29N0c5dFYkJX2fAF%2F7%2F5fNH9iM1T2yzJ%2BWpmHmXuaq9sAh1a%2FgZuXaddD2WhitURgsTxxrC8rmzHIvGa%2BQbkvSe2j4XD5vHCzbI2khrThGos5vr0KWxg8GtG2vQ925OVoAWKsDwFr1vYAHp6BEQwFFH0HJi0ycV1%2BA8UHApMl1Ts78L%2FgK7Qowp1IMPyvDE2KzYqsSjlOOpTFfv1xpw%2FcsxzA7bMgzCz4Cz5XmtJcY3e%2BiulA4njsFL8MW0wyRtSnRmazSiOhU59e93fBJVKBDMkxynWzvf1RFyRG2eKL3iysEvDWdpx0JtvgAKe%2BYP6IezCZ0%2BiDU29iCWWyU0aOYSbY7pn4y8IQq9ZKXXBRAaOA3ai5EcSwXXkEXWXLi0IdcWfG1WyiVYIHJ%2FjImB53xXs48QjXfc%2BIXBmRxPLZIOOb%2BEnlgMRha5OX42bj8%2FDgdtze2V%2FK7Yw7ltbGaNSRfQf9SlrBzlwk2n9xN%2BmEPZdkLQ0iNziOfVpLEbDWZ1GgdYCFGpWhNMaJBpFk8XycssRVesd01dIBLCzshN39uUoJKZ5SoG66lbPjLjuokiVEVfAFiLS0TxhTiCV9r8jOPycO6hSGB7U%2BCZp2m2NMdtZsY8bgXTMTTfuE2FFMDfk%2FBzvGfjz5lzI3uZvW91XjS9TrmIw72%2BDiigWI2hE0GmOUPpcSYZ3SfxnFpzNpOHawtj3vAiveW0pxpIDJMs7ZZMK3%2FHn9Ju7HwypZDCIsMC5T9amjfazZ6Bhn5Oym%2Bl3t%2BDAHbbuXPvjJLr5i2CIVzs0v7H%2FWOPncUz79vaaQNuyd9QqWNV3HB62RCB5yaBDfruuGOBEwf5hyIALh1bTpkrkqrPFlRiFEinyAFpHHicWCfOvoXWs4BKzUSTzxKsjahguUeki3uNI8VxAihkpkSi02ZJNVFZHKZcYmF003ETZKPHEObp%2Fjb79LwU39pWCDmj1KEp8mhp3oTbtZjBgrfQTJTFoLh1ooTWRgDzGunk%2Bs4BVn%2FfUW57M3ZeTXMRr1PN8GQzZyP4dG68Tv5ePk2kCGJLTqIvZNSXdbKLILMus6p9sreUZ53651GpTIYoOoLGz2BF4u5pr8nyy4ArTk0TeacNmCvzDOkDvmvUg2hIpPsfbn5ukvAr4UCiAqQUwZ5Up3H3Yz9uD7taU26zcrLny0KXgV88y%2FXl4jmt8BiiweXlZkqkAIe8BTyRg4qGvcwyc2%2BbmyiXyVoIcaiK%2BDxX9mHeiElSpzDPrU4VNqwdl3zEdXfa79EPXJkgVCVoe%2FCtcoRWRTvNJ4FabDLrjo2UL0kg898HW8MsreZVmuYhS%2FNvU2OED1S4Wd2Zc%2FP2wE1hXSlHZGQYv8SP3OsdJFbBFU3P8Q2Vzxcopk6u74GUEcwEWIrD8Iu%2FmNYzsbDIyR3cTkGMTS%2BIR%2F5Tlz06jZ%2BuxbW2l2pFztr2ti7Qq6saIYlmr6X7qAZMZer%2Bufu3w1lYIwq0gTYnhjw0BHPRE1cIJBHDb7pOR0JKGgKqot1Y1cZ6AsFzjdFztccxwq%2FbgwYwcXk8ECF90n87T8jWZNgzuJIl%2BiLPH%2F%2Fa6gjR8dx%2BSHnFggHrwxyQvliowgiE9WN8QHAptLl1Hyjv%2Fb089wKV%2F6QufcU2ymyuQvt%2FoSyZV5GTG7hi%2BnPjoUJ9Hq2UFPo9GYQL3bCiOCQ6PmHalL4Ij8Eb3QWokA7a9SKkSWE58g4r5QBRZXLvfeRd8nV5epV53cnFKUMsy5%2FI0ed9mBBJx5nrd0IsOjRgN1YuUVcr203VhwfqFWN8hWaG6w%2BhAaINB8LJnBtMUR1kJxRHbxo5Oxk2hZD0nksFye4aPmt3bpO0a8aX78MndKVDYQuWlqIjNpggM7VqP0m1ubJIKRx0an5aUskzlZg%2BycVg%2BeMhpUWCMOlFJgrVxR%2F1QpZSL9atrTvCQqPMEiAbpvtSfdeIgWjRPs1Yj3YhA3NoayU8t3VZacXSTQnofO3hY4d5pPnOJ7Wpl7LIHb9jwOMaWsZukoLBXOYL1Hz6vAUUK%2BKeR%2FazCSXi2AaGFm6Nh3w8l%2B8%2FyEIa%2BF6GgRulim3G%2FG0OceBEWEDsix28rg%2FKaIHn%2FjNV6pXpT2pQoLvI%2F73OxW9YDLQNglXENeHw0v1R4JKABAeqJS1zLFKZdKALeumpO1MS14QBbgLErvOb8956K6STV79vnz0l1WsPc5O62dWB3k8A2biGXJeQZD4GsWixmghubojlFZVaLQbDG9JBrC4S%2B65%2FBc%2Fsw3A%2BPlgijG%2B40X%2FY7K1lEP%2BjE2kJVcGnEtOsXRCgmEjv6ni9h87e3rcQq870hjkOm8r%2FEzDY%2FTELUMMLaWjVJ4uRuBnkpktMPZP%2FvsGSsId7dVkXPS%2BjqWJucYdW4ssJG7vP%2BkRlCckdfQXfMmnH9kKr7%2Fa%2FHtwOEjGlIOAZNd%2B%2FomeKECIGs6SUYKnlkir3%2FKozyLVXqj9xB5EfSp9US2cqKgkamBYjkN9YRK1lM6f5eKTRD2QtKbU61gkoVY39KJMDPPQpX8%2FSGxUuKVFEnBL4p4HR2SVhhilwGqR%2FSR65lpIC%2Bs2ygHGFornS1oe%2BDIMaISzl%2F6LXIubFRbIsvuBlCWP9CK5tymQXMps2KPY6uVlfkn%2FPXr159I1lUBv9TUVZMoRo8nxwoxeu3mLg8QYUlYDF3LmTnWFVrsJvgrkBLDcAlzx%2Fb0407SZZ8zPSFv4X8XZ1VgxgEMOanW7b9jV%2F%2FVkND%2FXjpYDMV3R9ycSIqcFpvM74RFKYOKTe6oQqlu0GLzyI1trX932RRBVF8Vz4EZGZ0nOTf7kkOO259E6EMNgnkCcpky8H0bPDWyBwrq3Dh4YPMhI50tqBn%2BLkO3RF9aiCFl%2BmtmV9znEqwY7w11ERUlU47aBWHqEsHTJ3vO5PuulBhn6VLc%2Bk%2FM2KS4%3D&__VIEWSTATEGENERATOR=44A23853&__VIEWSTATEENCRYPTED=&__ASYNCPOST=true&`,
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