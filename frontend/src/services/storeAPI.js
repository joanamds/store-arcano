import axios from 'axios';
import jwt from 'jsonwebtoken';

const api = axios.create({
  baseURL: `http://localhost:${process.env.REACT_APP_API_PORT || '3001'}`,
});

export const setToken = (token) => {
  api.defaults.headers.common.Authorization = token;
};

export const requestProducts = async (endpoint) => {
  const { data } = await api.get(endpoint);
  return data;
};

export const requestCartHistory = async (endpoint, userId) => {
  const { data } = await api.get(`${endpoint}/${userId}`);
  return data;
}

export const requestLogin = async (endpoint, body) => {
  const { data } = await api.post(endpoint, body);
  const token = data.token;
  const decodedToken = jwt.decode(token);
  const userId = decodedToken.id;
  setToken(token);
  return { token, userId };
};

export default api;