import { combineReducers } from 'redux';
import postsReducers from './posts/postsReducers';

export default combineReducers({
  posts: postsReducers,
});
