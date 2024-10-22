const express = require('express');
const router = express.Router();
const User = require('../models/users');

router.get('/', async (req, res) => {
    try {
        const users = await User.find();

        console.log('API Endpoint Accessed')

        //console.log the format request
        console.log('Format:', req.query.format);

        // Check if format exists and equal to 'json'
        if (req.query.format && req.query.format.toLowerCase() === 'json') {
            res.json(users); // JSON format
        } else {
            res.render('users', { users }); // HTML format
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
});

module.exports = router;