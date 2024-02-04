import { createSlice } from '@reduxjs/toolkit'

const endSlice = createSlice({
  name: 'end',
  initialState:{
    value: new Date().toISOString(),
  },
  reducers: {
    setEnd(state, action) {
      console.log(state.value, 'end');
      state.value = action.payload
    },
  },
})

export const { setEnd } = endSlice.actions

export const selectorEnd = state => state.end.value

export default endSlice.reducer