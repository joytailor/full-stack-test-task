const Post = require('../../modules/db/schemas/postSchema');

const createPost = (req, res) => {
  const post = req.body;

  const newPost = new Post(post);

  const sendResponse = (post) => {
    res.json({
      status: 'success',
      post,
    });
  };

  const sendError = (err) => {
    res.status(400);
    res.json({
      error: 'Post has not been saved',
      errorType: err.stack
    });
  };

  newPost.save()
  .then(sendResponse)
  .catch(sendError)
};

module.exports = createPost;
