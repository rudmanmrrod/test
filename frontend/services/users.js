import axios from 'axios';

const getUser = (args) => {
  try {
    return axios.get('https://api.github.com/search/users', { params: args });
  } catch (error) {
    console.error(error);
  }
};

export {
  getUser
};