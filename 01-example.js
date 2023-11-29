const http=require('http')
const server=http.createServer(function(request,response){
//  response.end('Hellow World')
 if(request.url=='/') return responseText(request,response)
 if(request.url=='/json') return responseText(request,response)
})

function responseText(req,res){
    res.setHeader('Content-Type','text/plain')
    res.end('Hiii')
}
function responseJson(req,res){
    res.setHeader('Content-Type','application/json')
    res.end(JSON.stringify({'name':'John','age':20,'numbers':[1,2,3,4,5]}))
}
server.listen(8080);