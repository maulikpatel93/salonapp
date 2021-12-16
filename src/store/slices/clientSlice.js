import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import clientApiController from "../../services/client.service";
import { setMessage } from "./message";

const initialState = {
  opened: '',
  errors: []
};

export const clientCreate = createAsyncThunk("client/create", async (formValues, thunkAPI) => {
  try {
    const resposedata = await clientApiController.create(formValues, thunkAPI);
    return resposedata;
  } catch (error) {
    console.log(error);
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    // thunkAPI.dispatch(setMessage(message));
    return thunkAPI.rejectWithValue();
  }
});

export const clientSlice = createSlice({
  name: 'client',
  initialState,
  reducers: {
    openclientform: (state = initialState) => {
      state.opened = 'open'
    },
    closeclientform: (state = initialState) => {
      state.opened = ''
    }
  },
  extraReducers: {
    [clientCreate.pending]: (state, action) => {
      state.errors = [];
    },
    [clientCreate.fulfilled]: (state, action) => {
      state.errors = [];
      // state.success = action.payload;
    },
    [clientCreate.rejected]: (state, action) => {
      switch (action.payload?.response?.status) {
          case 401:
              state.errors.push({ error: "Access denied." }); break;
          case 403:
              state.errors.push({ error: "Forbidden." }); break;
          default:
              state.errors.push(action.payload); break;
      }
    }
  },
})

// Action creators are generated for each case reducer function
export const { openclientform, closeclientform } = clientSlice.actions
export const isOpenClientForm = (state) => state.isOpen;
export default clientSlice.reducer
