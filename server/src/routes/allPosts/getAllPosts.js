const Post = require('../../modules/db/schemas/postSchema');

const getAllPosts = (req, res) => {

  const sendResponse = (posts) => {
    res.status(200);
    res.json(posts);
  }

  const sendError = (error) => {
    res.status(400),
    res.json({
      status: "Failed to get posts",
      error: error.stack
    })
  }

  Post.find()
    .then(sendResponse)
    .catch(sendError);
};

module.exports = getAllPosts;
