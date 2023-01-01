import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../reducer/index'
export default configureStore({
  reducer: userReducer,
})