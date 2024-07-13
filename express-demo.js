const express = require('express');
const path = require('path');
const app = express();

//setup static and middleware
app.use(express.static('./public'))

app.get('/', (req, res) =>{
    res.sendFile(path.resolve(__dirname, './navbar-app/index.html'));
})

app.all('*', (req, res) => {
  
    res.status(400).send('Resource not found');
})
app.listen(7000, () =>{
    console.log("Server is litensing on post 7000")
})