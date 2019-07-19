var https = require('https');
const proxyOptions = {
    proxy: 'http://G02%5Cusername:password@G02NLPXMRSH000.g02.fujitsu.local:82',
    authType: 'ntlm',
    ntlm: {
        domain: 'G02'
    }
};

const proxyingAgent = require('proxying-agent').globalize(proxyOptions);
const opts = {
    host: 'www.nu.nl',
    port: 443
};

var req = https.request({
    host: 'www.nu.nl',
    agent: proxyingAgent
  });
return;

req.on('socket', function (socket) {
    req.write('DATA');
    req.end();
});