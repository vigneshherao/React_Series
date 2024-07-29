import React, { useState } from "react";

const TopNavBar = () => {
  const [btnLogin, setBtnLogin] = useState("Login");

  return (
    <div className="navbar">
      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQACI89jTidSAxtBBq_gSjcEzd7-o98Eiajsw&s"></img>
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
            {btnLogin}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopNavBar;
