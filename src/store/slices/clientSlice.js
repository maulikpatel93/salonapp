import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import clientApiController from "../../services/client.service";
import { setMessage } from "./message";

const initialState = {
  opened: "",
};

export const clientCreate = createAsyncThunk("client/create", async (formValues, thunkAPI) => {
  try {
    const resposedata = await clientApiController.create(formValues, thunkAPI);
    return resposedata;
  } catch (error) {
    console.log(error);
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    thunkAPI.dispatch(setMessage(message));
    return thunkAPI.rejectWithValue();
  }
});

export const clientSlice = createSlice({
  name: "client",
  initialState,
  reducers: {
    openclientform: (state = initialState) => {
      state.opened = "open";
    },
    closeclientform: (state = initialState) => {
      state.opened = "";
    },
  },
  extraReducers: {
    [clientCreate.pending]: (state, action) => {},
    [clientCreate.fulfilled]: (state, action) => {},
    [clientCreate.rejected]: (state, action) => {},
  },
});

// Action creators are generated for each case reducer function
export const { openclientform, closeclientform } = clientSlice.actions;
export const isOpenClientForm = (state) => state.isOpen;
export default clientSlice.reducer;
