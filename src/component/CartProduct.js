import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./Navbar";
import { FaHeart } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { TiMinus } from "react-icons/ti";
import cartReducer, {
  decreaseCartItemQuantity,
  emptyCart,
  increaseCartItemQuantity,
  removeCartItem,
} from "../store/cartReducer";

export default function CartProduct() {
  const CartProduct = useSelector((state) => state.cartItems);
  console.log("cart page", CartProduct);
  const dispatch = useDispatch();
  const totalPrice=CartProduct.reduce((acc,item)=>{
   return acc= acc + item.price* item.quantity
  },0)
  return (
    <>
      <Navbar />
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        {CartProduct.map((cartItem) => (
          <div
            className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8"
            key={cartItem.productId}
          >
            <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
              <div className="space-y-6">
                <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
                  <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                    <Link to="#" className="shrink-0 md:order-1">
                      <img
                        src={cartItem.imageUrl}
                        alt=""
                        className="w-28 h-30"
                      />
                    </Link>

                    <label for="counter-input" className="sr-only">
                      Choose quantity:
                    </label>
                    <div className="flex items-center justify-between md:order-3 md:justify-end">
                      <div className="flex items-center">
                        <button
                          type="button"
                          id="decrement-button"
                          data-input-counter-decrement="counter-input"
                          className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                          onClick={() =>
                            dispatch(
                              increaseCartItemQuantity(cartItem.productId)
                            )
                          }
                        >
                          <FaPlus />
                        </button>
                        <input
                          type="text"
                          id="counter-input"
                          data-input-counter
                          className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white"
                          placeholder=""
                          value={cartItem.quantity}
                          required
                        />
                        <button
                          type="button"
                          id="increment-button"
                          data-input-counter-increment="counter-input"
                          className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                          onClick={() =>
                            dispatch(
                              decreaseCartItemQuantity(cartItem.productId)
                            )
                          }
                        >
                          <TiMinus />
                        </button>
                      </div>
                      <div className="text-end md:order-4 md:w-32">
                        <p className="text-base font-bold text-gray-900 dark:text-white">
                          {cartItem.price * cartItem.quantity}
                        </p>
                      </div>
                    </div>

                    <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                      <Link
                        to="#"
                        className="text-base font-medium text-gray-900 hover:underline dark:text-white"
                      >
                        {cartItem.title}
                      </Link>

                      <div className="flex items-center gap-4">
                        <button
                          type="button"
                          className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white"
                        >
                          <FaHeart className="text-red-500 w-5 h-6 mr-1" />
                          Add to Favorites
                        </button>

                        <button
                          type="button"
                          className="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500"
                        >
                          <ImCross className="text-red-500 mr-2" 
                          onClick={()=>dispatch(removeCartItem(cartItem.productId))}/>
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="flex justify-center items-center mt-2">
          <p className="text-xl font-semibold ">Total Price: <span>{totalPrice}</span></p>
          <button className="border-2 border-gray-500 bg-gray-200 rounded p-2 ml-2"
           onClick={()=>dispatch(emptyCart(CartProduct))}
          >
            Buy Now
          </button>
        </div>
      </div>
    </>
  );
}
