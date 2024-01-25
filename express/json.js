express = require('express')

app = express();
port = 3000;

app.listen(port, () => {console.log(`server running on port ${port}`)})

app.get('/', (req,res)=>{res.send('Welcome to our store')});



app.get('/data', (req,res)=>{
    {console.log('my api')}
    res.send([
        {processor : 4, brand: 'amd', make: 'ryzen5'},
        {processor : 8, brand: 'intel', make: 'i7'},
        {display : 16, brand: 'intel'},
       
    ])
})