// import React from 'react'
import { useEffect, useState } from "react";
import {useSelector} from "react-redux"
import ProductCard from "../components/Product-Card";
import Loader from "../components/Loader";
const Cart = () => { 
  const state=useSelector(state=>state.cart); 
  // const [products, setProducts] = useState([]);  
  const [loading, setLoading] = useState(false); 
useEffect(()=>{  
  console.log("cartEffect.....");
    // setLoading(true);
    // setProducts(state); 
    // setLoading(false);
},[state]);
  return (
    <> 
      {
      loading?<Loader/>:(
        <div className='container-fluid'>
          <div className='row d-flex flex-row justify-coontent-center m-0 p-0'>
            {
           state.length>0 ? state.map((product,index)=>{
                return(
                  <div className='col-12 col-sm-6 col-md-4 col-lg-3 col-xl mt-5 d-flex justify-content-center'   key={index} >
                     <ProductCard {...product}/>
                  </div>
                );
              }):<h1 className="text-danger">Cart Is Empty</h1>
            }
          </div>
        </div>
      )
     }
    </>
  )
}

export default Cart