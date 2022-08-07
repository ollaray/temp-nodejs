const {readFile, writeFile} = require('fs');

//callback->functions in a function that runs when a functionality is complete.

console.log('Start');
readFile('./content/first.txt', 'utf8', (err, result)=>{
        if(err){
            console.log(err);
            return;
        }
        //set up functionality here
        console.log(result);

        const firstFile = result;


        readFile('./content/second.txt','utf8',(err, result)=>{
                if(err){
                    console.log(err);
                    return;
                }
                console.log(result);
                const secondFile = result;

                writeFile('./content/result-async.txt',
                `Here is the result: ${ firstFile }, ${ secondFile } `,
                (err, res)=>{
                    if(err){
                        console.log(err);
                        return;
                    }
                    console.log('Done with this task');
                }
            )
        });

});
console.log('starting the next task');