import { configureStore } from '@reduxjs/toolkit'
import userReducer from "./reducers/userReducer.jsx"
import  productReducer  from './reducers/ProductReducer.jsx'




export const store = configureStore({
  reducer: {
    userReducer: userReducer,
    productReducer: productReducer,
  },
}) 