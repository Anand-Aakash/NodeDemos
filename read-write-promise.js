const {readFile} = require('fs').promises
const fetchData=async()=>{
    try{
        const data=await readFile('largefile.txt','utf-8')
        console.log(data)
    }catch(error){
        console.log(error)
    }
}
fetchData()