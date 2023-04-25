const { gotScraping } = require("got-scraping");
const ObjectsToCsv = require('objects-to-csv');
const cheerio = require('cheerio');

main();

async function main() {

    // data: new URLSearchParams(tempPostData).toString(),
    let tempPostData = {};

    tempPostData['ctl00$ScriptManager1'] = 'ctl00$MainContentPlaceHolder$ucLicenseLookup$UpdtPanelGridLookup|ctl00$MainContentPlaceHolder$ucLicenseLookup$UpdtPanelGridLookup';
    tempPostData['__EVENTTARGET'] = 'ctl00$MainContentPlaceHolder$ucLicenseLookup$UpdtPanelGridLookup';
    tempPostData['__EVENTARGUMENT'] = 1;

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
            "Referrer-Policy": "strict-origin-when-cross-origin",
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36'
        },
        "body": "ctl00%24ScriptManager1=ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24UpdtPanelGridLookup%7Cctl00%24MainContentPlaceHolder%24ucLicenseLookup%24UpdtPanelGridLookup&__EVENTTARGET=ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24UpdtPanelGridLookup&__EVENTARGUMENT=1&__VIEWSTATE=pJ%2FacvlVfGKCHKwh2XkGLd0gaxS8gZLLYVlK2H5H3Hg1vULtAmNSdqVxtyntpPEq5b4HPdQSpIv4y2YYwj%2F%2Bh%2FAt8xeOn6QACNmdsOibtA8t5QfsDaqLiATPeKAPHADHiCVVOB4FkKrL50%2BbzIN3MSDMy%2B60wCRVDTg6cPQPIAndoRs0so%2F6nAuPK6QNBeujmppsT2jxICnsawK38CbjskKNcwKobuXaTKm%2Bj1MWbQpx8dqfZV9TXkCqrvVDPlm8k9Jj%2BMBKjI3TAM5nNhnEqtBAmE6SoerNxi1jh1toRtg3Plq0J6KIkZfwjg1YnCoIKBZSO0Pbp50Psuqn40Z0P0v3wb5EKNyjvg05J3PVDutI8kcV%2F2NPv3A7ecn2IflZGHDwnHWh1TbrQRsOmH0h72pJLyGbgZ5C%2F3CG5jx%2By3hKQwdo3m0veqB94TP%2F%2F%2BgQ4EZiyfVmWFFVX4Xhs%2F6mAbNlDSgjEGcB9YW6A30lYcs1ZgyI%2BLWCXMYL8TNAyKp%2BG8pmNdrVQbRonrwB7teISQxdUNWLr6jxHKd2ANJKvtWUo9zahZpBaeWBjrbaKVSAIz6KFclJDIU7KH%2B%2BhcTIYeLbwqEsq0Zh5B8kcDx6ATY%2FC6J8PfOWYSJ1Q38ERbR5FxQv%2BMBcp%2FkmdkrCb9Qri3MZJrlBLp2hlkkn5IratcJ69%2FXhwrt2SNE6PbXKXfKpsKOzHSEfFoUoolhD7KFS%2BUy0TdP4ayzWtiyNpWFfS7cbr6%2B6LJkOqYA0X0Ctb5QkfeNO84vcx8gef9RusY5T%2BxbvGZAEpiNhEkgsVGpD9F82BudzHjg%2BRoHBktbDIev1Wl6QiV5m2rUaCiCg60Zcd5LEQ0NbJttW6LsZG8goqnZWSAKZa9sK2yqM9MDQHfuJimyW5k1OFvNIa%2BtgZ2NZKIPS%2FHpThbyctoLkPGGkX5juhDYRTtpq%2FpnDArz1z5j4Gq1p6TI5hWS6axRylSi6VqiamvjJdh%2F2nJwbJp1FeuqmJoC1tGd7jk9kEy6NulMew899UAIdd6FiE9Wpn847J%2F%2FimathFwa5%2Bb3v2eOcRj18Pf%2BHtWYVEjydA07ebZqrEZFK2hW%2Fn9OVVF6K0Cbsg1qTcLI5M%2FxMnb8%2Fwrsgk32NI9XqbgcLLyaW4Ugzw7KvjwmpCmSKANgKNuNafHD9VIz%2FaIMvBRG35kFFozN%2FVlspz9RgJ1stgsU85alNOCtqXHB80n%2BHgi%2BbZ%2FcqHE6jXM6Kdi8D%2F2zAB0kZNUJiWQZTIlFRYZm%2BQU2dIRNztqQyoxgFyRn%2BsQOH8brBEjuZVvrYT6%2Fukkj%2F7Qhs9nh79irxGyo%2FFfhxCKJ2%2FSX03bmZ25ZmC7dK1Rr657IJ2fxAKAkKU0VYKmuoRPbvDiqyV%2BgjhlxZNTO7Q%2FnKtCaxV%2FUubweYpb%2BoNjgPtPhaYlM9tSR6JwbARNp424MeAy%2FGSDRwKcv9bb2oZkQpVJli1vqKAQxlb%2BQwv3nx%2BxRXh77aB%2FGljHgNOCWIzwlsNLwrZ8E9HmtcYqmfMTgwKldP69VLqQn8FfJCuHAookA9ZgSfVS0Yz7NWlaOxlB1D9LCb%2BqAayru2R6mkgG63hzYtEFSVTth1wecpPzDK0%2B39RM2%2B23AFcy2pRXds2%2BeJCT%2FdNirJ4jlA3TJlSHx4D9OZPejojBDrkDTOcTfE5CxRlI7hq0evqQg1498ggmsDLliI5U09wD47NsYOE6UwX2%2BUlpnuOWJwhyVgJ2ihXUa6%2FMfd1fvcbm7FmWq4j2%2BZaSVTHJFSfcYAW7gbNGXFBeYMzJxFvHCM6uBLedaReS84PWhJmfKeNHz4UZTl2unrVifAGYVjgpV5jdCLXDNJEAuSN9GOiVFTbVpe4dBAHnqe7fFIOqdsRDOYBXrAjNGw0KeXR%2Fs%2FItnmV9MrrdQIJDWOfVuOziYIlKzSCH1fP9ymZ8p62Mpy8icqIek53Qv7zRH4eWP0MPZtgvvyjIFJW6o%2F3sXI18I2KtbQK9Vx%2FVPVA6iWd0RxeuTuQe3qw69%2BGIX%2Fh3Hr6KSfFnR%2B%2Fo0pFt6%2BE0b28PNmhltXjGsxR0VyeDoxk08TJfsJO6sx1p92IQ20VhYSeVTTrprVgzVPkpNG61P%2FzRvc0WNo9UsosaiXHbpfS0vNJIF5jcBLPLPDFWHzf571%2B8k2ENCaNLgyhXZxbjK90xZhdaZlAv%2F9fNNbSUKebrACMSfs0HVW3dNwiIHRstG4%2FEsiEjEXz20%2FDIQ1vhmtBo37oqFXGQiqaxvnbCNJlbT6mYexqVEzi2Cd59Jt8myO%2BU%2BDM1bKkmMmvWApCXsOmc6KTjMmg2FkKbypM47nNNuB6WgDFQ8IMvc8Tu8vIfgfXixEPQ9wXlouK4avNIcvInSQqbTm9kck0HcDm5I0E%2B0p%2BZKzKgtiAbcganL425Z3fhgai4SdB4ce5E7zjkJTVEaKVy7fTBjom%2FBM3B0ceNmwVx2rdrl7R5EH7TCTGQGTIN3mLxXJ6Yb3idSyTPU%2FsZIPkx4gxbo3k4S6AUDXFb%2FuEGDg9u6RNvYn0YDI9r4nu9S21HOHjlPg4tDouQ6K8hucRm4mTZGn7iqa8f79iCv01HMZX7QDMyhtXNeutQVnPBcA04nO%2FtU5bg%2Fn9VPhyZfoQRCbIbD1H2uX4gwmkuODcxf5gSMk03c3JNsKpajgzabLT7DkrV%2FMtauttNrD02VLLFkV95xFQXONcAJlG3Vppmq2fXvQm9YavcrkHI3IRZT%2FRoQNLjFVHwAYoiLT6CWi25WOtLIjzmRXo9pvOWxsa%2BVFiqzXCSS0KBBpNYkxsnI1%2B%2Bk6hwqXSp%2FCwa9roR5%2BRYXTX%2BWvSaA7lpaCzNW9ugOrLOVUWOQZu4hQ0soE1cVxYMETctkNJiZDDA3X6ljNQWKRv6%2FZ4hLYAxk8E9tHhqVZ9QKIsvILxUycsNHTwMeeNH4fv3cNn3PzQsO%2BdRq3hRJWmhbPR24nDT%2BWN2VO0L2wr8QfdwrsGlVxFLfhhpQjw%2FQE9K3PmGDthFuYJ5xYesOaqpoJqyLMoQbIssQLQ%2FzU0cMeBXq6%2BmgXzYjR73MjACDrtxZMffj1RwDl4k8YfKp5YbP1JCcoxLDV4NYGyHsZevgsrsBi47SAO3sLIQaNkCSZP8HLYpgKcS6RKhoI9PRbKNNH4IHBR7oNqHiSi%2F1Lt5G02GgfmbAOEqI%2BxysTnEaa%2B2tRP6PsauBTjlMoQCg7FlZmt78eKPPydtPLMaOTcNc4txK3SiJG8c%2FTduB0NhLR%2F4SlUoklL6uM5Jp8CYLkduUjoRQ72V6qmEdNALNAWfiFthYFoOQECDJym0BmFywROImL4WB%2F1gPCjD%2BDEaUtdWiI57TUm1aMnkh9LUuay2UtH9RLkL5qcUg7CQv38L%2B%2F%2Fa0vQd3XOGiugUEAi7wd2DAK1wRJTLbSunlj0KkbCPBbzphZOVIXt8bTVWlZhAUteeI3Xzvs%2BCopdNSqYjYsZmxDc1J08pbj4U9ZkhEgqM3mwRMZNLyRt0t6bUAEoxq7pa%2BlYLlOLbrEvKJsquQetdAq1OMnjkQk7zYKs7c8Pei38NZDkXmLtPTIb%2FY8N01dhay9mhxQalkJOsEbHzNTN8Mysh%2FG9QjSSaMpmSTGZFohOXgSWNX4XJ6vQH6rdCWcn1hMPWsJl0UEq1uNMyku6BdUpW6DwPm2yRXwga1Fh852zZYYfFz4bE90Vi5uZq5DgKkl6%2B1W0J%2FZvxXmWEhofbWFbFASK4FAbYZd3IouyF5rCHYA0wUiy24cYSLLMrYv3dynh3ETd40C7iXDtczsJ%2B7qPozygBGkmR8%2FlTgURmPXP5tNvXd40foFH2p7V4%2FVAtC2MVwhA%2FFKyRNdoEn2iLL7PBoC1iS3eS1Uqhgz0VxKTBmByixOX5ejZDZRoPljs4%2FZkadCpZkBeJSoO84QNb1248EFgLnsW%2Fbh%2BQHXu35x%2B5YXh17Kc09EqTtlRv9b3vWUEiJRXTJh%2BXnAVFby5U0jx7ZhZSCrVlIqfm4kq1faxmB0FAdFtCkHuTH6OPsYkZbxJ%2FCu3%2Frshfxf87PWyCAkecEG3rsLcCKgIdgwmiB5JCsu3ffzl2IoAXifN%2FBMPbqqCOx21JLd7coBcyNcWhEgoMQSQBq3NmbXk%2FzUKzBwOJv2cTcSVKvuSVQViByGFAvBnxYzxotElFDT8y6SRBpnwHheNcmEfFxN3n6cepknvI9Tr2c%2B8YDZN3IT12Bh02j6V%2FGuYvxbhUDhta9SeVShu2Qu8aVTbQ14wW6oHCXzCFFNjOuoypFlwpwPM%2F6o9fq6WGm47w%2Bcx%2B6ONlZ0JlfefZrF7KHvUu7JQ0yl229oUJScs3rdeYL9g5%2B0rELomqt1VonsnkjgmudG44QPseKyC%2Fnjzuy4FIJMain%2BBAemWt8tF7h5afI6ZebbCBBaRWqDftMYbGJsy3VZM1dFl%2BDDybQ1xmm5U8WZSMz6l%2FEBnlVjr9bCPqURL9mNeeTgUetCV2hy4vHB9mnQvLpdH4wpkTuUaZMyzRMdAZT5uAhWON0lZHRjHEkZDZ89&__VIEWSTATEGENERATOR=44A23853&__VIEWSTATEENCRYPTED=&ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24ctl03%24ddCredPrefix=B&ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24ctl03%24tbLicenseNumber=&ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24ctl03%24ddSubCategory=&ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24ctl03%24tbDBA_Contact=&ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24ctl03%24tbFirstName_Contact=&ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24ctl03%24tbLastName_Contact=&ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24ctl03%24tbMaidenName_Contact=&ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24ctl03%24tbCity_ContactAddress=&ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24ctl03%24ddStates=&ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24ctl03%24tbZipCode_ContactAddress=&ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24ctl03%24ddCounty=&ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24CaptchaSecurity1%24txtCAPTCHA=3hc7Y7&ctl00%24MainContentPlaceHolder%24ucLicenseLookup%24ResizeLicDetailPopupID_ClientState=0%2C0&__ASYNCPOST=true&",
        "method": "POST"
    });

    if (response.statusCode == 200) {
        let strBody = '<table>' + response.body.split('<tbody>')[1].split('</tbody>')[0] + '</table>';

        const $ = cheerio.load(strBody);
        let results = [];
        let objRow = {};

        $("tr > td").each(async(index, element) => {

            let val = $(element).text()
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
                        console.log('unclosed');
                        objRow = await getCredential(objRow);
                    }

                    delete objRow['crednetial_param'];
                    results.push(objRow);
                    objRow = {};
                    break;
            }
        });

        console.log(results);
        exportData(results);
    }
}

