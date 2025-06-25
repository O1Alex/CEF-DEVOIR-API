const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    catwayNumber:   {type: mongoose.Schema.Types.ObjectId, ref: 'Catway', required: true},
    clientName:     {type: String, required: true},
    boatName:       {type: String},
    startDate:      {type: Date, require: true},
    endDate:        {type: Date, require: true}
});

module.exports = mongoose.model('reservation', reservationSchema);