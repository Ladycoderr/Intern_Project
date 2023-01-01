import { createSlice } from '@reduxjs/toolkit'

export const userDataSlice = createSlice({
  name: 'user',
  initialState: {
    data : null
  },
  reducers: {
    fetchData : (state, action) =>{
    state.data = action.payload ;
    },
    updateData : (state, action) => {
    state.data = action.payload ;
    },
    deleteData : (state, action) =>{
        state.data = action.payload ;
    }
  },
})

// Action creators are generated for each case reducer function
export const { fetchData, updateData, deleteData } = userDataSlice.actions

export default userDataSlice.reducer