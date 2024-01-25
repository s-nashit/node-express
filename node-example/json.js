// sending json data through server side scripting

// importing the module
http =require('http')

// creating a server
server = http.createServer((req, res) =>{
    data = {name: "Nashit", location: "Patna", age:32};
    res.writeHead(200, {"Content-Type":"application/json"})
    res.end(JSON.stringify(data))
})

// listening to the server
server.listen(3000, ()=> {console.log('server running')})
