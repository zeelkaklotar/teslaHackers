import axios from "axios";

const baseURL = "http://localhost:5000/api";

const apiService = axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json'
    }
  });

export default apiService;