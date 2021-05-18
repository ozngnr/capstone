import React, { useContext } from "react";
import Image from "../components/Image";
import { Context } from "../Context";
import { getClass } from "../utils";

export default function Photos() {
  const { allPhotos } = useContext(Context);

  return (
    <main className="photos">
      {allPhotos.map((img, index) => (
        <Image className={getClass(index)} img={img} />
      ))}
    </main>
  );
}
