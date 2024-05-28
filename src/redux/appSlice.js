import { createSlice } from '@reduxjs/toolkit'

export const appSlice = createSlice({
  name: 'appState',
  initialState: {
    screenWidth: window.innerWidth,
    pageStatus: 'overview'
  },
  reducers: {
    updateState: (state, action) => {
      state.screenWidth = action.payload.screenWidth
    },
    updatePageStatus: (state, action) => {
      state.pageStatus = action.payload.pageStatus
    }
  }
})

export const { updateState, updatePageStatus } = appSlice.actions

export default appSlice.reducer