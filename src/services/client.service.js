import axios from "axios";
import { store } from "../store";
import config from "../config";
import authHeader from "./auth-header";
import { setMessage, clearMessage } from "../store/slices/message";

const API_URL = config.API_URL;

const create = (values, thunkAPI) => {
  const auth = store.getState().auth;
  const auth_key = auth.user.auth_key;
  const formData = new FormData();
  for (let value in values) {
    if(['gender'].includes(value) && values[value] && typeof values[value] === 'object') {
      formData.append(value, values[value].value);
    }else{
      formData.append(value, values[value]);
    }
  }
  const action = "afterlogin/client/store";
  formData.append("auth_key", auth_key);
  formData.append("action", action);
  formData.append("role_id", 6);
  formData.append("salon_id", auth.user.salon_id);
  return axios
    .post(API_URL + action, formData, { headers: authHeader({ contentType: "multipart/form-data" }) })
    .then((response) => {
      if (response.status == 200) {
        thunkAPI.dispatch(clearMessage());
        return response.data;
      }
    })
    .catch((error) => {
      const message = (error.response && error.response.data && error.response.data) || error.message || error.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue(message);
    });
};


const view = (values, thunkAPI) => {
  const auth = store.getState().auth;
  const auth_key = auth.user.auth_key;
  const page = values && values.page ? '?page='+values.page : '';
  const action = "afterlogin/client/view"+page;
  const data = {
    auth_key:auth_key,
    action:action,
    role_id:6,
    salon_id:auth.user.salon_id,
    pagination:true, //true or false
    // id:1,
    field:"first_name,last_name,email", // first_name,last_name,email
    salon_field:false //business_name,owner_name
  }
  return axios
    .post(API_URL + action, data, { headers: authHeader() })
    .then((response) => {
      if (response.status == 200) {
        thunkAPI.dispatch(clearMessage());
        console.log(response.data);
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
  view
};
export default clientApiController;
