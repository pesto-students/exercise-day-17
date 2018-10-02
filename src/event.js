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
const EventEmitter = require('events');

module.exports = () => {
  class MyEvent extends EventEmitter {}
  const myEvent = new MyEvent();
  myEvent.on('event', (name) => {
    console.log(`hello ${name}`); // eslint-disable-line
  });
  // Un-comment the function below
  function greet(name) {    // eslint-disable-line
    if (typeof name !== 'string') myEvent.emit('Enter a string please!');
    else myEvent.emit('greet', name);
  }
};
