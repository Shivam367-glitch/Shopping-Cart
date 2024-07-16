import { useDispatch,useSelector} from "react-redux";
import "./index.css";
const ProductCard = (product) => {  

  const {id,title,image,price,category}=product;

  const state=useSelector(state=>state.cart); 
  const dispatch=useDispatch();  

    const handleCart=(e)=>{ 
     console.log("handleCart");
      const removeItem = state.items.find((item) => item.id === e.id);
      if(!removeItem){ 
        dispatch({ type: 'cart/addToCart',payload:e }); 
        console.log("handleCart if");
      }else{ 
        dispatch({type:'cart/deleteFromCart',payload:e.id}); 
        console.log("handleCart else");
      }
    }



  return (
    <>
      <div
        className="card border-2 rounded shadow py-2 px-1 d-flex flex-column justify-content-center  gap-3"
        style={{minHeight:"16rem",width:'22rem'}}
        key={id}
      >  
      <div className="img-container">

        <img
          src={image}
          className="card-img-top rounded-0"
          alt={title}
        />
      </div>
        <div className="card-body m-2 p-0">
          <div className="row d-flex flex-column gap-3">
            <div className="col-12">
              <p className="card-title">{title}</p>
            </div>
            <div className="col-12">
              <p className=""><span className="text-muted fw-bold">Category</span> <span className="badge bg-secondary">{category.charAt(0).toUpperCase() +category.slice(1)}</span></p>
            </div>
          </div>
        </div>
        <div className="row align-items-center text-center g-0 ">
          <div className="col-4">
            <h5>${Math.round(price)}</h5>
          </div>
          <div className="col-8">
            <a
             
              className="btn btn-dark w-100 p-3 rounded-0 text-warning"
              onClick={()=>{handleCart(product)}}
            >
             {
              state.items.find((cartProduct)=>{
                return cartProduct.id===id;
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
