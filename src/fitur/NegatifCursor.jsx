import React, { useState, useEffect } from "react";

const NegativeCircleCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isOverClickable, setIsOverClickable] = useState(false);

  useEffect(() => {
    // Hide the default cursor
    document.body.style.cursor = "none";

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      // Deteksi elemen di bawah kursor
      const elementUnderCursor = document.elementFromPoint(e.clientX, e.clientY);
      // Cek jika elemen atau parent-nya memiliki role button, atau tag button/a, atau memiliki cursor pointer
      const isClickable = elementUnderCursor?.closest(
        'button, a, [role="button"], [onclick], [data-clickable], [cursor="pointer"]'
      );

      setIsOverClickable(!!isClickable);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    // Add event listeners
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    // Clean up
    return () => {
      document.body.style.cursor = "auto";
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <div
          className="fixed pointer-events-none z-50"
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
            transform: `translate(-50%, -50%) scale(${isOverClickable ? 0.5 : 1})`,
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            mixBlendMode: "difference",
            backgroundColor: "white",
            transition: "transform 0.1s ease-out, width 0.1s ease-out, height 0.1s ease-out",
            opacity: isOverClickable ? 0.7 : 1,
          }}
        />
      )}
    </>
  );
};

export default NegativeCircleCursor;