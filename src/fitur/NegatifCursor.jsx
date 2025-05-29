import React, { useState, useEffect, useCallback } from "react";

const NegativeCircleCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isOverClickable, setIsOverClickable] = useState(false);

  // Define clickable elements more broadly but efficiently
  const clickableSelectors = 'button, a, [role="button"], [tabindex="0"], [onclick], [data-clickable]';

  // Memoize the mouse move handler to prevent unnecessary re-renders
  const handleMouseMove = useCallback((e) => {
    setPosition({ x: e.clientX, y: e.clientY });
    setIsVisible(true);

    // Efficiently check for clickable elements
    const elementUnderCursor = document.elementFromPoint(e.clientX, e.clientY);
    const isClickable = elementUnderCursor?.closest(clickableSelectors);

    // Also check for elements with a 'cursor: pointer' style
    const hasPointerCursor = window.getComputedStyle(elementUnderCursor).cursor === 'pointer';

    setIsOverClickable(!!isClickable || hasPointerCursor);
  }, []); // No dependencies needed as it only uses event object and fixed selectors

  const handleMouseLeave = useCallback(() => {
    setIsVisible(false);
  }, []);

  useEffect(() => {
    // Hide the default cursor when the component mounts
    document.body.style.cursor = "none";

    // Add event listeners
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    // Clean up: restore default cursor and remove event listeners
    return () => {
      document.body.style.cursor = "auto";
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [handleMouseMove, handleMouseLeave]); // Dependencies ensure the correct handlers are used

  return (
    <>
      {isVisible && (
        <div
          className="fixed pointer-events-none z-50"
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
            // Smoother scaling and slight size reduction on clickable elements
            transform: `translate(-50%, -50%) scale(${isOverClickable ? 0.7 : 1})`,
            width: isOverClickable ? "30px" : "40px", // Smaller size when over clickable
            height: isOverClickable ? "30px" : "40px",
            borderRadius: "50%",
            mixBlendMode: "difference",
            backgroundColor: "white",
            transition: "transform 0.15s ease-out, width 0.15s ease-out, height 0.15s ease-out, opacity 0.15s ease-out",
            opacity: isOverClickable ? 0.8 : 1, // Slightly less opaque on hover
          }}
        />
      )}
    </>
  );
};

export default NegativeCircleCursor;