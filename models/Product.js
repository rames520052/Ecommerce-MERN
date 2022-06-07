const mongoose = require('mongoose')

const ratingSchema = mongoose.Schema({
    rate: {
        type: Number,
        min:1
    },
    count: {
        type: Number,
        min:1
    },
})

const productSchema = mongoose.Schema({
    title: {
        type: String,
        require: true,
        maxLength: 100,
    },
    price: {
        type: Number,
        require: true
    },
    description: String,
    category: String,
    image: String,
    rating: ratingSchema
})



const Product = mongoose.model('Product', productSchema);

module.exports = Product;