const express = require('express');
const app = express();
const { products } = require('./data')

app.get('/' , (req, res) => {
    return res.send('<h1> Home Page</h2> <a href="/api/products"> products</a>'); 
})
 
// Route param

// get all product
app.get('/api/products', (req, res) => {
    const newProducts = products.map((product) => {
        const {id, name, image} = product;
        return {id, name, image};
    })
    return res.json(newProducts)
})
// Request param 
//  console.log("222222222222");
// app.get('/api/products:productId', (req,res) =>{
//     console.log("eeeeeeee");
// })

app.get('/api/products/:productId', (req, res) => {
    console.log(req.params);
    const { productId } = req.params;
    console.log(productId);
    const singleReqParamProduct = products.find((product) => product.id === productId);
    if(!singleReqParamProduct){
        return res.status(400).send('product does not exist')
    }
    return res.json(singleReqParamProduct);
});

app.get('/api/products/:productID/reviews/:reviewId', (req, res) => {
    console.log(req.params);
    return res.send("hellow world");
})
// get single product
// app.get('/api/products/rec6d6T3q5EBIdCfD', (req, res) => {
//     const singleProduct =  products.find((product) => product.id == "rec6d6T3q5EBIdCfD")
//     res.json(singleProduct)
// })

// Additional params and query string info
app.get('/api/v1/query', (req, res) => {
    console.log(req.query);
    const { search, limit } = req.query
    let sortedProducts = [...products]
    if(search){
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search);
        })
    }
    if(limit){
        sortedProducts = sortedProducts.slice(0, Number(limit));
    }
   
    if(sortedProducts.length < 1){
        // res.status(200).send("Product not found");
        return res.status(200).json({status:true, data: []})
    }
    return res.status(200).send(sortedProducts);
    // return res.send("v1 query API")
})

app.listen(2000,()=>{
    console.log("server is listening on port 2000.")
})