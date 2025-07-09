const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: Number,
    message: String
})

const Formmodel = mongoose.model('Fabrication', applicationSchema);

module.exports = Formmodel;