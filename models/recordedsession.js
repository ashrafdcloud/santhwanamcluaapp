const mongoose = require('mongoose');
//creating schema
const recordedsessionSchema = new mongoose.Schema({
    name: String,
    description:String,
    date: Date,
    week:Number,
    class:Number,
    topic:String,
    videoLink:String,
    password:String,
    batch:{
        type:mongoose.ObjectId,
        ref: 'Batch'
    }
    
  });

  //creating model
  const Recordedsession = mongoose.model('Recordedsession', recordedsessionSchema);

  module.exports = Recordedsession