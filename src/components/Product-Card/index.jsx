import { useDispatch,useSelector} from "react-redux";
import "./index.css"

const ProductCard = (product) => { 

  const state=useSelector(state=>state.cart); 
  const dispatch=useDispatch();  

    const handleCart=(e)=>{ 

      const removeItem = state.items.find((item) => item.id === e.id);
      if(!removeItem){ 
        dispatch({ type: 'cart/addToCart',payload:e });
      }else{ 
        dispatch({type:'cart/deleteFromCart',payload:e});
      }
    }



  return (
    <>
      <div
        className="card border-2 rounded shadow py-2 px-1 d-flex flex-column justify-content-center  gap-3"
        style={{minHeight:"16rem",width:'22rem'}}
        key={product.id}
      >  
      <div className="img-container">

        <img
          src={product.image}
          className="card-img-top rounded-0 productCard-img"
          style={{height:'300px',maxWidth:'100%',objectFit:'contain'}}
          alt={product.title}
        />
      </div>
        <div className="card-body m-0 p-0  ">
          <div className="row">
            <div className="col-12">
              <p className="card-title">{product.title}</p>
            </div>
          </div>
        </div>
        <div className="row align-items-center text-center g-0 ">
          <div className="col-4">
            <h5>${Math.round(product.price)}</h5>
          </div>
          <div className="col-8">
            <a
             
              className="btn btn-dark w-100 p-3 rounded-0 text-warning"
              onClick={()=>{handleCart(product)}}
            >
             {
              state.items.find((cartProduct)=>{
                return cartProduct.id===product.id;
              })?"Remove From Cart":"Add To Cart"
             }
            </a>
          </div>
        </div>
        </div>
    </>
  );
};

export default ProductCard;
