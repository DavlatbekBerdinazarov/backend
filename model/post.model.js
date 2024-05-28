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
    }
    // Uncomment and define the relationships as needed
    // author: {
    //     type: Schema.Types.ObjectId,
    //     ref: "User"
    // },
    // comments: [
    //     {
    //         type: Schema.Types.ObjectId,
    //         ref: "Comment"
    //     }
    // ],
    // likes: [
    //     {
    //         type: Schema.Types.ObjectId,
    //         ref: "User"
    //     }
    // ],
    // date: {
    //     type: Date,
    //     default: Date.now
    // }
});

const Post = model("Post", postSchema);

module.exports = Post;
