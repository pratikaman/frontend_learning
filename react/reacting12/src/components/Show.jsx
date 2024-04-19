import React from "react";
import { useState, useEffect } from "react";
// import axios from "axios";
import instance from "../utils/axios_config";

function Show() {
  const [product, setProduct] = useState({});

  const updateProduct = (prd) => {
    setProduct(prd);
  };

  const getProducts = () => {
    // const api = "https://fakestoreapi.com/products";

    // Get random product
    let randomInt = Math.floor(Math.random() * 20);

    // axios.get(api)
    //   .then((data) => {
    //     // store the product in state
    //     updateProduct(data.data[randomInt]);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });

       instance.get("products")
      .then((data) => {
        // store the product in state
        updateProduct(data.data[randomInt]);
      })
      .catch((error) => {
        console.error(error);
      });

  };

  const postProduct = () => {
    // const api = "https://fakestoreapi.com/products";

    // axios
    //   .post(api, {
    //     title: "test product",
    //     price: 13.5,
    //     description: "lorem ipsum set",
    //     image: "https://i.pravatar.cc",
    //     category: "electronic",
    //   })
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //   });


    instance
    .post("products", {
      title: "test product",
      price: 13.5,
      description: "lorem ipsum set",
      image: "https://i.pravatar.cc",
      category: "electronic",
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.error(err);
    });


  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>

      {/*  buttons  */}
      <div className="flex flex-col w-fit">
        <button
          onClick={getProducts}
          className="px-4 py-2 bg-teal-500 rounded-xl mb-4 "
        >
          Fetch Product
        </button>

        <button
          onClick={postProduct}
          className="px-4 py-2 bg-teal-500 rounded-xl mb-4 "
        >
          Post Product
        </button>
      </div>



      {/* if product is empty show loader else hsow the product details */}
      {Object.keys(product).length === 0 ? 
      
      (
        <div>Loading...</div>
      ) : 
      
      (
        <>
          <div>{product.description}</div>

          <div className="w-[40vw] h-[40vw] mt-4">
            <img src={product.image} />
          </div>
        </>
      )


    }
    </>
  );
}

export default Show;
