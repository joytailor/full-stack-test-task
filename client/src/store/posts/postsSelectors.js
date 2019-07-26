const getAllPosts = state => state.posts.posts;

const getIsLoading = state => state.posts.loading;

const getError = state => state.posts.error;

export default {
  getAllPosts,
  getIsLoading,
  getError,
};
