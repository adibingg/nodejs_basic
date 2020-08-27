const http = require('http');

//even handler

function onRequest(request, response)
{
    response.writeHead(200, {'Content-Type' : 'text-html'});
    response.write('<h1> Hello world</h1>');
    response.end();
}

//membuat web server (objek dari kelas htttp.server)

const server = http.createServer();

//setiap terjadi even request, funsi onRequest akan diljalankan diserver
server.on('request', onRequest);

//menunggu terjadinya event

var serverstatus = server.listen(3000);

if(serverstatus){
    console.log('server is runing ...');
}