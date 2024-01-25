express = require('express')

app = express();
port = 3000;

app.listen(port, () => {console.log(`server running on port ${port}`)})

app.get('/', (req,res) => {res.send('<html><body><h1>Hello World</h1><p>This is Patna IT Store</p></body></html>')})

app.post('submit-data', (req,res) => {res.send('POST Method. data sent successfully.')})

app.put('./update-data', (req,res) => {res.send('PUT METHOD. Data updated successfully.')})

app.delete('./delete-records', (req, res) => {res.send('DELETE METHOD. Data deleted successfully.')})