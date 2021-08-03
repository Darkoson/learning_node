const  events = require('events');
eventEmitter = new events.EventEmitter();
eventEmitter.emit('my_event');
eventEmitter.on('my_event', () => {
  console.log('data received successfully.');
});

class Person extends events {

    constructor(){
        super() ;
        console.log('we are creating a new person');
    }
}


person = new Person();
person.on('test', ()=>{console.log('Do something test is emitted');}) ;
person.emit('test');


module.exports = Person ;