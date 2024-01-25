fs = require('node:fs')
zlib = require('node:zlib')
gzip=zlib.createGzip()

readableStream = fs.createReadStream('./new.txt', {encoding:'utf-8', highWaterMark: 6})
readableStream.pipe(gzip).pipe(fs.WriteStream('./knp.txt.gz'))

//writeableStream = fs.createWriteStream('./patna.txt')

//readableStream.pipe(writeableStream)

// readableStream.on("data", (chunk) =>
// {
//     console.log(chunk)
//     writeableStream.write(chunk)})

//console.log(readableStream)