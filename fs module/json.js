http =require('http')

server = http.createServer((req, res) =>{
    data = {name: "Nashit", location: "Patna", age:32};
    res.writeHead(200, {"Content-Type":"application/json"})
    res.end(JSON.stringify(data))
})

server.listen(3000, ()=> {console.log('server running')})