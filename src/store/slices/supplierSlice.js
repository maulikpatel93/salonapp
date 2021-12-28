import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import supplierApiController from "../../services/supplier.service";
import { setMessage } from "./message";

export const supplierStoreApi = createAsyncThunk("supplier/create", async (formvalues, thunkAPI) => {
  try {
    const resposedata = await supplierApiController
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

export const supplierUpdateApi = createAsyncThunk("supplier/update", async (formvalues, thunkAPI) => {
  try {
    const resposedata = await supplierApiController
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

export const supplierGridViewApi = createAsyncThunk("supplier/gridview", async (formValues, thunkAPI) => {
  try {
    const resposedata = await supplierApiController
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

export const supplierDetailApi = createAsyncThunk("supplier/detail", async (formValues, thunkAPI) => {
  try {
    const resposedata = await supplierApiController
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

export const supplierDeleteApi = createAsyncThunk("supplier/delete", async (formValues, thunkAPI) => {
  try {
    const resposedata = await supplierApiController
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

export const supplierSuggetionListApi = createAsyncThunk("supplier/suggetionlist", async (formValues, thunkAPI) => {
  try {
    const resposedata = await supplierApiController
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
  isSuggetionListView: [],
  isDetailData: "",
  isDeleted: false,
  isTabView: "grid",
  issupplierDetailTab: "appointment",
  isSort: "",
  isSearchList: "",
};

export const supplierSlice = createSlice({
  name: "supplier",
  initialState,
  reducers: {
    reset: () => initialState,
    openNewSupplierForm: (state = initialState) => {
      state.isOpenedDetailModal = "";
      state.isOpenedCreateForm = "open";
    },
    closeNewSupplierForm: (state = initialState) => {
      state.isOpenedDetailModal = "";
      state.isOpenedCreateForm = "";
    },
    supplierTabListView: (state) => {
      state.isOpenedCreateForm = "";
      state.isOpenedDetailModal = "";
      state.isTabView = "list";
    },
    supplierTabGridView: (state) => {
      state.isOpenedCreateForm = "";
      state.isOpenedDetailModal = "";
      state.isTabView = "grid";
    },
    opensupplierDetailModal: (state = initialState) => {
      state.isOpenedCreateForm = "";
      state.isOpenedDetailModal = "open";
    },
    closesupplierDetailModal: (state = initialState) => {
      state.isOpenedCreateForm = "";
      state.isOpenedDetailModal = "";
    },
    supplierDetailTab: (state, action) => {
      state.issupplierDetailTab = action.payload;
    },
    supplierSort: (state, action) => {
      let sort = state.isSort ? state.isSort : {};
      state.isSort = Object.assign(sort, action.payload);
    },
    supplierSortRemove: (state) => {
      state.isSort = "";
    },
    supplierOpenSearchList: (state) => {
      state.isSearchList = "open";
    },
    supplierRemoveSearchList: (state) => {
      state.isSearchList = "";
    },
  },
  extraReducers: {
    [supplierStoreApi.pending]: (state, action) => {},
    [supplierStoreApi.fulfilled]: (state, action) => {},
    [supplierStoreApi.rejected]: (state, action) => {},
    [supplierGridViewApi.pending]: (state, action) => {
      // state.isGridView = [];
    },
    [supplierGridViewApi.fulfilled]: (state, action) => {
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
    [supplierGridViewApi.rejected]: (state, action) => {
      state.isGridView = [];
    },
    [supplierSuggetionListApi.pending]: (state, action) => {
      // state.isSuggetionListView = [];
    },
    [supplierSuggetionListApi.fulfilled]: (state, action) => {
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
    [supplierSuggetionListApi.rejected]: (state, action) => {
      state.isSuggetionListView = [];
    },
    [supplierDetailApi.pending]: (state, action) => {
      // state.isDetailData = "";
    },
    [supplierDetailApi.fulfilled]: (state, action) => {
      state.isDetailData = action.payload;
    },
    [supplierDetailApi.rejected]: (state, action) => {
      state.isDetailData = "";
    },
    [supplierDeleteApi.pending]: (state, action) => {
      state.isDeleted = false;
    },
    [supplierDeleteApi.fulfilled]: (state, action) => {
      const { id } = action.payload;
      state.isView = state.isView.data ? state.isView.data.filter((item) => item.id != id) : state.isView.filter((item) => item.id != id);
    },
    [supplierDeleteApi.rejected]: (state, action) => {
      state.isDeleted = false;
    },
  },
});
// Action creators are generated for each case reducer function
export const { reset, openNewSupplierForm, closeNewSupplierForm, supplierTabListView, supplierTabGridView, opensupplierDetailModal, closesupplierDetailModal, supplierDetailTab, supplierSort, supplierSortRemove, supplierOpenSearchList, supplierRemoveSearchList } = supplierSlice.actions;
export default supplierSlice.reducer;
