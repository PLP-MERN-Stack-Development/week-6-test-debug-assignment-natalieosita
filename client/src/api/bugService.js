import axios from 'axios';

const API_BASE = 'http://localhost:5000/bugs'; // Update if using proxy or deployed URL

export const fetchBugs = async () => {
  const response = await axios.get(API_BASE);
  return response.data;
};

export const createBug = async bug => {
  const response = await axios.post(API_BASE, bug);
  return response.data;
};

export const updateBugStatus = async (id, status) => {
  const response = await axios.put(`${API_BASE}/${id}`, { status });
  return response.data;
};

export const deleteBug = async id => {
  const response = await axios.delete(`${API_BASE}/${id}`);
  return response.data;
};