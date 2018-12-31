// const hi = name => 'hi, ' + name;
// console.log(hi('lanyage'))
// this file is a main module, every js file in node is a module.
// console.log(module)
// require('./logger.js')
// const logger = require('./logger');

// here i get an object
// console.log(logger)

// logger('hello world')
// { log: [Function: log] }


// other modules : paths os fs http ... in the website of nodejs
// https://nodejs.org/dist/latest-v8.x/docs/api/os.html
// const path = require('path')
//
// let pathObj = path.parse(__filename)
// console.log(pathObj)
// const os = require('os')
//
// let totalmem = os.totalmem()
// let freemem = os.freemem();
//
// console.log(`totalmem : ${totalmem}`)
// console.log(`freemem : ${freemem}`)

// const fs = require('fs')

// always use the async method
// let files = fs.readdirSync('./')
// console.log(files)    //[ 'app.js', 'logger.js' ]

// async
// fs.readdir('./', function(err, files){
//   if(err) console.log(`Error : ${err}`)
//   else console.log(`Files : ${files}`)
// })

// const EventEmitter = require('events');
//
// const Logger = require('./logger')
// const logger = new Logger()
// Register a listener
// logger.on('messageLogged', eventArgument => {
//   console.log('message loaded! listener called.')
//   console.log(eventArgument)
// })
//
// logger.log('hello world')
// Raise an events, produce, signaling, pass an argument which is the name of event
// emitter.emit('messageLogged', {id : 1, url : 'http://'})

// const http = require('http')
//
// const server = http.createServer((req, resp) => {
//   if (req.url === '/') {
//     resp.write('Hello World')
//     resp.end()
//   }
//
//   if(req.url === '/api/courses') {
//     resp.write(JSON.stringify([{name : 'lanyage', age : 18}]))
//     resp.end();
//   }
// });
// server is an EventEmitter
// server.on('connection', socket => {
//   console.log('New Connection!!!')
// });

// server.listen(3000);
// each request raise an event!!!
// console.log('Listening on port 3000...')
