//  CommonJS, every file is Module by default
//Modules - encapsulated code (only share a minimum)

const names = require('./modules');
const sayHi = require('./utils');

const data = require('./alternative-flavor');
require('./mind-grenade');
console.log(data);


sayHi('Susan');
sayHi(names.john);
sayHi(names.peter);