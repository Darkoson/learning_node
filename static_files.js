const http = require("http") ;
const filesystem = require("fs") ;


const server = http.createServer( (req , res) =>{
    const readStream = filesystem.createReadStream('./static/index.html');
    res.writeHead(200, {'Content-type':'text/html'}) ;

    readStream.pipe(res);

} ) .listen('3000') ;

/**
 * These are the various content-type for different format
 * html  => text/html
 * image => image/png
 * json  => application/json
 */