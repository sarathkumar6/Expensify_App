// With importing default you can name it anything you want while grabbing it
import foo from '../../src/utils';
//import validator from 'validator';
import React from 'react';
import ReactDOM from 'react-dom';

console.log('app1.js is up and running...');
console.log(foo())
console.log(React);
console.log(ReactDOM);
const helloWorld = (
    <div>
        <p>Hello World!</p>
    </div>
)

ReactDOM.render(helloWorld, document.getElementById('app'));