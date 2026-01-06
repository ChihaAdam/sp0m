import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3000/api/v1",
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const apiWithCredentials = axios.create({
  baseURL: "http://localhost:3000/api/v1",
  timeout: 15000,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});
