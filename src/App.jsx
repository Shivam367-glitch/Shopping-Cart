import Home from "./pages/Home"
import Cart from "./pages/Cart"
import { Route, Routes } from "react-router-dom"
import Header from "./components/Header/index"
import { ToastContainer } from 'react-toastify'; 
import "react-toastify/dist/ReactToastify.css";
function App() {
  

  return (
    <>
    <div>
      <Header/>
      <Routes> 
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      <ToastContainer />
    </div>
    </>
  )
}

export default App
