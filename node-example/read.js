// reading files in Sync & Async mode

// importing the file system module
fs = require('fs')

console.log('first console')

// Async mode
fs.readFile('./a.txt', 'utf-8', (e,d)=>{
    if(e) {console.log(e)}
    else {console.log(d)}
})

console.log('second console')

fs.readFile('./a.txt', 'utf-8', (e,d)=>{
    if(e) {console.log(e)}
    else {console.log(d)}
})

// reading file in Sync mode
text = fs.readFileSync('./b.txt', 'utf-8')
console.log(text)
fs.readFile('./a.txt', 'utf-8', (e,d)=>{
    if(e) {console.log(e)}
    else {console.log(d)}
})

console.log('third console')
fs.readFile('./a.txt', 'utf-8', (e,d)=>{
    if(e) {console.log(e)}
    else {console.log(d)}
})
console.log('fourth console')
console.log('fifth console')
// text = fs.readFile('./a.txt', 'utf-8')
// console.log(text)

// fs.readFile('./a.txt', 'utf-8', (error,data)=> {
    // if(error){console.log(error)}
    // // else {console.log(data)}})

