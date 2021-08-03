const  addition = (a, b) => a+b ;

class Car{
    constructor(){
        console.log(" a new car is created!");
    }
}

const PI = 3.1415 ;

module.exports.addition = addition;
module.exports.Car = Car;
module.exports.PI = PI;

console.log(addition(5,5));
console.log(PI);
console.log(new Car());