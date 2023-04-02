import React from "react";
import PizzaLogo from "../assets/PizzaLogo.svg";
import CartIcon from "../assets/CartIcon.svg";
import { Link } from "react-router-dom";
import { ContextProvider } from "../AppContext";
import { useContext } from "react";

function Header() {
  const { cartItems } = useContext(ContextProvider);
  return (
    <div className="fixed top-0 left-0 flex items-center justify-center w-full h-16 bg-secondary">
      <nav className="flex w-full max-w-6xl justify-between px-4">
        <Link to={"/"} className="flex items-center gap-4">
          <img
            className="hidden md:block w-16"
            src={PizzaLogo}
            alt="Pizza Logo"
          />
          <h1 className="text-3xl font-semibold text-white">Pizza Store</h1>
        </Link>
        <Link to={"/cart"} className="relative">
          <img className="w-14 cursor-pointer" src={CartIcon} alt="Cart Icon" />
          <span className="absolute bottom-0 right-0 text-white bg-primary rounded-full px-1 text-md">
            {cartItems.length}
          </span>
        </Link>
      </nav>
    </div>
  );
}

export default Header;
