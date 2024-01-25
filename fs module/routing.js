http = require('http')


server = http.createServer((req, res) =>
{
    if(req.url === '/')
    {
        res.writeHead(200, {"Content-Type":'text/plain'})
        res.end('this is my home page: welcome to my page')
    }
    else if (req.url === '/about')
    {
        res.writeHead(200, {"Content-Type":'text/plain'})
        res.end('this is my about page: we are a team of dedicated developers')
    }
    else if (req.url === '/contact')
    {
        res.writeHead(200, {"Content-Type":'text/plain'})
        res.end('this is my contact page: 8797514075')
    }
})

server.listen(3000, ()=>{console.log('server on')})