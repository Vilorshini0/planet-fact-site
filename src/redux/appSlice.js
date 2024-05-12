import { createSlice } from '@reduxjs/toolkit'

export const appSlice = createSlice({
  name: 'appState',
  initialState: {
    screenWidth: window.innerWidth
  },
  reducers: {
    updateState: (state, action) => {
      state.screenWidth = action.payload.screenWidth
    }
  }
})

export const { updateState } = appSlice.actions

export default appSlice.reducer