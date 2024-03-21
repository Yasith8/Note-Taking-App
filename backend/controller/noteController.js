//imported required modules
const mongoose = require('mongoose')
const Note = require("../models/notemodels")
const Category = require("../models/category")

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


//add new note
const addNewNote = async(req, res) => {
    try {

        const { title, content, category } = req.body;

        if (!title || !content) {
            return res.status(400).send({ message: "Please fill out all input fields" })
        }

        let categoryObj = await Category.findOne({ name: category });
        if (!categoryObj) {
            categoryObj = new Category({ name: category });
            await categoryObj.save();
        }

        const newNote = {
            title: req.body.title,
            content: req.body.content,
            category: categoryObj._id
        }

        const note = await Note.create(newNote)
        return res.status(200).send({ data: note, message: "New Note added successfully" })


    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}


//update exsist note
const updateNote = async(req, res) => {
    try {
        if (!req.body.title || !req.body.content) {
            return res.status(400).send("Complete all the empty spaces")
        }

        const { id } = req.params;

        const note = await Note.findByIdAndUpdate(id, req.body);

        if (!note) {
            return res.send("No such note found!").status(400)
        } else {
            return res.send("Update Completed Successfully!").status(400)
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

const deleteNote = async(req, res) => {
    try {
        const { id } = req.params;
        const delNote = await Note.findByIdAndDelete(id);

        if (!delNote) {
            return res.status(400).send("No Note Found with this ID");
        } else {
            return res.status(200).send("Note Deleted Successfully")
        }


    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

//export the functions
module.exports = { getAllNoteData, getOneNoteData, addNewNote, updateNote, deleteNote }