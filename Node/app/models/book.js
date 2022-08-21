let mongoose = require('mongoose');
let Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    desc: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Books', bookSchema)