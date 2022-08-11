const { readFile } = require('fs');

console.log('Started the first task');

readFile('./content/first.txt','utf8', (err, res)=>{
    if(err){
        console.log(err);
    }
    console.log(res);
    console.log('Completed first task');
});

console.log('Starting the next task');