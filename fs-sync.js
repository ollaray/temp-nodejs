const {readFileSync, writeFileSync} = require('fs');

console.log('start');
//File reading if you don't provide a utf8 encoding, you would get a buffer
const firstFile = readFileSync('./content/first.txt','utf8');
const secondFile = readFileSync('./content/second.txt','utf8');

console.log(`${firstFile} ${secondFile}`);

//File Writing
writeFileSync(
'./content/result-sync.txt',
`Here is the result: ${ firstFile }, ${ secondFile } `,
{flag:'a'}
);
console.log('done');
console.log('starting the next task');

//or use the below
//const fs = require('fs');
//console.log(fs);

