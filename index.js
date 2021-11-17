const myModule = require('./util/myModule');

myModule.helloWorld();

myModule.numbers();

myModule.sayName();

// const fs = require('fs');

// fs.readFile('story.txt', 'utf8', function (err, data) {
//     if (err) {
//         console.log("There was a problem reading the file.");
//     } else {
//         console.log(data);
//     }
// });


// const http = require('http');

// http.createServer((req, res) => {
//     res.write('Hello, World!');
//     res.end();
// })
//     .listen(8000);

const faker = require('faker');



let randomName = faker.name.findName();
console.log(randomName);

let randomAddress = {
    streetAddress: faker.address.streetAddress(),
    city: faker.address.city(),
    zipCode: faker.address.zipCode(),
}

console.log(randomAddress);