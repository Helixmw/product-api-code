const express = require('express');
const router = express.Router();
const { GetCategories, AddCategory, GetCategory, EditCategory, DeleteCategory } = require('../controllers/CategoriesController.js')


router.get('/', GetCategories);
router.get('/:id', GetCategory);
router.post('/', AddCategory);
router.put('/:id', EditCategory);
router.delete('/:id', DeleteCategory);


module.exports = router