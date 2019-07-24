const express = require('express');

const main = require('./allPosts/getAllPosts');
const createPost = require('./createPost/createPost');

const apiRoutes = express.Router();

const postMiddleware = (req, res, next) => {

  if(req.body.title && req.body.description){
    next();
    return
  }
  res.status(400);
  res.json({
    error: `Post's fields inputs are invalid`
  })
};

apiRoutes
  .get('/', main)
  .post('/posts/new', postMiddleware, createPost)

module.exports = apiRoutes;
