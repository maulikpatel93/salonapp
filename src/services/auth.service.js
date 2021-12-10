import axios from "axios";
import config from "../config";
import { useNavigate } from "react-router-dom";

const API_URL = config.API_URL;

const register = (username, email, password) => {
  return axios.post(API_URL + "signup", {
    username,
    email,
    password,
  });
};

const login = (email, password, action) => {
  // const scriptedRef = useScriptRef();
  return axios
    .post(API_URL + "login", {
      email,
      password,
      action
    })
    .then((response) => {
      if (response.status == 200 && response.data.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data.data));
      };
      return response.message;
    });
};

const logout = () => {
  localStorage.removeItem("user");
  const navigate = useNavigate();
  navigate('/login');
};

const authService = {
  register,
  login,
  logout,
};
export default authService;
