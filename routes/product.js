const express = require('express');
const router = express.Router();
const {products} = require('../data')
const {allProducts, singleProduct, postProduct, updateProduct, deleteProduct} = require('../controllers/product')

router.get("/", allProducts )

router.get("/:productID", singleProduct )

router.get("/api/products/:productID/image/:imageID", (req, res) => {
    //console.log(req.params)
    res.send("Hello")
})

router.post("/", postProduct)
router.patch("/:productID", updateProduct)
router.delete("/:productID", deleteProduct)

module.exports = router