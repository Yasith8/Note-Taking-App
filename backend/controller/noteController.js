//imported required modules
const mongoose = require('mongoose')
const Note = require("../models/notemodels")

//get all notes from db
const getAllNoteData = async(req, res) => {
    try {
        //all data assign to notes variable and sort by created date 
        const notes = await Note.find({}).sort({ createdAt: -1 })
            //return success response and pass data and number of notes using JSON format
        return res.status(200).json({
            count: notes.length,
            data: notes
        })
    } catch (error) {
        //error handling
        return res.status(500).json({ message: error.message });
    }
}


//get specific note based on id
const getOneNoteData = async(req, res) => {

    const { id } = req.params;
    try {
        //find the note by id and assign it into notes variable if requested data exsist
        const notes = await Note.findById({ _id: id })

        //if no data found then send not found status else pass success status
        if (!notes) {
            return res.status(400).json({ message: "No user found" });
        } else {
            return res.status(200).json(notes);
        }
    } catch (error) {
        //error handling
        return res.status(500).json({ message: error.message });
    }
}

//export the functions
module.exports = { getAllNoteData, getOneNoteData }