// Environment variables should be set for different environments
const BASE_URL = process.env.NODE_ENV === 'development'
  ? "http://localhost:8000/api/v1"
  : "https://bbtwebsite.onrender.com/api/v1";

export const token = localStorage.getItem("token");

export { BASE_URL };
