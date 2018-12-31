const EventEmitter = require('events');
let url = 'http://mylogger.io/log';

// Create a class that exntends from EventEmitter
class Logger extends EventEmitter{
  log ( message) {
    // Send an HTTP request
    console.log(message)
    //Raise an event
    this.emit('messageLogged', {id : 1, url : 'http://', msg: message})
  }
}


// module.exports.log = log;       // make this log public
// module.exports.endPoint = url;   make this private
module.exports = Logger;     // exports a function


// console.log(__filename)   // get the file name
// console.log(__dirname)    // get the file dir
// node wrap all the code in a function what we call module wrapper function
// (function(exports, require, module, __filename, __dirname)){
  //code here!!!
// }
