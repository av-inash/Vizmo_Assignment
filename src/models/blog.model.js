const mongoose = require('mongoose');
const User = require("../models/user.model")

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true

    },

    content: {
        type: String,
        required: true

    },

    author: {
        type: mongoose.Schema.Types.ObjectId,

        ref: 'User',
        required: true
    },

    images: [{
        type: String

    }]

}, { timestamps: true });

module.exports = mongoose.model('Blog', blogSchema);
