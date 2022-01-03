import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";
import taxApiController from "../../services/tax.service";

export const usersAdapter = createEntityAdapter();

export const taxOptions = createAsyncThunk("tax/taxOptions", async (formValues, thunkAPI) => {
  try {
    const resposedata = await taxApiController
      .view(formValues, thunkAPI)
      .then((response) => {
        if (response.status == 200) {
          return response.data;
        }
      })
      .catch((error) => {
        if (error.response && error.response.status == 422) {
          const message = (error.response && error.response.data && error.response.data) || error.message || error.toString();
        } else if (error.response.status == 401) {
        }
        return thunkAPI.rejectWithValue({ status: error.response.status });
      });
    return resposedata;
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    return thunkAPI.rejectWithValue();
  }
});

const initialState = {
  isTaxOption: [],
};

export const taxSlice = createSlice({
  name: "tax",
  initialState,
  reducers: {
    reset: () => initialState
  },
  extraReducers: {
    [taxOptions.pending]: (state, action) => {},
    [taxOptions.fulfilled]: (state, action) => {
      state.isTaxOption = action.payload;
    },
    [taxOptions.rejected]: (state, action) => {
      state.isTaxOption = [];
    },
  },
});
// Action creators are generated for each case reducer function
export const { reset } = taxSlice.actions;
export default taxSlice.reducer;
