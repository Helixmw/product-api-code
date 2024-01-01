const express = require('express');
const router = express.Router();
const {GetBrands, AddBrand, EditBrand, DeleteBrand} = require('../controllers/BrandsController.js');

router.get('/', GetBrands);
router.post('/', AddBrand);
router.put('/:id', EditBrand);
router.delete('/:id', DeleteBrand);

module.exports = router