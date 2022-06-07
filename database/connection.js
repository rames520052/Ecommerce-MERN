const mongoose = require('mongoose')
const productModel = require('../models/Product')

const connectDatabase = async()=>{

    try{
    await mongoose.connect('mongodb://localhost:27017/doko')
    console.log('Database connected successfully !!!');
        }
catch(error){
    console.log("Sorry, couldn't connect to the database !!!");
            }
}

connectDatabase()

module.exports = connectDatabase;
