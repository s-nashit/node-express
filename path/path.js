a = require('node:path')

console.log(a.resolve(__dirname,'index.html'))

// console.log(a.join('folder1', 'subfolder1', 'mukesh','index.html'))
// console.log(a.join('/folder1', 'subfolder1', 'mukesh','index.html'))
//console.log(a.join("/folder1", "//subfolder1","../index.html"))
// console.log(a.join('folder1', 'subfolder1', 'mukesh','index.html'))
// console.log(a.join('folder1', 'subfolder1', 'mukesh','index.html'))

// console.log(a.isAbsolute('C:/'))
// console.log(a.isAbsolute(__filename))

// console.log('this is the filename with complete path:')
// console.log(__filename)
// console.log('this is the filename with parent directory:')
// console.log(__dirname)
// console.log('tha')

// console.log(a.extname(__filename))
// console.log(a.parse(__dirname))

// console.log(a.format(a.parse(__filename)))