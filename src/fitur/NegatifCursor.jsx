import React, { useState, useEffect } from "react";


const NegativeCircleCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      // Hide the default cursor
      document.body.style.cursor = "none";
  
      const handleMouseMove = (e) => {
        setPosition({ x: e.clientX, y: e.clientY });
        setIsVisible(true);
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
              transform: "translate(-50%, -50%)",
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              mixBlendMode: "difference",
              backgroundColor: "white",
              transition: "transform 0.1s ease-out",
            }}
          />
        )}
      </>
    );
  };

export default NegativeCircleCursor;