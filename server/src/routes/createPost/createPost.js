const Post = require('../../modules/db/schemas/postSchema');

const createPost = (req, res) => {
  const post = req.body;

  const newPost = new Post(post);

  const sendResponse = (post) => {
    res.status(201);
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Origin, Authorization')
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
