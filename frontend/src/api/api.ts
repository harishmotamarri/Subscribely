import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000/api/",
});

export const registerUser = (data: any) => API.post("register/", data);
export const loginUser = (data: any) => API.post("login/", data);
export const getPlans = () => API.get("plans/");
export const subscribePlan = (data: any) => API.post("subscribe/", data);
export const captureOrder = (data: any) => API.post("capture/", data);