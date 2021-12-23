import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import clientApiController from "../../services/client.service";
import { setMessage } from "./message";

export const clientStoreApi = createAsyncThunk("client/create", async (formvalues, thunkAPI) => {
  try {
    const resposedata = await clientApiController
      .create(formvalues.values, thunkAPI)
      .then((response) => {
        if (response.status == 200) {
          formvalues.setStatus({ success: true });
          formvalues.resetForm();
          thunkAPI.dispatch(closeNewClientForm());
          thunkAPI.dispatch(clientViewApi());
          return thunkAPI.fulfillWithValue(response.data);
        }else{
          formvalues.setStatus({ success: false });
          formvalues.setSubmitting(false);
          return thunkAPI.rejectWithValue();
        }
      })
      .catch((error) => {
        console.log('dsad');
        const message = (error.response && error.response.data && error.response.data) || error.message || error.toString();
        formvalues.setStatus({ success: false});
        formvalues.setErrors(message.errors);
        formvalues.setSubmitting(false);
        return thunkAPI.rejectWithValue();
      });
    return resposedata;
  } catch (error) {
    console.log(error);
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    thunkAPI.dispatch(setMessage(message));
    return thunkAPI.rejectWithValue();
  }
});

export const clientViewApi = createAsyncThunk("client/view", async (formValues, thunkAPI) => {
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

export const clientDetailApi = createAsyncThunk("client/detail", async (formValues, thunkAPI) => {
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

export const clientDeleteApi = createAsyncThunk("client/delete", async (formValues, thunkAPI) => {
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

const initialState = {
  isOpenedCreateForm: "",
  isOpenedDetailModal: "",
  isView: [],
  isDetailData: "",
  isDeleted: false,
  isTabView: "grid",
  isClientDetailTab: "appointment",
};

export const clientSlice = createSlice({
  name: "client",
  initialState,
  reducers: {
    reset: () => initialState,
    openNewClientForm: (state = initialState) => {
      state.isOpenedDetailModal = "";
      state.isOpenedCreateForm = "open";
    },
    closeNewClientForm: (state = initialState) => {
      state.isOpenedDetailModal = "";
      state.isOpenedCreateForm = "";
    },
    clientTabListView: (state) => {
      state.isOpenedCreateForm = "";
      state.isOpenedDetailModal = "";
      state.isTabView = "list";
    },
    clientTabGridView: (state) => {
      state.isOpenedCreateForm = "";
      state.isOpenedDetailModal = "";
      state.isTabView = "grid";
    },
    openClientDetailModal: (state = initialState) => {
      state.isOpenedCreateForm = "";
      state.isOpenedDetailModal = "open";
    },
    closeClientDetailModal: (state = initialState) => {
      state.isOpenedCreateForm = "";
      state.isOpenedDetailModal = "";
    },
    clientDetailTab: (state, action) => {
      state.isClientDetailTab = action.payload;
    },
  },
  extraReducers: {
    [clientStoreApi.pending]: (state, action) => {},
    [clientStoreApi.fulfilled]: (state, action) => {},
    [clientStoreApi.rejected]: (state, action) => {},
    [clientViewApi.pending]: (state, action) => {
      // state.isView = [];
    },
    [clientViewApi.fulfilled]: (state, action) => {
      state.isView = action.payload;
    },
    [clientViewApi.rejected]: (state, action) => {
      state.isView = [];
    },
    [clientDetailApi.pending]: (state, action) => {
      state.isDetailData = "";
    },
    [clientDetailApi.fulfilled]: (state, action) => {
      state.isDetailData = action.payload;
    },
    [clientDetailApi.rejected]: (state, action) => {
      state.isDetailData = "";
    },
    [clientDeleteApi.pending]: (state, action) => {
      state.isDeleted = false;
    },
    [clientDeleteApi.fulfilled]: (state, action) => {
      const { id } = action.payload;
      state.isView = state.isView.filter((item) => item.id != id);
    },
    [clientDeleteApi.rejected]: (state, action) => {
      state.isDeleted = false;
    },
  },
});
// Action creators are generated for each case reducer function
export const { openNewClientForm, closeNewClientForm, clientTabListView, clientTabGridView, openClientDetailModal, closeClientDetailModal, clientDetailTab } = clientSlice.actions;
export const selectAllClient = (state) => state.isView;
export default clientSlice.reducer;
