express = require('express');

app = express();
port = 3000;

app.listen(port, () => {console.log(`server running on port ${port}`)})

app.get('/', (req, a) =>{a.send('<p>hello world</p>')})
