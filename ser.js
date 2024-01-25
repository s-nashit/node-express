a = require('http')


server = a.createServer((req, res) => {res.end("<h1 style='color:red; text-align:center'>this is my first node server</h1><p>Mukesh</p>")})

server.listen(5500, ()=>{console.log('server running')})