// import dependencies
import axios from "axios";

// create a new instance of axios
const axiosInstance = axios.create({
  baseURL: " https://www.episodate.com",
  headers: {
    // "Access-Control-Allow-Origin": "*",
    // "Accept-Encoding": "gzip"
  },
});

export default axiosInstance;

