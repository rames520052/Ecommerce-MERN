
const async = require('hbs/lib/async');
const {products} = require('../data')
const Product = require('../models/Product')

const allProducts = async(req, res) => {
    const Products = await Product.find();
    let {limit} = req.query
    let newProducts = products.map((product) => {
        let {id, title, price, category, image} = product
        return {id, title, price, category, image}
    })
    if(limit){
        newProducts = newProducts.slice(0, Number(limit))
    }
    
    res.json(newProducts)
}


const singleProduct = async(req, res) => {
    let {productID} = req.params
    
    let selectedProduct = await Product.findById(productID);
    res.json(selectedProduct)
}

const postProduct = async(req, res)=>{
  
    let result = await Product.create({
        title: req.body.title,
        id: req.body.id,    
        price: req.body.price,
        category: req.body.category,
        image: req.body.image
    });
    
    res.status(201).send(result);
}

const updateProduct = async(req, res)=>{
    
       const {productID}=req.params;
       let result = await Product.findByIdAndUpdate(productID, req.body)
       res.status(201).res.json(result);
}

const deleteProduct = async(req, res)=>{
    const {productID} = req.params;
    await Product.findByIdAndDelete(productID)
    res.send("Data Deleted Successfully");
}

module.exports = {allProducts, singleProduct, postProduct, updateProduct, deleteProduct}
