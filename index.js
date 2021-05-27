const http = require('http');
const sw = require('./swRoute')
const url = require('url');


var sever = http.createServer((req, res) => {
    /*
    process.on('SIGTERM', () => {
        server.close(() => {
          console.log('Process terminated')
        })
      })*/
    //parse req.url 
    let q = url.parse(req.url,true);
    //represent pathname of req
    console.log(`q.pathname = ${q.pathname}`);
   
    //send req and res as argument of swRoute function 
    sw.swRoute(req,res);
      
   
    
    

   }).listen(8080);
   