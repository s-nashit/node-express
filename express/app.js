express = require('express')
path = require('path')

app = express();
port = 3000;

app.listen(port, () => {console.log(`server running on port ${port}`)})
// console.log(path.resolve(__filename))

app.get('/', function(req, res){res.sendFile(path.join(__dirname, 'index.html'))})

app.get('/about', (req, res) => {res.sendFile(path.join(__dirname, 'about.html'))})