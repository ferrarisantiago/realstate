import { createSlice } from '@reduxjs/toolkit'

const startSlice = createSlice({
  name: 'start',
  initialState:{
    value: new Date().toISOString(),
  },
  reducers: {
    setStart(state, action) {
      console.log('Valor recibido en setStart:', action.payload);
      state.value = action.payload
    },
  },
})

export const { setStart } = startSlice.actions

export const selectorstart = state => state.start.value

export default startSlice.reducer