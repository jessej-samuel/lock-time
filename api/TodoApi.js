import axios from "axios";

const TodoApi = axios.create({
  baseURL: "http://localhost:5000/",
  withCredentials: true,
});

export default TodoApi;