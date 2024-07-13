const express = require('express');
const app = express()
const logger = require('./logger');
/// middle ware
const authorize = require('./authorize');
// morgan
const morgan = require('morgan');

// req => middleware -> response
// before use and apply below all the functions 
// apply on any route - The logger is a callback function
// app.use(logger);
// apply only api
// app.use('/api', logger);

// multiple middel ware function 
// =============================

app.use(logger, authorize);

app.use('/api', logger, authorize);

app.use(express.static('./sample'))

// Morgan 

app.use(morgan('tiny'));

app.get('/',(req,res) =>{
    return res.send('Home');
})

app.get('/about', (req,res) =>{
    return res.send('About');
})

app.get('/api/products',  (req,res) =>{
    return res.send('products');
})

app.get('/api/items', [logger, authorize], (req,res) =>{
    console.log(req.user);
    return res.send('Items');
})


app.listen(5000, () =>{
    console.log("server is listening on port 6000...")
})