const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {   type: String,
                recquired: true,
                unique: true},
  
  email:    {   type: String, 
                required: [true, 'email requis'], 
                unique: true },

  password: {   type: String, 
                required: true }
});

module.exports = mongoose.model('User', userSchema);
