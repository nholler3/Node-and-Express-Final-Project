'use strict';

const mongoose = require('mongoose'),
    {Schema} = mongoose

var userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    }
});

userSchema.methods.getInfo = function () {
    return `Name: ${this.name} Gender: ${this.gender}`;
};

//module.exports = mongoose.model( 'Contact', userSchema, 'contacts' );
module.exports = mongoose.models.User || mongoose.model('User', userSchema, 'contacts'); //'contacts' is referring to the table in the database