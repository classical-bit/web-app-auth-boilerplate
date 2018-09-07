const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create a Schema
const userSchema = new Schema({
    email: string,
    password: string
});

// Create a Model
const User = mongoose.model('user', userSchema);

// Export the Model
module.exports = User;