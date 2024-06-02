const mongoose = require("mongoose");

const { Schema, model } = mongoose;

// create post schema
const postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    picture: {
        type: String
    },
}, { timestamps: true });

const Post = model("Post", postSchema);

module.exports = Post;
