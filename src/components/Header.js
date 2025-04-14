import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = ({ onLogoClick }) => {
  const [loginChange, setLoginChange] = useState("Login");
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-center items-center px-6 py-4 shadow-md bg-white">
      <div className="logo-container mt-1 mr-6">
        <Link to="/" onClick={onLogoClick}>
          <img
            className="w-10 cursor-pointer"
            src={"https://png.pngtree.com/png-vector/20220705/ourmid/pngtree-food-logo-png-image_5687686.png"}
            alt="logo"
          />
        </Link>
      </div>

      <div className="sha">
        <ul className="flex flex-wrap items-center gap-6 text-gray-700 text-sm font-medium">
          <li className="hover:text-orange-500 cursor-pointer"><Link to="/">Home</Link></li>
          <li className="hover:text-orange-500 cursor-pointer">Search</li>
          <li className="hover:text-orange-500 cursor-pointer">Offers</li>
          <li className="hover:text-orange-500 cursor-pointer"><Link to="/Help">Help</Link></li>
          <li className="hover:text-orange-500 cursor-pointer">Sign In</li>
          <li className="hover:text-orange-500 cursor-pointer"><Link to="/Cart">Cart({cartItems.length})</Link></li>
          <li className="hover:text-orange-500 cursor-pointer"><a href="/About">About Us</a></li>
          <li className="hover:text-orange-500 cursor-pointer"><Link to="/Contact">Contact Us</Link></li>
          <li className="hover:text-orange-500 cursor-pointer"><Link to="/Grocery">Grocery</Link></li>
          <li className="hover:text-orange-500 cursor-pointer">
            <button
              className="login"
              onClick={() => {
                loginChange === "LOG IN"
                  ? setLoginChange("LOG OUT")
                  : setLoginChange("LOG IN");
              }}
            >
              {loginChange}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
