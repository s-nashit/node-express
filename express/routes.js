express = require('express');

app = express();
port = 3000;

app.listen(port, () => {console.log(`server running on port ${port}`)})

app.get('/', (req, a) =>{a.send("<p style = 'color:red'>This is my main page</p>")})
app.get('/about', (req, a) =>{a.send("<h1 style='background:yellow'>About Us page</h1>")})
app.get('/contact', (req, a) =>{a.send('<p>Contact US Page</p>')})
app.get('/data', (req, a) =>{a.send('<p>Please find all the data</p>')})
app.get('/team', (req, a) =>{a.send('<p>Meet our Team</p>')})