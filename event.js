eventemitter = require('node:events')

emitter = new eventemitter()

emitter.on('module', (name, type, number)=>{
    console.log(`hello from NSTI, ${name}. We are currently on ${type} - ${number}`)})

emitter.emit('module', 'Allahabad', 'elective', 3)