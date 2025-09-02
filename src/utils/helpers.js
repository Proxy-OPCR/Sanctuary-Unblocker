const fetch = require('node-fetch');

function isValidUrl(url) {
    const pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
        '((([a-z0-9\\-]+\\.)+[a-z]{2,})|' + // domain name
        'localhost|' + // localhost
        '\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}|' + // IP address
        '\\[?[a-f0-9]*:[a-f0-9:%.]+\\]?)' + // IPv6
        '(\\:\\d+)?(\\/[-a-z0-9%_.~+]*)*' + // port and path
        '(\\?[;&a-z0-9%_.~+=-]*)?' + // query string
        '(\\#[-a-z0-9_]*)?$','i'); // fragment locator
    return !!pattern.test(url);
}

async function fetchData(url) {
    if (!isValidUrl(url)) {
        throw new Error('Invalid URL');
    }
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
}

module.exports = {
    isValidUrl,
    fetchData
};