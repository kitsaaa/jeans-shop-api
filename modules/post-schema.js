const mongoose = require("mongoose");

let Schema = mongoose.Schema;

let postSchema = new Schema({
    _id: String,
    title: String,
    price: String,
    images: [String],
    about: String
}, {
    versionKey: false
});

module.exports = {postSchema};