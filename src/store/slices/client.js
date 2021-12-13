import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  isOpenRightDrawer: false,
};
// export const openClientForm = () => {
//       return;
// };

const clientSlice = createSlice({
  name: "client",
  initialState,
  reducer: {
      openClientForm(state) {
        console.log("loading assets...");
        state.isOpenRightDrawer = true;
      },
  }
});

export const { openClientForm } = clientSlice.actions;
export default clientSlice.reducer;
