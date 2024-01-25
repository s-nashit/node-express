mysql = require('mysql');

conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'studentdb'
})

conn.connect((error) => {
    if (error) throw error;
    else {console.log('connected')}
    a = "insert into patna(name, age, mail) values('nashit', 25, 'nashit@hotmail.com')";
    conn.query(a, (err, result) =>{
        if (error) throw error;
        else {console.log('inserted successfully'+ result)}
    })
})