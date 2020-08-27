//fungsi yang diperankan sebagai parameter dari fungsi lain.
//contoh sederhana di nodejs

const http = require('http');

function onRequest(request, response)
{
    response.writeHead(200, {'Content-Type' : 'text-html'});
    response.write('<h1>Hello World</h1>');
    response.end();
}

const server = http.createServer();
server.listen(8000);

//onRequest dijadikan sebagai fungsi callback saat memanggil metode on pada code dibawah ini
server.on('request', onRequest);
