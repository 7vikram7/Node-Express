const http = require('http')

const server = http.createServer((req, res) => {
    
    const url = req.url 

    if (url === '/') {
        res.writeHead(200, {'content-type':'text/html'})
        res.write('<h1>Home Page</h1>')
        res.end()
    } else if (url === '/about') {
        res.writeHead(200, {'content-type':'text/html'})
        res.write('<h1>About Page Page</h1><p>This is a node express tutorial. Happy Learning!</p>')
        res.end()
    } else {
        res.writeHead(404, {'content-type':'text/html'})
        res.write('<h1>Oops! Looks like you are lost.</h1>')
        res.end()   
     }
})

server.listen(5000)

