import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa";
import { ImHome } from "react-icons/im";
import { FaHeart } from "react-icons/fa";
import { useSelector } from "react-redux";

const Navbar = () => {
  // const [cartCount,setCartCount] =useState(2);
  const cart = useSelector((state)=>state.cartItems)
  const cartCount=cart.reduce((acc,item)=>{
      return acc=acc+item.quantity
  },0)
  return (
    <nav className="bg-gray-800 text-white p-4 ">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="text-2xl font-semibold">
          <Link to="/" className="text-white">
            My Store
          </Link>
        </div>

        {/* Menu Buttons */}
        <div className="flex space-x-4">
          <Link to="/" className="hover:bg-gray-700 px-3 py-2 rounded-md">
            <ImHome className="w-8 h-7" />
          </Link>
          <Link
            to="/cart"
            className="relative hover:bg-gray-700 px-3 py-2 rounded-md"
          >
            <FaCartArrowDown className="w-8 h-7" />

            {/* Cart count badge */}
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
          <Link
            to="/wishlist"
            className="hover:bg-gray-700 px-3 py-2 rounded-md"
          >
           <FaHeart className="w-8 h-7"/>
          </Link>
        </div>

        {/* Mobile Menu Button (Hamburger) */}
        <div className="lg:hidden">
          <button className="text-white focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
