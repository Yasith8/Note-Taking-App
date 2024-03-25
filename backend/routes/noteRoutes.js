const express = require('express');
const router = express.Router();

const { getAllNoteData, getOneNoteData, addNewNote, updateNote, deleteNote, softDeleteNote } = require('../controller/noteController.js');




//routes for get all Note Data
router.get('/', getAllNoteData)

//routes for get specific Data
router.get('/:id', getOneNoteData)

//routes for add new note
router.post('/', addNewNote)

//update the exsist note
router.put('/:id', updateNote)

//soft delete to exsist note
router.put('/:id', softDeleteNote)

//hard delete the exsist note
router.delete('/:id', deleteNote)



//export rounter
module.exports = router;