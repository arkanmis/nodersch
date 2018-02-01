/**
 * Created by ARSYI on 01/02/18.
 */
const http = require('http')
const handleServer = (request, response) => {
    response.writeHead(200, {
        'Content-Type':'application/json'
    })
    response.end('hello hactive8')
}
http.createServer(handleServer).listen(5443, '127.0.0.1')

console.log("executed on 127.0.0.1");
