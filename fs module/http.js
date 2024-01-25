http = require('http')

server = http.createServer((req,res) =>{
    res.writeHead(200, {'Content-Type':'text/plain'})
    res.end('<h1>hello world</h1>. uyfr, bgfdd, nashit')
})

server.listen(3000,()=>{console.log('server up')})