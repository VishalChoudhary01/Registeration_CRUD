import axios from 'axios';

const API_URL = 'http://localhost:5000/api/users';  // Backend API URL

export const getUsers = async () => {
  return axios.get(API_URL);
};

export const createUser = async (user) => {
  return axios.post(API_URL, user);
};

export const updateUser = async (id, updatedUser) => {
  return axios.put(`${API_URL}/${id}`, updatedUser);
};

export const deleteUser = async (id) => {
  return axios.delete(`${API_URL}/${id}`);
};
