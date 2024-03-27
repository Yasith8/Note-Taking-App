//import mongoose to create schema
const mongoose = require('mongoose');

//creating schema object using mongoose
const Schema = mongoose.Schema;

//defining schema for note collection
const noteSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    content: {
        type: String,
        require: true
    },
    color: {
        type: String,
        require: false,
        default: "white"
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'catrgories',
        require: true
    },
    isActive: {
        type: Boolean,
        default: true
    }
}, { timestamps: true });

//export schema
module.exports = mongoose.model('Note', noteSchema);