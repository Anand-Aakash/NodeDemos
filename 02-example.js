const http=require('http')
const server=http.createServer(function(request,response){


 if(request.url=='/') return responseText(request,response)
 if(request.url=='/json') return responseJson(request,response)
 requestNotFound(request,response)
})

function responseText(req,res){
    res.setHeader('Content-Type','text/plain')
    res.end('durrrrrr')
}
function responseJson(req,res){
    res.setHeader('Content-Type','application/json')
    res.end(JSON.stringify({'name':'Anand','age':20,'numbers':[1,2,3,4,5]}))
}
function requestNotFound(request,response){
    response.writeHead(404,{'Content-Type':'text/plain'})
    response.end('Requestest response NOT FOUND')
}
server.listen(8081);