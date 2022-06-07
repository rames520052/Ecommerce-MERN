const express = require('express')
const app = express();
const {products, users} = require('./data.js')
const hbs = require('hbs')
const loginRoutes = require('./routes/login')
const registerRoutes = require('./routes/register')
const productRoutes = require('./routes/product')
const connectDatabase = require('./database/connection');
const Product = require('./models/Product.js');

const staticPath = __dirname + "/public"

//Serving static files
app.use('/public', express.static(staticPath))
//Setting view engine for our application
app.set('view engine', 'hbs')
//Setting the views folder , default is views
app.set('views', './templates')
//Letting the engine know where to look for partials files
hbs.registerPartials('./templates/partials')
app.use(express.urlencoded({extended: false}))
app.use(express.json())


app.get('/', async(req, res) => {
    const Products = await Product.find()
    res.render('index', {products})
})

app.use('/login', loginRoutes);
app.use('/register', registerRoutes);
app.use('/api/products', productRoutes);

app.get("*", (req, res) => {
    res.sendStatus(404)

})

app.listen(8000, () => {
    console.log("Server is running at port 8000")
})


