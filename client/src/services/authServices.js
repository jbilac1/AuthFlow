import axios from "axios";

const API_URL = "http://localhost:3000"; 

axios.defaults.withCredentials = true; 

export const login = async (username, password) => {
  try {
    const res = await axios.post(`${API_URL}/login`, { username, password });
    return res.data;
  } catch (error) {
    throw error.response?.data || "Login failed";
  }
};

export const logout = async () => {
  await axios.post(`${API_URL}/logout`);
};

export const checkSession = async () => {
  const res = await axios.get(`${API_URL}/session`);
  return res.data;
};
