const http = require('http');
const fs = require('fs');
const url = require('url');

http.createServer((req,res) => {

    let q = url.parse(req.url, true);
    let qFname = q.query;
    let name = qFname.fname;
    //console.log(`q: ${q.pathname}`);
    console.log(name);
    let fileName = '.' + q.pathname;
    console.log('fileName: ' + fileName);
    console.log("req.url: " + req.url);
    //console.log(req.serch);

    if( fileName === './'){
        fs.readFile('./veiw/main.html',(err, data) => {
            if(err) {
                console.log(err.message);
                return res.end();
            }
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        })
    }else if( fileName === './input' ) {
        fs.readFile('./veiw/input.html',(err, data) => {
            if(err) {
                console.log(err.message);
                return res.end();
            }
            res.writeHead(200, {'Content-Type':'text/html'});
            res.write(data)
            return res.end();
        })
    }
    
    exports.name = name;
}).listen(8000);