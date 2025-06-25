const Catway = require('../models/catway');


exports.getAllCatways = async () => {
  return await Catway.find();
};

exports.getCatwayById = async (id) => {
  return await Catway.findById(id);
};

exports.createCatway = async ({ name, location, image }) => {
  return await Catway.create({ name, location, image });
};

exports.updateCatway = async (id, data) => {
  return await Catway.findByIdAndUpdate(id, data, { new: true });
};


exports.deleteCatway = async (id) => {
  return await Catway.findByIdAndDelete(id);
};
