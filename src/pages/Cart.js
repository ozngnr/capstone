import React, { useContext, useState } from "react";
import CartItem from "../components/CartItem";
import { Context } from "../Context";

export default function Cart() {
  const { cartItems, setCartItems } = useContext(Context);
  const [buttonText, setButtonText] = useState("Place Order");

  const totalCost = cartItems.length * 5.99;
  const totalCostDisplay = totalCost.toLocaleString("en-GB", {
    style: "currency",
    currency: "GBP"
  });

  const placeOrder = () => {
    setButtonText("Ordering...");
    setTimeout(() => {
      console.log("Order Placed!");
      setButtonText("Place Order");
      setCartItems([]);
    }, 3000);
  };

  return (
    <main className="cart-page">
      <h1>Check Out</h1>
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
      <p className="total-cost">Total: {totalCostDisplay}</p>
      <div className="order-button">
        {cartItems.length > 0 ? (
          <button onClick={placeOrder}>{buttonText}</button>
        ) : (
          <p>You have no items in your cart</p>
        )}
      </div>
    </main>
  );
}
