import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./Navbar";
import { addCartItem } from "../store/cartReducer";
import { addWishListItem } from "../store/wishListReducer";

export default function Cart() {
  const [searchText,setSearchText]=useState();
  const productsList = useSelector((state) => state.products);
  console.log(productsList);
  const dispatch = useDispatch();

  const handleSearch=()=>{
    console.log(searchText)
  }
  return (
    <>
      <Navbar />
      <div className="flex border shadow flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 p-6 mb-2">
        <div className="flex flex-col w-full md:w-1/4">
          <label
            for="search"
            className="text-lg font-semibold text-gray-700 mb-2"
          >
            Search
          </label>
          <div className="flex w-full">
            <input
              id="search"
              type="text"
              placeholder="Search products..."
              value={searchText}
              onChange={(e)=>setSearchText(e.target.value)}
              className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="p-2 border border-gray-400 shadow text-gray-600 rounded ml-2" onClick={handleSearch}>
              Search
            </button>
          </div>
        </div>

        <div className="flex flex-col w-full md:w-1/4">
          <label
            for="priceRange"
            className="text-lg font-semibold text-gray-700 mb-2"
          >
            Price Filter
          </label>

          <div className="relative">
            <select
              id="priceRange"
              className="block w-full px-4 py-2 text-base text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="0-100">Up to $100</option>
              <option value="100-300">$100 - $300</option>
              <option value="300-500">$300 - $500</option>
              <option value="500-700">$500 - $700</option>
              <option value="700-1000">$700 - $1000</option>
              <option value="1000+">$1000+</option>
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {productsList.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col"
          >
            <div className="relative h-48">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 flex flex-col justify-between flex-grow">
              <h2 className="text-xl font-semibold text-gray-800">
                {product.title}
              </h2>
              <p className="text-gray-600 mt-1">${product.price}</p>
              {/* <p className="text-gray-500 mt-2">{product.description}</p> */}
              <div className="flex justify-between mt-4 space-x-2">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-200"
                  onClick={() =>
                    dispatch(
                      addCartItem({
                        productId: product.id,
                        imageUrl: product.image,
                        title: product.title,
                        price: product.price,
                      })
                    )
                  }
                >
                  Add to Cart
                </button>
                <button
                  className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors duration-200"
                  onClick={() =>
                    dispatch(
                      addWishListItem({
                        productId: product.id,
                        imageUrl: product.image,
                        title: product.title,
                        price: product.price,
                      })
                    )
                  }
                >
                  Add To Wishlist
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
