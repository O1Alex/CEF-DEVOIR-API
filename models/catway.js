const mongoose = require('mongoose');

const catwaySchema = new mongoose.Schema({
    catwayNumber :  {type: Number, unique: true},
    catwayType :    {type: String},
    catwayState :   {type: String}
});

module.exports = mongoose.model('catway', catwaySchema);