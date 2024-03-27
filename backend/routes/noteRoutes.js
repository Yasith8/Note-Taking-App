const express = require('express');
const router = express.Router();

const { getAllNoteData, getOneNoteData, addNewNote, updateNote, deleteNote, softDeleteNote, getActiveNoteData, getInActiveNoteData } = require('../controller/noteController.js');




//routes for get all Note Data
router.get('/', getAllNoteData)

//get all active note data
router.get('/active', getActiveNoteData)

//get all inactive note data
router.get('/inactive', getInActiveNoteData)

//routes for get specific Data
router.get('/:id', getOneNoteData)

//routes for add new note
router.post('/', addNewNote)

//update the exsist note
router.put('/:id', updateNote)

//soft delete to exsist note
router.put('/delete/:id', softDeleteNote)

//hard delete the exsist note
router.delete('/:id', deleteNote)



//export rounter
module.exports = router;