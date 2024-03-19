const express = require('express');
const router = express.Router();

const { getAllNoteData, getOneNoteData } = require('../controller/noteController.js');



//routes for get all Note Data
router.get('/', getAllNoteData)

//routes for get specific Data
router.get('/:id', getOneNoteData)



//export rounter
module.exports = router;