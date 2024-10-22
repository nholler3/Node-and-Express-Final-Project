const userController = require('./userController');
const User = require('../models/users');

const homeController = {};

// Home page
homeController.homePage = (req, res) => {
    console.log("In the home page");
    res.render('index', { title: 'Home' });
};

// Contact form page
homeController.postSignUpForm = (req, res) => {
    console.log("in homeController postSignUpForm method");
    res.render('contact', { title: 'Contact Us' });
};

// List all users
homeController.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.render('users', { title: 'Users', users });
    } catch (error) {
        console.error('Error listing users:', error);
        res.status(500).send(error);
    }
};

// Add a new user
homeController.addUsers = async (req, res) => {
    console.log("in homeController addUser");
    try {
        const { name, gender } = req.body;

        const newContact = new Contact({ name, gender });
        console.log("New Contact: ", newContact.name," ", newContact.gender)
        await newContact.save();
        res.redirect('/users');
    } catch (error) {
        console.error('Error adding user:', error);
        res.send(error);
    }
};

module.exports = homeController;
