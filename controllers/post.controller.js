// controllers/post.controller.js
const PostService = require('../server/post.server')
const Post = require("../model/post.model");

class PostController {
  async getAll(req, res) {
    try {
      const posts = await PostService.getAll();
      res.json(posts);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  async create(req, res) {
    try {
      console.log(req.files.picture)
      const post = await PostService.create(req.body, req.files.picture);
      res.status(201).json(post);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  async delete(req, res) {
    try {
      const post = await PostService.delete(req.params.id);
      if (!post) return res.status(404).json({ message: "Post not found" });
      res.json({ message: "Post deleted", post });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  async edit(req, res) {
    try {
      const { body, params } = req
      const post = await PostService.edit(body, params.id);
      if (!post) return res.status(404).json({ message: "Post not found" });
      res.json({ message: "Post updated", post });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  async getOne(req, res) {
    try {
      // get one by id
      const post = await PostService.getOne(req.params.id);
      if (!post) return res.status(404).json({ message: "Post not found" });
      res.json(post);
    }
    catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
}



module.exports = new PostController();
