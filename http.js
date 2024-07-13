const http = require('http');
const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('this is home page')
    }
    if(req.url === '/about'){
        res.end('this is about page') 
    }
    res.end(
        `<h1>Oops!</h1>
        <p>We can't seem to find the page you are lookong for </p>
        <a href = "/"> Back to home</a>`
    )
})

server.listen(4000);