import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import clientApiController from "../../services/client.service";
import { setMessage } from "./message";

export const clientStoreApi = createAsyncThunk("client/create", async (formvalues, thunkAPI) => {
  try {
    const resposedata = await clientApiController
      .create(formvalues, thunkAPI)
      .then((response) => {
        if (response.status == 200) {
          return thunkAPI.fulfillWithValue(response.data);
        } else {
          return thunkAPI.rejectWithValue();
        }
      })
      .catch((error) => {
        const message = (error.response && error.response.data && error.response.data) || error.message || error.toString();
        return thunkAPI.rejectWithValue({ status: error.response.status, message: message });
      });
    return resposedata;
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    return thunkAPI.rejectWithValue({ status: error.response.status, message: message });
  }
});

export const clientUpdateApi = createAsyncThunk("client/update", async (formvalues, thunkAPI) => {
  try {
    const resposedata = await clientApiController
      .update(formvalues, thunkAPI)
      .then((response) => {
        if (response.status == 200) {
          return thunkAPI.fulfillWithValue(response.data);
        } else {
          return thunkAPI.rejectWithValue();
        }
      })
      .catch((error) => {
        const message = (error.response && error.response.data && error.response.data) || error.message || error.toString();
        return thunkAPI.rejectWithValue({ status: error.response.status, message: message });
      });
    return resposedata;
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    return thunkAPI.rejectWithValue({ status: error.response.status, message: message });
  }
});

export const clientViewApi = createAsyncThunk("client/view", async (formValues, thunkAPI) => {
  try {
    const resposedata = await clientApiController
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

export const clientDetailApi = createAsyncThunk("client/detail", async (formValues, thunkAPI) => {
  try {
    const resposedata = await clientApiController
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
    console.log(error);
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    return thunkAPI.rejectWithValue();
  }
});

export const clientDeleteApi = createAsyncThunk("client/delete", async (formValues, thunkAPI) => {
  try {
    const resposedata = await clientApiController
      .deleted(formValues, thunkAPI)
      .then((response) => {
        if (response.status == 200) {
          return response.data;
        }
      })
      .catch((error) => {
        const message = (error.response && error.response.data && error.response.data) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
      });
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
  isGridView: [],
  isListView: [],
  isDetailData: "",
  isDeleted: false,
  isTabView: "grid",
  isClientDetailTab: "appointment",
  isSort: '',
};

export const clientSlice = createSlice({
  name: "client",
  initialState,
  reducers: {
    reset: () => {
      console.log("Hello");
    },
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
    clientSort: (state, action) => {
      let sort = state.isSort ? state.isSort : {};
      state.isSort = Object.assign(sort, action.payload);
    },
    clientSortRemove: (state) => {
      state.isSort = '';
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
      // const next_page_url = action.payload && action.payload.next_page_url && action.payload && action.payload.data ? Object.assign(state.isView.data, action.payload.data) : "";
      // console.log(next_page_url);
      console.log(action);
      let old_current_page = state.isGridView.current_page ? state.isGridView.current_page : '';
      let new_current_page = action.payload.current_page ? action.payload.current_page : '';
      let viewdata = state.isGridView && state.isGridView.data;
      let newviewdata = action.payload && action.payload.data;

      state.isView = action.payload;
      state.isGridView = action.payload;
      // state.isListView = action.payload;
      
      if(old_current_page && new_current_page && old_current_page != new_current_page){
        let data = viewdata && newviewdata ? state.isGridView.data = [...viewdata, ...newviewdata] : action.payload;
        console.log(data);
      }
      state.isView = action.payload;
      state.isGridView = action.payload;
      // state.isListView = action.payload;
    },
    [clientViewApi.rejected]: (state, action) => {
      state.isView = [];
    },
    [clientDetailApi.pending]: (state, action) => {
      // state.isDetailData = "";
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
      state.isView = state.isView.data ? state.isView.data.filter((item) => item.id != id) : state.isView.filter((item) => item.id != id);
    },
    [clientDeleteApi.rejected]: (state, action) => {
      state.isDeleted = false;
    },
  },
});
// Action creators are generated for each case reducer function
export const { reset, openNewClientForm, closeNewClientForm, clientTabListView, clientTabGridView, openClientDetailModal, closeClientDetailModal, clientDetailTab, clientSort, clientSortRemove } = clientSlice.actions;
export default clientSlice.reducer;
