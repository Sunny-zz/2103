import { createSlice } from "@reduxjs/toolkit" 
const initialState = {
  value: 'all'
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { changeFilter } = filterSlice.actions
export default filterSlice