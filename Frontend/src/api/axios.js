import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000/api', // Update if deployed
  withCredentials: true, // For cookie-based auth, optional
});

export default instance;
