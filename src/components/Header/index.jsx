// import React from "react";
import { NavLink  } from "react-router-dom"; 
import { useSelector } from "react-redux"; 
import  "./index.css";

const Header = () => { 
  const state=useSelector(state=>state.cart); 

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <NavLink  className="navbar-brand" to="/">
            Shopping Cart
          </NavLink >
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink  to="/" className="nav-link" aria-current="page">
                  Home
                </NavLink >
              </li>
              <li className="nav-item">
                <NavLink  to="/cart" className="nav-link position-relative" aria-current="page">
                  <span>Cart</span><span className="item-count">{state.items.length}</span>
                </NavLink >
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
