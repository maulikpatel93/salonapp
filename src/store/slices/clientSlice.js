import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import clientApiController from "../../services/client.service";
import { setMessage } from "./message";

const initialState = {
  opened: "",
  view:"",
  deleted:false,
};

export const clientCreate = createAsyncThunk("client/create", async (formValues, thunkAPI) => {
  try {
    const resposedata = await clientApiController.create(formValues, thunkAPI);
    console.log(resposedata);
    return resposedata;
  } catch (error) {
    console.log(error);
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    thunkAPI.dispatch(setMessage(message));
    return thunkAPI.rejectWithValue();
  }
});

export const clientView = createAsyncThunk("client/view", async (formValues, thunkAPI) => {
  try {
    const resposedata = await clientApiController.view(formValues, thunkAPI);
    return resposedata;
  } catch (error) {
    console.log(error);
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    thunkAPI.dispatch(setMessage(message));
    return thunkAPI.rejectWithValue();
  }
});

export const clientDelete = createAsyncThunk("client/delete", async (formValues, thunkAPI) => {
  try {
    const resposedata = await clientApiController.deleted(formValues, thunkAPI);
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
    [clientView.pending]: (state, action) => {
      state.view = "";
    },
    [clientView.fulfilled]: (state, action) => {
      state.view = action.payload;
    },
    [clientView.rejected]: (state, action) => {
      state.view = "";
    },
    [clientDelete.pending]: (state, action) => {
      state.deleted = false;
    },
    [clientDelete.fulfilled]: (state, action) => {
      const { id } = action.payload; 
      console.log(id);
      state.view = state.view.filter(item => item.id !== id);
      // // state.deleted = true;
    },
    [clientDelete.rejected]: (state, action) => {
      state.deleted = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { openclientform, closeclientform } = clientSlice.actions;
export const isOpenClientForm = (state) => state.isOpen;
export default clientSlice.reducer;
