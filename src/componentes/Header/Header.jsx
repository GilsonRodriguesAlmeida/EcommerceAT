import React from "react";
import { useState } from "react";

import "./Header.css";

const Header = () => {
  const [active, setMode] = useState(false);
  const ToggleMode = () => {
    setMode(!active);
  }

  return (
    <>
      <div className={`navbar ${active ? "active" : ""}`}>
        <div className='nav-inner-content'>
          <h1 className="logo">
            Ecommerce<span>AT</span>
          </h1>
          <nav>
            <ul>
              <li>Home</li>
              <li>Products</li>
              <li>About</li>
              <li>Contacts</li>
            </ul>
          </nav>
          <div className="nav-container">
            <img src="/images/images/cart.png" />
            <img src="/images/images/menu.png" className="btn-menu" onClick={ToggleMode} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
