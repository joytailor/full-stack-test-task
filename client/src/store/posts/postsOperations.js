import * as api from '../../api/posts';
import actions from './postsActions';

const requestAllPosts = () => async dispatch => {
  dispatch(actions.fetchRequest());

  try {
    const response = await api.getAllPosts();
    dispatch(actions.getAllPostsSuccess(response));
  } catch (error) {
    dispatch(actions.fetchError(error.message));
  }
};

const requestAddNewPost = item => async dispatch => {
  dispatch(actions.fetchRequest);

  try {
    const response = await api.addPost(item);
    dispatch(actions.addPostSuccess(response));
  } catch (error) {
    dispatch(actions.fetchError(error.message));
  }
}

export default {
  requestAllPosts,
  requestAddNewPost,
}
