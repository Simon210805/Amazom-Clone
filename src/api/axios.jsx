import axios from "axios";
const axiosInstance = axios.create({
  // baseURL: "http://127.0.0.1:5001/clone-ad54e/us-central1/api",
  baseURL: "https://api-scbinalbkq-uc.a.run.app/",
});
export  {axiosInstance}