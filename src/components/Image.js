import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { Context } from "../Context";
import useHover from "../hooks/useHover";

export default function Image({ className, img }) {
  const [hovered, ref] = useHover();
  const { toggleFavourite, addToCart, removeFromCart, cartItems } = useContext(
    Context
  );

  function heartIcon() {
    if (img.isFavorite) {
      return (
        <i
          className="ri-heart-fill favorite"
          onClick={() => toggleFavourite(img.id)}
        ></i>
      );
    } else if (hovered) {
      return (
        <i
          className="ri-heart-line favorite"
          onClick={() => toggleFavourite(img.id)}
        ></i>
      );
    }
  }
  const cartIcon = () => {
    const inCart = cartItems.find((item) => item.id === img.id);
    if (inCart) {
      return (
        <i
          className="ri-shopping-cart-fill cart"
          onClick={() => removeFromCart(img.id)}
        ></i>
      );
    } else if (hovered) {
      return (
        <i
          className="ri-add-circle-line cart"
          onClick={() => addToCart(img)}
        ></i>
      );
    }
  };

  return (
    <div className={`${className} image-container`} ref={ref}>
      {heartIcon()}
      {cartIcon()}
      <img className="image-grid" src={img.url} alt={img.id} />
    </div>
  );
}

Image.propTypes = {
  img: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool.isRequired
  }),
  className: PropTypes.string
};
