import React, { useState } from "react";

export default function Image({ className, img }) {
  const [hovered, setHovered] = useState(false);

  function toggleHover() {
    setHovered(!hovered);
  }

  const heartIcon = hovered && <i className="ri-heart-line favorite"></i>;
  const cartIcon = hovered && <i className="ri-add-circle-line cart"></i>;

  return (
    <div
      className={`${className} image-container`}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
    >
      {heartIcon}
      {cartIcon}
      <img className="image-grid" src={img.url} alt={img.id} />
    </div>
  );
}
