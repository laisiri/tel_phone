const http = require('http');
const sw = require('./swRoute')
const url = require('url');

http.createServer((req, res) => {
    let q = url.parse(req.url,true);
    console.log(`q.pathname = ${q.pathname}`);
    /*
    let q = url.parse(req.url,true);
    let pName = q.pathname;
    console.log(`pName: ${pName}`);*/
     
    sw.swRoute(req,res);

   }).listen(8080);