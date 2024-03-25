//import required modules
const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors');

const NoteRoutes = require('./routes/noteRoutes')


const { getCategory, deleteCategory, getOneCategryData } = require('./controller/categoryController')

//initialize express app
const app = express();

// Middleware to parse incoming requests with JSON
app.use(express.json())

//middleware to handle cors policy
app.use(cors());


app.use('/note', NoteRoutes)


app.get('/category', getCategory)
app.get('/category/:id', getOneCategryData)
app.delete('/category/:id', deleteCategory)


const PORT = process.env.PORT;
const URL = process.env.URL;


//establish connection to mongodb  database using mongoose
mongoose.connect(URL)
    //if connection success display the success messages
    .then(() => {
        console.log("Connected with MongoDB");

        app.listen(PORT, () => {
            console.log("Server is running on port " + PORT);
        })
    })
    //if there is a error on connecting show display the error message
    .catch(err => {
        console.log("Application has Following Errors:  \n" + err);
    })