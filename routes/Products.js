const express = require('express');
const router = express.Router();
const {GetProducts,GetProduct,AddProduct, ProductsByCategory, EditProduct, DeleteProduct} = require('../controllers/ProductsController.js');

router.get('/', GetProducts);
//router.post('/', AddProduct);
router.get('/:id', GetProduct);
//router.put('/:id', EditProduct);
//router.delete('/:id', DeleteProduct);
router.get('/category/:id', ProductsByCategory);
module.exports = router;