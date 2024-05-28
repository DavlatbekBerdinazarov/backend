// routes/post.routes.js

const express = require('express');
const router = express.Router();
const PostController = require('../controllers/post.controller');

// Define route to get all posts
// get all posts
router.get('/all', PostController.getAll);

// create post
router.post('/create', PostController.create);

// delate post
router.delete('/delete/:id', PostController.delete);

// edit post
router.put('/edit/:id', PostController.edit);

// get one post
router.get('/get-one/:id', PostController.getOne);

module.exports = router;

module.exports = router;
