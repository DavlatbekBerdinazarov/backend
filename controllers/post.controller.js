// controllers/post.controller.js

const Post = require("../model/post.model");

class PostController {
  async getAll(req, res) {
    try {
      const posts = await Post.find();
      res.json(posts);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  async create(req, res) {
    try {
      const post = new Post({
        title: req.body.title,
        body: req.body.body,
      });
      const newPost = await post.save();
      res.status(201).json(newPost);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  async delete(req, res) {
    try {
      const post = await Post.findByIdAndDelete(req.params.id);
      if (!post) return res.status(404).json({ message: "Post not found" });
      res.json({ message: "Post deleted", post });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  async edit(req, res) {
    try {
      const post = await Post.findByIdAndUpdate(
        req.params.id,
        { title: req.body.title, body: req.body.body },
        { new: true }
      );
      if (!post) return res.status(404).json({ message: "Post not found" });
      res.json({ message: "Post updated", post });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  async getOne(req, res) {
    try {
      // get one by id
      const post = await Post.findById(req.params.id);
      if (!post) return res.status(404).json({ message: "Post not found" });
      res.json(post);
    }
    catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
}



module.exports = new PostController();
