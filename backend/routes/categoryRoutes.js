const express = require('express');
const router = express.Router();

const { getCategory, createCategory, getOneCategryData } = require('../controller/categoryController.js');

//create new category
router.post('/category', createCategory)

//get all categories
router.get('/category', getCategory)
    //get specifc category
router.get('/category', getOneCategryData)

//export rounter
module.exports = router;