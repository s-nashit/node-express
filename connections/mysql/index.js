mysql = require('mysql');

conn = mysql.createConnection({
    host : 'localhost',
    user: 'root',
    password: '',
    
})

conn.connect((error)=>
{
    if (error){console.log(error)}
    else {console.log('connected successfully!!!')}
    conn.query('create database studentdb', (error)=>
    {
        if (error) throw error
        else{console.log('database created successfully')}
    })
})




//console.log('connected successfully!!!')