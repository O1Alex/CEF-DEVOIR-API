const Reservation = require('../models/Reservation');


exports.getAllReservations = async () => {
  return await Reservation.find().populate('user').populate('catway');
};

exports.getReservationById = async (id) => {
  return await Reservation.findById(id).populate('user').populate('catway');
};

exports.createReservation = async ({ userId, catwayId, date, filePath }) => {
  return await Reservation.create({
    user: userId,
    catway: catwayId,
    date,
    fileUrl: filePath,
  });
};

exports.updateReservation = async (id, data) => {
  return await Reservation.findByIdAndUpdate(id, data, { new: true });
};


exports.deleteReservation = async (id) => {
  return await Reservation.findByIdAndDelete(id);
};