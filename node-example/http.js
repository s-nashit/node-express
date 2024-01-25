// sending plain text

http = require('http')

// create a server
server = http.createServer((req,res) =>{
    res.writeHead(200, {'Content-Type':'text/plain'})
    res.end('<h1>hello world</h1>. uyfr, bgfdd, nashit')
})

//server listening
server.listen(3000,()=>{console.log('server up')})
