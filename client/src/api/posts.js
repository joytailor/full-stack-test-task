import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001';

export const getAllPosts = async () => {
  const response = await axios.get('/');
  return response.data;
}

export const addPost = async item => {
  const response = await axios.post('/posts/new', item);
  return response.data.post;
}