async function getCredential(param) {

    let time = Date.now();
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

    if (response.statusCode == 200) {
        let strBody = '<table' + response.body.split("<table")[2].split("</table>")[0] + '</table>';
        const $ = cheerio.load(strBody);

        $("tr > td").each(async(index, element) => {
            let val = $(element).text()
            switch (index % 6) {
                case 0:
                    param.credential = val;
                    break;
                case 2:
                    param.issue_date = val;
                    break;
                case 3:
                    param.expiration_date = val;
                    break;
                case 5:
                    param.reason = val;
                    break;
            }
        });
    }

    return param
}

function exportData(data) {

    // let objResult = {};
    // objResult.name = data.address ? data.address.slug : null;
    // objResult.license_number = data.address ? data.address.fullAddress : null;
    // objResult.city = data.address ? data.address.hcAddressId : null;
    // objResult.state = data.address ? data.address.streetAddress : null;
    // objResult.zip = data.address ? data.address.unit : null;
    // objResult.credential = data.address ? data.address.city : null;
    // objResult.license_type = data.address ? data.address.state : null;
    // objResult.issue_date = data.address ? data.address.zipcode : null;
    // objResult.expiration_date = data.address ? data.address.zipcodePlus4 : null;

    // objResult.status = data.avm ? data.avm.priceUpper : null;
    // objResult.reason = data.avm ? data.avm.priceLower : null;

    // let temp = [];
    // temp.push(objResult);
    new ObjectsToCsv(data).toDisk('results.csv', { append: true, allColumns: true });
}