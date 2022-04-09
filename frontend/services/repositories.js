import axios from 'axios';

/**
 * Get repositories filtered by query args
 * 
 * @param {Gihub Query Args} args 
 * @returns <Promise>
 */
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