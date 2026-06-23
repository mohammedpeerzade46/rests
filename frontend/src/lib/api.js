import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
export const API = `${BACKEND_URL}/api`;

export const apiClient = axios.create({
  baseURL: API,
  headers: { "Content-Type": "application/json" },
});

export const createReservation = (payload) =>
  apiClient.post("/reservations", payload).then((r) => r.data);

export const createContact = (payload) =>
  apiClient.post("/contact", payload).then((r) => r.data);
