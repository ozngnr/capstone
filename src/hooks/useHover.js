import { useEffect, useRef, useState } from "react";

export default function useHover() {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);

  const enter = () => {
    setHovered(true);
  };
  const leave = () => {
    setHovered(false);
  };

  useEffect(() => {
    const myRef = ref.current;

    myRef.addEventListener("mouseenter", enter);
    myRef.addEventListener("mouseleave", leave);

    return () => {
      myRef.removeEventListener("mouseenter", enter);
      myRef.removeEventListener("mouseleave", leave);
    };
  }, []);

  return [hovered, ref];
}
