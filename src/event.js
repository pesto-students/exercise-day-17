/* (*)
  Create an simple event listener for greeting. Then create a function that when called,
  emits a 'greeting' event with the given name. In the event listener, log `hello ${name}`
  in the console. Also create an error listener. If the name argument passed to the function
  emitting the event is not a string, emit the error event. In the error event listener,
  throw a new error.

  Example:

  greet('Pesto');
  // => Hello Pesto;

  greet(123);
  // => Error: Enter a string please!
*/

// Un-comment the function below
const events = require('events');

const eventEmitter = new events.EventEmitter();
var name = function(greetName){
  console.log("Hello"+name);
}



const myEventHandler = function () {
  console.log('Heyy');
};
eventEmitter.on('greet', myEventHandler);
function greet(name) {
  if (typeof name !== 'string') myEventHandler.emit('error');
  else myEventHandler.emit('greet', name);
}
eventEmitter.emit(greet('Amal'));
