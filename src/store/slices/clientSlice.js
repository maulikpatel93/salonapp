import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  opened: '',
}

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
  }
})

// Action creators are generated for each case reducer function
export const { openclientform, closeclientform } = clientSlice.actions
export const isOpenClientForm = (state) => state.isOpen;
export default clientSlice.reducer
