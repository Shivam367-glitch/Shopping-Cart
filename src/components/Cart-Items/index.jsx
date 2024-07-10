/* eslint-disable react/prop-types */
 
import "./index.css"
const CartItems = ({product,handleIncrement,deleteFromCart,handleDecrement}) => {    
  
  return (
    <>
       <div className="col-12 col-md-8 col-lg-12 shadow mt-4 d-flex flex-column flex-md-row   justify-content-between align-items-center cardItem flex-wrap"> 
        <img src={product?.image} alt={product?.title}  className="col-12 col-lg-2 mt-5 mt-md-0"/>  
        <div className="col-12 col-lg-5 ps-lg-5 text-start mt-5 mt-lg-0">
            <p>{product?.title}</p> 
            <span>Price : {Math.round(product?.price)}</span>
        </div> 
        <div className="col-12 col-lg-2  cartInput d-flex flex-row justify-content-md-center mt-5 mt-lg-0">
            <button className="col-2" onClick={()=>{handleDecrement(product?.id)}}>-</button>
            <input type="text" className="col-4 text-center"  value={product.count} readOnly onChange={()=>{}}/>
            <button className="col-2" onClick={()=>{handleIncrement(product?.id) }} >+</button>  
        </div> 
        
        <span className="item-delete" onClick={()=>{deleteFromCart(product?.id)}}>X</span>
        <p className="col-12 col-lg-3  mt-5 mt-lg-0">SubTotal:{Math.round(product?.price*product?.count)}</p>
        </div>
    </>
  );
};

export default CartItems;
