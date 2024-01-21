import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000",
});

api.interceptors.response.use(
    successResponse => successResponse,
    errorResponse => Promise.reject(errorResponse)
)

export { api };
