const fs = require('fs');
const url = require('url');
const http = require('http');
//const { LOADIPHLPAPI } = require('node:dns');

module.exports.swRoute = (req,res) => {
    //parse url
    let q = url.parse(req.url,true);
    //defined path
    let qPath = q.pathname;
    console.log(`q.pathname = ${qPath}`);

    if( qPath !== '/favicon.ico'){
        console.log(`req.url ${req.url}`);
        //hold all route with switch
        switch(qPath) {
            //main page
            case '/main':
                fs.readFile('./main.html', (err, data) => {
                    if(err){
                        console.log(`${err.message}`);
                    }
                    res.writeHead(200,{'Content-Type':'text/html'});
                    res.write(data);
                    res.end()
        })
        break;

            case '/mainEx.js':
                fs.readFile('./mainEx.js', (err, data)=>{
                    if(err) {
                        console.log(err.message);
                    }
                    res.writeHead(200,{'Content-Type':'text/javascript'});
                    res.write(data);
                    res.end();
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
            fs.readFile('./view/append.html', (err, data) => {
                if(err){
                    console.log(`${err.message}`);
                }
                res.writeHead(200,{'Content-Type':'text/html'});
                res.write(data);
                res.end()
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
            console.log(`qData.name: ${qData.name}`);
            console.log(`qData.lastName: ${qData.lastName}`);
        //let qDataJson = JSON.stringify(qData);

                fs.readFile( './model/list.json',(err, data)=>{
            
                    if(err){

                        arr = [];
                        arr.push(qData);
                        let arrJson = JSON.stringify(arr);
                        fs.writeFile('./model/list.json', arrJson, err => {

                            if(err) throw err;
                            console.log(`saved`);
                            res.end();
                            
                        } )

                        }else{

                            let dataObj = JSON.parse(data);
                            dataObj.push(qData);
                            fs.writeFile('./model/list.json',JSON.stringify(dataObj), err => {
                                if(err) throw err;
                                console.log(`saved`);
                                res.end();
                })
            }
        })
        fs.readFile('./view/append.html', (err, data) => {
            if(err){
                console.log(`${err.message}`);
            }
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write(data);
            res.end()
})
        fs.readFile('./mainEX.js', (err, data) => {
            if(err) {
                console.log(err);
            }
            res.writeHead(200,{'Content-Type':'text/javascript'})
            res.write(data);
            res.end();
        })
        break;

        case '/edit'
        
        default:

        process.exit()
 
    }

    }

    
};