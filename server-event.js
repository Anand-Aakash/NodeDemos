const http=require('http')
var count=0;
const server=http.createServer((request,response)=>{
    response.end('Hello')

})
server.on('connection',()=>{
    console.log('Server connected..')
})
server.on('request',()=>{
    count++
    console.log('Request is recieved')
    console.log(`Visitors ${count}`)
})
server.listen(8086)
