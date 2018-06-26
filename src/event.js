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

class MyEmmiter extends events {}

const myNewEmitter = new MyEmmiter();

function greet(name) {
  if (typeof name !== 'string') myNewEmitter.emit('error');
  else myNewEmitter.emit('greet', name);
}
myNewEmitter.on('greet', (name) => { console.log(`Hello ${name}`); });
myNewEmitter.on('greeting', (name) => { greet(name); });
myNewEmitter.on('error', () => { console.log('Error: Enter the String Please'); });

myNewEmitter.emit('greeting', 'Adi');
myNewEmitter.emit('error', 13);

