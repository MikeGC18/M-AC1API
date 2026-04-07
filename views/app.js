const express = require('express')
const path = require('path')
const products_routes = require('./routes/products.js')

// Server instantiation
const app = express()

// View engine
app.set('views', './views');
app.set('view engine', 'pug');

// STATIC FIX
app.use(express.static(path.join(__dirname, 'views')));

// Middleware
app.use(express.json())
app.use('/', products_routes)

// Server startup
app.listen(5000, () => {
    console.log('server is listening on port 5000')
})


