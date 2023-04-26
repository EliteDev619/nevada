const { gotScraping } = require("got-scraping");
const http2 = require("http2-wrapper");

async function main() {

    const agent = new http2.proxies.Http2OverHttp({
        proxyOptions: {
            url: 'http://qyqfqdxl-rotate:a9sxtwmb6ucf@p.webshare.io:80',
        },
    });

    let response = await gotScraping.get('https://httpbin.org/anything', {
        http2: true,
        timeout: {
            connect: 50000,
            response: 50000,
        },
        agent: {
            http2: agent,
        },
    });

    console.log(response.body);
}

main()