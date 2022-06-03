var http = require('http');

http.createServer(function (req, res){
    res.writeHead(200,{'Content-Type': 'text/html'})
    res.end("Programacion Computacional IV!");
}).listen(8081);

console.log('Server corriendo en http://127.0.0.1:8081/')
