import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../store/reducers/ProductReducer";
import { asyncgetProducts } from "../store/actions/productActions";

function Products() {
  const { products } = useSelector((state) => state.productReducer);
  // console.log(products);
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(getProducts());
    dispatch(asyncgetProducts());
  }, []);

  return (
    <div>
      <h1 className="px-3 py-2 bg-red-200 text-center ">Product list</h1>
      <div className="bg-red-100 flex flex-col items-center gap-2">
        {products.map((e, index) => {
          return (
            <div key={index} className="px-3 py-2 bg-purple-500 rounded-md ">
              {e.title}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Products;
