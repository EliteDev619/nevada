const ProxyList = require('free-proxy');
const proxyList = new ProxyList();
const { gotScraping } = require("got-scraping");
const http2 = require("http2-wrapper");

async function main() {
    let proxyData;
    try {
        proxyData = await proxyList.randomByProtocol('http')
    } catch (error) {
        throw new Error(error);
    }

    console.log(proxyData);

    const agent = new http2.proxies.Http2OverHttp({
        proxyOptions: {
            url: proxyData.url,
        },
    });

    let response = await gotScraping.get('https://httpbin.org/anything', {
        http2: true,
        timeout: {
            connect: 30000,
            response: 30000,
        },
        agent: {
            http2: agent,
        },
    });

    console.log(response.body);
}

main()