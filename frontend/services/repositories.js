import axios from 'axios';

const getRepositories = (args) => {
  try {
    return axios.get('https://api.github.com/search/repositories', { params: args });
  } catch (error) {
    console.error(error);
  }
};

export {
  getRepositories
};