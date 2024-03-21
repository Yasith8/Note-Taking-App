const express = require('express');
const router = express.Router();

const { getCategory, createCategory } = require('../controller/categoryController.js');

//create new category
router.post('/category', createCategory)

//get all categories
router.get('/category', getCategory)

//export rounter
module.exports = router;