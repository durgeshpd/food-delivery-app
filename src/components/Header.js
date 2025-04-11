import { useState } from "react";
import { Link } from "react-router-dom";

const Header = ({ onLogoClick }) => {
  const [loginChnage, setLoginChnage] = useState("Login");

  return (
    <div className="flex justify-center items-center px-6 py-4 shadow-md bg-white">
      <div className="logo-container mt-1 mr-6">
        <Link to="/" onClick={onLogoClick}> {/* ✅ Add onClick */}
        <img className="w-10 cursor-pointer" src={"https://png.pngtree.com/png-vector/20220705/ourmid/pngtree-food-logo-png-image_5687686.png"} alt="logo" />
        </Link>
      </div>

      <div className="sha">
        <ul className="flex flex-wrap items-center gap-6 text-gray-700 text-sm font-medium">
          <li className="hover:text-orange-500 cursor-pointer">Home</li>
          <li className="hover:text-orange-500 cursor-pointer">Search</li>
          <li className="hover:text-orange-500 cursor-pointer">Offers</li>
          <li className="hover:text-orange-500 cursor-pointer">Help</li>
          <li className="hover:text-orange-500 cursor-pointer">Sign In</li>
          <li className="hover:text-orange-500 cursor-pointer">Cart</li>
          <li className="hover:text-orange-500 cursor-pointer"><a href="/about">About Us</a></li>
          <li className="hover:text-orange-500 cursor-pointer"><Link to="/Contact">Contact Us</Link></li>
          <li className="hover:text-orange-500 cursor-pointer"><Link to="/Grocery">Grocery</Link></li>
          <li className="hover:text-orange-500 cursor-pointer">
            <button
              className="login"
              onClick={() => {
                loginChnage === "LOG IN"
                  ? setLoginChnage("LOG OUT")
                  : setLoginChnage("LOG IN");
              }}
            >
              {loginChnage}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
