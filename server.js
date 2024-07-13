const http = require('http');

const server = http.createServer((req,res) => {
    if(req.url === "/")
        res.end('welcome to our homepage');
    if(req.url === "/about"){
        // Blocking code
        // for(let i =0; i< 1000 ; i++){
        //     for(let j=0; j< 1000 ; j++){
        //         console.log(`${i} ${j}`)
        //     }
        // }
        res.end('welcome to our aboutpage');
    }
    res.end('<h1>Error page<h1>');
})

server.listen(9000, () => {
    console.log('server is listening on post 9000...')
})