import React, { useState } from "react";
import { Link } from "react-router-dom";

const TopNavBar = () => {
  const [btnLogin, setBtnLogin] = useState("Login");

  return (
    <div className="navbar">
      <div>
        <Link to={"/"}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQACI89jTidSAxtBBq_gSjcEzd7-o98Eiajsw&s"></img></Link>
      </div>
      <div>
        <ul>
          <li>Search</li>
          <li>Categories</li>
          <li>Deals</li>
          <li>Cart</li>
          <li className="lgn-btn"
            onClick={() => {
              btnLogin == "Login"
                ? setBtnLogin("Logout")
                : setBtnLogin("Login");
            }}
          >
           <Link to={"/login"}> {btnLogin}</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopNavBar;
