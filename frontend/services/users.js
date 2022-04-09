import axios from 'axios';

/**
 * Get users filtered by query args
 * 
 * @param {Gihub Query Args} args 
 * @returns <Promise>
 */
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