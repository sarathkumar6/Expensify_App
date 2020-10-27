console.log('---Destructuring---');

import _ from 'lodash';

const weather  = {
    temperature: '63 F',
    location: {
        city: 'Webster',
        state: 'NY'
    },
    zipCode: 14580,
    precipitation: '60%'
}
// You call pull the properties into separate variables through destructuring
const { state,  city: town } = _.get(weather, 'location', {});
const { temperature, precipitation } = weather;

console.log(`The temperature at ${town}, ${state} is ${temperature} and ${precipitation} precipitation`);


const book = {
    name: 'The Simple Path to Wealth',
    author: 'J.L. Collins',
    publisher: {
        name: 'Penguin'
    }
}

const { name: publisherName = 'Self-Published' } = _.get(book, 'publisher')

//console.log(publisherName);

const address = [1446, 'Fieldcrest Dr', 'Webster' , 'NY', 14580];

const [ houseNumber, street, city, usState ] = address;
console.log(`I live at ${houseNumber} ${street}, ${city}, ${usState}`);

const coffeeShop = ['Cappucino', '$1.99', '$2.49', '$3.49'];

const [ coffee, , mediumCoffeePrice ] = coffeeShop;

console.log(`A medium ${coffee} costs ${mediumCoffeePrice}`);