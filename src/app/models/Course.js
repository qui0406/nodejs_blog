const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
    title: {type: String, maxLength: 255},
    body: {type: String, maxLength: 600},
    date: {type: Date, maxLength: 255},
    creatAt: {type: Date, default: Date.now},
    updateAt: {type: Date, default: Date.now},
  });

  module.exports= mongoose.model('Course', Course);