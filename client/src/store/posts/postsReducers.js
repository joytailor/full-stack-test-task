import { combineReducers } from 'redux';
import types from './postsActionsTypes';

function postsReducer(state = [], { type, payload }) {
    switch (type) {
      case types.GET_ALL_POSTS_SUCCESS:
        return payload;
        
      case types.ADD_POST_SUCCESS:
        return [ ...state, payload ];
  
      default:
        return state;
    }
  }

function loadingReducer(state = false, { type }) {
    switch (type) {
      case types.FETCH_REQUEST:
        return true;
  
      case types.FETCH_SUCCESS:
      case types.FETCH_ERROR:
        return false;
  
      default:
        return state;
    }
  }
  
  function errorReducer(state = null, { type, payload }) {
    switch (type) {
      case types.FETCH_REQUEST:
        return null;
  
      case types.FETCH_ERROR:
        return payload;
  
      default:
        return state;
    }
  }
  
  export default combineReducers({
    loading: loadingReducer,
    error: errorReducer,
    posts: postsReducer,
  });