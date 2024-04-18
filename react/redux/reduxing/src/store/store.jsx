import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './reducers/counterSlice.jsx'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})