var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name: { type: String, require: true },
    synopsis: { type: String, require: true },
    genreId: { type: String, require: true },
    stock: { type: Number, require: true },
    price: { type: Number, require: true }
}, {
    versionKey: false
});

module.exports = mongoose.model('movie', schema);