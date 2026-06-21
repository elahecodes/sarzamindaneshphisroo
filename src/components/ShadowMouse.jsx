import { useEffect, useRef } from "react";
const ShadowMouse = () => {
  const shadowRef = useRef();

  useEffect(() => {
    const shadowCursor = (event) => {
      if (!shadowRef.current) return;
      shadowRef.current.style.transform = `translate(${event.clientX - 20}px, ${event.clientY}px)`;
    };

    window.addEventListener("mousemove", shadowCursor);
    return () => window.removeEventListener("mousemove", shadowCursor);
  }, []);

  return <div ref={shadowRef} className="shadowCursor"></div>;
};

export default ShadowMouse;
