
import { Route, Routes } from "react-router-dom"
import { lazy, Suspense } from 'react';
import Header from "./components/Header/index"
import { ToastContainer } from 'react-toastify'; 
import "react-toastify/dist/ReactToastify.css";
import  "./App.css"
import Loader from "./components/Loader";

const HomePage = lazy(() => import('./pages/Home'));
const CartPage = lazy(() => import('./pages/Cart'));
function App() {
  

  return (
    <>
    <div> 
    <Suspense fallback={<Loader/>}>
      <Header/>
      <Routes> 
        <Route path='/' element={<HomePage/>}/>
        <Route path='/cart' element={<CartPage/>}/>
      </Routes>
    
    </Suspense>
      <ToastContainer />
    </div>
    </>
  )
}

export default App
