/**
 * var variable can be reassigned and redefined; this can cause a lotta debugging issues and data issues
 *      - global scope
 * let variable can be reassigned but cannot be redefined
 *      - block scope { }
 * const variable canoot be reassigned or redefined
 *      - block scope { }
 */

 var lol = 'lol'

 var lol = 'rofl';
let stupid = 'Joe Biden';
 console.log(lol)

 function fooBar() {
     let firstName = 'Foo';
     let lastName = 'Bar';
     let lol = 'lmao';   
     console.log(stupid);
     stupid = 'Trump';
     return `${firstName} ${lastName} is ${lol}`;
 }

 console.log(fooBar());
 console.log(lol);
 console.log(stupid);