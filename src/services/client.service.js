import axios from "axios";
import { store } from "../store";
import config from "../config";
import authHeader from "./auth-header";

const API_URL = config.API_URL;

const create = (values) => {
      const auth = store.getState().auth;
      const auth_key = auth.user.auth_key;
      const formData = new FormData();
      formData.append('auth_key', auth_key);
      formData.append('action', 'logout');
      return axios
        .post(
          API_URL + "afterlogin/client/store",
          formData,
          { headers: authHeader() },
        )
        .then((response) => {
          if (response.status == 200) {
            return response.data;
          }
        });
};

const clientApiController = {
  create
};
export default clientApiController;
