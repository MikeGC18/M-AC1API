const express = require('express')
const path = require('path')
const products_routes = require('./routes/products.js')

//Server instantiation
const app = express()

const slugify = require('slugify');

//Server configuration: template engine
app.set('views', './views');
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'views')));

//Midleware
app.use(express.json())
app.use('/', products_routes)

//Server startup
app.listen(5000, () => {
    const message = 'server is listening on port 5000';

    const slugMessage = slugify(message, {
        replacement: '*',
        lower: false,
        strict: true
    });

    console.log(slugMessage);
});


