const express = require('express');
const app = express()
let { people } = require('./data');

// static assets
app.use(express.static('./methods-public'));

app.get('/api/people', (req, res)=> {
    return res.send(people);
})

// parse form data(middleware) - more infor about url 

app.use(express.urlencoded({extended:false}));
// POST request
app.post('/login', (req, res) =>{
    const {name} = req.body;
    if(name){
        return res.status(200).send(`Welcome ${name}`)
    }
    return res.status(400).send(`Please provide an credencial`)
    console.log(req.params);
    res.send('POST');
})

app.listen(4000, () =>{
    console.log("server is listening on port 4000...")
})