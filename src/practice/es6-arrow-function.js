/**
 * What the hell is arrow function in JS?
 *  - A function with simple syntax () => {....}
 *  - Arguments are not bound with arrow function
 *  - this is not bound to arrow function; refers to its closest parent this
 *  - Anonymous function
 *  - Do not use arrow function
 *      # as an object method
 *      # as constructor function
 */
//console.log(this === window)
 const cube = function cube(num) {
    return num * num * num;
 }

 const cubeArrow = (num) => num * num * num;
 //console.log('Cube of 7 usinf regular function is: ', cube(7));
 //console.log('Cube of 7 using arrow function is: ', cube(7));

 function combineName() {
     console.log('What is this here: ', this);
    return `${this.firstName} ${this.lastName}`;
 }

 const johnDoe = {
     firstName: 'John',
     lastName: 'Doe',
     cities: ['Houston', 'Toronto'],
     printCititesLived: function printCititesLived() {
         // Here this refers to johnDoe object
        console.log('1) What is this here: ', this);
        this.cities.forEach(function eachCity(city) {
            // Here this  does not refer to johnDoe it goes a level above i.e., undefined in use strict mode
            console.log('2) What is this here: ', this);
            return `${this.firstName} has lived in ${city}`;
        });
     }
 };
 
 const jakeDoe = {
     firstName: 'Jake',
     lastName: 'Doe',
     cities: ['Paris', 'London'],
     printCititesLived() {
         // Here this refers to jakeDoe
        console.log('3) What is this here: ', this);
        this.cities.forEach((city) => {
            // Here this refers to jakeDoe
            console.log('4) What is this here: ', this);
            return `${this.firstName} has lived in ${city}`;
        })
     }
 };

 const combineNameArrow = () => {
    console.log('What is this here: ', this);
    return `${this.firstName} ${this.lastName}`;
 }

 const printFullName = combineName;
 //console.log(printFullName.call(johnDoe));
 //console.log(printFullName.call(jakeDoe));
 
 //console.log('Regular Function')
 //console.log(johnDoe.printCititesLived());
 console.log('Arrow Function')
 console.log(jakeDoe.printCititesLived());

 