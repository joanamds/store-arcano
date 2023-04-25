const axios = require('axios');

module.exports = async function fetchAPI (endpoint) {
  const response = await axios.get(`https://fakestoreapi.com/${endpoint}`);
  return response.data;
}
