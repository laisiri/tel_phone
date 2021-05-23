const http = require('http');
const sw = require('./swRoute')
const url = require('url');

http.createServer((req, res) => {
    //parse req.url 
    let q = url.parse(req.url,true);
    //represent pathname of req
    console.log(`q.pathname = ${q.pathname}`);
    
    //send req and res as argument of swRoute function 
    sw.swRoute(req,res);

   }).listen(8080);