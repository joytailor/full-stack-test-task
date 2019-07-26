import types from './postsActionsTypes';

const addPostSuccess = post => ({
  type: types.ADD_POST_SUCCESS,
  payload: post,
});

const getAllPostsSuccess = posts => ({
    type: types.GET_ALL_POSTS_SUCCESS,
    payload: posts,
});

const fetchRequest = () => ({
  type: types.FETCH_REQUEST,
});

const fetchError = error => ({
  type: types.FETCH_ERROR,
  payload: error,
});

export default {
  addPostSuccess,
  getAllPostsSuccess,
  fetchRequest,
  fetchError,
};
