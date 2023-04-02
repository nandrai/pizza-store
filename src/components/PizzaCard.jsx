import React, { useState } from "react";
import AddonModal from "./AddonModal";
import { ContextProvider } from "../AppContext";
import { useContext } from "react";
import swal from "sweetalert";

function PizzaCard({ pizza }) {
  const [size, setSize] = useState("Regular");
  const [toppings, setToppings] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const { cartItems, setCartItems } = useContext(ContextProvider);

  const addToCart = () => {
    const cartItem = {
      id: pizza.id,
      image: pizza.img_url,
      name: pizza.name,
      size,
      toppings,
      price: pizza.price,
    };
    setCartItems((prev) => [...prev, cartItem]);
    swal("Item added to cart!");
  };
  return (
    <div className="p-2 flex flex-col">
      {showModal && (
        <AddonModal
          pizzaSizes={pizza.size}
          pizzaToppings={pizza.toppings}
          setSize={setSize}
          setToppings={setToppings}
          setShowModal={setShowModal}
        />
      )}
      <div className="flex max-h-56 rounded-lg overflow-hidden">
        <img
          src={pizza.img_url}
          alt=""
          className="w-full object-cover aspect-square"
        />
      </div>
      <h1 className="text-xl font-semibold mt-3 whitespace-nowrap">
        {pizza.name}
      </h1>
      <p className=" line-clamp-2">{pizza.description}</p>
      <div className="flex justify-between items-center mt-2">
        <span className="bg-secondary flex items-center gap-1 text-sm px-1 rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4 text-orange-600"
          >
            <path
              fillRule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
              clipRule="evenodd"
            />
          </svg>
          {pizza.rating}
        </span>
        <span
          className={`${
            pizza.isVeg ? "bg-green-600" : "bg-red-600"
          } text-white px-2 rounded-md text-sm`}
        >
          {pizza.isVeg ? "Veg" : "Non-Veg"}
        </span>
        <span className="font-semibold">₹{pizza.price}</span>
      </div>
      <span>{size && <span className="text-sm">Size: {size}</span>}</span>
      <span className=" truncate">
        Toppings:{" "}
        {toppings.map((topping, i) => {
          return <span key={i}>{topping}, </span>;
        })}
      </span>
      <div className="flex mt-3 justify-between">
        <button
          onClick={addToCart}
          className="bg-primary text-xl text-white py-1 px-5 rounded-2xl"
        >
          Add to cart
        </button>
        <button
          onClick={() => setShowModal(true)}
          className="bg-secondary text-2xl px-3 rounded-md "
        >
          +
        </button>
      </div>
    </div>
  );
}

export default PizzaCard;
