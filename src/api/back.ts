import axios from "axios";

export const baseURL = "http://localhost:3000/api";

export const back = axios.create({
  baseURL,
});
