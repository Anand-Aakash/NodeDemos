const {readFile,writeFile}=require('fs')
console.log('Reading')
readFile('data1.js','utf-8',(err,data1)=>{
    if(err)
     console.log(err)
console.log(data1)

readFile('data2.js','utf-8',(err,data2)=>{
    if(err)
     console.log(err)
console.log(data2)
writeFile('dataAsync.txt',`${data1} ${data2}`,(err)=>{
    if(err)
    console.log(err)
})
})
})

// console.log('read')
// writeFile('datawriteAsync.txt',`User Details ${data1} ${data2}`)
// console.log('done writing')
console.log('reading the data from data1.js and data2.js')
console.log('end')

