const mongoose = require('mongoose');
//creating schema
const batchSchema = new mongoose.Schema({
    name: String
  });

  //creating model
  const Batch = mongoose.model('Batch', batchSchema);

  module.exports = Batch