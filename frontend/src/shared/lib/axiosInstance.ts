import axios from "axios";

const API_URL = `${import.meta.env.VITE_API_URL}/api/v1`;
export const api = axios.create({
  baseURL: API_URL,
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const apiWithCredentials = axios.create({
  baseURL: API_URL,
  timeout: 15000,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});
