var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name: { type: String, require: true },
    description: { type: String, require: true }
}, {
    versionKey: false
});

module.exports = mongoose.model('genre', schema);
