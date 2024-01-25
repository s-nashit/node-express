http = require('http')
fs = require('fs')

server = http.createServer((req,res) => {
    res.writeHead(200, {"Content-Type": "text/html"})
    data = fs.readFileSync("./index.html", 'utf-8')
    res.end(data)
})

server.listen(3000, ()=>{console.log('server running')})