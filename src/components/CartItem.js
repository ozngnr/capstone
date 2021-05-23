import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { Context } from "../Context";
import useHover from "../hooks/useHover";

export default function CartItem({ item }) {
  const { removeFromCart } = useContext(Context);
  const [hovered, ref] = useHover();
  // const [hovered, setHovered] = useState(false);
  const binClassName = hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line";

  return (
    <div className="cart-item">
      <i
        className={binClassName}
        onClick={() => removeFromCart(item.id)}
        ref={ref}
      ></i>
      <img src={item.url} alt={item.id} />
      <p>£5.99</p>
    </div>
  );
}

CartItem.propTypes = {
  item: PropTypes.shape({
    url: PropTypes.string.isRequired
  })
};
