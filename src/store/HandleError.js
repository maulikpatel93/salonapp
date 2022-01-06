import Unauthorized from "./Unauthorized";

const HandleError = (thunkAPI, error, type) => {
  if (error.response && error.response.status == 422) {
    const message = (error.response && error.response.data && error.response.data) || error.message || error.toString();
    return thunkAPI.rejectWithValue({ status: error.response.status, message: message });
  } else if (error.response.status == 401) {
    Unauthorized(thunkAPI);
  } else if(error.response == undefined){
    Unauthorized(thunkAPI);
  }
  return thunkAPI.rejectWithValue({ status: error.response.status, message: message });
};

export default HandleError;
