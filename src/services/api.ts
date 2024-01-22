import axios from "axios";

const api = axios.create({
  baseURL: "https://loginpage-back-41f3dd1cfcfb.herokuapp.com/",
});

api.interceptors.response.use(
    successResponse => successResponse,
    errorResponse => Promise.reject(errorResponse)
)

export { api };
