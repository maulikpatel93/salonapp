import React from "react";
import axios from "axios";
import config from "../config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import authHeader from "./auth-header";

const API_URL = config.API_URL;

const register = (username, email, password) => {
  return axios.post(API_URL + "signup", {
    username,
    email,
    password,
  });
};

const login = (email, password, remember_me) => {
  return axios
    .post(API_URL + "login", {
      action: "login",
      email,
      password,
      remember_me,
    })
    .then((response) => {
      if (response.status == 200) {
        return response.data;
      }
    });
};

const logout = (token, auth_key) => {
  return axios
    .post(
      API_URL + "afterlogin/logout",
      {
        action: "logout",
        auth_key
      },
      { headers: authHeader(token) },
    )
    .then((response) => {
      if (response.status == 200) {
        return response.data;
      }
    });
  // localStorage.removeItem("user");
  // const navigate = useNavigate();
  // navigate("/login");
};

const authService = {
  register,
  login,
  logout,
};
export default authService;
