require('dotenv').config();
const c = console.log.bind();
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const ejs = require('ejs');
const categoryRoutes = require('./routes/Categories');
const productsRoutes = require('./routes/Products');
const brandsRoutes = require('./routes/Brands');
const pageRoutes = require('./routes/Pages');

mongoose.connect(process.env.DB_NAME);
const con = mongoose.connection;
con.on('open',() => {
    c("Connected to database");
});
con.once('error', () => {
    c("Unable to connect to database");
});
const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(cors());
app.use(express.json());
app.use('/', pageRoutes);
app.use('/api/category', categoryRoutes);
app.use('/api/products', productsRoutes);
app.use('/api/brands', brandsRoutes);

app.listen(process.env.PORT || 5000, ()=>{
    c(`Running at Port ${process.env.PORT}`);
});