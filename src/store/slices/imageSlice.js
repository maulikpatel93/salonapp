import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selected: 0,
  imageName: "",
  imageSize: "",
  imageType: "",
  imageUrl: "",
};

export const imageSlice = createSlice({
  name: "image",
  initialState,
  reducers: {
    selectImage: (state, action) => {
      state.selected = 1;
      state.imageName = action.payload.name;
      state.imageSize = action.payload.size;
      state.imageType = action.payload.type;
      state.imageUrl = action.payload.url;
    },
    removeImage: (state) => {
      state.selected = 0;
      state.imageName = "";
      state.imageSize = "";
      state.imageType = "";
      state.imageUrl = "";
    },
  },
});

// Action creators are generated for each case reducer function
export const { selectImage, removeImage } = imageSlice.actions;

export default imageSlice.reducer;
