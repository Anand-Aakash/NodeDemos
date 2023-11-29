const fs=require('fs')
const stream=fs.createReadStream('largefile.txt')
stream.on('data',(chunk)=>{
    console.log(`Recieved ${chunk.length/1024} KB of data`)
})
stream.on('end',()=>{
    console.log('End of the file is reached')
})
stream.on('error',()=>{
    console.log('error')
})