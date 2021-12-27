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

export const clientListViewApi = createAsyncThunk("client/gridview", async (formValues, thunkAPI) => {
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

export const clientGridViewApi = createAsyncThunk("client/listview", async (formValues, thunkAPI) => {
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

export const clientSuggetionListApi = createAsyncThunk("client/suggetionlist", async (formValues, thunkAPI) => {
  try {
    const resposedata = await clientApiController
      .suggetionlist(formValues, thunkAPI)
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
  isGridView: [],
  isListView: [],
  isSuggetionListView: [],
  isDetailData: "",
  isDeleted: false,
  isTabView: "grid",
  isClientDetailTab: "appointment",
  isSort: "",
  isSearchList: "",
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
      state.isSort = "";
    },
    clientOpenSearchList: (state) => {
      state.isSearchList = "open";
    },
    clientRemoveSearchList: (state) => {
      state.isSearchList = "";
    },
  },
  extraReducers: {
    [clientStoreApi.pending]: (state, action) => {},
    [clientStoreApi.fulfilled]: (state, action) => {},
    [clientStoreApi.rejected]: (state, action) => {},
    [clientGridViewApi.pending]: (state, action) => {
      // state.isGridView = [];
    },
    [clientGridViewApi.fulfilled]: (state, action) => {
      let old_current_page = state.isGridView.current_page ? state.isGridView.current_page : "";
      let new_current_page = action.payload.current_page ? action.payload.current_page : "";
      let viewdata = state.isGridView && state.isGridView.data;
      let newviewdata = action.payload && action.payload.data;
      state.isGridView = action.payload;
      if (old_current_page && new_current_page && old_current_page != new_current_page) {
        let data = viewdata && newviewdata ? (state.isGridView.data = [...viewdata, ...newviewdata]) : action.payload;
      }
      state.isGridView = action.payload;
    },
    [clientGridViewApi.rejected]: (state, action) => {
      state.isGridView = [];
    },
    [clientListViewApi.pending]: (state, action) => {
      // state.isListView = [];
    },
    [clientListViewApi.fulfilled]: (state, action) => {
      let old_current_page = state.isListView.current_page ? state.isListView.current_page : "";
      let new_current_page = action.payload.current_page ? action.payload.current_page : "";
      let viewdata = state.isListView && state.isListView.data;
      let newviewdata = action.payload && action.payload.data;
      state.isListView = action.payload;
      if (old_current_page && new_current_page && old_current_page != new_current_page) {
        let data = viewdata && newviewdata ? (state.isListView.data = [...viewdata, ...newviewdata]) : action.payload;
      }
      state.isListView = action.payload;
    },
    [clientListViewApi.rejected]: (state, action) => {
      state.isListView = [];
    },
    [clientSuggetionListApi.pending]: (state, action) => {
      // state.isSuggetionListView = [];
    },
    [clientSuggetionListApi.fulfilled]: (state, action) => {
      let old_current_page = state.isSuggetionListView.current_page ? state.isSuggetionListView.current_page : "";
      let new_current_page = action.payload.current_page ? action.payload.current_page : "";
      let viewdata = state.isSuggetionListView && state.isSuggetionListView.data;
      let newviewdata = action.payload && action.payload.data;
      state.isSuggetionListView = action.payload;
      if (old_current_page && new_current_page && old_current_page != new_current_page) {
        let data = viewdata && newviewdata ? (state.isSuggetionListView.data = [...viewdata, ...newviewdata]) : action.payload;
      }
      state.isSuggetionListView = action.payload;
    },
    [clientSuggetionListApi.rejected]: (state, action) => {
      state.isSuggetionListView = [];
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
export const { reset, openNewClientForm, closeNewClientForm, clientTabListView, clientTabGridView, openClientDetailModal, closeClientDetailModal, clientDetailTab, clientSort, clientSortRemove, clientOpenSearchList, clientRemoveSearchList } = clientSlice.actions;
export default clientSlice.reducer;
