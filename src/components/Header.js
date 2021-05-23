import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../Context";

export default function Header() {
  const { cartItems } = useContext(Context);

  const classCart = cartItems.length
    ? "ri-shopping-cart-fill"
    : "ri-shopping-cart-line";

  return (
    <header>
      <Link to="/">
        <h2>Pic Some</h2>
      </Link>

      <Link to="/cart">
        <i className={`${classCart} ri-fw ri-2x`}></i>
      </Link>
    </header>
  );
}
