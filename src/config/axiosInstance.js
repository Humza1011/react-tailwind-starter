import axios from "axios";

// Create an Axios instance with custom configurations
const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: "http://localhost:3000",
});

// Add a response interceptor to your instance
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      console.log("Authentication error, redirecting to login...");
      window.location = "/login";
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
