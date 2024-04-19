import axios from "axios";
import { getProducts } from "../reducers/ProductReducer";

export const asyncgetProducts = ()=> async (dispatch, getState) => {

     try {
        const res = await axios.get("https://fakestoreapi.com/products");
        dispatch(getProducts(res.data));
     }
     catch (err) {
          console.error(err);
     }


}