import axios from "axios";

export const instance = axios.create({
  baseURL: "http://3.1.210.237:8000",
  timeout: 100000,
  headers: { "X-Custom-Header": "foobar" },
});
