fs = require('node:fs')

// fs.writeFileSync('./mukesh.txt', "..my name is python...from Patna", {flag:'a'})
// console.log('file written successfully')

fs.writeFile('./vinod.txt', 'i am from Kanpur', {flag:'a'} ,(error)=>{
    if(error){console.log(error)}
    else {console.log('file written successfully')}
})