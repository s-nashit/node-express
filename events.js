eventsemitter = require('node:events')

cake = require('./event1.js')
cakeShop = new cake()

emitter = new eventsemitter()

emitter.on('order-cake', (type, flavour, size) => {
    console.log(`Order received!!! Baking a ${type} cake.. with flavour ${flavour} and ${size} size `)
    console.log(cakeShop.getOrderNumber())
})

emitter.on('order-cake', (type) =>{
    if (type === 'birthday'){console.log('serving a complimentary cold drink')}
})

emitter.on('order-cake', (flavour) =>{
    if (flavour === 'chocolate'){console.log('serving a complimentary hot drink')}
})

emitter.emit('order-cake', 'birthday', 'chocolate', 'small')