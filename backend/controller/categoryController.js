const mongoose = require('mongoose')
const Category = require("../models/category")


const getCategory = async(req, res) => {
    try {
        const categories = await Category.find({}).sort({ createdAt: -1 });
        return res.status(200).json(categories);
    } catch (error) {
        console.error('Error fetching categories:', error);
        console.error('Error details:', error.message); // Log error message
        return res.status(500).send({ message: 'Internal Server Error' });
    }
};

//create new category
const createCategory = async(req, res) => {
    try {
        const { name } = req.body;
        let category = await Category.findOne({ name });

        if (!category) {
            category = new Category({ name });
            await category.save();
        } else {
            return res.status(400).json({ message: 'Category already exists' });
        }
        res.status(201).json(category);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
}


//get specific category based on id
const getOneCategryData = async(req, res) => {

    const { id } = req.params;
    try {
        //find the note by id and assign it into notes variable if requested data exsist
        const category = await Category.findById({ _id: id })

        //if no data found then send not found status else pass success status
        if (!category) {
            return res.status(400).json({ message: "No category found" });
        } else {
            return res.status(200).json(category);
        }
    } catch (error) {
        //error handling
        return res.status(500).json({ message: error.message });
    }
}

//delete category
const deleteCategory = async(req, res) => {
    try {
        const { id } = req.params;
        const delCategory = await Category.findByIdAndDelete(id);

        if (!delCategory) {
            return res.status(400).send("No Category Found with this ID");
        } else {
            return res.status(200).send("Category Deleted Successfully")
        }


    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}



module.exports = { getCategory, createCategory, getOneCategryData, deleteCategory };