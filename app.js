



// =============== Tutorial ========================
const tutorial = require ('./tutorial');
console.log(tutorial.addition(5,5));
console.log(tutorial.PI);
console.log(new tutorial.Car());

// ========================== Person =============================
const Person = require ('./person');
person = new Person();
person.on('test', ()=>{console.log('Do something test is emitted');}) ;
person.emit('test');

// ========================== read line =============================
const ReadLine = require('readline');
ReadLine.createInterface({input : process.stdin , output: process.stdout} );