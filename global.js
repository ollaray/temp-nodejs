// GLOBALS - NO WINDOWS !!!

//__dirname - path to current directory
//__filename - file name
// require - function to use modules (CommonJS)
// module - info about current module (file)
// process - info about env where the program is bein executed

console.log(__dirname);
console.log(process.release.lts);

setInterval(()=>{
    console.log(`Hello World`);
},1000)
