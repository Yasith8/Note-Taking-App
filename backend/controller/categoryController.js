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

module.exports = { getCategory, createCategory };