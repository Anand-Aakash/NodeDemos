const fs=require('fs')
//SYNCHRONOUS
//Reading the content from the file modulesdemo.js and displaying it in the console.
//readFileSync will read the content synchronously

// const data=fs.readFileSync('modulesdemo.js','utf8')

//ASYNCHRONOUS
const data=fs.readFile('modulesdemo.js','utf-8',(error,data)=>{
    if(error)
    console.log(error)
    console.log(data)
})

console.log(data)
for(var i=0;i<1;i++)
console.log(i)

// console.log(data)