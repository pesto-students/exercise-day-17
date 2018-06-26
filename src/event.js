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

// Create an event handler:
const eventEmitter = new events.EventEmitter();

const listner1 = function listner1(name) {
  console.log(`Hello ${name}`);
};
// listener #2
const listner2 = function listner2() {
  throw new Error('Enter a string please');
};
eventEmitter.on('greet', listner1);
eventEmitter.on('error', listner2);

function greet(name) {
  if (typeof name !== 'string') eventEmitter.emit('error');
  else eventEmitter.emit('greet', name);
}

greet('Pesto');
greet(123);
