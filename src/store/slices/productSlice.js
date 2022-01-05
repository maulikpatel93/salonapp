import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productApiController from "../../services/product.service";
import { setMessage } from "./message";

export const productStoreApi = createAsyncThunk("product/create", async (formvalues, thunkAPI) => {
  try {
    const resposedata = await productApiController
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

export const productUpdateApi = createAsyncThunk("product/update", async (formvalues, thunkAPI) => {
  try {
    const resposedata = await productApiController
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

export const productListViewApi = createAsyncThunk("product/listview", async (formValues, thunkAPI) => {
  try {
    const resposedata = await productApiController
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

export const productDetailApi = createAsyncThunk("product/detail", async (formValues, thunkAPI) => {
  try {
    const resposedata = await productApiController
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

export const productDeleteApi = createAsyncThunk("product/delete", async (formValues, thunkAPI) => {
  try {
    const resposedata = await productApiController
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

export const productSuggetionListApi = createAsyncThunk("product/suggetionlist", async (formValues, thunkAPI) => {
  try {
    const resposedata = await productApiController
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
  isOpenedAddForm: "",
  isOpenedEditForm: "",
  isOpenedDetailModal: "",
  isListView: [],
  isSuggetionListView: [],
  isDetailData: "",
  isTabView: "product",
  isSort: "",
  isSearchList: "",
  isSearchName: "",
  isProductManageStock: 0,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    reset: () => initialState,
    productTabView: (state, action) => {
      state.isOpenedAddForm = "";
      state.isOpenedEditForm = "";
      state.isOpenedDetailModal = "";
      state.isTabView = action.payload;
    },
    openAddProductForm: (state = initialState) => {
      state.isOpenedAddForm = "open";
      state.isOpenedEditForm = "";
      state.isOpenedDetailModal = "";
    },
    closeAddProductForm: (state = initialState) => {
      state.isOpenedAddForm = "";
      state.isOpenedEditForm = "";
      state.isOpenedDetailModal = "";
    },
    openEditProductForm: (state = initialState) => {
      state.isOpenedAddForm = "";
      state.isOpenedEditForm = "open";
      state.isOpenedDetailModal = "";
    },
    closeEditProductForm: (state = initialState) => {
      state.isOpenedAddForm = "";
      state.isOpenedEditForm = "";
      state.isOpenedDetailModal = "";
    },
    openProductDetailModal: (state = initialState) => {
      state.isOpenedAddForm = "";
      state.isOpenedEditForm = "";
      state.isOpenedDetailModal = "open";
    },
    closeProductDetailModal: (state = initialState) => {
      state.isOpenedAddForm = "";
      state.isOpenedEditForm = "";
      state.isOpenedDetailModal = "";
    },
    productSort: (state, action) => {
      let sort = state.isSort ? state.isSort : {};
      // state.isSort = Object.assign(sort, action.payload);
      state.isSort = action.payload;
    },
    productSortRemove: (state) => {
      state.isSort = "";
    },
    openProductSearchList: (state) => {
      state.isSearchList = "open";
    },
    closeProductSearchList: (state) => {
      state.isSearchList = "";
    },
    productSearchName: (state, action) => {
      state.isSearchName = action.payload;
    },
    productManageStock: (state, action) => {
      state.isProductManageStock = action.payload;
    },
  },
  extraReducers: {
    [productStoreApi.pending]: (state, action) => {},
    [productStoreApi.fulfilled]: (state, action) => {
      state.isListView.data = [...state.isListView.data, action.payload];
    },
    [productStoreApi.rejected]: (state, action) => {},
    [productUpdateApi.pending]: (state, action) => {},
    [productUpdateApi.fulfilled]: (state, action) => {
      const { id, ...changes } = action.payload;
      const existingData = state.isListView.data.find((event) => event.id === id);
      if (existingData) {
        Object.keys(changes).map((keyName, i) => {
          existingData[keyName] = changes[keyName];
        });
      }
    },
    [productUpdateApi.rejected]: (state, action) => {},
    [productListViewApi.pending]: (state, action) => {},
    [productListViewApi.fulfilled]: (state, action) => {
      let old_current_page = state.isListView.current_page ? state.isListView.current_page : "";
      let new_current_page = action.payload.current_page ? action.payload.current_page : "";
      let viewdata = state.isListView && state.isListView.data;
      let newviewdata = action.payload && action.payload.data;
      state.isListView = action.payload;
      if (old_current_page && new_current_page && old_current_page < new_current_page && old_current_page != new_current_page) {
        let data = viewdata && newviewdata ? (state.isListView.data = [...viewdata, ...newviewdata]) : action.payload;
      }
      state.isListView = action.payload;
    },
    [productListViewApi.rejected]: (state, action) => {
      state.isListView = [];
    },
    [productSuggetionListApi.pending]: (state, action) => {},
    [productSuggetionListApi.fulfilled]: (state, action) => {
      let old_current_page = state.isSuggetionListView.current_page ? state.isSuggetionListView.current_page : "";
      let new_current_page = action.payload.current_page ? action.payload.current_page : "";
      let viewdata = state.isSuggetionListView && state.isSuggetionListView.data;
      let newviewdata = action.payload && action.payload.data;
      state.isSuggetionListView = action.payload;
      if (old_current_page && new_current_page && old_current_page < new_current_page && old_current_page != new_current_page) {
        let data = viewdata && newviewdata ? (state.isSuggetionListView.data = [...viewdata, ...newviewdata]) : action.payload;
      }
      state.isSuggetionListView = action.payload;
    },
    [productSuggetionListApi.rejected]: (state, action) => {
      state.isSuggetionListView = [];
    },
    [productDetailApi.pending]: (state, action) => {},
    [productDetailApi.fulfilled]: (state, action) => {
      state.isDetailData = action.payload;
    },
    [productDetailApi.rejected]: (state, action) => {
      state.isDetailData = "";
    },
    [productDeleteApi.pending]: (state, action) => {},
    [productDeleteApi.fulfilled]: (state, action) => {
      const { id } = action.payload;
      state.isListView.data = state.isListView.data ? state.isListView.data.filter((item) => item.id != id) : state.isListView.filter((item) => item.id != id);
    },
    [productDeleteApi.rejected]: (state, action) => {},
  },
});
// Action creators are generated for each case reducer function
export const { reset, productTabView, openAddProductForm, closeAddProductForm, openEditProductForm, closeEditProductForm, productTabGridView, openProductDetailModal, closeProductDetailModal, productDetailTab, productSort, productSortRemove, openProductSearchList, closeProductSearchList, productSearchName, productManageStock } = productSlice.actions;
export default productSlice.reducer;
