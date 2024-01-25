http = require('http')
fs = require('fs')

server = http.createServer((req, res) =>
{
    if(req.url === '/')
    {
        index = fs.readFileSync('./index.html', 'utf-8')
        res.writeHead(200, {"Content-Type":'text/html'})
        res.end(index)
    }
    else if (req.url === '/about.html')
    {
        about = fs.readFileSync('./about.html', 'utf-8')
        res.writeHead(200, {"Content-Type":'text/html'})
        res.end(about)
    }
    else if (req.url === '/contact')
    {
        res.writeHead(200, {"Content-Type":'text/html'})
        res.end('./contact.html')
    }

    else if (req.url === '/home')
    {
        res.writeHead(200, {"Content-Type":'text/html'})
        res.end('./home.html')
    }

    else
    {
        res.writeHead(200, {"Content-Type":'text/html'})
        res.end('sorry, the requested resources couldnot be found ')
    }
})

server.listen(3000, ()=>{console.log('server on')})