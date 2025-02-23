// here are the 2 proxies
// https://solace.ist.rit.edu/~dsbics/proxy/https://ischool.gccis.rit.edu/api/
// https://people.rit.edu/~dsbics/proxy/https://ischool.gccis.rit.edu/api/

const proxyServer = 'https://people.rit.edu/~dsbics/proxy/https://ischool.gccis.rit.edu/api/';

// endpoint would be something like 'about/' or 'degrees/'
async function getData(endpoint) {
    const res = await fetch(`${proxyServer}${endpoint}`);
    return await res.json();
}

export default getData;