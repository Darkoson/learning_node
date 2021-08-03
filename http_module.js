const http =  require('http') ;

const server = http.createServer((req, res) =>{ 
    if(req.url === '/'){
        res.write(" Hello from my server");
        
    } else{
        res.write(" Hello from another domain");

    }
    res.end() ;
} )

server.listen('3000') ;

