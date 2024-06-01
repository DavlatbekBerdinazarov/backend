const Post = require("../model/post.model");
const FileService = require("../server/file.server");

class PostService {
    async getAll() {
        const posts = await Post.find();
        return posts;
    }
    async create(post, picture) {
        const fileName = FileService.save(picture)
        const newPost = await Post.create({ ...post, picture: fileName });
        return newPost;
    }
    async delete(id) {
        const post = await Post.findByIdAndDelete(id);
        return post;
    }
    async edit(post, id) {
        const updatedPost = await Post.findByIdAndUpdate(id, post, { new: true });
        return updatedPost;
    }
    async getOne(id) {
        const post = await Post.findById(id);
        return post;
    }
}

module.exports = new PostService();