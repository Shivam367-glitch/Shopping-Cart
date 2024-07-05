import  { useEffect, useState } from 'react';

import Loader from '../components/Loader';
import ProductCard from '../components/Product-Card';
const Home = () => {  
 
  const [products, setProducts] = useState([]); 
  const [loading, setLoading] = useState(false); 

const fetchData = async () => {
    try {
      setLoading(true); 
      const response = await fetch('https://fakestoreapi.com/products/'); 
      const products = await response.json(); 
      setProducts(products);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    } 
}; 



useEffect(() => {
    fetchData();
}, []);

  return (
     <> 
     {
      loading?<Loader/>:(
        <div className='container-fluid mb-3'>
          <div className='row d-flex flex-row justify-coontent-center m-0 p-0'>
            {
              products.map((product,index)=>{
                return(
                  <div className='col-12 col-sm-6 col-md-4 col-lg-3 col-xl mt-5 d-flex justify-content-center'   key={index}>
                     <ProductCard {...product}/>
                  </div>
                );
              })
            }
          </div>
        </div>
      )
     }
     </>
  );
};

export default Home;
