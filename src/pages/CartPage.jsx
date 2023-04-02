import React from "react";
import { useContext } from "react";
import { ContextProvider } from "../AppContext";
import { Link } from "react-router-dom";

function CartPage() {
  const { cartItems } = useContext(ContextProvider);
  const { setCartItems } = useContext(ContextProvider);

  if (cartItems.length == 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-12 h-12 text-gray-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            />
          </svg>

          <h1 className="text-4xl italic text-gray-500">Cart is empty!</h1>
        </div>
        <Link
          to={"/"}
          className="bg-primary text-white text-2xl px-4 py-2 rounded-md mt-4"
        >
          Check Store
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full max-w-6xl mt-20 mx-auto px-3 min-h-screen">
      {cartItems.map((item, i) => {
        return (
          <div
            key={i}
            className="flex flex-col md:flex-row md:h-40 bg-gray-500 items-center rounded-md overflow-hidden justify-between mt-4"
          >
            <img
              src={item.image}
              alt={item.name}
              className=" max-w-sm h-full rounded-md"
            />
            <div className="p-3 w-full">
              <h1 className="text-2xl text-white">{item.name}</h1>
              <div className="flex w-full justify-between">
                <span className="text-white">Size: {item.size}</span>
                <span className="text-white">Price: {item.price}</span>
              </div>
              <div className="mt-2 w-full flex justify-between">
                {item.toppings.map((topping) => {
                  return (
                    <span
                      key={topping}
                      className="bg-primary text-white px-2 py-1 rounded-md mr-2"
                    >
                      {topping}
                    </span>
                  );
                })}
              </div>
            </div>
            <div className="h-full mt-3 md:mt-0">
              <button
                onClick={() => {
                  setCartItems(
                    cartItems.filter((cartItem) => cartItem.id !== item.id)
                  );
                }}
                className="bg-primary text-white px-16 py-2 rounded-md h-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CartPage;
