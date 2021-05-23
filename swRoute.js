const fs = require('fs');
const url = require('url');
const http = require('http');

module.exports.swRoute = (req,res) => {

    let q = url.parse(req.url,true);
    let qPath = q.pathname;
    console.log(`q.pathname = ${qPath}`);

    if( qPath !== '/favicon.ico'){
        console.log(`req.url ${req.url}`);
        switch(qPath) {

            case '/':
                fs.readFile('./main.html', (err, data) => {
                    if(err){
                        console.log(`${err.message}`);
                    }
                    res.writeHead(200,{'Content-Type':'text/html'});
                    res.write(data);
                    res.end(`finished main.html`)
        })
        break;
            
            case '/view/main.css':
                fs.readFile('./view/main.css', (err, data) => {
                    if(err){
                        console.log(`${err.message}`);
                    }
                    res.writeHead(200,{'Content-Type':'text/css'});
                    res.write(data);
                    res.end(`finished main.css`)
        })
        break;

        case '/append':
            fs.readFile('./view/page1.html', (err, data) => {
                if(err){
                    console.log(`${err.message}`);
                }
                res.writeHead(200,{'Content-Type':'text/html'});
                res.write(data);
                res.end(`finished append`)
    })
    break;

    case '/view/page1.css':
            fs.readFile('./view/page1.css', (err, data) => {
                if(err){
                    console.log(`${err.message}`);
                }
                res.writeHead(200,{'Content-Type':'text/css'});
                res.write(data);
                res.end(`finished page1.css`)
    })
    break;

    case '/data':
        
        let qData = q.query;
        console.log(`qData: ${qData.name}`);
           
                res.writeHead(200,{'Content-Type':'text/plain'});
                res.write(qData.name);
                res.end(`finished `)
    
    break;


    
        
    }

    }

    
};