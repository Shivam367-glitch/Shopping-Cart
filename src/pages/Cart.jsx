
import { useSelector,useDispatch } from "react-redux"; 
import { incrementQuantity,deleteFromCart, decrementQuantity } from "../store/slices/cartSlice"; 
// import ProductCard from "../components/Product-Card";  
import CartItems from "../components/Cart-Items";
const Cart = () => {
  const state = useSelector((state) => state.cart); 
 const dispatch=useDispatch();


const handleIncrement = (itemId) => {
    dispatch(incrementQuantity(itemId));
}; 
const handleDecrement=(itemId)=>{
  dispatch(decrementQuantity(itemId));
}

const handleDelete=(itemId)=>{
  dispatch(deleteFromCart(itemId));
}
  return (
    <>
      <div className="container-fluid  mt-5 mb-3">
       <div className="row d-flex flex-column flex-md-row justify-content-between align-items-sm-center align-items-md-baseline w-100">
       <div className="col-12 col-sm-8 col-md-8 col-lg-8   text-center">
       {
          state.items.length>0 ?state.items.map((item,index)=>{
             return (
              <div className="row ms-1 mb-3" key={index}>
              <CartItems product={item} handleIncrement={handleIncrement} deleteFromCart={handleDelete} handleDecrement={handleDecrement}/>
              </div>
             )
          })
         
          :<h2>Cart Is Empty</h2>
        }
       </div> 
       <div className="col-12 col-md-4 col-lg-3 border rounded-2 ms-3 ms-lg-0  mt-4 d-flex flex-column justify-content-center  align-self-center align-self-md-baseline" style={{maxHeight:'200px'}} > 
        <div className="d-flex flex-row justify-content-between mt-2"><span>SubTotal</span><span>${Math.round(state.totalAmount)}</span></div>
        <div className="d-flex flex-row justify-content-between mt-2"><span>Shipping</span><span>$0</span></div> 
        <div className="d-flex flex-row justify-content-between mt-2"><span>Total</span><span>${Math.round(state.totalAmount)}</span></div>
        <button className="rounded-2 mt-5 checkout-btn align-self-center mb-2">Checkout</button>
       </div>
       </div> 
      
      </div>
    </>
  );
};

export default Cart;
