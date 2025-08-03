import axios from "axios";

const BASE_URL = "http://localhost:3001";

export const login = (credentials, token) => {
  return axios.post(`${BASE_URL}/api/auth/login`, credentials, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const register = (credentials) => {
  return axios.post(`${BASE_URL}/api/auth/signup`, credentials);
};

export const refresh = (token) => {
  return axios.get(`${BASE_URL}/api/auth/current`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const logout = (token) => {
  return axios.get(`${BASE_URL}/api/auth/logout`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};