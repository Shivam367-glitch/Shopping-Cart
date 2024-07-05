// import React from 'react'
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/Product-Card";
const Cart = () => {
  const state = useSelector((state) => state.cart);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    let price = 0;
    state.forEach((item) => {
      price += Math.round(item.price);
    });
    setTotal(price);
  }, [state, total]);
  return (
    <>
      <div className="container-fluid">
        {
          state.length>0?<div className="row">
          <div className="col text-center">
            <h1 className="text-success">Total : ${total}</h1>
          </div>
        </div>:null
        }
        <div className="row d-flex flex-row justify-content-center m-0 p-0">
          {state.length > 0 ? (
            state.map((product, index) => {
              return (
                <div
                  className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl mt-5 d-flex justify-content-center"
                  key={index}
                >
                  <ProductCard {...product} />
                </div>
              );
            })
          ) : (
            <h1 className="text-danger">Cart Is Empty</h1>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
