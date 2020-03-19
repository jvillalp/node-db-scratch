const router = require('express').Router();

const Characters =  require('./character-model.js')

router.get('/', (req, res) => {
    res.status(200).json({message: `this is working from the router`})    
    //Characters.find()
})
module.exports = router

