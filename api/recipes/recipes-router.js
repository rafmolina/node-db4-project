const express = require('express');

const Recipes = require('./recipe-model');

const router = express.Router();

router.get('/api/recipes' , (req, res) => {
    Recipes.get()
    .then(recipe => {
        res.status(200).json(recipe)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

module.exports = router;