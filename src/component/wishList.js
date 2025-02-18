import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./Navbar";
import { removeWishListItem } from "../store/wishListReducer";

const Wishlist = () => {
  const wishList = useSelector((state) => state.wishList);
  console.log(wishList);
  const dispatch=useDispatch();
  return (
    <>
      <Navbar />
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Your Wishlist
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {wishList.length === 0 ? (
            <p className="text-lg text-gray-600 col-span-4">
              Your wishlist is empty.
            </p>
          ) : (
            wishList.map((item) => (
              <div
                key={item.productId}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 mt-2">${item.price}</p>
                  <button className="mt-4 w-full bg-gray-500 font-semibold text-white py-2 rounded-md shadow"
                  onClick={()=>dispatch(removeWishListItem(item.productId))}
                  >
                    Remove from Wishlist
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Wishlist;
