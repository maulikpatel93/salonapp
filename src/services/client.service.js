import axios from "axios";
import { store } from "../store";
import config from "../config";
import authHeader from "./auth-header";
import { setMessage } from "../store/slices/message";

const API_URL = config.API_URL;

const create = (values, thunkAPI) => {
  const auth = store.getState().auth;
  const auth_key = auth.user.auth_key;
  const formData = new FormData();
  for (let value in values) {
    formData.append(value, values[value]);
  }
  const action = "afterlogin/client/store";
  formData.append("auth_key", auth_key);
  formData.append("action", action);
  // formData.append('profile_photo', values.profile_photo);
  return axios
    .post(API_URL + action, formData, { headers: authHeader({ contentType: "multipart/form-data" }) })
    .then((response) => {
      console.log(response);
      if (response.status == 200) {
        return response.data;
      }
    })
    .catch((error) => {
      const message = (error.response && error.response.data && error.response.data) || error.message || error.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue(message);
    });
};

const clientApiController = {
  create,
};
export default clientApiController;
