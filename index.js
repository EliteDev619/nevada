const { gotScraping } = require("got-scraping");
const ObjectsToCsv = require('objects-to-csv');
const cheerio = require('cheerio');

main();

async function main() {

    try {
        // data: new URLSearchParams(tempPostData).toString(),

        for (let i = 100; i < 3000; i++) {
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
                "body": `ctl00%24ScriptManager1=ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24UpdtPanelGridLookup%7Cctl00%24MainContentPlaceHolder%24ucLicenseLookup%24gvSearchResults&ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24ctl03%24ddCredPrefix=B&ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24ctl03%24tbLicenseNumber=&ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24ctl03%24ddSubCategory=&ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24ctl03%24tbDBA_Contact=&ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24ctl03%24tbFirstName_Contact=&ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24ctl03%24tbLastName_Contact=&ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24ctl03%24tbMaidenName_Contact=&ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24ctl03%24tbCity_ContactAddress=&ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24ctl03%24ddStates=&ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24ctl03%24tbZipCode_ContactAddress=&ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24ctl03%24ddCounty=&ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24CaptchaSecurity1%24txtCAPTCHA=C9B2c9&ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24ResizeLicDetailPopupID_ClientState=0%2C0&__EVENTTARGET=ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24gvSearchResults&__EVENTARGUMENT=${page}&__VIEWSTATE=RHEAwUCGykME4JK25yX18tyX2TYa9DF%2FMhOck9%2FlXKIGrShKqpcTE4POoEnmsj9d2ZPXnnA3VBhbcj0Hj54FJgN85b4tv5y5B0QukWvan3aaiWlh%2BbpDPAt7kZ0QC%2Bv%2FjY5XJW3bYI8ESGCudgCM5592RdOthq9BtICV9UMKfDsktCRyxtIS6SqOcwNYd6n2Zxo9i%2F8bOv2qiBOU4pn44c7MXrVReuevo3UPcQDtdKoHbJvhxZs%2Fn%2FeT%2BvIr1mFyJFmo%2FAH38C0S0T3e4yAkEPFzQ9e5Dn6RJVXiPIq7rluh8RQW%2F2hwl0EO3ObL%2BtK6C4F5gN2%2BIFy4fXRnG9fTixc%2FNzDZRMJebmZ%2BcZ0idlRXQkm%2BxTciRskb0NsafRQ889Lz6mA5vjmx57Ll3jQeYTlN00rt1r6A8RoBxaaKDCN453YGmftenPWc3bNQwqBXxt952ge8g%2F6pnxjyqcw5EcjveDPJoG8AG8Q3psnbl6z%2B%2Bgj8isQxph9XvlVHFXIzYTYBFtaaJowiF9e%2BOHpMcHxqd5UzGe0b0f752EtzjSwst9pGlUhoX03i9RyUgVmvEzDST%2BB4HrcnkQfznH2PeAXwAEiJnHU72%2BrJkhaee7O%2FKS2208E384CEsCQfnxDH1vHqTnIMDe9FGY42DuJ9vPqSa13FTPum5BTO2kWQBBv1h17tXnD4JhkJv%2F0P62rxn%2F3MAjdTXiOa%2FGs3GJZj7xBGiWfLBy9rpupuyPQ5bq751ZfdEMEtLsi6%2Bm1tvTvhM8Myv4iI3syTajN4O5odN2emx3v9IlWjjNPQ4i5IK%2Fx1hjfh1MNURF9SweXFekKyd1cHPp%2FfpDjhnG5QT4Bsdnpd4oxdoclPBYqSBkZhDyPeUZAYjpfv6CzTPsG%2BcayZbfI7n7FjpA%2FUl%2BDrBBdqr375a0Bg%2Fq8mGK1ySxxQ9TQnZkpriGBYqlry9%2Baq7RzC4C8W17lY%2FS9JZyWDgPD80lLeXcffB8FixKN451SLq%2BDZ%2FIU4dWiWzkQUDtRjNWmZ%2F25FlTk6vHEdncp%2FreSCt9AvdrS2hD9cgSpgOpiczDASE5KjiBXJzgebq0z1W4c%2FWCxBx8cgR7G7rD0nb0RFiVfdrbb70RQjuNBsN6diUGbjgmT1Vm31D6D4sXzs2n%2FfluQtp06k9esrRezdMfIGpO77GuVMQKxG%2BD5srSwnW9CKo3WD9w%2FsQltGqb3u5sjPFjlYea0VYvfQf20In3xvgXptCw3bEp1jLnHCO5tcZdYEmcnZw%2FBiPWeV0HSYeWh8BKcvEeC2EuXNhmHD0Gk7XwHRHtqDFE3PBw95FbWskVm2rRCf3fNx%2F8SxN7nJSaDrhXNGjhJs5DfcGryfDHWj3i6WczNNuBZNEHn3NjGOT8uckY4ueKhoLi6%2BspNyt1HV%2F3WOI0GW6gnXWInR6xvuY%2FQfV3cAr8KPhJlNoOTTZcDUibAHA4rgzU6ZpGL%2FnbHofiWtFdqs19%2FMqzRZRKiSrkVDayzmB9H6y6Dp75mW3ncqYqD8MxxZ2HdylbpnQSoy2sH1Ahpf%2BK4TteYKcNZtKIm%2FIugxbXjqyT4xwWMX2sxxKNqbl7urxY9EejBk%2F7sVOfRZjWpfXTS6o4fzgXMy6%2BUyZPmmoZVwhKEhSD%2F646T%2B9aDK05OKh8lAAqpec70YJxagUQfY7Ouukbr8O%2Fpz3n%2FvgF26NwHYBRxOT6BYBwKD6wr1yAx%2B9hEMr3pySmdTolilj5A3OvAiEo%2F1IeF4PI3XcxJYUxKw7fcoyeZKkELb%2Bhfcx8R8OucbBdhc62SOWV2GJV3lfobiH2pfs%2FHLG%2B0vCaFY1sqGqWpW%2BBOQkH0eB63gpaf3bHUDU0AzBn%2BP5b2sx4WX8hT1FYsPbzT13GL%2FPEBDHnPVrT2EnvyCa8oANrraujW2Dz8JXR3XfFUsUb54SAQGMjGrgKfQYDnB4yzKumC36up05wCM%2Fj4lwOlbE942N0pmNNZLiCJNI2KpFsxbrP2Slz2pzjJI9VrCmnfB2J45uLPSELn8P7AuuDQHjsZJociknZhTJQIUoSAxWNkkuYES87IS%2FCsEY%2BtnWxScOC4nMPphAv7UKY1tX5TWYEOXe4k0jlwn5xH%2BqDV2%2BNWLs3dtDpTE6tG2xJ2YL25KU5aLAwTHcIsSLwt9f1Vi%2FOn%2BO5uK0pqUJkwdQijXD3%2Bqr4nj8S8IO8lSKe0uQC0uOCjCfEPOupsCB4RMUuguikxaLsJPdvzA0q3mRdOF4vtLyrQybWyqTSGF%2FHZKgtMxKVxMg%2FMIyQujMLEbDYGyLtKIsMZv0WGc7%2B1a9o1TxQqK7Nguo0TvHDzQmFq1l71b20MJBgpfSMdbWsonNt5NC1JwlS6ISNtcF1y2dXgXnD9ZiLCv4J4liBoD2zW2TFEXpd7hfKsm0DZIKIPadFQ2n1b6cclNsnJX66VoehK0CEEVsj8NTj39oIHOtuQQquzVhVQwndWoyjaOehg%2B%2BKXNcxyCHF0%2FCzN4N4blPWX8J%2Belb4gUVoivz4qWLfiLFEmKHepr6ORH4jtW7hFfrz6IWeCKzoL7kZoJtJbQjrqE8xO4jbpqF6nVqrdYharRNFR4YroUsZX%2F%2FrUS6852S8wlY5iHBxPnrjnJlwFWL%2B%2FcCo9DAGgAH1HNcEFO1X8BjK73rlaPQ8mL0YwxU8eJkTZfykVeN5AtMjc23x7jwMT8q7mGLqbkB%2FTqQ5QGrCV26cWgJEyaMMe0%2BQwDGfuJbA4f58kCSI2ZglogteS4xvN4JDTsYSTag34nuCTiYLfh%2F9oL6Fmnv8ZLU3MJM%2B7wO1Me1vLMapXcpowch1Aq8IUntX6O67x6K8X9lM7XO%2FzrnCflXV%2BUCC%2B4FvuWKOX1zODb5Wz3R0RYcYUTyT%2FUbBI1Mx9PTFZ6a0yOcRwJvS%2BLT8rJxFtbMqy7Yte1C7kifmXKUiNn2%2FE34WDZE6oX2IMtPNaIVlcPs8MsNa8xwwiAYySekSrGaxAt9h3qHqYT%2F6qtdsJ3EoYL6dK0pRU1Qjvj2ts%2Fp8%2FqawXE1dpyHlLWiLJsVThTGD%2FHzaW2l8jhXQr7wQbKqljJhchNJgmHUYymBoiSGdZnugJdCjhmC6wx1Z%2BLZbk1EOuKNR3mhx%2By2Bs%2FIS%2BIZLL6%2FquiaoKQsbdOOK8xJtGnkELkMeUJ3SIHlP5FDqLatQc9rPm6kRiVLgnki4JcnJa14Ytkmm6HSt9cJl%2B3wAntkO1sbsNEzFgqObIkpuC8HLETT7XffIWmaG48aIQMfolPTpvgp%2BJOJizvk%2Bt9ONzbR6%2Fi0jVkaBldc0IVyptosxYjkJVswWq235Pc6jJ2XX4COwXDTxSLrSDDuLn0my8oHyL2uQ5U2j3%2FEPkcNSPM0MHf9aDNduBpe%2BHKMblcXLDaktTQQApAeLs1GYr2tFAO8TIC43ByI0P6jtCRSOTBoogTSQFvpFQMee%2FWwtiO6H64izUgD3hWjdjxUnUfHwGAdtU4OUBTdckXFZdC8BeFjJPmzEmCAn8OoVbnAx%2FAhsIRlnQPQYq8ZWgYYAPSvubhP062EkJSU8NaLxTw1FmzizMa4SIetifJOPUgoVry1WIKim5oSHf%2Bp17b3VvcITZ7Z%2BUo9KTTH6%2FLb1tbpkskAVUa9OBJ6d8mp6DXzgYqb14ut1eM8xSntPgTlRYABMAbvM5A7RucLsfTRgzfXBR1koTnzI3C2e6AZNedhduWjXvq7ICQ79Pp8tW0pZ%2FuTG3VuP73GyXMCDeCB9J6HChE3Xt%2Bvh6gdCnzU2qHL0jHf%2FsKK6Jo%2B5rN%2BvKucCqVKTmKbE6xm%2B4%2FhEHHvZBwCgmcVfzx%2FwC3%2B7t1UzHNuCsr72huEB4K2o48Cmz0lnebQ9iYvacgb5qDi0zivw1opl3p6819dASyTIzDwsWydEvv7C263KZRckl0bYT26QiqJa2T2O5EgxJDSefA%2F4n4%2BbFJ9M6GOg3KCEKe8Su663J4whJAupApSniJQB7vcZTVOf8KtghE3VbcSKUl6j91r6TfISyWb4R8CRT0E6bEquYUGs8sUYXCmbq1RNFDammjtHgnlDpc%2FUonS9G88d4fVK8b0MjMzF9c3dcRdoF6kgeiqh3Q1LeV851aEB7nR6YbvK0Bi60x%2BTBB6wRGn4VrHZXbgSIz2tLVfL36GjmXTG%2FhQBvDAXMC4HWPj0yYzjsqXSM51PVFUGmC2TU2ny9FF58z%2F5LUYsbsKTwJqQrhN1%2BRKcXLnNgt7GHSyxjzY%2BrkJ1MSJTR9mnVk5rYM%2BVOVT3guI7WMzu5Mjkl8z2RKt33Mb2KcWNCKu0%2BVnwsOl57Sr0syABt06Xc%2Fts99NxkHPiU3zWImAQuK3gpmtvW647NH7GZa%2FOwr7BOOEkUPiNaBM8ofDO4Qo9Tj%2BEanKAY0y5lfqP9rNup1X3AgnF6m0iIY1cou158C02WYGFX4M9jH2qoh9TbbtZZJAp%2FeDohWb1GGa8xCt40O5UdQadFe3dFoVcW5rf30wzwfB517SAdSdY6kURGLq2872VGgdnp9FbfspNEuN%2Fb2h3wcBHvKlUiWQqBWmeWMCpi9gS%2BZD9I1rX2zwUSAq2qYTtFkQ%2FmJkTId2X%2FBtVW7XW1xSGuDtG06FfaCHKhzpf6hD3p1UX0dnYE6g8a2Tmv%2BCRt5jcX0lphnCUZXCzoI49Ro4gniibD%2BVYqabd2sYLcnWrGog2GGiBu93UpH2g8QmueAEv%2F8%2B24%3D&__VIEWSTATEGENERATOR=44A23853&__VIEWSTATEENCRYPTED=&__ASYNCPOST=true&`,
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