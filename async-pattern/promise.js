const {readFile} = require('fs');

const getText = (path)=>{
    return new Promise((resolve, reject)=>{
        readFile(path, 'utf8', (err, content)=>{
            if(err){
                reject(err);
            }else{
               resolve(content);
            }
        })
    });
}

getText('./content/first.txt')
.then(result=>console.log(result))
.catch(err=>console.log(err));

//The could become a blocking code, the best bet is to turn it into a promise
// readFile('./content/first.txt', 'utf8', (err, content)=>{
//     if(err){
//         return;
//     }else{
//         console.log(content);
//     }
// })